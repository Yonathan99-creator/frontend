import React from 'react';
import { TrendingUp, Users, Calendar, Star, Award, Clock, Heart, Eye, ThumbsUp, MessageCircle, Share2, Bookmark, Target, Zap, Crown, Trophy, Medal, Flame, Diamond, Gift, Rocket, Sparkles, BarChart3, PieChart, Activity, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const ProfileStats: React.FC = () => {
  const mainStats = [
    {
      title: 'Total Appointments',
      value: '24',
      change: '+3 this month',
      trend: 'up',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      description: 'Completed sessions'
    },
    {
      title: 'Reviews Written',
      value: '18',
      change: '+2 this month',
      trend: 'up',
      icon: Star,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      description: 'Feedback shared'
    },
    {
      title: 'Professionals',
      value: '12',
      change: '+1 this month',
      trend: 'up',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      description: 'Connected with'
    },
    {
      title: 'Satisfaction',
      value: '4.8',
      change: 'Average rating',
      trend: 'up',
      icon: Award,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      description: 'Your experience'
    }
  ];

  const activityMetrics = [
    {
      label: 'Booking Success Rate',
      value: '96%',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      progress: 96
    },
    {
      label: 'Review Helpfulness',
      value: '89%',
      icon: ThumbsUp,
      color: 'from-blue-500 to-cyan-600',
      progress: 89
    },
    {
      label: 'Response Rate',
      value: '92%',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-600',
      progress: 92
    },
    {
      label: 'Profile Completeness',
      value: '85%',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-600',
      progress: 85
    }
  ];

  const recentActivity = [
    {
      type: 'appointment',
      title: 'Completed appointment',
      professional: 'Dr. Emily Davis',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      type: 'review',
      title: 'Left 5-star review',
      professional: 'James Rodriguez',
      time: '1 day ago',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      type: 'booking',
      title: 'Booked new appointment',
      professional: 'Dr. Sarah Williams',
      time: '2 days ago',
      icon: Calendar,
      color: 'text-blue-500'
    },
    {
      type: 'payment',
      title: 'Payment processed',
      professional: 'Michael Thompson',
      time: '3 days ago',
      icon: Award,
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className={`bg-gradient-to-br ${stat.bgColor} rounded-3xl p-6 border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold ${
                    stat.trend === 'up' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    <TrendingUp className={`w-3 h-3 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span>{stat.change.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text">
                  {stat.value}
                </div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{stat.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activity Metrics */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-left-4 duration-1000 delay-600">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Metrics</h2>
                <p className="text-gray-600 dark:text-gray-400">Your engagement and performance</p>
              </div>
            </div>

            <div className="space-y-6">
              {activityMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-left-4 duration-1000"
                    style={{ animationDelay: `${index * 100 + 700}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {metric.label}
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                        {metric.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${metric.progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-right-4 duration-1000 delay-600">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
                <p className="text-gray-600 dark:text-gray-400">Your latest interactions</p>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-right-4 duration-1000"
                    style={{ animationDelay: `${index * 100 + 700}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${activity.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.professional}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{activity.time}</p>
                    </div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileStats;