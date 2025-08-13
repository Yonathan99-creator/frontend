import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, DollarSign, Heart, Bookmark, Eye, ArrowRight, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Gift, Rocket, Diamond, Users, Calendar, Phone, Mail } from 'lucide-react';

const ClientServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos', icon: Eye, color: 'from-gray-500 to-gray-600' },
    { id: 'beauty', name: 'Belleza', icon: Sparkles, color: 'from-pink-500 to-rose-600' },
    { id: 'wellness', name: 'Bienestar', icon: Heart, color: 'from-green-500 to-emerald-600' },
    { id: 'fitness', name: 'Fitness', icon: Zap, color: 'from-blue-500 to-cyan-600' },
    { id: 'health', name: 'Salud', icon: Award, color: 'from-purple-500 to-violet-600' }
  ];

  const services = [
    {
      id: 1,
      name: 'Corte de Cabello Premium',
      professional: 'María González',
      professionalImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'beauty',
      price: 45,
      duration: '60 min',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Salon Elite, Centro',
      distance: '2.3 km',
      isVerified: true,
      isPopular: true,
      tags: ['Corte', 'Peinado', 'Consulta']
    },
    {
      id: 2,
      name: 'Manicure & Pedicure Spa',
      professional: 'Ana Rodríguez',
      professionalImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'beauty',
      price: 35,
      duration: '90 min',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Nail Art Studio, Polanco',
      distance: '1.8 km',
      isVerified: true,
      isPopular: false,
      tags: ['Manicure', 'Pedicure', 'Spa']
    },
    {
      id: 3,
      name: 'Masaje Terapéutico',
      professional: 'Carlos Mendoza',
      professionalImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'wellness',
      price: 80,
      duration: '75 min',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Wellness Center, Roma Norte',
      distance: '3.1 km',
      isVerified: true,
      isPopular: true,
      tags: ['Relajante', 'Terapéutico', 'Bienestar']
    },
    {
      id: 4,
      name: 'Tratamiento Facial Anti-edad',
      professional: 'Laura Sánchez',
      professionalImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'beauty',
      price: 65,
      duration: '90 min',
      rating: 4.7,
      reviews: 94,
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Beauty Clinic, Condesa',
      distance: '2.7 km',
      isVerified: true,
      isPopular: false,
      tags: ['Facial', 'Anti-edad', 'Hidratante']
    },
    {
      id: 5,
      name: 'Entrenamiento Personal',
      professional: 'Roberto López',
      professionalImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'fitness',
      price: 50,
      duration: '60 min',
      rating: 4.8,
      reviews: 112,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Fitness Pro, Santa Fe',
      distance: '4.2 km',
      isVerified: true,
      isPopular: true,
      tags: ['Personal', 'Fitness', 'Nutrición']
    },
    {
      id: 6,
      name: 'Consulta Nutricional',
      professional: 'Dra. Patricia Vega',
      professionalImage: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'health',
      price: 75,
      duration: '45 min',
      rating: 5.0,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Clínica Nutrición, Del Valle',
      distance: '3.5 km',
      isVerified: true,
      isPopular: false,
      tags: ['Nutrición', 'Consulta', 'Plan Alimentario']
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.professional.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Servicios Destacados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Encuentra tu servicio ideal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora nuestra amplia gama de servicios profesionales y encuentra exactamente lo que necesitas.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 mb-12 hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar servicios o profesionales..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 animate-in slide-in-from-bottom-4 duration-1000 ${
                      isActive
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-in slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {service.isVerified && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>Verificado</span>
                    </span>
                  )}
                  {service.isPopular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                      <Flame className="w-3 h-3" />
                      <span>Popular</span>
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">${service.price}</span>
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
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-1 mb-2">
                      {renderStars(service.rating)}
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2">
                        {service.rating} ({service.reviews} reseñas)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Info */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
                  <img
                    src={service.professionalImage}
                    alt={service.professional}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-200 dark:border-green-700"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 dark:text-white">{service.professional}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600 dark:text-green-400">{service.distance}</p>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Duración</p>
                      <p className="font-bold text-gray-900 dark:text-white">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="text-xs text-green-600 dark:text-green-400">Precio</p>
                      <p className="font-bold text-gray-900 dark:text-white">${service.price}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
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
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Ver Más Servicios</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientServices;