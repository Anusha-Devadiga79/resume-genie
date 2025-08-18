import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Resume } from "@shared/schema";

interface UploadSectionProps {
  onResumeUploaded: (resume: Resume) => void;
}

export default function UploadSection({ onResumeUploaded }: UploadSectionProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('resume', file);
      
      const response = await apiRequest('POST', '/api/resumes/upload', formData);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Upload Successful",
        description: "Your resume is being processed...",
      });
      
      // Poll for processing completion
      pollResumeStatus(data.resumeId);
    },
    onError: (error) => {
      toast({
        title: "Upload Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const pollResumeStatus = async (resumeId: string) => {
    const maxAttempts = 30; // 30 seconds max
    let attempts = 0;

    const poll = async () => {
      try {
        const response = await apiRequest('GET', `/api/resumes/${resumeId}`);
        const resume = await response.json();
        
        if (resume.isProcessed) {
          onResumeUploaded(resume);
          toast({
            title: "Processing Complete",
            description: "Your resume has been analyzed and is ready for optimization!",
          });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 1000);
        } else {
          toast({
            title: "Processing Timeout",
            description: "Resume processing is taking longer than expected. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Processing Error",
          description: "Failed to check processing status.",
          variant: "destructive",
        });
      }
    };

    poll();
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFileSelect(file);
    }
  };

  const handleFileSelect = (file: File) => {
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload only PDF or DOCX files.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please upload files smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setUploadedFile(file);
    uploadMutation.mutate(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Upload Your Resume</h3>
      
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileInputChange}
        className="hidden"
        data-testid="input-file-upload"
      />
      
      <div 
        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${
          dragActive 
            ? 'border-primary-400 bg-primary-50' 
            : 'border-slate-300 hover:border-primary-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
        data-testid="dropzone-upload"
      >
        <div className="mb-4">
          <i className="fas fa-cloud-upload-alt text-4xl text-slate-400"></i>
        </div>
        <h4 className="text-lg font-semibold text-slate-700 mb-2">
          {uploadMutation.isPending ? 'Uploading...' : 'Drag & drop your resume here'}
        </h4>
        <p className="text-slate-500 mb-4">or click to browse files</p>
        <div className="flex justify-center space-x-4 text-sm text-slate-400">
          <span><i className="fas fa-file-pdf mr-1"></i>PDF</span>
          <span><i className="fas fa-file-word mr-1"></i>DOCX</span>
          <span>Max 10MB</span>
        </div>
      </div>
      
      {uploadedFile && (
        <div className="mt-6">
          <div className="bg-slate-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <i className={`${uploadedFile.type.includes('pdf') ? 'fas fa-file-pdf text-red-500' : 'fas fa-file-word text-blue-500'} text-lg`}></i>
              <div>
                <div className="font-medium text-slate-900" data-testid="text-uploaded-filename">{uploadedFile.name}</div>
                <div className="text-sm text-slate-500" data-testid="text-uploaded-filesize">
                  {(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB
                </div>
              </div>
            </div>
            <button 
              onClick={removeFile}
              className="text-slate-400 hover:text-slate-600"
              data-testid="button-remove-file"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
