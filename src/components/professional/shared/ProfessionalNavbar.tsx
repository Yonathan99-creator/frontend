import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Star, 
  CreditCard, 
  User, 
  Settings,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Bell,
  Search,
  Home,
  Scissors
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useApp } from '../../../contexts/AppContext';
import { useAuth } from '../../../contexts/auth/AuthContext';

interface ProfessionalNavbarProps {
  onLogoClick?: () => void;
  showBackToLanding?: boolean;
  isLandingPage?: boolean;
}

const ProfessionalNavbar: React.FC<ProfessionalNavbarProps> = ({ onLogoClick, showBackToLanding = false, isLandingPage = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { logout, user } = useAuth();
  const appContext = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    { name: 'My Profile', icon: User },
    { name: 'My Services', icon: Scissors },
    { name: 'My Calendar', icon: Calendar },
    { name: 'My Appointments', icon: Clock },
    { name: 'My Reviews', icon: Star },
    { name: 'My Subscription', icon: CreditCard }
  ];

  const notifications = [
    { id: 1, title: 'New Appointment', message: 'Sarah Johnson booked a hair cut for tomorrow at 2:00 PM', time: '5 min ago', unread: true },
    { id: 2, title: 'Payment Received', message: 'Payment of $85 has been successfully processed', time: '1 hour ago', unread: true },
    { id: 3, title: 'Review Received', message: 'Michael Chen left a 5-star review for your service', time: '2 hours ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={onLogoClick}
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl p-2 -m-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:rotate-12">
                <Calendar className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                ProBooking
              </span>
            </button>
          </div>

          {/* Navigation Items */}
          {!isLandingPage && (
            <div className="hidden lg:flex items-center space-x-1">
                {modules.map((module, index) => {
                  const Icon = module.icon;
                  const isActive = currentModule === module.name;
                  return (
                    <button
                      key={module.name}
                      onClick={() => handleModuleChange(module.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium hidden xl:block">{module.name}</span>
                    </button>
                  );
                })}
            </div>
          )}

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                          notification.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                              {notification.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                              {notification.message}
                            </p>
                            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-3 p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-medium">{userInfo.initials}</span>
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{userInfo.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{userInfo.role}</p>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-medium">{userInfo.initials}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{userInfo.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
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
                      Profile
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
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
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
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

export default ProfessionalNavbar;