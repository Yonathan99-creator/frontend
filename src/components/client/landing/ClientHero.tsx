import React from 'react';
import { Calendar, Users, Clock, TrendingUp, Star, Heart, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Gift, Rocket, Diamond, Search, MapPin, Phone } from 'lucide-react';

const ClientHero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Profesionales Verificados', value: '2,847' },
    { icon: Calendar, label: 'Servicios Disponibles', value: '15,000+' },
    { icon: Clock, label: 'Reservas Exitosas', value: '98.5%' },
    { icon: Star, label: 'Calificación Promedio', value: '4.9★' },
  ];

  const popularServices = [
    {
      name: 'Corte de Cabello',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=300',
      professionals: 156,
      avgPrice: '$45',
      rating: 4.9
    },
    {
      name: 'Manicure & Pedicure',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=300',
      professionals: 89,
      avgPrice: '$35',
      rating: 4.8
    },
    {
      name: 'Masaje Relajante',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=300',
      professionals: 67,
      avgPrice: '$80',
      rating: 4.9
    },
    {
      name: 'Tratamiento Facial',
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=300',
      professionals: 124,
      avgPrice: '$65',
      rating: 4.7
    }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-teal-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-emerald-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-teal-400/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 animate-in slide-in-from-top-4 duration-1000">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
              <Calendar className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex space-x-2">
              {[Crown, Trophy, Medal, Flame].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-in slide-in-from-bottom-4 duration-1000">
            Encuentra el servicio
            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              perfecto para ti
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Descubre y reserva servicios con los mejores profesionales de tu ciudad. Desde cortes de cabello hasta tratamientos de spa, todo en un solo lugar.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 flex items-center space-x-3 px-4">
                    <Search className="w-6 h-6 text-gray-400" />
                    <input
                      type="text"
                      placeholder="¿Qué servicio necesitas? (ej: corte de cabello, manicure...)"
                      className="w-full py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none text-lg"
                    />
                  </div>
                  <div className="flex items-center space-x-3 px-4 border-l border-gray-200 dark:border-gray-700">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Ciudad"
                      className="w-32 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
              Servicios Más Populares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularServices.map((service, index) => (
                <div
                  key={service.name}
                  className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${(index + 4) * 150}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{service.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {service.professionals} profesionales
                        </span>
                        <span className="text-lg font-bold">{service.avgPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${(index + 8) * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Reservar Ahora</span>
            </button>
            <button className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 font-semibold py-4 px-8 rounded-xl border-2 border-green-600 dark:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Explorar Servicios</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;