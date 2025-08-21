import React, { useState } from 'react';
import { Star, MapPin, Clock, Video, Phone, Calendar, Heart, Award, CheckCircle, Eye, MessageCircle, Share2, Filter, TrendingUp, Users, DollarSign, Zap, Crown, Trophy, Medal, Flame, Sparkles, Target, Gift, Rocket, Diamond } from 'lucide-react';

interface ProfessionalsListProps {
  onNavigate?: (page: string) => void;
}

const ProfessionalsList: React.FC<ProfessionalsListProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');
  const [favorites, setFavorites] = useState<number[]>([]);

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
      languages: ['English', 'Spanish'],
      education: 'Harvard Medical School',
      certifications: ['Board Certified Cardiologist', 'Advanced Cardiac Life Support']
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
      languages: ['English', 'Spanish', 'Portuguese'],
      education: 'Stanford Law School',
      certifications: ['State Bar Certified', 'Corporate Law Specialist']
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
      languages: ['English', 'French'],
      education: 'University of Chicago',
      certifications: ['Licensed Clinical Psychologist', 'Trauma-Informed Care']
    },
    {
      id: 4,
      name: 'Michael Thompson',
      specialty: 'Financial Advisor',
      rating: 4.7,
      reviews: 289,
      price: 180,
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      badge: 'Rising Star',
      availability: 'Available Today',
      responseTime: '< 1 hour',
      consultationType: ['Video', 'In-Person'],
      specializations: ['Investment Planning', 'Retirement', 'Tax Strategy'],
      experience: '10+ years',
      verified: true,
      description: 'Strategic financial advisor focused on long-term wealth building and retirement planning.',
      languages: ['English'],
      education: 'Wharton School',
      certifications: ['CFP Certified', 'Series 7 & 66 Licensed']
    },
    {
      id: 5,
      name: 'Dr. Lisa Chen',
      specialty: 'Dermatologist',
      rating: 4.8,
      reviews: 378,
      price: 175,
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      badge: 'Specialist',
      availability: 'Available This Week',
      responseTime: '< 45 min',
      consultationType: ['Video', 'In-Person'],
      specializations: ['Acne Treatment', 'Anti-Aging', 'Skin Cancer Screening'],
      experience: '14+ years',
      verified: true,
      description: 'Board-certified dermatologist specializing in medical and cosmetic dermatology.',
      languages: ['English', 'Mandarin'],
      education: 'UCSF School of Medicine',
      certifications: ['Board Certified Dermatologist', 'Mohs Surgery Certified']
    },
    {
      id: 6,
      name: 'Robert Johnson',
      specialty: 'Business Consultant',
      rating: 4.6,
      reviews: 234,
      price: 250,
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      badge: 'Growth Expert',
      availability: 'Available Now',
      responseTime: '< 20 min',
      consultationType: ['Video', 'Phone', 'In-Person'],
      specializations: ['Business Strategy', 'Digital Transformation', 'Operations'],
      experience: '20+ years',
      verified: true,
      description: 'Senior business consultant helping companies scale and optimize their operations.',
      languages: ['English'],
      education: 'MIT Sloan',
      certifications: ['PMP Certified', 'Six Sigma Black Belt']
    }
  ];

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Top Rated': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      'Expert': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      'Most Booked': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      'Rising Star': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      'Specialist': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      'Growth Expert': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('Now')) return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
    if (availability.includes('Today')) return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
    return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
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
        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Available Professionals</h2>
              <p className="text-gray-600 dark:text-gray-400">Browse and connect with verified experts</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="availability">Available Now</option>
              <option value="reviews">Most Reviews</option>
            </select>
            
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Professionals Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {professionals.map((professional, index) => (
            <div
              key={professional.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header with image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(professional.id)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`h-5 w-5 transition-all duration-300 ${
                      favorites.includes(professional.id)
                        ? 'text-red-500 fill-current'
                        : 'text-white hover:text-red-400'
                    }`}
                  />
                </button>

                {/* Availability */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getAvailabilityColor(professional.availability)}`}>
                      {professional.availability}
                    </span>
                    <div className="flex items-center space-x-1">
                      {professional.consultationType.map((type, typeIndex) => {
                        const Icon = type === 'Video' ? Video : type === 'Phone' ? Phone : MapPin;
                        return (
                          <div key={typeIndex} className="p-1 bg-white/20 backdrop-blur-sm rounded-full">
                            <Icon className="h-3 w-3 text-white" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Professional info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {professional.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {professional.specialty}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {professional.experience} • {professional.education}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {professional.description}
                </p>

                {/* Rating and reviews */}
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
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${professional.price}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">per session</p>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {professional.specializations.slice(0, 2).map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                    {professional.specializations.length > 2 && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                        +{professional.specializations.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Location and response time */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{professional.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Responds in {professional.responseTime}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => onNavigate && onNavigate('booking')}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                  >
                    <Calendar className="h-4 w-4 inline mr-2 group-hover/btn:animate-bounce" />
                    Book Now
                  </button>
                  <button 
                    onClick={() => onNavigate && onNavigate('profile')}
                    className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300 hover:scale-105">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
            Load More Professionals
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsList;