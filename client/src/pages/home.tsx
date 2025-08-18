import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import UploadSection from "@/components/upload-section";
import ATSAnalysisTab from "@/components/ats-analysis-tab";
import OptimizationTab from "@/components/optimization-tab";
import PreviewExportTab from "@/components/preview-export-tab";
import ResumeBuilderTab from "@/components/resume-builder-tab";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import { useState } from "react";
import type { Resume } from "@shared/schema";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'builder' | 'analysis' | 'optimize' | 'preview'>('builder');
  const [currentResume, setCurrentResume] = useState<Resume | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <UploadSection onResumeUploaded={setCurrentResume} />
        
        {/* Processing Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
          {/* Tab Navigation */}
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8 px-8 pt-6">
              <button 
                className={`pb-4 px-1 border-b-2 font-semibold transition-colors ${
                  activeTab === 'builder' 
                    ? 'border-primary-500 text-primary-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
                onClick={() => setActiveTab('builder')}
                data-testid="tab-builder"
              >
                <i className="fas fa-edit mr-2"></i>
                Resume Builder
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-semibold transition-colors ${
                  activeTab === 'analysis' 
                    ? 'border-primary-500 text-primary-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
                onClick={() => setActiveTab('analysis')}
                data-testid="tab-analysis"
              >
                <i className="fas fa-chart-line mr-2"></i>
                ATS Analysis
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-semibold transition-colors ${
                  activeTab === 'optimize' 
                    ? 'border-primary-500 text-primary-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
                onClick={() => setActiveTab('optimize')}
                data-testid="tab-optimize"
              >
                <i className="fas fa-magic mr-2"></i>
                AI Optimization
              </button>
              <button 
                className={`pb-4 px-1 border-b-2 font-semibold transition-colors ${
                  activeTab === 'preview' 
                    ? 'border-primary-500 text-primary-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
                onClick={() => setActiveTab('preview')}
                data-testid="tab-preview"
              >
                <i className="fas fa-eye mr-2"></i>
                Preview & Export
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'builder' && <ResumeBuilderTab resumeData={currentResume} />}
            {activeTab === 'analysis' && <ATSAnalysisTab resume={currentResume} />}
            {activeTab === 'optimize' && <OptimizationTab resume={currentResume} />}
            {activeTab === 'preview' && <PreviewExportTab resume={currentResume} />}
          </div>
        </div>
      </main>
      
      <FeaturesSection />
      <Footer />
    </div>
  );
}
