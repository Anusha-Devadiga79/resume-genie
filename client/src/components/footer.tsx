export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-magic text-white text-sm"></i>
              </div>
              <h4 className="text-xl font-bold">ResumeGenie</h4>
            </div>
            <p className="text-slate-400 mb-4">AI-powered resume optimization that gets you hired faster.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white" data-testid="link-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white" data-testid="link-linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white" data-testid="link-github">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Product</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Career Tips</a></li>
              <li><a href="#" className="hover:text-white">Resume Examples</a></li>
              <li><a href="#" className="hover:text-white">Industry Guides</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ResumeGenie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
