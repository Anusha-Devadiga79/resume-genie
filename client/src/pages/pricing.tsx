import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Simple, Transparent<br />
              <span className="text-primary-600">Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your career goals. Start with our free tier 
              or upgrade for unlimited access to premium features.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-slate-600">Monthly</span>
              <button className="relative inline-flex items-center h-6 w-11 rounded-full bg-primary-600 transition-colors" data-testid="toggle-billing">
                <div className="inline-block h-4 w-4 bg-white rounded-full transform transition-transform translate-x-6"></div>
              </button>
              <span className="text-slate-900 font-semibold">Yearly <span className="text-primary-600 text-sm">(Save 25%)</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border-2 border-slate-200 rounded-2xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Free</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">$0</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">Perfect for getting started</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">1 resume analysis per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Basic ATS scoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">PDF export only</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">2 professional templates</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-400">
                  <i className="fas fa-times"></i>
                  <span>AI optimization</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-400">
                  <i className="fas fa-times"></i>
                  <span>Keyword suggestions</span>
                </li>
              </ul>

              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-slate-100 text-slate-700 py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 transition-colors" 
                data-testid="button-free-plan"
              >
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 relative bg-primary-50">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">$19</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">For job seekers and professionals</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">10 resume analyses per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Advanced ATS scoring & insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">AI content optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Smart keyword suggestions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">PDF & DOCX export</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">10+ premium templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Email support</span>
                </li>
              </ul>

              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors" 
                data-testid="button-pro-plan"
              >
                Start Pro Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border-2 border-slate-200 rounded-2xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">$49</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">For teams and recruiters</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Unlimited resume analyses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Advanced analytics dashboard</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Custom branding & templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Team collaboration tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">API access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-check text-success-600"></i>
                  <span className="text-slate-700">Custom integrations</span>
                </li>
              </ul>

              <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors" data-testid="button-enterprise-plan">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about ResumeGenie</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">How does the AI optimization work?</h3>
              <p className="text-slate-600">
                Our AI analyzes your resume content against thousands of successful resumes and job postings. 
                It identifies areas for improvement, suggests better wording, and ensures ATS compatibility 
                while maintaining your unique voice and achievements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Is my resume data secure?</h3>
              <p className="text-slate-600">
                Absolutely. We use enterprise-grade encryption and never store your resume permanently. 
                Your data is processed securely and deleted immediately after analysis. We're committed 
                to protecting your privacy and confidential information.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Can I cancel my subscription anytime?</h3>
              <p className="text-slate-600">
                Yes, you can cancel your subscription at any time. You'll continue to have access to 
                premium features until the end of your billing cycle. No long-term commitments or 
                cancellation fees.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Do you offer refunds?</h3>
              <p className="text-slate-600">
                We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied 
                with ResumeGenie, contact our support team within 14 days for a full refund.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">What file formats are supported?</h3>
              <p className="text-slate-600">
                ResumeGenie supports PDF and DOCX (Microsoft Word) formats for uploads. You can 
                export your optimized resume in PDF or DOCX format, ensuring compatibility with 
                any application system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Land Your Dream Job?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start optimizing your resume today and join the thousands who have boosted their interview rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors text-lg font-semibold" 
              data-testid="button-start-free-trial"
            >
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors text-lg font-semibold" data-testid="button-view-demo">
              View Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}