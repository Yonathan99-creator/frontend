import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Star, 
  User, 
  Search,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Heart,
  Bookmark
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useApp } from '../../../contexts/AppContext';
import { useAuth } from '../../../contexts/auth/AuthContext';

interface ClientNavbarProps {
  onLogoClick?: () => void;
  showBackToLanding?: boolean;
  isLandingPage?: boolean;
}

const ClientNavbar: React.FC<ClientNavbarProps> = ({ onLogoClick, showBackToLanding = false, isLandingPage = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { logout, user } = useAuth();
  const appContext = useApp();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modules = [
    { name: 'My Appointments', icon: Calendar },
    { name: 'Book Service', icon: Clock },
    { name: 'My History', icon: Star },
    { name: 'My Profile', icon: User }
  ];

  const currentModule = appContext?.currentModule;
  const setCurrentModule = appContext?.setCurrentModule;

  const handleModuleChange = (moduleName: string) => {
    if (!isLandingPage) {
      setCurrentModule?.(moduleName);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
  };

  const getUserDisplayInfo = () => {
    if (!user) return { initials: 'U', name: 'User', role: 'Guest' };
    
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    return {
      initials,
      name: user.name,
      role: user.role.charAt(0).toUpperCase() + user.role.slice(1)
    };
  };

  const userInfo = getUserDisplayInfo();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onLogoClick}
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-xl p-2 -m-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 group-hover:rotate-12">
                <Calendar className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                ProBooking
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          {!isLandingPage && (
            <div className="hidden lg:flex items-center space-x-1">
              {modules.map((module) => {
                const Icon = module.icon;
                const isActive = currentModule === module.name;
                return (
                  <button
                    key={module.name}
                    onClick={() => handleModuleChange(module.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{module.name}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-3 p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{userInfo.initials}</span>
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{userInfo.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{userInfo.role}</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                        <span className="text-white font-medium">{userInfo.initials}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{userInfo.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => {
                        if (!isLandingPage) {
                          handleModuleChange('My Profile');
                        }
                        setIsProfileMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && !isLandingPage && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {modules.map((module) => {
                const Icon = module.icon;
                const isActive = currentModule === module.name;
                return (
                  <button
                    key={module.name}
                    onClick={() => handleModuleChange(module.name)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{module.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ClientNavbar;