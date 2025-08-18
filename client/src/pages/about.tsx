import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              About<br />
              <span className="text-primary-600">ResumeGenie</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to democratize career success by making professional 
              resume optimization accessible to everyone through the power of AI.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                In today's competitive job market, your resume is often the first and only chance 
                to make an impression. Yet many talented professionals struggle with ATS systems 
                that filter out qualified candidates due to formatting or keyword issues.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                ResumeGenie was created to level the playing field. We believe everyone deserves 
                equal access to professional resume optimization, regardless of their background 
                or budget. Our AI-powered platform makes expert-level resume consulting available 
                to students, job seekers, and professionals worldwide.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
                  <div className="text-slate-600">Resumes Optimized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-600 mb-2">85%</div>
                  <div className="text-slate-600">Interview Rate Increase</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-success-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-heart text-white text-2xl"></i>
                  </div>
                  <div className="text-slate-700 font-semibold">Empowering Careers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Founded by career experts and AI researchers who experienced firsthand 
              the challenges of modern job searching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Problem</h3>
              <p className="text-slate-600">
                We discovered that 75% of resumes never reach human recruiters due to ATS filtering, 
                even for highly qualified candidates. Traditional resume services were expensive 
                and inaccessible to many.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-cog text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Solution</h3>
              <p className="text-slate-600">
                By combining natural language processing with recruitment industry expertise, 
                we built an AI that understands both ATS systems and what hiring managers 
                actually want to see.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-success-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Impact</h3>
              <p className="text-slate-600">
                Today, ResumeGenie helps professionals worldwide optimize their resumes in minutes, 
                not days. Our users report significantly higher interview rates and job placement success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Accessibility</h3>
              <p className="text-slate-600">
                Professional resume optimization should be available to everyone, regardless of budget or background.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Privacy</h3>
              <p className="text-slate-600">
                Your career information is confidential. We use enterprise-grade security and never store data permanently.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We continuously improve our AI models and stay current with industry trends and ATS requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Support</h3>
              <p className="text-slate-600">
                We're committed to your success and provide dedicated support throughout your job search journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="w-full h-64 bg-gradient-to-br from-slate-200 to-primary-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-brain text-white text-2xl"></i>
                  </div>
                  <div className="text-slate-700 font-semibold">AI-Powered Intelligence</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Cutting-Edge Technology</h2>
              <p className="text-lg text-slate-600 mb-6">
                ResumeGenie is built on advanced natural language processing (NLP) technology, 
                powered by state-of-the-art AI models that understand the nuances of professional 
                communication and recruitment practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-primary-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Advanced NLP algorithms for content analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-primary-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Machine learning models trained on successful resumes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-primary-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Real-time ATS compatibility validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-primary-600 text-sm"></i>
                  </div>
                  <span className="text-slate-700">Continuous learning from industry feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research & References</h2>
            <p className="text-xl text-slate-600">Our work is backed by industry research and proven methodologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Academic Foundation</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <i className="fas fa-file-alt text-primary-600 mt-1"></i>
                  <span>Gupta et al., "Automated Resume Screening Using NLP", IEEE, 2021</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-chart-bar text-primary-600 mt-1"></i>
                  <span>LinkedIn Talent Solutions, "ATS Hiring Trends", 2023</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-code text-primary-600 mt-1"></i>
                  <span>spaCy Documentation for Natural Language Processing, 2024</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-search text-primary-600 mt-1"></i>
                  <span>RapidFuzz Documentation for Text Matching, 2024</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Industry Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700">Interview Rate Improvement</span>
                    <span className="text-2xl font-bold text-success-600">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-success-500 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700">ATS Compatibility Score</span>
                    <span className="text-2xl font-bold text-primary-600">98%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700">Processing Speed</span>
                    <span className="text-2xl font-bold text-warning-600">2 Min</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-warning-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join the Resume Revolution</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of the thousands who have transformed their careers with AI-powered resume optimization.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors text-lg font-semibold" 
            data-testid="button-get-started-about"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}