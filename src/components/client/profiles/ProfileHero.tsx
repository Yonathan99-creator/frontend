import React, { useState } from 'react';
import { Camera, Edit, Star, MapPin, Award, Crown, Sparkles, Heart, TrendingUp, Users, Calendar, Clock, Shield, Zap, Trophy, Medal, Flame, Diamond, Gift, Target, Eye, Share2, Bookmark, ThumbsUp, MessageCircle, Bell, Settings, Globe, Phone, Mail } from 'lucide-react';

const ProfileHero: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop');

  const achievements = [
    { icon: Crown, label: 'Verified Client', color: 'from-yellow-500 to-orange-600' },
    { icon: Trophy, label: 'Top Reviewer', color: 'from-blue-500 to-purple-600' },
    { icon: Medal, label: 'Loyal Customer', color: 'from-green-500 to-emerald-600' },
    { icon: Flame, label: 'Active User', color: 'from-red-500 to-pink-600' }
  ];

  const stats = [
    { label: 'Appointments', value: '24', icon: Calendar, color: 'from-blue-500 to-cyan-600' },
    { label: 'Reviews', value: '18', icon: Star, color: 'from-yellow-500 to-orange-600' },
    { label: 'Professionals', value: '12', icon: Users, color: 'from-green-500 to-emerald-600' },
    { label: 'Member Since', value: '2023', icon: Award, color: 'from-purple-500 to-pink-600' }
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-pink-950/30 overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-300/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-300/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-500 via-pink-600 to-red-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 p-8">
          {/* Header Actions */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Crown className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-white font-bold">Client Profile</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="text-white font-medium">Verified</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
                <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group relative">
                <Bell className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
              </button>
            </div>
          </div>

          {/* Main Profile Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-white p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <button className="absolute bottom-2 right-2 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 group">
                  <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span>Active</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-4xl font-bold animate-in slide-in-from-left-4 duration-1000">Sarah Johnson</h1>
                <div className="flex space-x-2">
                  {achievements.slice(0, 2).map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={index}
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce`}
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <p className="text-2xl text-purple-100 mb-4 animate-in slide-in-from-left-4 duration-1000 delay-200">Valued Client & Active Reviewer</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-1000 delay-300">
                  <Star className="w-5 h-5 text-yellow-300 fill-current animate-pulse" />
                  <span className="font-bold">4.8</span>
                  <span className="text-purple-100">(24 reviews given)</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-1000 delay-400">
                  <MapPin className="w-5 h-5 text-green-300" />
                  <span className="text-purple-100">New York, NY</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-1000 delay-500">
                  <TrendingUp className="w-5 h-5 text-blue-300" />
                  <span className="text-purple-100">Premium Member</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom-4 duration-1000"
                      style={{ animationDelay: `${index * 100 + 600}ms` }}
                    >
                      <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                      <div className="text-sm text-purple-100">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000 delay-1000"
            >
              <Edit className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold">Edit Profile</span>
            </button>
            
            <button className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000 delay-1100">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold">Book Appointment</span>
            </button>
            
            <button className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000 delay-1200">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold">View Messages</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;