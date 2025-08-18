import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import type { Resume } from "@shared/schema";

interface PreviewExportTabProps {
  resume: Resume | null;
}

export default function PreviewExportTab({ resume }: PreviewExportTabProps) {
  const [selectedTemplate, setSelectedTemplate] = useState("professional");
  const [selectedFormat, setSelectedFormat] = useState("pdf");
  const { toast } = useToast();

  const exportMutation = useMutation({
    mutationFn: async ({ format, template }: { format: string; template: string }) => {
      if (!resume?.id) throw new Error("No resume selected");
      
      const response = await apiRequest('POST', `/api/resumes/${resume.id}/export`, {
        format,
        template
      });
      
      // Check if response is a file or JSON error
      if (response.headers.get('content-type')?.includes('application/json')) {
        const data = await response.json();
        if (data.error) throw new Error(data.message || 'Export failed');
        return data;
      }
      
      // Handle file download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `resume.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      return { format, downloaded: true };
    },
    onSuccess: (data) => {
      toast({
        title: "Download Started",
        description: `Resume downloaded in ${data.format?.toUpperCase() || 'requested'} format.`,
      });
    },
    onError: (error) => {
      toast({
        title: "Export Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleExport = () => {
    exportMutation.mutate({ 
      format: selectedFormat,
      template: selectedTemplate
    });
  };

  const handleShare = () => {
    // In a real implementation, this would generate a shareable link
    navigator.clipboard.writeText(`${window.location.origin}/resume/${resume?.id}`);
    toast({
      title: "Link Copied",
      description: "Resume link has been copied to clipboard.",
    });
  };

  if (!resume) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 mb-4">
          <i className="fas fa-upload text-4xl"></i>
        </div>
        <h4 className="text-lg font-semibold text-slate-700 mb-2">No Resume Uploaded</h4>
        <p className="text-slate-500">Please upload a resume to preview and export.</p>
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

  const finalScore = resume.atsScore || 0;
  const displayContent = resume.optimizedContent || resume.extractedText || "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Resume Preview */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-900">Resume Preview</h4>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors" data-testid="button-zoom-out">
              <i className="fas fa-search-minus text-slate-600"></i>
            </button>
            <button className="p-2 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors" data-testid="button-zoom-in">
              <i className="fas fa-search-plus text-slate-600"></i>
            </button>
          </div>
        </div>
        
        {/* Resume Preview Container */}
        <div 
          className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-sm overflow-y-auto"
          style={{ aspectRatio: "8.5/11", minHeight: "600px" }}
          data-testid="preview-container"
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center border-b border-slate-200 pb-4">
              <h1 className="text-2xl font-bold text-slate-900">Professional Resume</h1>
              <p className="text-slate-600">Optimized for ATS</p>
            </div>

            {/* Content Preview */}
            <div className="text-sm leading-relaxed text-slate-700 whitespace-pre-wrap" data-testid="text-preview-content">
              {displayContent.substring(0, 1000) + (displayContent.length > 1000 ? "..." : "")}
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-4">Export Options</h4>
        
        {/* Template Selection */}
        <div className="mb-6">
          <h5 className="text-sm font-semibold text-slate-700 mb-3">Choose Template</h5>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'professional', name: 'Professional' },
              { id: 'modern', name: 'Modern' },
              { id: 'creative', name: 'Creative' },
              { id: 'minimal', name: 'Minimal' }
            ].map((template) => (
              <button 
                key={template.id}
                className={`border-2 rounded-lg p-3 transition-colors ${
                  selectedTemplate === template.id
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedTemplate(template.id)}
                data-testid={`button-template-${template.id}`}
              >
                <div className="w-full h-16 bg-slate-100 rounded border mb-2"></div>
                <div className="text-xs text-slate-700">{template.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Export Formats */}
        <div className="mb-6">
          <h5 className="text-sm font-semibold text-slate-700 mb-3">Export Format</h5>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input 
                type="radio" 
                name="format" 
                value="pdf" 
                checked={selectedFormat === 'pdf'}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="text-primary-600"
                data-testid="radio-format-pdf"
              />
              <span className="text-slate-700">PDF (Recommended for ATS)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input 
                type="radio" 
                name="format" 
                value="docx" 
                checked={selectedFormat === 'docx'}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="text-primary-600"
                data-testid="radio-format-docx"
              />
              <span className="text-slate-700">DOCX (Microsoft Word)</span>
            </label>
          </div>
        </div>

        {/* Export Actions */}
        <div className="space-y-3">
          <Button 
            onClick={handleExport}
            disabled={exportMutation.isPending}
            className="w-full bg-primary-600 hover:bg-primary-700"
            data-testid="button-download"
          >
            <i className="fas fa-download mr-2"></i>
            {exportMutation.isPending ? 'Preparing...' : 'Download Resume'}
          </Button>
          <Button 
            onClick={handleShare}
            variant="outline"
            className="w-full"
            data-testid="button-share"
          >
            <i className="fas fa-share mr-2"></i>
            Share Link
          </Button>
        </div>

        {/* Final Score */}
        <div className="mt-6 p-4 bg-success-50 border border-success-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-success-700 font-semibold">Final ATS Score</div>
              <div className="text-success-600 text-sm">
                {finalScore >= 80 ? 'Ready for submission' : 
                 finalScore >= 60 ? 'Good, but can be improved' : 
                 'Needs optimization'}
              </div>
            </div>
            <div className="text-2xl font-bold text-success-600" data-testid="score-final">{finalScore}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
