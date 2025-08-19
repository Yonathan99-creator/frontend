import React from 'react';
import { ArrowLeft, Plus, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Heart, Star, Eye, Bookmark, Gift, Rocket, Diamond, Scissors, Palette, Brush, Wand2 } from 'lucide-react';

interface AddServiceHeaderProps {
  onBack: () => void;
}

const AddServiceHeader: React.FC<AddServiceHeaderProps> = ({ onBack }) => {
  const achievements = [
    { icon: Crown, label: 'Service Creator', color: 'from-yellow-500 to-orange-600', description: 'Build your offerings' },
    { icon: Trophy, label: 'Business Builder', color: 'from-blue-500 to-purple-600', description: 'Expand your reach' },
    { icon: Medal, label: 'Quality Expert', color: 'from-green-500 to-emerald-600', description: 'Premium services' },
    { icon: Flame, label: 'Innovation Leader', color: 'from-red-500 to-pink-600', description: 'Unique offerings' }
  ];

  const serviceIcons = [Scissors, Palette, Brush, Wand2];

  return (
    <div className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-top-4 duration-1000 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Service Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {serviceIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center animate-bounce"
            style={{
              top: `${20 + index * 15}%`,
              right: `${10 + index * 8}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            <Icon className="w-6 h-6 text-white/60" />
          </div>
        ))}
      </div>

      <div className="relative p-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
              <Plus className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 animate-in slide-in-from-left-4 duration-1000 text-white">
                Create New Service
              </h1>
              <p className="text-purple-100 text-lg animate-in slide-in-from-left-4 duration-1000 delay-200">
                Build your perfect service offering and attract more clients
              </p>
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-300">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="font-semibold text-white">Service Builder</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-500">
                  <Zap className="w-4 h-4 text-green-300" />
                  <span className="font-semibold text-white">Step-by-Step Guide</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button
              onClick={onBack}
              className="group flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-in slide-in-from-right-4 duration-1000 text-white"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-bold text-lg">Back to Services</span>
            </button>
            <div className="flex space-x-2">
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-200">
                <Eye className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-300">
                <Bookmark className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-400">
                <Gift className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap gap-4">
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
      </div>
    </div>
  );
};

export default AddServiceHeader;