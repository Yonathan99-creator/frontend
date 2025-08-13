import React from 'react';
import { Star, Quote, Heart, Award, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Gift, Rocket, Diamond, CheckCircle, Users, Calendar, TrendingUp, Eye, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const ClientTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'ProBooking cambió mi vida! Encontré a mi estilista perfecta en la primera búsqueda. El proceso de reserva es súper fácil y siempre recibo recordatorios. ¡No puedo estar más feliz!',
      service: 'Corte de Cabello',
      professional: 'María González',
      date: '2024-01-15',
      location: 'Polanco, CDMX',
      verified: true,
      helpful: 23
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'Como alguien con horarios complicados, ProBooking es perfecto. Puedo reservar a cualquier hora y los profesionales siempre confirman rápido. La calidad es excepcional.',
      service: 'Masaje Terapéutico',
      professional: 'Dr. Roberto López',
      date: '2024-01-12',
      location: 'Roma Norte, CDMX',
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'Las reseñas son súper útiles y reales. Me ayudaron a elegir el mejor tratamiento facial. El sistema de pagos es seguro y la atención al cliente excelente.',
      service: 'Tratamiento Facial',
      professional: 'Laura Sánchez',
      date: '2024-01-10',
      location: 'Condesa, CDMX',
      verified: true,
      helpful: 31
    },
    {
      id: 4,
      name: 'Miguel Torres',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'Increíble variedad de servicios y profesionales. He probado desde cortes de cabello hasta entrenamientos personales. Todo de primera calidad.',
      service: 'Entrenamiento Personal',
      professional: 'Roberto López',
      date: '2024-01-08',
      location: 'Santa Fe, CDMX',
      verified: true,
      helpful: 15
    },
    {
      id: 5,
      name: 'Patricia Vega',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'La app es muy intuitiva y me encanta poder ver el perfil completo de cada profesional antes de reservar. Los recordatorios nunca fallan.',
      service: 'Manicure & Pedicure',
      professional: 'Ana Rodríguez',
      date: '2024-01-05',
      location: 'Del Valle, CDMX',
      verified: true,
      helpful: 27
    },
    {
      id: 6,
      name: 'Elena Morales',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: 'ProBooking me ha ahorrado tanto tiempo! Ya no tengo que llamar a múltiples lugares. Todo está en un solo lugar y la calidad está garantizada.',
      service: 'Consulta Nutricional',
      professional: 'Dra. Patricia Vega',
      date: '2024-01-03',
      location: 'Coyoacán, CDMX',
      verified: true,
      helpful: 19
    }
  ];

  const stats = [
    { icon: Star, label: 'Calificación Promedio', value: '4.9/5', color: 'from-yellow-500 to-orange-600' },
    { icon: Users, label: 'Clientes Satisfechos', value: '50,000+', color: 'from-blue-500 to-cyan-600' },
    { icon: Calendar, label: 'Reservas Exitosas', value: '98.5%', color: 'from-green-500 to-emerald-600' },
    { icon: TrendingUp, label: 'Crecimiento Mensual', value: '+35%', color: 'from-purple-500 to-pink-600' }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            <span>Testimonios Verificados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Historias de éxito reales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre cómo ProBooking ha transformado la experiencia de reserva de miles de clientes satisfechos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                "{testimonial.comment}"
              </blockquote>

              {/* Service Info */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4 mb-6 border border-green-200/50 dark:border-green-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">Servicio:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.service}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">Profesional:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.professional}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    {testimonial.verified && (
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verificado</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-600/50">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{testimonial.helpful}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Responder</span>
                  </button>
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(testimonial.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
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
                Únete a miles de clientes satisfechos
              </h3>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Descarga la app gratuita y comienza a disfrutar de servicios profesionales de calidad. Tu próxima experiencia perfecta te está esperando.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Reservar Mi Primera Cita</span>
                </button>
                <button className="bg-green-700 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Explorar Profesionales</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;