
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Search, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar = ({ isLoggedIn, onLogout }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              KitabYatra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 hover:text-orange-600 ${
                isActive('/') ? 'text-orange-600 font-medium' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 hover:text-orange-600 ${
                isActive('/about') ? 'text-orange-600 font-medium' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className={`transition-colors duration-200 hover:text-orange-600 ${
                    isActive('/login') ? 'text-orange-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`transition-colors duration-200 hover:text-orange-600 ${
                    isActive('/register') ? 'text-orange-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                className={`transition-colors duration-200 hover:text-orange-600 ${
                  isActive('/dashboard') ? 'text-orange-600 font-medium' : 'text-gray-700'
                }`}
              >
                Dashboard
              </Link>
            )}
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Search className="h-4 w-4 mr-2" />
              Search Books
            </Button>
            {isLoggedIn && (
              <Button
                onClick={onLogout}
                variant="outline"
                className="border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-orange-100">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search Books
              </Button>
            </div>
            {isLoggedIn && (
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
