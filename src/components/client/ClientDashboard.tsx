import React, { useState } from 'react';
import { Calendar, User, Star, Clock, MapPin, Phone, Mail, Search, Filter, Bell, Settings, Heart, Bookmark, TrendingUp, Award, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Gift, Rocket, Diamond, CheckCircle, Eye, Share2 } from 'lucide-react';
import { useAuth } from '../../contexts/auth/AuthContext';
import { AppProvider } from '../../contexts/AppContext';
import { LoadingScreen } from '../shared';
import { ThemeProvider } from '../../contexts/ThemeContext';
import ClientNavbar from './shared/ClientNavbar';
import ClientLandingPage from './shared/ClientLandingPage';

const ClientDashboardContent: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('appointments');
  const [isLoading, setIsLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

import { AuthProvider } from '../contexts/auth/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AppProvider } from '../contexts/AppContext';
import { LoadingScreen } from '../shared';
import ClientNavbar from './shared/ClientNavbar';
import ClientLanding from './landing/ClientLanding';

const ClientDashboardContent: React.FC = () => {
  const { user } = useAuth();
  const [showLanding, setShowLanding] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

    return (
      <LoadingScreen />
    );
  }

  const handleEnterDashboard = (moduleName?: string) => {
    setShowLanding(false);
    if (moduleName) {
      // Module will be set by the component that calls this
    }
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
  };

  if (showLanding) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ClientLandingPage onModuleClick={handleEnterDashboard} />
      </div>
    );
  }

  const tabs = [
    { id: 'appointments', label: 'My Appointments', icon: Calendar, color: 'from-blue-500 to-cyan-600' },
    { id: 'bookings', label: 'Book Service', icon: Clock, color: 'from-green-500 to-emerald-600' },
    { id: 'history', label: 'History', icon: Star, color: 'from-purple-500 to-pink-600' },
    { id: 'profile', label: 'My Profile', icon: User, color: 'from-orange-500 to-red-600' }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Hair Cut & Style',
      professional: 'John Professional',
      date: '2025-01-22',
      time: '10:00 AM',
      location: 'Luxe Beauty Salon',
      status: 'confirmed',
      price: 85,
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      service: 'Manicure & Pedicure',
      professional: 'Maria Rodriguez',
      date: '2025-01-25',
      time: '2:30 PM',
      location: 'Nail Art Studio',
      status: 'pending',
      price: 65,
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const availableServices = [
    {
      id: 1,
      name: 'Premium Hair Cut',
      professional: 'John Professional',
      duration: '90 min',
      price: 85,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hair Care'
    },
    {
      id: 2,
      name: 'Full Color Treatment',
      professional: 'John Professional',
      duration: '3 hours',
      price: 150,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hair Color'
    },
    {
      id: 3,
      name: 'Relaxing Massage',
      professional: 'Lisa Thompson',
      duration: '60 min',
      price: 120,
      rating: 5.0,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Wellness'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'appointments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Appointments</h2>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book New Appointment
              </button>
            </div>
            
            <div className="grid gap-6">
              {upcomingAppointments.map((appointment, index) => (
                <div
                  key={appointment.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group animate-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={appointment.image}
                        alt={appointment.service}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {appointment.service}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">with {appointment.professional}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="text-gray-700 dark:text-gray-300">{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <span className="text-gray-700 dark:text-gray-300">{appointment.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="text-gray-700 dark:text-gray-300">{appointment.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">${appointment.price}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Available Services</h2>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  />
                </div>
                <button className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableServices.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group animate-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {service.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-2xl font-bold text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        ${service.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      with {service.professional}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {renderStars(service.rating)}
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {service.duration}
                      </span>
                    </div>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-12 h-12 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Appointment History</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              View your past appointments and leave reviews
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View History
            </button>
          </div>
        );

      case 'profile':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {user?.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user?.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">{user?.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                  <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Account Type</p>
                    <p className="font-medium text-gray-900 dark:text-white capitalize">{user?.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                  <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {user?.createdAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Edit Profile
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ClientNavbar onLogoClick={handleBackToLanding} showBackToLanding={true} isLandingPage={false} />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-in slide-in-from-top-4 duration-1000">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
                <Calendar className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Welcome back, {user?.name?.split(' ')[0]}!
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                  Manage your appointments and discover new services
                </p>
              </div>
            </div>
          </div>
        


          {/* Navigation Tabs */}
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-2 mb-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden ${
                      isActive
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } animate-in slide-in-from-bottom-4 duration-1000`}
  React.useEffect(() => {
    // Simulate loading time for client dashboard
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
                    <Icon className="w-6 h-6" />
    return () => clearTimeout(timer);
  }, []);
              })}
  if (isLoading) {
    return <LoadingScreen />;
  );

  const handleEnterDashboard = (moduleName?: string) => {
    setShowLanding(false);
    if (moduleName) {
      // Module will be set by the component that calls this
    }
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
  };

  if (showLanding) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ClientLanding onNavigate={handleEnterDashboard} />
      </div>
    );
  }

  // Here you would render the actual dashboard modules
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <ClientNavbar onLogoClick={handleBackToLanding} showBackToLanding={true} isLandingPage={false} />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard content would go here */}
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Client Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400">Dashboard modules coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

const ClientDashboard: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <ClientDashboardContent />
      </AppProvider>
    </ThemeProvider>
  );
};

export default ClientDashboard;