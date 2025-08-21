import React, { useState } from 'react';
import { Search, Star, MapPin, Clock, Video, Phone, Calendar, CheckCircle, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Eye, Bookmark, Gift, Rocket, Diamond, Filter, Users } from 'lucide-react';

interface ProfessionalSelectionProps {
  onNavigate?: (page: string) => void;
}

const ProfessionalSelection: React.FC<ProfessionalSelectionProps> = ({ onNavigate }) => {
  const [selectedProfessional, setSelectedProfessional] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('all');

  const professionals = [
    {
      id: 1,
      name: 'Dr. Emily Davis',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 456,
      price: 200,
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      badge: 'Top Rated',
      availability: 'Available Today',
      responseTime: '< 15 min',
      consultationType: ['Video', 'In-Person'],
      specializations: ['Heart Surgery', 'Preventive Cardiology', 'Cardiac Imaging'],
      experience: '18+ years',
      verified: true,
      description: 'Leading cardiologist with expertise in minimally invasive procedures and preventive care.',
      nextAvailable: 'Today 2:00 PM'
    },
    {
      id: 2,
      name: 'James Rodriguez',
      specialty: 'Corporate Lawyer',
      rating: 4.8,
      reviews: 342,
      price: 300,
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      badge: 'Expert',
      availability: 'Available Now',
      responseTime: '< 10 min',
      consultationType: ['Video', 'Phone', 'In-Person'],
      specializations: ['Contract Law', 'Business Formation', 'Mergers & Acquisitions'],
      experience: '15+ years',
      verified: true,
      description: 'Experienced corporate attorney specializing in business law and startup legal services.',
      nextAvailable: 'Available Now'
    },
    {
      id: 3,
      name: 'Dr. Sarah Williams',
      specialty: 'Clinical Psychologist',
      rating: 4.9,
      reviews: 523,
      price: 150,
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      badge: 'Most Booked',
      availability: 'Available Tomorrow',
      responseTime: '< 30 min',
      consultationType: ['Video', 'Phone'],
      specializations: ['Anxiety Disorders', 'Depression', 'Trauma Therapy'],
      experience: '12+ years',
      verified: true,
      description: 'Compassionate therapist helping clients overcome anxiety, depression, and trauma.',
      nextAvailable: 'Tomorrow 10:00 AM'
    }
  ];

  const specialties = [
    { value: 'all', label: 'All Specialties' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'legal', label: 'Legal Services' },
    { value: 'therapy', label: 'Therapy & Counseling' },
    { value: 'financial', label: 'Financial Services' },
    { value: 'business', label: 'Business Consulting' }
  ];

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Top Rated': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      'Expert': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Most Booked': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('Now')) return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
    if (availability.includes('Today')) return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
    return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
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

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center space-x-4 justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Choose Your Professional</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Select from our verified experts to start your booking</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search professionals by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <select
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
              className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              {specialties.map((specialty) => (
                <option key={specialty.value} value={specialty.value}>
                  {specialty.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <div
              key={professional.id}
              className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000 ${
                selectedProfessional === professional.id ? 'border-cyan-500 ring-2 ring-cyan-200 dark:ring-cyan-800' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProfessional(professional.id)}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(professional.badge)}`}>
                    {professional.badge}
                  </span>
                  {professional.verified && (
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Availability */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getAvailabilityColor(professional.availability)}`}>
                    {professional.availability}
                  </span>
                </div>

                {/* Selection Indicator */}
                {selectedProfessional === professional.id && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Professional Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {professional.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {professional.specialty}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {professional.experience} • {professional.location}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {professional.description}
                </p>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {renderStars(professional.rating)}
                    <span className="font-medium text-gray-900 dark:text-white">
                      {professional.rating}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({professional.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${professional.price}
                  </span>
                </div>

                {/* Consultation Types */}
                <div className="flex items-center space-x-3 mb-4">
                  {professional.consultationType.map((type, typeIndex) => {
                    const Icon = type === 'Video' ? Video : type === 'Phone' ? Phone : MapPin;
                    return (
                      <div key={typeIndex} className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        <Icon className="h-3 w-3" />
                        <span>{type}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Next Available */}
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-3 mb-4 border border-cyan-200/50 dark:border-cyan-700/50">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-800 dark:text-cyan-300">
                      Next available: {professional.nextAvailable}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedProfessional(professional.id)}
                  className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                    selectedProfessional === professional.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-cyan-100 hover:to-blue-100 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20'
                  }`}
                >
                  {selectedProfessional === professional.id ? 'Selected' : 'Select Professional'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        {selectedProfessional && (
          <div className="text-center mt-12 animate-in slide-in-from-bottom-4 duration-500">
            <button className="inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg">
              <CheckCircle className="w-6 h-6" />
              <span>Continue to Service Selection</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalSelection;