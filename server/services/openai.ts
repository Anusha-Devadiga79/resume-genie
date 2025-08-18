import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || ""
});

interface OptimizationResult {
  optimizedContent: string;
  improvements: string[];
  confidence: number;
}

export async function optimizeResumeContent(
  originalContent: string,
  targetJob?: string,
  section?: string
): Promise<OptimizationResult> {
  try {
    const prompt = `
You are a professional resume writer and ATS optimization expert. Please optimize the following resume content to improve ATS compatibility and professional appeal.

${targetJob ? `Target Job Title: ${targetJob}` : ''}
${section ? `Focus Section: ${section}` : 'Optimize entire resume'}

Original Content:
${originalContent}

Please provide optimized content that:
1. Uses strong action verbs and quantified achievements
2. Includes relevant keywords for ATS systems
3. Maintains professional tone and readability
4. Structures information clearly with proper formatting
5. Removes redundant or weak phrases

Respond with JSON in this format:
{
  "optimizedContent": "improved resume content",
  "improvements": ["list of specific improvements made"],
  "confidence": 0.95
}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert resume writer and ATS optimization specialist. Always respond with valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      optimizedContent: result.optimizedContent || originalContent,
      improvements: result.improvements || [],
      confidence: Math.max(0, Math.min(1, result.confidence || 0.8))
    };
  } catch (error) {
    console.error("OpenAI optimization error:", error);
    throw new Error("Failed to optimize resume content: " + (error as Error).message);
  }
}

export async function generateImprovementSuggestions(
  resumeContent: string,
  scores: { keywords: number; format: number; content: number }
): Promise<Array<{ type: string; title: string; description: string; priority: 'high' | 'medium' | 'low' }>> {
  try {
    const prompt = `
Analyze this resume and provide specific improvement suggestions based on the ATS scores:

Resume Content:
${resumeContent}

Current Scores:
- Keywords: ${scores.keywords}%
- Format: ${scores.format}%
- Content: ${scores.content}%

Provide actionable suggestions to improve ATS compatibility and overall resume quality. Focus on areas with lower scores.

Respond with JSON in this format:
{
  "suggestions": [
    {
      "type": "keywords|format|content",
      "title": "Brief suggestion title",
      "description": "Detailed explanation of the issue and how to fix it",
      "priority": "high|medium|low"
    }
  ]
}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an ATS expert and resume consultant. Always respond with valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return result.suggestions || [];
  } catch (error) {
    console.error("OpenAI suggestions error:", error);
    return [];
  }
}
