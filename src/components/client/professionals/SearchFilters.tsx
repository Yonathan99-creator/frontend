import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, DollarSign, Clock, Users, TrendingUp, Eye, Settings, Download, Share2, Bell, Sparkles, Zap, Target, Award, BarChart3, Activity } from 'lucide-react';

const SearchFilters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');
  const [availability, setAvailability] = useState('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const specialties = [
    { value: 'all', label: 'All Specialties', icon: Eye },
    { value: 'healthcare', label: 'Healthcare', icon: Award },
    { value: 'legal', label: 'Legal Services', icon: Target },
    { value: 'financial', label: 'Financial', icon: DollarSign },
    { value: 'therapy', label: 'Therapy & Counseling', icon: Users },
    { value: 'education', label: 'Education & Tutoring', icon: Sparkles },
    { value: 'business', label: 'Business Consulting', icon: TrendingUp }
  ];

  const priceRanges = [
    { value: 'all', label: 'Any Price' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' }
  ];

  const ratingOptions = [
    { value: 'all', label: 'Any Rating' },
    { value: '4.5', label: '4.5+ Stars' },
    { value: '4.0', label: '4.0+ Stars' },
    { value: '3.5', label: '3.5+ Stars' }
  ];

  const availabilityOptions = [
    { value: 'all', label: 'Any Time' },
    { value: 'today', label: 'Available Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  const quickFilters = [
    { label: 'Top Rated', value: 'top-rated', color: 'from-yellow-500 to-orange-600' },
    { label: 'Available Now', value: 'available-now', color: 'from-green-500 to-emerald-600' },
    { label: 'Most Popular', value: 'popular', color: 'from-blue-500 to-cyan-600' },
    { label: 'New Professionals', value: 'new', color: 'from-purple-500 to-pink-600' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Find Your Professional</h2>
                <p className="text-gray-600 dark:text-gray-400">Search and filter through thousands of verified professionals</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  showAdvancedFilters 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span className="font-medium">Advanced</span>
              </button>
              
              <div className="flex space-x-2">
                <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 hover:rotate-12">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 hover:rotate-12">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Search Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <div className="lg:col-span-2 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-4 h-4 text-white" />
              </div>
              <input
                type="text"
                placeholder="Search professionals, services, or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-inner hover:shadow-lg focus:scale-105 font-medium"
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <input
                type="text"
                placeholder="Location or ZIP code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-700 dark:to-green-900/20 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-inner hover:shadow-lg focus:scale-105 font-medium"
              />
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold">
              Search
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500 animate-pulse" />
              Quick Filters:
            </span>
            {quickFilters.map((filter, index) => (
              <button
                key={filter.value}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-4 duration-1000 bg-gradient-to-r ${filter.color} text-white shadow-lg hover:shadow-xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showAdvancedFilters && (
            <div className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-600/50 animate-in slide-in-from-top-2 duration-300">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                Advanced Filters
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Specialty</label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    {specialties.map((spec) => (
                      <option key={spec.value} value={spec.value}>
                        {spec.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  >
                    {ratingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Availability</label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  >
                    {availabilityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button className="px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 font-medium">
                  Reset Filters
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium">
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-gray-600/50">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Showing <span className="font-bold text-gray-900 dark:text-white">1,247</span> professionals with <span className="font-bold text-yellow-600 dark:text-yellow-400">4.8★</span> average rating
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-green-500 animate-pulse" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Updated: <span className="font-medium">Real-time</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;