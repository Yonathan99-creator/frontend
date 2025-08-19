import React, { useState } from 'react';
import { Scissors, Palette, Brush, Wand2, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Heart, Star, Eye, Bookmark, Gift, Rocket, Diamond, Users, Clock, MapPin, Tag, FileText, Image, Camera, Video, Mic } from 'lucide-react';
import { ServiceFormData } from './AddServicePage';

interface ServiceBasicInfoProps {
  formData: ServiceFormData;
  updateFormData: (updates: Partial<ServiceFormData>) => void;
}

const ServiceBasicInfo: React.FC<ServiceBasicInfoProps> = ({ formData, updateFormData }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const categories = [
    {
      id: 'haircut',
      name: 'Hair Cut',
      icon: Scissors,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      description: 'Professional hair cutting services'
    },
    {
      id: 'color',
      name: 'Hair Color',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      description: 'Color treatments and highlights'
    },
    {
      id: 'styling',
      name: 'Hair Styling',
      icon: Brush,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      description: 'Styling and special occasions'
    },
    {
      id: 'treatment',
      name: 'Hair Treatment',
      icon: Wand2,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      description: 'Therapeutic and conditioning treatments'
    },
    {
      id: 'special',
      name: 'Special Events',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      description: 'Weddings, parties, and special occasions'
    },
    {
      id: 'grooming',
      name: 'Men\'s Grooming',
      icon: Target,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      description: 'Beard trimming and men\'s styling'
    }
  ];

  const popularTags = [
    'Popular', 'Premium', 'Quick Service', 'Relaxing', 'Transformation',
    'Consultation', 'Trending', 'Signature', 'Luxury', 'Express',
    'Bridal', 'Color Expert', 'Precision Cut', 'Natural Look', 'Modern Style'
  ];

  const handleTagToggle = (tag: string) => {
    const currentTags = formData.tags || [];
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    updateFormData({ tags: updatedTags });
  };

  const addCustomTag = (customTag: string) => {
    if (customTag.trim() && !formData.tags.includes(customTag.trim())) {
      updateFormData({ tags: [...formData.tags, customTag.trim()] });
    }
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
          <Scissors className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Basic Information
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            Tell us about your service and what makes it special
          </p>
        </div>
      </div>

      {/* Service Name */}
      <div className="space-y-4">
        <label className="block text-lg font-bold text-gray-900 dark:text-white">
          Service Name *
        </label>
        <div className="relative group">
          <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            focusedField === 'name' 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 animate-spin' 
              : 'bg-gray-300 dark:bg-gray-600'
          }`}>
            <Star className="w-4 h-4 text-white" />
          </div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            placeholder="e.g., Premium Hair Cut & Style"
            className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-inner hover:shadow-lg focus:scale-105 font-medium text-lg"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span>Choose a descriptive name that highlights your expertise</span>
        </p>
      </div>

      {/* Service Description */}
      <div className="space-y-4">
        <label className="block text-lg font-bold text-gray-900 dark:text-white">
          Service Description *
        </label>
        <div className="relative group">
          <div className={`absolute left-4 top-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            focusedField === 'description' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse' 
              : 'bg-gray-300 dark:bg-gray-600'
          }`}>
            <FileText className="w-4 h-4 text-white" />
          </div>
          <textarea
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
            onFocus={() => setFocusedField('description')}
            onBlur={() => setFocusedField(null)}
            placeholder="Describe your service in detail. What makes it unique? What can clients expect?"
            rows={5}
            className="w-full pl-14 pr-6 py-4 bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-700 dark:to-green-900/20 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-inner hover:shadow-lg focus:scale-105 font-medium resize-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
            <Award className="w-4 h-4 text-green-500" />
            <span>Detailed descriptions increase booking rates by 40%</span>
          </p>
          <span className={`text-sm font-medium ${
            formData.description.length > 100 ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {formData.description.length}/500
          </span>
        </div>
      </div>

      {/* Category Selection */}
      <div className="space-y-6">
        <label className="block text-lg font-bold text-gray-900 dark:text-white">
          Service Category *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isSelected = formData.category === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => updateFormData({ category: category.id })}
                className={`group p-6 rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-left animate-in slide-in-from-bottom-4 duration-1000 ${
                  isSelected
                    ? `border-transparent bg-gradient-to-br ${category.color} text-white shadow-2xl`
                    : `border-gray-200 dark:border-gray-700 bg-gradient-to-br ${category.bgColor} hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl`
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 ${
                    isSelected 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : `bg-gradient-to-r ${category.color}`
                  }`}>
                    <Icon className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-white'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className={`text-xl font-bold ${isSelected ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                        {category.name}
                      </h3>
                      {isSelected && (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-5 h-5 text-green-300 animate-pulse" />
                          <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                        </div>
                      )}
                    </div>
                    <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tags Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <label className="block text-lg font-bold text-gray-900 dark:text-white">
            Service Tags
          </label>
          <div className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
            <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Optional</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400">
          Add tags to help clients find your service more easily. Select from popular tags or create your own.
        </p>

        {/* Popular Tags */}
        <div className="space-y-4">
          <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
            <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
            <span>Popular Tags</span>
          </h4>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag, index) => {
              const isSelected = formData.tags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-4 duration-1000 ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tag}
                  {isSelected && <CheckCircle className="w-4 h-4 ml-2 inline" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Tag Input */}
        <div className="space-y-3">
          <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
            <Plus className="w-5 h-5 text-blue-500" />
            <span>Add Custom Tag</span>
          </h4>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Enter custom tag..."
              className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const target = e.target as HTMLInputElement;
                  addCustomTag(target.value);
                  target.value = '';
                }
              }}
            />
            <button
              onClick={(e) => {
                const input = (e.target as HTMLElement).parentElement?.querySelector('input') as HTMLInputElement;
                if (input) {
                  addCustomTag(input.value);
                  input.value = '';
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
            >
              Add Tag
            </button>
          </div>
        </div>

        {/* Selected Tags */}
        {formData.tags.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span>Selected Tags ({formData.tags.length})</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <div
                  key={tag}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-xl border border-purple-200 dark:border-purple-700 animate-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium">{tag}</span>
                  <button
                    onClick={() => handleTagToggle(tag)}
                    className="p-1 hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Service Features */}
      <div className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Service Features</h3>
            <p className="text-gray-600 dark:text-gray-400">Highlight what makes your service special</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 'isPremium',
              title: 'Premium Service',
              description: 'Mark as a premium offering',
              icon: Crown,
              color: 'from-yellow-500 to-orange-600',
              bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
            },
            {
              id: 'isPopular',
              title: 'Popular Choice',
              description: 'Highlight as a popular service',
              icon: Flame,
              color: 'from-red-500 to-pink-600',
              bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
            },
            {
              id: 'isActive',
              title: 'Active Service',
              description: 'Available for booking',
              icon: CheckCircle,
              color: 'from-green-500 to-emerald-600',
              bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            const isEnabled = formData[feature.id as keyof ServiceFormData] as boolean;
            
            return (
              <button
                key={feature.id}
                onClick={() => updateFormData({ [feature.id]: !isEnabled })}
                className={`group p-6 rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-left animate-in slide-in-from-bottom-4 duration-1000 ${
                  isEnabled
                    ? `border-transparent bg-gradient-to-br ${feature.color} text-white shadow-2xl`
                    : `border-gray-200 dark:border-gray-700 bg-gradient-to-br ${feature.bgColor} hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl`
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 ${
                    isEnabled 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : `bg-gradient-to-r ${feature.color}`
                  }`}>
                    <Icon className={`w-8 h-8 ${isEnabled ? 'text-white' : 'text-white'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className={`text-lg font-bold ${isEnabled ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                        {feature.title}
                      </h4>
                      {isEnabled && (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-5 h-5 text-green-300 animate-pulse" />
                        </div>
                      )}
                    </div>
                    <p className={`text-sm ${isEnabled ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Validation Summary */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">Step Validation</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Service Name', valid: formData.name.trim() !== '', icon: Star },
            { label: 'Description', valid: formData.description.trim() !== '', icon: FileText },
            { label: 'Category', valid: formData.category !== '', icon: Tag }
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

export default ServiceBasicInfo;