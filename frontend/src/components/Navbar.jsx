import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ShieldAlert, Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navLinks = !user ? (
    <>
      <a onClick={() => setIsOpen(false)} href="/#services" className="block sm:inline-block px-4 py-2 sm:p-0 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition">Services</a>
      <a onClick={() => setIsOpen(false)} href="/#pricing" className="block sm:inline-block px-4 py-2 sm:p-0 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition">Pricing</a>
      <a onClick={() => setIsOpen(false)} href="/#contact" className="block sm:inline-block bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition w-max sm:w-auto shadow-sm">Get a Quote</a>
      <Link onClick={() => setIsOpen(false)} to="/admin/login" className="block sm:inline-block px-4 sm:p-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
        <ShieldAlert size={20} className="inline"/> <span className="sm:hidden ml-2">Admin Login</span>
      </Link>
    </>
  ) : (
    <>
      <Link onClick={() => setIsOpen(false)} to="/admin/dashboard" className="block sm:inline-block px-4 py-2 sm:p-0 text-slate-700 dark:text-slate-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition">Dashboard</Link>
      <button 
        onClick={handleLogout}
        className="block w-full text-left sm:w-auto px-4 py-2 sm:p-0 text-red-500 hover:text-red-700 font-medium transition"
      >
        Logout
      </button>
    </>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="text-primary-600 dark:text-primary-500">Smart</span>IT
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center space-x-8">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {navLinks}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg px-2 pt-2 pb-6 space-y-3 shadow-inner">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
