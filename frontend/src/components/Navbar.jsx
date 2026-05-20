import { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ShieldAlert, Menu, X, Sun, Moon, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `relative font-medium transition-colors duration-300 py-1 flex items-center ${
      isActive(path)
        ? 'text-primary-600 dark:text-primary-400 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400 after:rounded-full'
        : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400 hover:after:w-full after:transition-all after:duration-300 after:rounded-full'
    }`;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 text-slate-300 text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-9">
          <div className="flex items-center gap-6">
            <a href="tel:+971501234567" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone size={13} /> +971-50-123-4567
            </a>
            <span className="text-slate-600">|</span>
            <span>Sun – Thu: 9AM – 6PM</span>
          </div>
          <a
            href="https://wa.me/971501234567?text=Hello%20SmartIT%20Team"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-medium transition block hover:scale-105 transform duration-300"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-transparent'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex-shrink-0 group">
              <span className="text-primary-600 dark:text-primary-500 group-hover:text-primary-700 transition-colors">Smart</span>IT
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center space-x-7">
              <Link to="/" className={linkClass('/')}>Home</Link>
              <Link to="/about" className={linkClass('/about')}>About</Link>
              <Link to="/solutions" className={linkClass('/solutions')}>Solutions</Link>

              {/* Services Dropdown */}
              <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <Link to="/services" className={`${linkClass('/services')} gap-1 cursor-pointer`}>
                  Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-primary-600' : ''}`} />
                </Link>
                {/* Dropdown Menu with premium fade-and-slide animation */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${servicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}>
                  <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-2xl py-3 overflow-hidden relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-primary-500 before:to-purple-500">
                    <div className="px-4 py-2 mb-1 hidden sm:block">
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Top Solutions</p>
                    </div>
                    {[
                      { label: 'Managed IT Support', icon: '🖥️', slug: 'it-amc-support' },
                      { label: 'CCTV & Surveillance', icon: '📹', slug: 'cctv-installation' },
                      { label: 'Cybersecurity', icon: '🔒', slug: 'cyber-security' },
                      { label: 'Cloud Solutions', icon: '☁️', slug: 'cloud-solution' },
                      { label: 'Web Development', icon: '🌐', slug: 'web-design-development' },
                      { label: 'Network & Cabling', icon: '🔌', slug: 'structured-cabling' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={`/services/${item.slug}`}
                        className="flex items-center gap-4 px-5 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-primary-50/80 dark:hover:bg-slate-800/80 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group/item"
                      >
                        <span className="text-xl group-hover/item:scale-110 transition-transform duration-200">{item.icon}</span> 
                        <span className="font-semibold">{item.label}</span>
                      </Link>
                    ))}
                    <div className="border-t border-slate-100/50 dark:border-slate-800/50 mt-2 mx-4 pt-3 pb-1">
                       <Link to="/services" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm text-primary-600 dark:text-primary-400 font-bold hover:bg-primary-500 hover:text-white transition-colors duration-300">
                          View All 18 Services &rarr;
                       </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/partners" className={linkClass('/partners')}>Partners</Link>
              <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
              <Link to="/contact" className={linkClass('/contact')}>Contact</Link>

              <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 hidden lg:block mx-1"></div>

              <button onClick={() => setIsDark(!isDark)} className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle theme">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {!user ? (
                <Link to="/contact" className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md shadow-primary-600/20 active:scale-95 active:translate-y-0">
                  Get a Quote
                </Link>
              ) : (
                <>
                  <Link to="/admin/dashboard" className={linkClass('/admin/dashboard')}>Dashboard</Link>
                  <button onClick={handleLogout} className="text-red-500 hover:text-red-700 font-medium transition text-sm">Logout</button>
                </>
              )}
            </div>

            {/* Mobile controls */}
            <div className="flex items-center lg:hidden space-x-3">
              <button onClick={() => setIsDark(!isDark)} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition">
                {isDark ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pb-6 pt-2 space-y-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/solutions', label: 'Solutions' },
              { to: '/services', label: 'Services' },
              { to: '/partners', label: 'Partners' },
              { to: '/blog', label: 'Blog' },
              { to: '/careers', label: 'Careers' },
              { to: '/contact', label: 'Contact' },
              { to: '/faq', label: 'FAQ' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-lg font-medium transition ${
                  isActive(link.to)
                    ? 'bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 mt-3">
              {!user ? (
                <>
                  <Link to="/contact" className="block w-full text-center py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                    Get a Quote
                  </Link>
                  <Link to="/admin/login" className="block text-center mt-2 text-sm text-slate-400 hover:text-slate-600 transition">
                    <ShieldAlert size={14} className="inline mr-1" /> Admin Login
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/admin/dashboard" className="block px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Dashboard</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-3 text-red-500 font-medium">Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
