import React, { useState } from 'react';
import { DollarSign, Clock, Users, TrendingUp, Calculator, Percent, Gift, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Award, Heart, Star, Eye, Bookmark, Rocket, Diamond, AlertCircle, CheckCircle, Info, BarChart3, Activity } from 'lucide-react';
import { ServiceFormData } from './AddServicePage';

interface ServicePricingProps {
  formData: ServiceFormData;
  updateFormData: (updates: Partial<ServiceFormData>) => void;
}

const ServicePricing: React.FC<ServicePricingProps> = ({ formData, updateFormData }) => {
  const [showPricingTips, setShowPricingTips] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const pricingTiers = [
    {
      name: 'Budget Friendly',
      range: '$20 - $50',
      description: 'Competitive pricing for basic services',
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      name: 'Standard',
      range: '$50 - $100',
      description: 'Professional quality at fair prices',
      icon: Star,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      name: 'Premium',
      range: '$100 - $200',
      description: 'High-end services with luxury experience',
      icon: Crown,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      name: 'Luxury',
      range: '$200+',
      description: 'Exclusive premium services',
      icon: Diamond,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    }
  ];

  const durationOptions = [
    { value: 15, label: '15 min', description: 'Quick touch-up', icon: Zap },
    { value: 30, label: '30 min', description: 'Express service', icon: Clock },
    { value: 45, label: '45 min', description: 'Standard service', icon: Target },
    { value: 60, label: '1 hour', description: 'Full service', icon: Award },
    { value: 90, label: '1.5 hours', description: 'Extended service', icon: Trophy },
    { value: 120, label: '2 hours', description: 'Comprehensive service', icon: Medal },
    { value: 180, label: '3 hours', description: 'Premium experience', icon: Crown },
    { value: 240, label: '4+ hours', description: 'Luxury package', icon: Diamond }
  ];

  const calculateDiscount = () => {
    if (formData.originalPrice && formData.price && formData.originalPrice > formData.price) {
      return Math.round(((formData.originalPrice - formData.price) / formData.originalPrice) * 100);
    }
    return 0;
  };

  const getPricingTier = (price: number) => {
    if (price <= 50) return pricingTiers[0];
    if (price <= 100) return pricingTiers[1];
    if (price <= 200) return pricingTiers[2];
    return pricingTiers[3];
  };

  const currentTier = getPricingTier(formData.price);
  const discount = calculateDiscount();

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
          <DollarSign className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Pricing & Duration
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            Set competitive pricing and service duration
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Price Input */}
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-lg font-bold text-gray-900 dark:text-white">
              Service Price *
            </label>
            <div className="relative group">
              <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                focusedField === 'price' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <input
                type="number"
                value={formData.price || ''}
                onChange={(e) => updateFormData({ price: parseFloat(e.target.value) || 0 })}
                onFocus={() => setFocusedField('price')}
                onBlur={() => setFocusedField(null)}
                placeholder="0"
                min="0"
                step="0.01"
                className="w-full pl-16 pr-6 py-4 bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-700 dark:to-green-900/20 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-inner hover:shadow-lg focus:scale-105 font-bold text-2xl"
              />
            </div>
            
            {/* Current Tier Display */}
            {formData.price > 0 && (
              <div className={`bg-gradient-to-br ${currentTier.bgColor} rounded-2xl p-4 border border-gray-200/50 dark:border-gray-600/50 animate-in slide-in-from-bottom-4 duration-500`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentTier.color} flex items-center justify-center shadow-lg`}>
                    <currentTier.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{currentTier.name} Tier</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{currentTier.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Original Price (Optional) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <label className="block text-lg font-bold text-gray-900 dark:text-white">
                Original Price
              </label>
              <div className="flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                <Percent className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">For discounts</span>
              </div>
            </div>
            <div className="relative group">
              <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                focusedField === 'originalPrice' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 animate-pulse' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                <Percent className="w-5 h-5 text-white" />
              </div>
              <input
                type="number"
                value={formData.originalPrice || ''}
                onChange={(e) => updateFormData({ originalPrice: parseFloat(e.target.value) || undefined })}
                onFocus={() => setFocusedField('originalPrice')}
                onBlur={() => setFocusedField(null)}
                placeholder="Optional - for showing discounts"
                min="0"
                step="0.01"
                className="w-full pl-16 pr-6 py-4 bg-gradient-to-r from-gray-50 to-orange-50 dark:from-gray-700 dark:to-orange-900/20 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-inner hover:shadow-lg focus:scale-105 font-bold text-xl"
              />
            </div>
            
            {discount > 0 && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-4 border border-red-200/50 dark:border-red-600/50 animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800 dark:text-red-300">
                      {discount}% Discount Applied!
                    </h4>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Clients save ${(formData.originalPrice || 0) - formData.price}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Tiers Guide */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pricing Guide</h3>
            <button
              onClick={() => setShowPricingTips(!showPricingTips)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105"
            >
              <Info className="w-4 h-4" />
              <span className="text-sm font-medium">Tips</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              const isCurrentTier = formData.price > 0 && tier === currentTier;
              
              return (
                <div
                  key={tier.name}
                  className={`group p-6 rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-in slide-in-from-bottom-4 duration-1000 ${
                    isCurrentTier
                      ? `border-transparent bg-gradient-to-br ${tier.color} text-white shadow-2xl animate-pulse`
                      : `border-gray-200 dark:border-gray-700 bg-gradient-to-br ${tier.bgColor} hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl`
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => {
                    const midPrice = tier.range.includes('+') ? 250 : 
                      tier.range.includes('20') ? 35 :
                      tier.range.includes('50') ? 75 :
                      tier.range.includes('100') ? 150 : 35;
                    updateFormData({ price: midPrice });
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 ${
                      isCurrentTier 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : `bg-gradient-to-r ${tier.color}`
                    }`}>
                      <Icon className={`w-8 h-8 ${isCurrentTier ? 'text-white' : 'text-white'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className={`text-lg font-bold ${isCurrentTier ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                          {tier.name}
                        </h4>
                        {isCurrentTier && (
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-5 h-5 text-green-300 animate-pulse" />
                            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                          </div>
                        )}
                      </div>
                      <p className={`text-xl font-bold mb-2 ${isCurrentTier ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {tier.range}
                      </p>
                      <p className={`text-sm ${isCurrentTier ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                        {tier.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Tips */}
          {showPricingTips && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-600/50 animate-in slide-in-from-top-2 duration-300">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Pricing Strategy Tips
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Market Research',
                    description: 'Research competitor pricing in your area',
                    color: 'text-blue-500'
                  },
                  {
                    icon: Users,
                    title: 'Value Proposition',
                    description: 'Price based on the value you provide',
                    color: 'text-green-500'
                  },
                  {
                    icon: Calculator,
                    title: 'Cost Analysis',
                    description: 'Factor in materials, time, and overhead',
                    color: 'text-purple-500'
                  },
                  {
                    icon: Award,
                    title: 'Premium Positioning',
                    description: 'Higher prices can signal quality',
                    color: 'text-orange-500'
                  }
                ].map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white/60 dark:bg-gray-700/60 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-600/80 transition-all duration-300 hover:scale-105 group"
                    >
                      <Icon className={`w-5 h-5 ${tip.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{tip.title}</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{tip.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Duration Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <label className="block text-lg font-bold text-gray-900 dark:text-white">
            Service Duration *
          </label>
          <div className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              {formData.duration} minutes
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {durationOptions.map((option, index) => {
            const Icon = option.icon;
            const isSelected = formData.duration === option.value;
            
            return (
              <button
                key={option.value}
                onClick={() => updateFormData({ duration: option.value })}
                className={`group p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 text-center animate-in slide-in-from-bottom-4 duration-1000 ${
                  isSelected
                    ? 'border-purple-500 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-500'
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {option.label}
                </div>
                <div className={`text-xs ${isSelected ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  {option.description}
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom Duration */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-600/50">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            Custom Duration
          </h4>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="number"
                value={formData.duration}
                onChange={(e) => updateFormData({ duration: parseInt(e.target.value) || 0 })}
                min="5"
                max="480"
                step="5"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white font-bold text-center"
              />
            </div>
            <span className="text-gray-600 dark:text-gray-400 font-medium">minutes</span>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pricing Summary</h3>
            <p className="text-gray-600 dark:text-gray-400">Review your service pricing details</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Final Price</h4>
                <p className="text-sm text-green-600 dark:text-green-400">What clients pay</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
              ${formData.price || 0}
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Duration</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">Service time</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
              {formData.duration}m
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Rate/Hour</h4>
                <p className="text-sm text-orange-600 dark:text-orange-400">Hourly rate</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
              ${formData.duration > 0 ? Math.round((formData.price / formData.duration) * 60) : 0}
            </p>
          </div>
        </div>

        {/* Discount Display */}
        {discount > 0 && (
          <div className="mt-6 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-2xl p-6 border border-red-200/50 dark:border-red-600/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-800 dark:text-red-300">Special Offer</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">Limited time discount</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-red-800 dark:text-red-300">
                  {discount}% OFF
                </div>
                <div className="text-sm text-red-600 dark:text-red-400">
                  Save ${(formData.originalPrice || 0) - formData.price}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Validation Summary */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">Pricing Validation</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Price Set', valid: formData.price > 0, icon: DollarSign },
            { label: 'Duration Set', valid: formData.duration > 0, icon: Clock }
          ].map((validation, index) => {
            const Icon = validation.icon;
            return (
              <div
                key={validation.label}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                  validation.valid
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${validation.valid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
                <span className="text-sm font-medium">{validation.label}</span>
                {validation.valid ? (
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicePricing;