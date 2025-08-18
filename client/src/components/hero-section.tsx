export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            AI-Powered Resume<br />
            <span className="text-primary-600">Optimization</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Transform your resume with AI-driven analysis, ATS optimization, and professional formatting. 
            Get past hiring filters and land more interviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const uploadSection = document.querySelector('[data-testid="dropzone-upload"]');
                if (uploadSection) {
                  uploadSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold" 
              data-testid="button-upload-resume"
            >
              <i className="fas fa-upload mr-2"></i>
              Upload Resume
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-slate-400 transition-colors text-lg font-semibold" data-testid="button-watch-demo">
              <i className="fas fa-play mr-2"></i>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2" data-testid="stat-interview-rate">85%</div>
            <div className="text-slate-600">Interview Rate Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2" data-testid="stat-processing-time">2 Min</div>
            <div className="text-slate-600">Average Processing Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2" data-testid="stat-resumes-optimized">50K+</div>
            <div className="text-slate-600">Resumes Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
}
