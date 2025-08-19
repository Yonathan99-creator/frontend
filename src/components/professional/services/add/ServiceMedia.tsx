import React, { useState } from 'react';
import { Camera, Upload, Image, Video, Trash2, Eye, Plus, Star, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Bookmark, Gift, Rocket, Diamond, CheckCircle, AlertCircle, X, Download, Share2, Edit, Palette, Brush, Scissors, Wand2, Shield } from 'lucide-react';
import { ServiceFormData } from './AddServicePage';

interface ServiceMediaProps {
  formData: ServiceFormData;
  updateFormData: (updates: Partial<ServiceFormData>) => void;
}

const ServiceMedia: React.FC<ServiceMediaProps> = ({ formData, updateFormData }) => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState(false);

  // Sample professional images for demonstration
  const sampleImages = [
    'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const mediaCategories = [
    {
      id: 'before-after',
      name: 'Before & After',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-600',
      description: 'Show transformation results'
    },
    {
      id: 'process',
      name: 'Process Photos',
      icon: Camera,
      color: 'from-green-500 to-emerald-600',
      description: 'Behind-the-scenes shots'
    },
    {
      id: 'final-result',
      name: 'Final Results',
      icon: Star,
      color: 'from-purple-500 to-pink-600',
      description: 'Finished work showcase'
    },
    {
      id: 'tools-setup',
      name: 'Tools & Setup',
      icon: Scissors,
      color: 'from-orange-500 to-red-600',
      description: 'Professional equipment'
    }
  ];

  const handleImageAdd = (imageUrl: string) => {
    if (!formData.images.includes(imageUrl)) {
      updateFormData({ images: [...formData.images, imageUrl] });
    }
  };

  const handleImageRemove = (imageUrl: string) => {
    updateFormData({ images: formData.images.filter(img => img !== imageUrl) });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    // In a real app, you would handle file upload here
    console.log('Files dropped:', e.dataTransfer.files);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
          <Camera className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Media & Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
            Showcase your work with stunning visuals
          </p>
        </div>
      </div>

      {/* Upload Area */}
      <div className="space-y-6">
        <div
          className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-500 hover:scale-105 group ${
            dragOver
              ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30'
              : 'border-gray-300 dark:border-gray-600 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 hover:border-purple-400 dark:hover:border-purple-500'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500 rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
              <Upload className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:scale-105 transition-transform duration-300">
              Upload Service Photos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Drag and drop your images here, or click to browse. High-quality photos increase bookings by 300%!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold">
                <Camera className="w-6 h-6" />
                <span>Choose Photos</span>
              </button>
              <button
                onClick={() => setShowGallery(true)}
                className="flex items-center space-x-2 px-8 py-4 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
              >
                <Image className="w-6 h-6" />
                <span>Browse Gallery</span>
              </button>
            </div>
          </div>
        </div>

        {/* Media Categories */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span>Photo Categories</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className={`group p-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br ${category.color.replace('500', '50').replace('600', '50')} dark:${category.color.replace('500', '900/20').replace('600', '900/20')} hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-in slide-in-from-bottom-4 duration-1000`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Images */}
      {formData.images.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <span>Selected Images ({formData.images.length})</span>
            </h3>
            <button
              onClick={() => updateFormData({ images: [] })}
              className="flex items-center space-x-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-105"
            >
              <Trash2 className="w-4 h-4" />
              <span className="text-sm font-medium">Clear All</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formData.images.map((image, index) => (
              <div
                key={index}
                className="relative group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`Service image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Image Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleImageRemove(image)}
                    className="p-2 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-all duration-300 hover:scale-110"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3">
                    <h4 className="font-bold text-sm mb-1">Image {index + 1}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        Professional
                      </span>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-xs">{Math.floor(Math.random() * 50) + 10}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photo Tips */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-yellow-200/50 dark:border-yellow-600/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Photography Tips</h3>
            <p className="text-gray-600 dark:text-gray-400">Make your services irresistible</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Camera,
              title: 'High Resolution',
              description: 'Use at least 1080p quality photos',
              color: 'text-blue-500'
            },
            {
              icon: Sparkles,
              title: 'Good Lighting',
              description: 'Natural light works best for hair photos',
              color: 'text-yellow-500'
            },
            {
              icon: Target,
              title: 'Multiple Angles',
              description: 'Show front, side, and back views',
              color: 'text-green-500'
            },
            {
              icon: Crown,
              title: 'Before & After',
              description: 'Transformation photos are powerful',
              color: 'text-purple-500'
            },
            {
              icon: Heart,
              title: 'Client Consent',
              description: 'Always get permission to use photos',
              color: 'text-red-500'
            },
            {
              icon: Star,
              title: 'Professional Look',
              description: 'Clean background and styling',
              color: 'text-orange-500'
            }
          ].map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white/60 dark:bg-gray-700/60 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-600/80 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className={`w-5 h-5 ${tip.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{tip.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{tip.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sample Gallery */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Gift className="w-6 h-6 text-green-500" />
            <span>Professional Sample Gallery</span>
          </h3>
          <button
            onClick={() => setShowGallery(!showGallery)}
            className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-105"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">{showGallery ? 'Hide' : 'Show'} Gallery</span>
          </button>
        </div>

        {showGallery && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-in slide-in-from-top-2 duration-500">
            {sampleImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <img
                    src={image}
                    alt={`Sample ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Add Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleImageAdd(image)}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        formData.images.includes(image)
                          ? 'bg-green-500 text-white'
                          : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                      }`}
                    >
                      {formData.images.includes(image) ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Plus className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Media Guidelines */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">Media Guidelines</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Image Quality', valid: true, icon: Star, description: 'High resolution recommended' },
            { label: 'File Format', valid: true, icon: Image, description: 'JPG, PNG, WebP supported' },
            { label: 'File Size', valid: true, icon: Download, description: 'Max 5MB per image' },
            { label: 'Content Policy', valid: true, icon: Shield, description: 'Professional content only' }
          ].map((guideline, index) => {
            const Icon = guideline.icon;
            return (
              <div
                key={guideline.label}
                className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 group"
              >
                <Icon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{guideline.label}</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{guideline.description}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-500"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 text-white">
              <h4 className="font-bold mb-2">Professional Service Photo</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">High quality showcase image</span>
                <div className="flex space-x-2">
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceMedia;