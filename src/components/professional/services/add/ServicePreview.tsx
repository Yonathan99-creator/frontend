import React from 'react';
import { Star, Clock, DollarSign, MapPin, Users, Tag, CheckCircle, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Award, Heart, Eye, Bookmark, Gift, Rocket, Diamond, Calendar, Phone, Mail, MessageCircle, Share2 } from 'lucide-react';
import { ServiceFormData } from './AddServicePage';

interface ServicePreviewProps {
  formData: ServiceFormData;
}

const ServicePreview: React.FC<ServicePreviewProps> = ({ formData }) => {
  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    }
    return `${mins}m`;
  };

  const calculateDiscount = () => {
    if (formData.originalPrice && formData.price && formData.originalPrice > formData.price) {
      return Math.round(((formData.originalPrice - formData.price) / formData.originalPrice) * 100);
    }
    return 0;
  };

  const discount = calculateDiscount();

  return (
    <div className="space-y-6">
      {/* Service Card Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
        {/* Service Image */}
        <div className="relative h-48 overflow-hidden">
          {formData.images.length > 0 ? (
            <img
              src={formData.images[0]}
              alt={formData.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
              <div className="text-center">
                <Eye className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-400">No image selected</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {formData.isPremium && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </span>
            )}
            {formData.isPopular && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg animate-pulse">
                <Flame className="w-3 h-3 mr-1" />
                Popular
              </span>
            )}
            {!formData.isActive && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-500 text-white shadow-lg">
                Inactive
              </span>
            )}
          </div>

          {/* Price */}
          <div className="absolute top-4 right-4 text-right">
            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
              ${formData.price || 0}
            </div>
            {discount > 0 && (
              <div className="text-lg text-white/70 line-through">
                ${formData.originalPrice}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Service Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {formData.name || 'Service Name'}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                {renderStars(5)}
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  5.0 (New Service)
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {formData.description || 'Service description will appear here...'}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-blue-600 dark:text-blue-400">Duration</p>
                <p className="font-bold text-gray-900 dark:text-white">{formatDuration(formData.duration)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-green-600 dark:text-green-400">Capacity</p>
                <p className="font-bold text-gray-900 dark:text-white">{formData.maxClients} client{formData.maxClients !== 1 ? 's' : ''}</p>
              </div>
            </div>
          </div>

          {/* Location */}
          {formData.location && (
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl mb-4">
              <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {formData.location.replace('-', ' ')}
              </span>
            </div>
          )}

          {/* Tags */}
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {formData.tags.length > 4 && (
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                  +{formData.tags.length - 4} more
                </span>
              )}
            </div>
          )}

          {/* Discount Display */}
          {discount > 0 && (
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-4 mb-4 border border-red-200/50 dark:border-red-600/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-red-800 dark:text-red-300">
                    {discount}% Discount!
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Save ${(formData.originalPrice || 0) - formData.price}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-2xl font-bold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>
            <button className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110">
              <Eye className="w-5 h-5" />
            </button>
            <button className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      {(formData.requirements.length > 0 || formData.benefits.length > 0) && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Service Details</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formData.requirements.length > 0 && (
              <div>
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-orange-500" />
                  Requirements
                </h5>
                <div className="space-y-2">
                  {formData.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {formData.benefits.length > 0 && (
              <div>
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  Benefits
                </h5>
                <div className="space-y-2">
                  {formData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Policies */}
      {(formData.cancellationPolicy || formData.refundPolicy) && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Policies</h4>
          
          <div className="space-y-4">
            {formData.cancellationPolicy && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200/50 dark:border-red-600/50">
                <h5 className="font-bold text-red-800 dark:text-red-300 mb-2">Cancellation Policy</h5>
                <p className="text-sm text-red-700 dark:text-red-200">{formData.cancellationPolicy}</p>
              </div>
            )}
            
            {formData.refundPolicy && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200/50 dark:border-green-600/50">
                <h5 className="font-bold text-green-800 dark:text-green-300 mb-2">Refund Policy</h5>
                <p className="text-sm text-green-700 dark:text-green-200">{formData.refundPolicy}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Special Instructions */}
      {formData.specialInstructions && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
            Special Instructions
          </h4>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200/50 dark:border-purple-600/50">
            <p className="text-sm text-purple-800 dark:text-purple-200">{formData.specialInstructions}</p>
          </div>
        </div>
      )}

      {/* Gallery Preview */}
      {formData.images.length > 1 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            Gallery ({formData.images.length} photos)
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {formData.images.slice(1, 7).map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
            {formData.images.length > 7 && (
              <div className="aspect-square rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                  +{formData.images.length - 7}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePreview;