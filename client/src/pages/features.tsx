import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Features() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Powerful Features for<br />
              <span className="text-primary-600">Resume Success</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Discover how ResumeGenie's AI-powered features help you create ATS-optimized resumes 
              that get past hiring filters and land more interviews.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">AI-Powered Resume Analysis</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our advanced NLP algorithms analyze your resume against thousands of job postings, 
                identifying optimization opportunities and ATS compatibility issues.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-success-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Real-time keyword matching and density analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-success-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Format structure validation for ATS systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-success-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Content quality assessment and scoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-robot text-primary-600 text-3xl"></i>
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-slate-600">ATS Compatibility Rate</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-slate-100 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-magic text-success-600 text-3xl"></i>
                </div>
                <div className="text-4xl font-bold text-success-600 mb-2">2 Min</div>
                <div className="text-slate-600">Average Processing Time</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Intelligent Content Optimization</h2>
              <p className="text-lg text-slate-600 mb-8">
                Transform your resume content with AI-generated improvements that highlight your achievements 
                and align with industry best practices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-primary-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Action verb enhancement and achievement quantification</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-primary-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Industry-specific keyword integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-primary-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Professional tone and clarity improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-slate-600">Comprehensive tools for resume optimization and job search success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-file-upload text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Upload</h3>
              <p className="text-slate-600">Support for PDF and DOCX formats with intelligent text extraction and parsing.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-search text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Keyword Analysis</h3>
              <p className="text-slate-600">Identify missing keywords and optimize for specific job roles and industries.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-time Scoring</h3>
              <p className="text-slate-600">Get instant feedback with detailed scoring across multiple resume dimensions.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-palette text-orange-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Professional Templates</h3>
              <p className="text-slate-600">ATS-optimized templates designed by recruitment experts and career coaches.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-download text-red-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-format Export</h3>
              <p className="text-slate-600">Export your optimized resume in PDF, DOCX, or share a professional online version.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Privacy & Security</h3>
              <p className="text-slate-600">Your data is encrypted and never stored permanently. Complete confidentiality guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Resume?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have boosted their interview rates with ResumeGenie's AI-powered optimization.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors text-lg font-semibold" 
            data-testid="button-get-started"
          >
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}