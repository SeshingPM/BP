import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
            BambooSleepReviews
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Home</Link>
            <Link to="/top-rated" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Top-Rated Products</Link>
            <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Blog</Link>
            <Link to="/compare" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Compare</Link>
            <Link to="/faq" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">FAQ</Link>
          </div>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700 dark:text-gray-300" /> : <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Home</Link>
            <Link to="/top-rated" className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Top-Rated Products</Link>
            <Link to="/blog" className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Blog</Link>
            <Link to="/compare" className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">Compare</Link>
            <Link to="/faq" className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">FAQ</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;