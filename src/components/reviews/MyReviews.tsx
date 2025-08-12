import React, { useState } from 'react';
import { Star, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Heart, Eye, Bookmark, ThumbsUp, Gift, Rocket, Diamond, MessageCircle, Calendar } from 'lucide-react';
import ReviewsHeader from './ReviewsHeader';
import ReviewsFilters from './ReviewsFilters';
import ReviewsList from './ReviewsList';

const MyReviews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 animate-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
              <Star className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 fill-current" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                My Reviews
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Manage client feedback and build your reputation
              </p>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Crown, label: 'Top Rated Professional', color: 'from-yellow-500 to-orange-600', description: 'Ranked #1 this month' },
              { icon: Trophy, label: '100+ Five Star Reviews', color: 'from-blue-500 to-purple-600', description: 'Excellence milestone' },
              { icon: Medal, label: 'Client Favorite', color: 'from-green-500 to-emerald-600', description: 'Most recommended' },
              { icon: Flame, label: 'Trending Reviews', color: 'from-red-500 to-pink-600', description: 'Viral feedback' }
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

        {/* Main Header Component */}
        <ReviewsHeader />

        {/* Filters Component */}
        <ReviewsFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterRating={filterRating}
          setFilterRating={setFilterRating}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Reviews List Component */}
        <div className={`transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-600 ${isLoading ? 'opacity-50 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
          <ReviewsList
            searchTerm={searchTerm}
            filterRating={filterRating}
            sortBy={sortBy}
          />
        </div>

        {/* Quick Actions Panel */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-800 mt-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Actions</h2>
              <p className="text-gray-600 dark:text-gray-400">Manage reviews efficiently</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: 'Request Reviews',
                description: 'Ask for feedback',
                icon: MessageCircle,
                color: 'from-blue-500 to-cyan-600',
                bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
              },
              {
                title: 'Respond to All',
                description: 'Bulk responses',
                icon: Target,
                color: 'from-green-500 to-emerald-600',
                bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
              },
              {
                title: 'Analytics',
                description: 'Review insights',
                icon: Award,
                color: 'from-yellow-500 to-orange-600',
                bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
              },
              {
                title: 'Share Reviews',
                description: 'Social media',
                icon: Heart,
                color: 'from-purple-500 to-violet-600',
                bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20'
              },
              {
                title: 'Export Data',
                description: 'Download reports',
                icon: Eye,
                color: 'from-orange-500 to-red-600',
                bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
              },
              {
                title: 'Settings',
                description: 'Review preferences',
                icon: Zap,
                color: 'from-indigo-500 to-purple-600',
                bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
              }
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button 
                  key={action.title}
                  className={`bg-gradient-to-br ${action.bgColor} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border border-white/20 dark:border-gray-700/50 cursor-pointer active:scale-95`}
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
          <button className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 group animate-bounce">
            <Star className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300 fill-current" />
          </button>
        </div>

        {/* Background Decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-red-500/3 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 left-32 w-5 h-5 bg-red-400/20 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;