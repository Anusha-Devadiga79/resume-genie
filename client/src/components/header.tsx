export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-magic text-white text-sm"></i>
            </div>
            <h1 className="text-xl font-bold text-slate-900">ResumeGenie</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors" data-testid="button-get-started">
              Get Started
            </button>
          </nav>
          <button className="md:hidden text-slate-600" data-testid="button-mobile-menu">
            <i className="fas fa-bars text-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
