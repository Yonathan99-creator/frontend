import React from 'react';
import { Search, Calendar, Star, Shield, Clock, MapPin, Heart, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Gift, Rocket, Diamond, CheckCircle, Users, TrendingUp, Eye, Phone, Mail, MessageCircle } from 'lucide-react';

const ClientFeatures: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Búsqueda Inteligente',
      description: 'Encuentra el profesional perfecto usando filtros avanzados por ubicación, precio, calificaciones y especialidad.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      benefits: ['Filtros avanzados', 'Geolocalización', 'Búsqueda por voz']
    },
    {
      icon: Calendar,
      title: 'Reservas Instantáneas',
      description: 'Reserva citas en tiempo real con confirmación inmediata. Ve la disponibilidad en vivo de todos los profesionales.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      benefits: ['Tiempo real', 'Confirmación instantánea', 'Sincronización automática']
    },
    {
      icon: Star,
      title: 'Reseñas Verificadas',
      description: 'Lee reseñas auténticas de clientes reales. Todas las reseñas son verificadas para garantizar su autenticidad.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      benefits: ['100% verificadas', 'Fotos incluidas', 'Sistema anti-fraude']
    },
    {
      icon: Shield,
      title: 'Pagos Seguros',
      description: 'Realiza pagos de forma segura con encriptación de nivel bancario. Múltiples métodos de pago disponibles.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      benefits: ['Encriptación SSL', 'Múltiples métodos', 'Protección al comprador']
    },
    {
      icon: Clock,
      title: 'Recordatorios Automáticos',
      description: 'Nunca olvides una cita con nuestros recordatorios inteligentes por SMS, email y notificaciones push.',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      benefits: ['SMS y Email', 'Notificaciones push', 'Recordatorios personalizados']
    },
    {
      icon: Heart,
      title: 'Favoritos y Listas',
      description: 'Guarda tus profesionales favoritos y crea listas personalizadas para acceso rápido a tus servicios preferidos.',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      benefits: ['Listas personalizadas', 'Acceso rápido', 'Sincronización en la nube']
    }
  ];

  const testimonials = [
    {
      name: 'María Fernández',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'Increíble plataforma! Encontré a mi estilista perfecta en minutos. La reserva fue súper fácil y el servicio excelente.',
      service: 'Corte de Cabello',
      date: '2024-01-15'
    },
    {
      name: 'Carlos Mendoza',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'El sistema de recordatorios es fantástico. Nunca más he perdido una cita. Los profesionales son de primera calidad.',
      service: 'Masaje Terapéutico',
      date: '2024-01-12'
    },
    {
      name: 'Ana Rodríguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'Me encanta poder ver las reseñas reales antes de reservar. La app es muy intuitiva y el proceso de pago es seguro.',
      service: 'Tratamiento Facial',
      date: '2024-01-10'
    }
  ];

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
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Características Principales</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todo lo que necesitas para reservar
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre por qué miles de clientes eligen ProBooking para encontrar y reservar servicios profesionales.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-1000 cursor-pointer`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-3xl transition-all duration-500">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Trophy className="w-4 h-4" />
              <span>Testimonios Reales</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Lo que dicen nuestros clientes
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Miles de clientes satisfechos han encontrado sus servicios ideales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-green-200 dark:border-green-700"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                  <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Gift className="w-8 h-8 text-yellow-300" />
                <Heart className="w-8 h-8 text-pink-300" />
                <Star className="w-8 h-8 text-yellow-300 fill-current" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para encontrar tu servicio ideal?
              </h3>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Únete a miles de clientes que ya disfrutan de servicios profesionales de calidad. Comienza tu búsqueda hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Explorar Servicios</span>
                </button>
                <button className="bg-green-700 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Reservar Ahora</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeatures;