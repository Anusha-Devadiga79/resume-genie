import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertResumeSchema, updateResumeSchema } from "@shared/schema";
import { parseDocument, isFileTypeSupported } from "./services/documentParser";
import { analyzeATS } from "./services/atsAnalyzer";
import { optimizeResumeContent, generateImprovementSuggestions } from "./services/openai";
import multer from "multer";
import fs from "fs";
import path from "path";

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (isFileTypeSupported(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type. Please upload PDF or DOCX files only.'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Upload resume
  app.post("/api/resumes/upload", upload.single("resume"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const { originalname, path: filePath, mimetype } = req.file;
      const fileType = mimetype.includes('pdf') ? 'pdf' : 'docx';
      
      // Create resume record
      const resumeData = {
        filename: originalname,
        originalContent: filePath, // Store file path temporarily
      };

      const validatedData = insertResumeSchema.parse(resumeData);
      const resume = await storage.createResume(validatedData);

      // Start background processing
      processResumeAsync(resume.id, filePath, fileType);

      res.json({ 
        message: "Resume uploaded successfully", 
        resumeId: resume.id,
        status: "processing"
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to upload resume", 
        error: (error as Error).message 
      });
    }
  });

  // Get resume status and data
  app.get("/api/resumes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const resume = await storage.getResume(id);
      
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }

      res.json(resume);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to get resume", 
        error: (error as Error).message 
      });
    }
  });

  // Optimize resume content with AI
  app.post("/api/resumes/:id/optimize", async (req, res) => {
    try {
      const { id } = req.params;
      const { targetJob, section } = req.body;
      
      const resume = await storage.getResume(id);
      if (!resume || !resume.extractedText) {
        return res.status(404).json({ message: "Resume not found or not processed" });
      }

      const optimization = await optimizeResumeContent(
        resume.extractedText,
        targetJob,
        section
      );

      // Update resume with optimized content
      await storage.updateResume(id, {
        optimizedContent: optimization.optimizedContent
      });

      res.json({
        optimizedContent: optimization.optimizedContent,
        improvements: optimization.improvements,
        confidence: optimization.confidence
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to optimize resume", 
        error: (error as Error).message 
      });
    }
  });

  // Update keyword analysis
  app.post("/api/resumes/:id/analyze", async (req, res) => {
    try {
      const { id } = req.params;
      const { targetJob } = req.body;
      
      const resume = await storage.getResume(id);
      if (!resume || !resume.extractedText) {
        return res.status(404).json({ message: "Resume not found or not processed" });
      }

      const analysis = analyzeATS(resume.extractedText, targetJob);
      const suggestions = await generateImprovementSuggestions(
        resume.extractedText, 
        analysis.scores
      );

      // Update resume with new analysis
      const updatedResume = await storage.updateResume(id, {
        atsScore: analysis.scores.overall,
        keywordAnalysis: analysis.keywordAnalysis,
        scores: analysis.scores,
        suggestions
      });

      res.json(updatedResume);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to analyze resume", 
        error: (error as Error).message 
      });
    }
  });

  // Export resume
  app.post("/api/resumes/:id/export", async (req, res) => {
    try {
      const { id } = req.params;
      const { format = 'pdf', template = 'professional' } = req.body;
      
      const resume = await storage.getResume(id);
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }

      // For now, return the optimized content or original extracted text
      const content = resume.optimizedContent || resume.extractedText;
      
      res.json({
        content,
        format,
        template,
        downloadUrl: `/api/resumes/${id}/download?format=${format}&template=${template}`
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to export resume", 
        error: (error as Error).message 
      });
    }
  });

  // Get all resumes
  app.get("/api/resumes", async (req, res) => {
    try {
      const resumes = await storage.getAllResumes();
      res.json(resumes);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to get resumes", 
        error: (error as Error).message 
      });
    }
  });

  // Delete resume
  app.delete("/api/resumes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteResume(id);
      
      if (!success) {
        return res.status(404).json({ message: "Resume not found" });
      }

      res.json({ message: "Resume deleted successfully" });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to delete resume", 
        error: (error as Error).message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Background processing function
async function processResumeAsync(resumeId: string, filePath: string, fileType: string) {
  try {
    // Parse document
    const parseResult = await parseDocument(filePath, fileType);
    
    // Analyze ATS compatibility
    const analysis = analyzeATS(parseResult.text);
    
    // Generate improvement suggestions
    const suggestions = await generateImprovementSuggestions(
      parseResult.text,
      analysis.scores
    );

    // Update resume with all processed data
    await storage.updateResume(resumeId, {
      extractedText: parseResult.text,
      atsScore: analysis.scores.overall,
      keywordAnalysis: analysis.keywordAnalysis,
      scores: analysis.scores,
      suggestions,
      isProcessed: true
    });

    // Clean up uploaded file
    fs.unlink(filePath, (err) => {
      if (err) console.error("Failed to delete uploaded file:", err);
    });

  } catch (error) {
    console.error("Resume processing failed:", error);
    
    // Mark as processed with error
    await storage.updateResume(resumeId, {
      isProcessed: true,
      suggestions: [{
        type: 'error',
        title: 'Processing Failed',
        description: 'Failed to process your resume. Please try uploading again.',
        priority: 'high'
      }]
    });
  }
}
