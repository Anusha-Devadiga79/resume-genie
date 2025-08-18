import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Resume } from "@shared/schema";

interface ATSAnalysisTabProps {
  resume: Resume | null;
}

export default function ATSAnalysisTab({ resume }: ATSAnalysisTabProps) {
  const [targetJob, setTargetJob] = useState("");
  const { toast } = useToast();

  const analyzeMutation = useMutation({
    mutationFn: async (targetJob: string) => {
      if (!resume?.id) throw new Error("No resume selected");
      
      const response = await apiRequest('POST', `/api/resumes/${resume.id}/analyze`, {
        targetJob
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Analysis Complete",
        description: "Your resume has been re-analyzed with the new job target.",
      });
    },
    onError: (error) => {
      toast({
        title: "Analysis Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleAnalyze = () => {
    if (targetJob.trim()) {
      analyzeMutation.mutate(targetJob);
    }
  };

  if (!resume) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 mb-4">
          <i className="fas fa-upload text-4xl"></i>
        </div>
        <h4 className="text-lg font-semibold text-slate-700 mb-2">No Resume Uploaded</h4>
        <p className="text-slate-500">Please upload a resume to see the ATS analysis.</p>
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
        <p className="text-slate-500">Please wait while we analyze your resume...</p>
      </div>
    );
  }

  const scores = resume.scores || { keywords: 0, format: 0, content: 0, overall: 0 };
  const keywordAnalysis = resume.keywordAnalysis || { foundKeywords: [], missingKeywords: [] };
  const suggestions = resume.suggestions || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* ATS Score Card */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-900">ATS Compatibility Score</h4>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary-600" data-testid="score-overall">{scores.overall}</div>
            <div className="text-sm text-slate-600">/ 100</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
          <div 
            className="bg-primary-500 h-3 rounded-full transition-all duration-300" 
            style={{ width: `${scores.overall}%` }}
          ></div>
        </div>
        
        {/* Score Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-700">Keyword Match</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-success-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${scores.keywords}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-success-600" data-testid="score-keywords">{scores.keywords}%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-700">Format Structure</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-success-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${scores.format}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-success-600" data-testid="score-format">{scores.format}%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-700">Content Quality</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-warning-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${scores.content}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-warning-600" data-testid="score-content">{scores.content}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keyword Analysis */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-4">Keyword Analysis</h4>
        <div className="bg-slate-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-700">Target Job Title</span>
            <div className="flex space-x-2">
              <Input 
                type="text" 
                placeholder="e.g. Software Engineer" 
                value={targetJob}
                onChange={(e) => setTargetJob(e.target.value)}
                className="w-48"
                data-testid="input-target-job"
              />
              <Button 
                onClick={handleAnalyze}
                disabled={analyzeMutation.isPending || !targetJob.trim()}
                data-testid="button-analyze"
              >
                {analyzeMutation.isPending ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
          </div>
          
          {/* Found Keywords */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-slate-700 mb-3">Found Keywords</h5>
            <div className="flex flex-wrap gap-2" data-testid="keywords-found">
              {keywordAnalysis.foundKeywords.length > 0 ? (
                keywordAnalysis.foundKeywords.map((keyword, index) => (
                  <span key={index} className="bg-success-100 text-success-800 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))
              ) : (
                <span className="text-slate-500 text-sm">No keywords detected yet</span>
              )}
            </div>
          </div>

          {/* Missing Keywords */}
          <div>
            <h5 className="text-sm font-semibold text-slate-700 mb-3">Suggested Keywords to Add</h5>
            <div className="flex flex-wrap gap-2" data-testid="keywords-missing">
              {keywordAnalysis.missingKeywords.length > 0 ? (
                keywordAnalysis.missingKeywords.map((keyword, index) => (
                  <span key={index} className="bg-warning-100 text-warning-800 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))
              ) : (
                <span className="text-slate-500 text-sm">All key keywords are present</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Improvement Suggestions */}
      {suggestions.length > 0 && (
        <div className="lg:col-span-2 mt-8">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Improvement Suggestions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                    suggestion.priority === 'high' ? 'bg-red-100' : 
                    suggestion.priority === 'medium' ? 'bg-warning-100' : 'bg-blue-100'
                  }`}>
                    <i className={`text-sm ${
                      suggestion.priority === 'high' ? 'fas fa-exclamation-triangle text-red-600' : 
                      suggestion.priority === 'medium' ? 'fas fa-info-circle text-warning-600' : 'fas fa-lightbulb text-blue-600'
                    }`}></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">{suggestion.title}</h5>
                    <p className="text-slate-600 text-sm mb-3">{suggestion.description}</p>
                    <button className="text-primary-600 text-sm font-medium hover:text-primary-700" data-testid={`button-apply-fix-${index}`}>
                      Apply Fix <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
