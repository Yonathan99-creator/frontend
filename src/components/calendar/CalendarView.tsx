import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Eye, Grid3X3, Columns, Square, Filter, Search, Bell, Settings, Download, Share2, Bookmark, Star, TrendingUp, Users, Clock, Award, Zap, Heart, Target, BarChart3, Activity, CheckCircle, AlertCircle, XCircle, MapPin, Phone, Mail, Sparkles, Crown, Diamond, Trophy, Flame, ThumbsUp, Gift, Rocket, Medal } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import MonthView from './MonthView';
import WeekView from './WeekView';
import DayView from './DayView';

const CalendarView: React.FC = () => {
  const { appointments } = useApp();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeTab, setActiveTab] = useState<'calendar' | 'analytics' | 'settings'>('calendar');
  const [isLoading, setIsLoading] = useState(false);

  const navigateDate = (direction: 'prev' | 'next') => {
    setIsAnimating(true);
    const newDate = new Date(currentDate);
    
    if (view === 'month') {
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    } else {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    }
    
    setCurrentDate(newDate);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleTabChange = (tab: 'calendar' | 'analytics' | 'settings') => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 300);
  };

  const getDateRangeText = () => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long' 
    };
    
    if (view === 'month') {
      return currentDate.toLocaleDateString('en-US', options);
    } else if (view === 'week') {
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      return `${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    } else {
      return currentDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  const goToToday = () => {
    setIsAnimating(true);
    setCurrentDate(new Date());
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getViewIcon = (viewType: 'month' | 'week' | 'day') => {
    switch (viewType) {
      case 'month': return Grid3X3;
      case 'week': return Columns;
      case 'day': return Square;
    }
  };

  // Enhanced statistics
  const todayAppointments = appointments.filter(apt => 
    apt.startTime.toDateString() === new Date().toDateString()
  ).length;
  
  const thisWeekAppointments = appointments.filter(apt => {
    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    return apt.startTime >= weekStart && apt.startTime <= weekEnd;
  }).length;
  
  const thisMonthAppointments = appointments.filter(apt => {
    const today = new Date();
    return apt.startTime.getMonth() === today.getMonth() && 
           apt.startTime.getFullYear() === today.getFullYear();
  }).length;

  const upcomingAppointments = appointments.filter(apt => 
    apt.startTime > new Date() && apt.status === 'confirmed'
  ).length;

  const completedAppointments = appointments.filter(apt => 
    apt.status === 'completed'
  ).length;

  const pendingAppointments = appointments.filter(apt => 
    apt.status === 'pending'
  ).length;

  const tabs = [
    { 
      id: 'calendar', 
      label: 'Calendar View', 
      icon: CalendarIcon, 
      color: 'from-blue-500 to-cyan-600',
      description: 'Manage your schedule'
    },
    { 
      id: 'analytics', 
      label: 'Analytics', 
      icon: BarChart3, 
      color: 'from-purple-500 to-pink-600',
      description: 'Performance insights'
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings, 
      color: 'from-green-500 to-emerald-600',
      description: 'Calendar preferences'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 animate-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
              <CalendarIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Calendar
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Manage your appointments and schedule with style
              </p>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Crown, label: 'Calendar Master', color: 'from-yellow-500 to-orange-600', description: 'Expert scheduler' },
              { icon: Trophy, label: '1000+ Appointments', color: 'from-blue-500 to-purple-600', description: 'Milestone achieved' },
              { icon: Medal, label: 'Time Optimizer', color: 'from-green-500 to-emerald-600', description: '95% efficiency' },
              { icon: Flame, label: 'Most Booked', color: 'from-red-500 to-pink-600', description: 'Top professional' }
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${badge.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="font-bold text-sm">{badge.label}</span>
                    <p className="text-xs opacity-90">{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-top-4 duration-1000">
        {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white dark:bg-gray-200 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white dark:bg-gray-200 rounded-full translate-x-40 translate-y-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white dark:bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 dark:bg-gray-200/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-300/40 dark:bg-yellow-200/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-300/30 dark:bg-pink-200/40 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300/40 dark:bg-blue-200/50 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="relative p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 dark:bg-black/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 dark:border-white/20 shadow-2xl hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
                  <CalendarIcon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2 animate-in slide-in-from-left-4 duration-1000 text-white">My Calendar</h1>
                  <p className="text-blue-100 dark:text-blue-200 text-lg animate-in slide-in-from-left-4 duration-1000 delay-200">Manage your appointments and schedule</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-300 border border-white/20">
                      <Crown className="w-4 h-4 text-yellow-300 dark:text-yellow-200" />
                      <span className="font-semibold text-white">Professional Calendar</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-500 border border-white/20">
                      <Zap className="w-4 h-4 text-green-300 dark:text-green-200" />
                      <span className="font-semibold text-white">{appointments.length} Total Appointments</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <button className="group flex items-center space-x-3 px-8 py-4 bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-2xl hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-in slide-in-from-right-4 duration-1000 text-white border border-white/20">
                  <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="font-bold text-lg">New Appointment</span>
                </button>
                <div className="flex space-x-2">
                  <button className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-200 border border-white/20">
                    <Settings className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  <button className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-300 border border-white/20">
                    <BarChart3 className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  <button className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-400 border border-white/20 relative">
                    <Bell className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Crown, label: 'Calendar Master', color: 'from-yellow-500 to-orange-600', description: 'Expert scheduler' },
                { icon: Trophy, label: '1000+ Appointments', color: 'from-blue-500 to-purple-600', description: 'Milestone achieved' },
                { icon: Medal, label: 'Time Optimizer', color: 'from-green-500 to-emerald-600', description: '95% efficiency' },
                { icon: Flame, label: 'Most Booked', color: 'from-red-500 to-pink-600', description: 'Top professional' }
              ].map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className={`flex items-center space-x-3 px-6 py-3 bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000 border border-white/20`}
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${badge.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white">{badge.label}</span>
                      <p className="text-xs text-white/80">{badge.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: 'Today\'s Appointments',
                  value: todayAppointments.toString(),
                  change: '+2 from yesterday',
                  icon: CalendarIcon,
                  color: 'from-blue-500 to-cyan-600',
                  trend: 'up'
                },
                {
                  label: 'This Week',
                  value: thisWeekAppointments.toString(),
                  change: '+5 from last week',
                  icon: Clock,
                  color: 'from-green-500 to-emerald-600',
                  trend: 'up'
                },
                {
                  label: 'This Month',
                  value: thisMonthAppointments.toString(),
                  change: '+12 from last month',
                  icon: Users,
                  color: 'from-purple-500 to-violet-600',
                  trend: 'up'
                },
                {
                  label: 'Success Rate',
                  value: '94%',
                  change: '+3% improvement',
                  icon: TrendingUp,
                  color: 'from-orange-500 to-red-600',
                  trend: 'up'
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000`}
                    style={{ animationDelay: `${index * 150 + 800}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold bg-green-100/20 text-green-200`}>
                        <TrendingUp className="w-3 h-3" />
                        <span>{stat.change.split(' ')[0]}</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="text-sm font-bold text-blue-100 dark:text-blue-200 mb-1">{stat.label}</p>
                    <p className="text-xs text-blue-200 dark:text-blue-300">{stat.change}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-600/50 p-2 mb-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
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
          {activeTab === 'calendar' && (
            <div className="space-y-8">
              {/* Enhanced Navigation and Controls */}
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-600/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                  {/* Date Navigation */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <CalendarIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Calendar View</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage your schedule</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-700 dark:to-blue-900/30 rounded-2xl p-2 shadow-inner hover:shadow-lg transition-all duration-300">
                        <button
                          onClick={() => navigateDate('prev')}
                          className="p-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg transform hover:scale-110 group active:scale-95"
                        >
                          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
                        </button>
                        <button
                          onClick={() => navigateDate('next')}
                          className="p-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg transform hover:scale-110 group active:scale-95"
                        >
                          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                      
                      <div className="text-center">
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white transition-all duration-500 ${isAnimating ? 'opacity-50 transform scale-95 blur-sm' : 'opacity-100 transform scale-100 blur-0'}`}>
                          {getDateRangeText()}
                        </h3>
                        <button
                          onClick={goToToday}
                          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:underline hover:scale-105 transform active:scale-95 px-2 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          Go to Today
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Controls */}
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                        <Search className="w-3 h-3 text-white" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search appointments..."
                        className="pl-11 pr-4 py-3 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm font-medium shadow-inner w-64 hover:shadow-lg focus:scale-105 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>

                    {/* Filters */}
                    <div className="relative">
                      <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                          showFilters 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <Filter className="w-5 h-5" />
                        <span className="font-medium">Filters</span>
                      </button>
                      
                      {showFilters && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden animate-in slide-in-from-top-2 duration-200 z-10">
                          <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Filter by Status</h4>
                            <div className="space-y-2">
                              {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map((filter) => (
                                <button
                                  key={filter}
                                  onClick={() => setSelectedFilter(filter)}
                                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                                    selectedFilter === filter
                                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                  }`}
                                >
                                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* View Toggle */}
                    <div className="flex bg-gradient-to-r from-gray-100 to-purple-100 dark:from-gray-700 dark:to-purple-900/30 rounded-2xl p-2 shadow-inner">
                      {(['month', 'week', 'day'] as const).map((viewType) => {
                        const Icon = getViewIcon(viewType);
                        return (
                          <button
                            key={viewType}
                            onClick={() => setView(viewType)}
                            className={`flex items-center space-x-2 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 active:scale-95 ${
                              view === viewType
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105 animate-pulse'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-600/50 hover:scale-105'
                            }`}
                          >
                            <Icon className="w-5 h-5 transition-transform duration-300" />
                            <span>{viewType.charAt(0).toUpperCase() + viewType.slice(1)}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex space-x-2">
                      <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 hover:rotate-12">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 hover:rotate-12">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 hover:rotate-12 relative">
                        <Bell className="w-5 h-5" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar Content with Enhanced Wrapper */}
              <div className={`flex-1 transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-700 ${isAnimating ? 'opacity-70 transform scale-98 blur-sm' : 'opacity-100 transform scale-100 blur-0'}`}>
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-600/50 overflow-hidden hover:shadow-3xl transition-all duration-500">
                  {view === 'month' && (
                    <MonthView 
                      currentDate={currentDate} 
                      appointments={appointments}
                    />
                  )}
                  {view === 'week' && (
                    <WeekView 
                      currentDate={currentDate} 
                      appointments={appointments}
                    />
                  )}
                  {view === 'day' && (
                    <DayView 
                      currentDate={currentDate} 
                      appointments={appointments}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-600/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar Analytics</h2>
                  <p className="text-gray-600 dark:text-gray-400">Performance insights and trends</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { 
                    label: 'Booking Rate', 
                    value: '94%', 
                    color: 'from-green-500 to-emerald-600',
                    icon: TrendingUp,
                    description: 'Successful bookings',
                    trend: '+8% this month'
                  },
                  { 
                    label: 'Client Satisfaction', 
                    value: '4.9★', 
                    color: 'from-yellow-500 to-orange-600',
                    icon: Star,
                    description: 'Average rating',
                    trend: '+0.3 improvement'
                  },
                  { 
                    label: 'Revenue Growth', 
                    value: '+23%', 
                    color: 'from-blue-500 to-cyan-600',
                    icon: Award,
                    description: 'Monthly increase',
                    trend: 'Trending up'
                  },
                  { 
                    label: 'Time Efficiency', 
                    value: '87%', 
                    color: 'from-purple-500 to-pink-600',
                    icon: Zap,
                    description: 'Schedule optimization',
                    trend: '+5% better'
                  }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={stat.label} 
                      className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700/70 dark:to-blue-900/30 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer backdrop-blur-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                        <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text">
                          {stat.value}
                        </div>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{stat.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{stat.description}</p>
                        <div className="flex items-center justify-center space-x-1">
                          <Sparkles className="w-3 h-3 text-green-500 group-hover:animate-spin" />
                          <span className="text-xs font-medium text-green-500 group-hover:animate-pulse">{stat.trend}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-600/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar Settings</h2>
                  <p className="text-gray-600 dark:text-gray-400">Customize your calendar preferences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Time Zone',
                    description: 'Set your local time zone',
                    icon: Clock,
                    color: 'from-blue-500 to-cyan-600',
                    bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
                  },
                  {
                    title: 'Working Hours',
                    description: 'Define your availability',
                    icon: Users,
                    color: 'from-green-500 to-emerald-600',
                    bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                  },
                  {
                    title: 'Notifications',
                    description: 'Manage alert preferences',
                    icon: Bell,
                    color: 'from-orange-500 to-red-600',
                    bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
                  },
                  {
                    title: 'Integrations',
                    description: 'Connect external calendars',
                    icon: Share2,
                    color: 'from-purple-500 to-pink-600',
                    bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
                  }
                ].map((setting, index) => {
                  const Icon = setting.icon;
                  return (
                    <button 
                      key={setting.title}
                      className={`bg-gradient-to-br ${setting.bgColor} rounded-3xl p-6 text-left hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border border-gray-200/50 dark:border-gray-600/50 cursor-pointer active:scale-95 backdrop-blur-sm`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${setting.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                        <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text">{setting.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{setting.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions Panel */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-600/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-800 mt-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Actions</h2>
              <p className="text-gray-600 dark:text-gray-400">Manage your calendar efficiently</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: 'Schedule Appointment',
                description: 'Book new appointment',
                icon: Plus,
                color: 'from-blue-500 to-cyan-600',
                bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
              },
              {
                title: 'View Analytics',
                description: 'Performance insights',
                icon: BarChart3,
                color: 'from-green-500 to-emerald-600',
                bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
              },
              {
                title: 'Export Calendar',
                description: 'Download schedule',
                icon: Download,
                color: 'from-purple-500 to-violet-600',
                bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20'
              },
              {
                title: 'Share Calendar',
                description: 'Share with team',
                icon: Share2,
                color: 'from-orange-500 to-red-600',
                bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
              },
              {
                title: 'Notifications',
                description: 'Manage alerts',
                icon: Bell,
                color: 'from-yellow-500 to-orange-600',
                bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
              },
              {
                title: 'Settings',
                description: 'Calendar preferences',
                icon: Settings,
                color: 'from-indigo-500 to-purple-600',
                bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
              }
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button 
                  key={action.title}
                  className={`bg-gradient-to-br ${action.bgColor} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border border-gray-200/50 dark:border-gray-600/50 cursor-pointer active:scale-95 backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text">{action.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 group animate-bounce">
            <CalendarIcon className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
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

export default CalendarView;