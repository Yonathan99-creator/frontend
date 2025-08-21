import React, { useState } from 'react';
import { Clock, DollarSign, Star, CheckCircle, Video, Phone, MapPin, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Eye, Bookmark, Gift, Rocket, Diamond, Calendar, Users } from 'lucide-react';

const ServiceSelection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      name: 'Initial Consultation',
      description: 'Comprehensive first-time consultation with detailed assessment and treatment plan.',
      duration: 60,
      price: 200,
      type: 'Video Call',
      popular: true,
      features: ['Detailed assessment', 'Treatment plan', 'Follow-up recommendations', 'Written summary'],
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      name: 'Follow-up Session',
      description: 'Regular follow-up session to monitor progress and adjust treatment as needed.',
      duration: 30,
      price: 150,
      type: 'Video Call',
      popular: false,
      features: ['Progress review', 'Treatment adjustment', 'Q&A session', 'Next steps'],
      icon: Calendar,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      name: 'Emergency Consultation',
      description: 'Urgent consultation for immediate concerns and time-sensitive issues.',
      duration: 45,
      price: 250,
      type: 'Video Call',
      popular: false,
      features: ['Immediate response', 'Urgent assessment', 'Emergency guidance', 'Priority scheduling'],
      icon: Zap,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 4,
      name: 'In-Person Visit',
      description: 'Face-to-face consultation at the professional\'s office for comprehensive care.',
      duration: 90,
      price: 300,
      type: 'In-Person',
      popular: true,
      features: ['Physical examination', 'Comprehensive assessment', 'Hands-on treatment', 'Detailed consultation'],
      icon: MapPin,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Call':
        return Video;
      case 'Phone Call':
        return Phone;
      case 'In-Person':
        return MapPin;
      default:
        return Video;
    }
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    }
    return `${mins}m`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center space-x-4 justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Select Service Type</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Choose the type of consultation that best fits your needs</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const TypeIcon = getTypeIcon(service.type);
            const isSelected = selectedService === service.id;
            
            return (
              <div
                key={service.id}
                className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000 ${
                  isSelected
                    ? 'border-green-500 ring-2 ring-green-200 dark:ring-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                            {service.name}
                          </h3>
                          {service.popular && (
                            <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <TypeIcon className="w-4 h-4" />
                          <span>{service.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    {isSelected && (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">What's included:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration and Price */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="font-bold text-gray-900 dark:text-white">{formatDuration(service.duration)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Price</p>
                        <p className="font-bold text-gray-900 dark:text-white">${service.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                      isSelected
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select Service'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        {selectedService && (
          <div className="text-center mt-12 animate-in slide-in-from-bottom-4 duration-500">
            <button className="inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg">
              <CheckCircle className="w-6 h-6" />
              <span>Continue to Date & Time</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSelection;