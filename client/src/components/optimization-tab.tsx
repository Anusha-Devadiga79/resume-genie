import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Resume } from "@shared/schema";

interface OptimizationTabProps {
  resume: Resume | null;
}

export default function OptimizationTab({ resume }: OptimizationTabProps) {
  const [optimizedContent, setOptimizedContent] = useState("");
  const [targetJob, setTargetJob] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [improvements, setImprovements] = useState<string[]>([]);
  const { toast } = useToast();

  const optimizeMutation = useMutation({
    mutationFn: async ({ targetJob, section }: { targetJob?: string; section?: string }) => {
      if (!resume?.id) throw new Error("No resume selected");
      
      const response = await apiRequest('POST', `/api/resumes/${resume.id}/optimize`, {
        targetJob,
        section
      });
      return response.json();
    },
    onSuccess: (data) => {
      setOptimizedContent(data.optimizedContent);
      setImprovements(data.improvements || []);
      toast({
        title: "Optimization Complete",
        description: "Your resume has been enhanced with AI suggestions.",
      });
    },
    onError: (error) => {
      toast({
        title: "Optimization Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleOptimize = () => {
    optimizeMutation.mutate({ 
      targetJob: targetJob.trim() || undefined,
      section: selectedSection || undefined
    });
  };

  if (!resume) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 mb-4">
          <i className="fas fa-upload text-4xl"></i>
        </div>
        <h4 className="text-lg font-semibold text-slate-700 mb-2">No Resume Uploaded</h4>
        <p className="text-slate-500">Please upload a resume to use AI optimization.</p>
      </div>
    );
  }

  if (!resume.isProcessed) {
    return (
      <div className="text-center py-12">
        <div className="text-primary-600 mb-4">
          <i className="fas fa-spinner fa-spin text-4xl"></i>
        </div>
        <h4 className="text-lg font-semibold text-slate-700 mb-2">Processing Resume</h4>
        <p className="text-slate-500">Please wait while we process your resume...</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Original Content */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Current Content</h4>
          <div className="bg-slate-50 rounded-xl p-6 h-96 overflow-y-auto">
            <div className="text-sm text-slate-600 mb-4">Extracted Resume Text</div>
            <div className="text-slate-800 leading-relaxed whitespace-pre-wrap" data-testid="text-original-content">
              {resume.extractedText || "No content extracted yet."}
            </div>
          </div>
        </div>

        {/* AI-Enhanced Content */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-slate-900">AI-Enhanced Content</h4>
            <div className="flex space-x-2">
              <Input 
                type="text" 
                placeholder="Target job (optional)" 
                value={targetJob}
                onChange={(e) => setTargetJob(e.target.value)}
                className="w-48"
                data-testid="input-target-job-optimize"
              />
              <Button 
                onClick={handleOptimize}
                disabled={optimizeMutation.isPending}
                className="bg-primary-600 hover:bg-primary-700"
                data-testid="button-optimize"
              >
                <i className="fas fa-magic mr-2"></i>
                {optimizeMutation.isPending ? 'Optimizing...' : 'Optimize'}
              </Button>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 h-96 overflow-y-auto">
            {optimizeMutation.isPending ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-primary-600 mb-4">
                    <i className="fas fa-spinner fa-spin text-3xl"></i>
                  </div>
                  <div className="text-slate-600">AI is optimizing your content...</div>
                </div>
              </div>
            ) : optimizedContent ? (
              <div className="text-slate-800 leading-relaxed whitespace-pre-wrap" data-testid="text-optimized-content">
                {optimizedContent}
              </div>
            ) : (
              <div className="text-slate-500 italic text-center flex items-center justify-center h-full">
                Click "Optimize" to enhance your resume with AI
              </div>
            )}
          </div>

          {improvements.length > 0 && (
            <div className="mt-4 p-4 bg-success-50 border border-success-200 rounded-lg">
              <div className="flex items-center space-x-2 text-success-700 mb-2">
                <i className="fas fa-check-circle"></i>
                <span className="font-medium">AI Enhancement Complete</span>
              </div>
              <div className="text-success-600 text-sm">
                <strong>Improvements made:</strong>
                <ul className="list-disc list-inside mt-1" data-testid="list-improvements">
                  {improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section-specific Optimization */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-slate-900 mb-4">Section-by-Section Optimization</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            className={`p-4 border-2 rounded-xl transition-colors text-left ${
              selectedSection === 'professional_summary' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-slate-200 hover:border-primary-400'
            }`}
            onClick={() => setSelectedSection('professional_summary')}
            data-testid="button-optimize-summary"
          >
            <div className="flex items-center space-x-3 mb-2">
              <i className="fas fa-user text-primary-600"></i>
              <span className="font-semibold text-slate-900">Professional Summary</span>
            </div>
            <p className="text-slate-600 text-sm">Enhance your opening statement</p>
          </button>

          <button 
            className={`p-4 border-2 rounded-xl transition-colors text-left ${
              selectedSection === 'work_experience' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-slate-200 hover:border-primary-400'
            }`}
            onClick={() => setSelectedSection('work_experience')}
            data-testid="button-optimize-experience"
          >
            <div className="flex items-center space-x-3 mb-2">
              <i className="fas fa-briefcase text-slate-600"></i>
              <span className="font-semibold text-slate-900">Work Experience</span>
            </div>
            <p className="text-slate-600 text-sm">Quantify your achievements</p>
          </button>

          <button 
            className={`p-4 border-2 rounded-xl transition-colors text-left ${
              selectedSection === 'skills' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-slate-200 hover:border-primary-400'
            }`}
            onClick={() => setSelectedSection('skills')}
            data-testid="button-optimize-skills"
          >
            <div className="flex items-center space-x-3 mb-2">
              <i className="fas fa-cog text-slate-600"></i>
              <span className="font-semibold text-slate-900">Skills</span>
            </div>
            <p className="text-slate-600 text-sm">Add trending technologies</p>
          </button>
        </div>
      </div>
    </>
  );
}
