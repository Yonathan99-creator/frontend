import React, { useState } from 'react';
import { User, TrendingUp, BookOpen, Award, Camera, Settings, Bell, Share2, MessageCircle, Calendar, Heart, Star, Eye, Bookmark, ThumbsUp, Crown, Trophy, Medal, Sparkles, Zap, Target, BarChart3, Activity, Users, Clock, Gift, Rocket, Diamond, Flame } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileAbout from './ProfileAbout';

const MyProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { 
      id: 'about', 
      label: 'About', 
      icon: BookOpen, 
      color: 'from-blue-500 to-cyan-600',
      description: 'Personal information and background'
    },
    { 
      id: 'stats', 
      label: 'Statistics', 
      icon: BarChart3, 
      color: 'from-purple-500 to-pink-600',
      description: 'Performance metrics and analytics'
    },
    { 
      id: 'achievements', 
      label: 'Achievements', 
      icon: Trophy, 
      color: 'from-yellow-500 to-orange-600',
      description: 'Awards and milestones'
    }
  ];

  const handleTabChange = (tabId: string) => {
    setIsLoading(true);
    setActiveTab(tabId);
    setTimeout(() => setIsLoading(false), 300);
  };

  const renderTabContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'about':
        return <ProfileAbout />;
      case 'stats':
        return <ProfileStats />;
      case 'achievements':
        return <ProfileStats />; // You can create a separate ProfileAchievements component
      default:
        return <ProfileAbout />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 animate-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
              <User className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Profile
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Manage your professional identity and showcase your expertise
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Camera, label: 'Update Photo', color: 'from-green-500 to-emerald-600' },
              { icon: Settings, label: 'Settings', color: 'from-blue-500 to-cyan-600' },
              { icon: Share2, label: 'Share Profile', color: 'from-purple-500 to-pink-600' },
              { icon: Bell, label: 'Notifications', color: 'from-orange-500 to-red-600' }
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${action.color} text-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Profile Header */}
        <ProfileHeader />

        {/* Navigation Tabs */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-2 mb-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden ${
                    isActive
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  } animate-in slide-in-from-bottom-4 duration-1000`}
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 group-hover:rotate-12 group-hover:scale-110' 
                      : 'group-hover:scale-110'
                  }`}>
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-lg block">{tab.label}</span>
                    <span className={`text-sm block ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                      {tab.description}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-500 ${isLoading ? 'opacity-50 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
          {renderTabContent()}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 group animate-bounce">
            <MessageCircle className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Background Decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-pink-500/3 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-400/20 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-400/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;