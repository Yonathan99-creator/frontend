import React from 'react';
import { Star, TrendingUp, Users, MessageCircle, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, ThumbsUp, Eye, CheckCircle, BarChart3, Activity, Gift, Rocket, Diamond } from 'lucide-react';

const ReviewsHeader: React.FC = () => {
  const stats = [
    {
      label: 'Total Reviews',
      value: '127',
      change: '+12% this month',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      trend: 'up'
    },
    {
      label: 'Average Rating',
      value: '4.9',
      change: '+0.2 improvement',
      icon: Star,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      trend: 'up'
    },
    {
      label: 'Response Rate',
      value: '95%',
      change: 'Avg: 2 hours',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      trend: 'up'
    },
    {
      label: 'Helpful Votes',
      value: '342',
      change: 'Client satisfaction',
      icon: ThumbsUp,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      trend: 'up'
    }
  ];

  const achievements = [
    { icon: Crown, label: 'Top Rated Professional', color: 'from-yellow-500 to-orange-600', description: 'Ranked #1 this month' },
    { icon: Trophy, label: '100+ Five Star Reviews', color: 'from-blue-500 to-purple-600', description: 'Excellence milestone' },
    { icon: Medal, label: 'Client Favorite', color: 'from-green-500 to-emerald-600', description: 'Most recommended' },
    { icon: Flame, label: 'Trending Reviews', color: 'from-red-500 to-pink-600', description: 'Viral feedback' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-yellow-500 via-orange-600 to-red-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-top-4 duration-1000">
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
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-orange-300/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-red-300/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative p-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
              <Star className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300 fill-current" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 animate-in slide-in-from-left-4 duration-1000 text-white">My Reviews</h1>
              <p className="text-orange-100 text-lg animate-in slide-in-from-left-4 duration-1000 delay-200">Manage client feedback and testimonials</p>
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-300">
                  <Crown className="w-4 h-4 text-yellow-300" />
                  <span className="font-semibold text-white">Top Rated Professional</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-500">
                  <Zap className="w-4 h-4 text-green-300" />
                  <span className="font-semibold text-white">95% Response Rate</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button className="group flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-in slide-in-from-right-4 duration-1000 text-white">
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold text-lg">Respond to Reviews</span>
            </button>
            <div className="flex space-x-2">
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-200">
                <BarChart3 className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-300">
                <Activity className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-400">
                <Gift className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap gap-4 mb-8">
          {achievements.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000`}
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
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000`}
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
                <p className="text-sm font-bold text-orange-100 mb-1">{stat.label}</p>
                <p className="text-xs text-orange-200">{stat.change}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsHeader;