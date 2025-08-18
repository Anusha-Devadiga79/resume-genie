import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  const handleGetStarted = () => {
    // If we're not on the home page, navigate to home first
    if (location !== '/') {
      window.location.href = '/';
    } else {
      // Scroll to upload section on home page
      const uploadSection = document.querySelector('[data-testid="dropzone-upload"]');
      if (uploadSection) {
        uploadSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-magic text-white text-sm"></i>
            </div>
            <h1 className="text-xl font-bold text-slate-900">ResumeGenie</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className={`transition-colors ${
              location === '/features' 
                ? 'text-primary-600 font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}>
              Features
            </Link>
            <Link href="/pricing" className={`transition-colors ${
              location === '/pricing' 
                ? 'text-primary-600 font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}>
              Pricing
            </Link>
            <Link href="/about" className={`transition-colors ${
              location === '/about' 
                ? 'text-primary-600 font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}>
              About
            </Link>
            <button 
              onClick={handleGetStarted}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors" 
              data-testid="button-get-started"
            >
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
