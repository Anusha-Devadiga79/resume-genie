export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Choose ResumeGenie?</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI-powered platform combines industry expertise with cutting-edge technology 
            to give you the competitive edge in today's job market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-robot text-primary-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-3">AI-Powered Analysis</h4>
            <p className="text-slate-600">Advanced NLP algorithms analyze your resume against thousands of job postings to maximize ATS compatibility.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-success-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Real-Time Scoring</h4>
            <p className="text-slate-600">Get instant feedback with detailed scoring across keywords, format, and content quality metrics.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-warning-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-warning-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Privacy First</h4>
            <p className="text-slate-600">Your resume data is encrypted and never stored permanently. Complete confidentiality guaranteed.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-palette text-purple-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Professional Templates</h4>
            <p className="text-slate-600">Choose from ATS-optimized templates designed by recruitment experts and career coaches.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-download text-indigo-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Multiple Formats</h4>
            <p className="text-slate-600">Export your optimized resume in PDF, DOCX, or share a professional online version.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-rose-600 text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-3">Lightning Fast</h4>
            <p className="text-slate-600">Complete analysis and optimization in under 2 minutes. No lengthy forms or complicated processes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
