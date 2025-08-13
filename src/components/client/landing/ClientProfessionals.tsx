import React, { useState } from 'react';
import { Star, MapPin, Clock, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Eye, Bookmark, ThumbsUp, Gift, Rocket, Diamond, CheckCircle, Users, Calendar, Phone, Mail, MessageCircle, Share2 } from 'lucide-react';

const ClientProfessionals: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', color: 'from-gray-500 to-gray-600' },
    { id: 'beauty', name: 'Belleza', color: 'from-pink-500 to-rose-600' },
    { id: 'wellness', name: 'Bienestar', color: 'from-green-500 to-emerald-600' },
    { id: 'fitness', name: 'Fitness', color: 'from-blue-500 to-cyan-600' },
    { id: 'health', name: 'Salud', color: 'from-purple-500 to-violet-600' }
  ];

  const professionals = [
    {
      id: 1,
      name: 'María González',
      specialty: 'Estilista Profesional',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      coverImage: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 127,
      experience: '8 años',
      location: 'Polanco, CDMX',
      distance: '2.3 km',
      category: 'beauty',
      services: ['Corte', 'Color', 'Peinado'],
      priceRange: '$40-120',
      isVerified: true,
      isTopRated: true,
      responseTime: '2 horas',
      completedServices: 1247
    },
    {
      id: 2,
      name: 'Dr. Carlos Mendoza',
      specialty: 'Masajista Terapéutico',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      coverImage: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 89,
      experience: '12 años',
      location: 'Roma Norte, CDMX',
      distance: '3.1 km',
      category: 'wellness',
      services: ['Masaje', 'Terapia', 'Relajación'],
      priceRange: '$60-150',
      isVerified: true,
      isTopRated: true,
      responseTime: '1 hora',
      completedServices: 892
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      specialty: 'Especialista en Uñas',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      coverImage: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviews: 156,
      experience: '6 años',
      location: 'Condesa, CDMX',
      distance: '1.8 km',
      category: 'beauty',
      services: ['Manicure', 'Pedicure', 'Nail Art'],
      priceRange: '$25-80',
      isVerified: true,
      isTopRated: false,
      responseTime: '3 horas',
      completedServices: 678
    },
    {
      id: 4,
      name: 'Roberto López',
      specialty: 'Entrenador Personal',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      coverImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      reviews: 94,
      experience: '10 años',
      location: 'Santa Fe, CDMX',
      distance: '4.2 km',
      category: 'fitness',
      services: ['Entrenamiento', 'Nutrición', 'Coaching'],
      priceRange: '$50-100',
      isVerified: true,
      isTopRated: false,
      responseTime: '4 horas',
      completedServices: 534
    },
    {
      id: 5,
      name: 'Dra. Patricia Vega',
      specialty: 'Nutrióloga Certificada',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      coverImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5.0,
      reviews: 78,
      experience: '15 años',
      location: 'Del Valle, CDMX',
      distance: '3.5 km',
      category: 'health',
      services: ['Consulta', 'Plan Alimentario', 'Seguimiento'],
      priceRange: '$70-200',
      isVerified: true,
      isTopRated: true,
      responseTime: '1 hora',
      completedServices: 423
    },
    {
      id: 6,
      name: 'Laura Sánchez',
      specialty: 'Esteticista Facial',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      coverImage: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviews: 112,
      experience: '7 años',
      location: 'Coyoacán, CDMX',
      distance: '2.9 km',
      category: 'beauty',
      services: ['Facial', 'Limpieza', 'Anti-edad'],
      priceRange: '$45-130',
      isVerified: true,
      isTopRated: true,
      responseTime: '2 horas',
      completedServices: 789
    }
  ];

  const filteredProfessionals = professionals.filter(prof => 
    selectedCategory === 'all' || prof.category === selectedCategory
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="professionals" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            <span>Profesionales Destacados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conoce a nuestros expertos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Profesionales verificados y altamente calificados listos para brindarte el mejor servicio.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 animate-in slide-in-from-bottom-4 duration-1000 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessionals.map((professional, index) => (
            <div
              key={professional.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-in slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={professional.coverImage}
                  alt={professional.specialty}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {professional.isVerified && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verificado</span>
                    </span>
                  )}
                  {professional.isTopRated && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                      <Crown className="w-3 h-3" />
                      <span>Top Rated</span>
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Professional Avatar */}
                <div className="absolute bottom-4 left-4">
                  <div className="relative">
                    <img
                      src={professional.avatar}
                      alt={professional.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Distance */}
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{professional.distance}</span>
                </div>
              </div>

              {/* Professional Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                      {professional.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">{professional.specialty}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {renderStars(professional.rating)}
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2">
                        {professional.rating} ({professional.reviews} reseñas)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Experiencia</p>
                      <p className="font-bold text-gray-900 dark:text-white">{professional.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-xs text-green-600 dark:text-green-400">Servicios</p>
                      <p className="font-bold text-gray-900 dark:text-white">{professional.completedServices}</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{professional.location}</span>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {professional.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Price Range */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Responde en {professional.responseTime}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{professional.priceRange}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-2xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Reservar</span>
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
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Ver Más Profesionales</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientProfessionals;