import React from 'react';
import { Calendar, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Heart, Star, Eye, Bookmark, CheckCircle, Settings, Users, Clock, BarChart3, TrendingUp } from 'lucide-react';

const ProfessionalLoadingScreen: React.FC = () => {
  const loadingSteps = [
    { label: 'Cargando perfil profesional', icon: Users, color: 'text-blue-500' },
    { label: 'Sincronizando calendario', icon: Calendar, color: 'text-green-500' },
    { label: 'Preparando servicios', icon: Settings, color: 'text-purple-500' },
    { label: 'Cargando citas', icon: Clock, color: 'text-orange-500' },
    { label: 'Actualizando reseñas', icon: Star, color: 'text-yellow-500' },
    { label: 'Configurando dashboard', icon: BarChart3, color: 'text-indigo-500' }
  ];

  const achievements = [
    { icon: Crown, label: 'Profesional Premium', color: 'from-yellow-500 to-orange-600' },
    { icon: Trophy, label: 'Top Rated', color: 'from-blue-500 to-purple-600' },
    { icon: Medal, label: 'Expert Certified', color: 'from-green-500 to-emerald-600' },
    { icon: Flame, label: 'Trending Pro', color: 'from-red-500 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-300 pt-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-bounce hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
            <Calendar className="h-16 w-16 text-white animate-pulse group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin shadow-lg">
            <Sparkles className="h-6 w-6 text-white animate-pulse" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
            <Crown className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-in slide-in-from-bottom-4 duration-1000">
          ProBooking
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
          Professional Dashboard
        </h2>

        {/* Achievement Badges */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.label}
                className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${achievement.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-in slide-in-from-bottom-4 duration-1000`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-bold text-sm">{achievement.label}</span>
              </div>
            );
          })}
        </div>

        {/* Loading Animation */}
        <div className="space-y-6 mb-8">
          <div className="flex justify-center space-x-3">
            <div className="w-5 h-5 bg-blue-600 rounded-full animate-bounce shadow-lg"></div>
            <div className="w-5 h-5 bg-purple-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-5 h-5 bg-indigo-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-5 h-5 bg-pink-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          <div className="space-y-4">
            <div className="animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 h-4 w-96 rounded-full mx-auto shadow-lg"></div>
            <div className="animate-pulse bg-gradient-to-r from-purple-600 to-indigo-600 h-4 w-80 rounded-full mx-auto shadow-lg" style={{ animationDelay: '0.2s' }}></div>
            <div className="animate-pulse bg-gradient-to-r from-indigo-600 to-blue-600 h-4 w-64 rounded-full mx-auto shadow-lg" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-3xl text-gray-600 dark:text-gray-300 font-bold animate-pulse mb-4 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
          Preparando tu espacio profesional...
        </p>
        
        <p className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-8">
          Configurando la mejor experiencia para gestionar tu práctica profesional
        </p>

        {/* Loading Steps */}
        <div className="space-y-4 mb-12">
          {loadingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="flex items-center justify-center space-x-4 bg-white/50 dark:bg-gray-800/50 px-6 py-4 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-4 duration-1000"
                style={{ animationDelay: `${index * 200 + 500}ms` }}
              >
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg animate-pulse`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">{step.label}</span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping shadow-lg"></div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="space-y-6">
          <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 px-4 py-3 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-medium">Módulos profesionales</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 px-4 py-3 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              <span className="font-medium">Sincronizando datos</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 px-4 py-3 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
              <span className="font-medium">Preparando interfaz</span>
            </span>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>Iniciando...</span>
              <span>Cargando módulos...</span>
              <span>¡Casi listo!</span>
            </div>
          </div>
        </div>

        {/* Professional Features Preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: Calendar, label: 'Mi Calendario', color: 'from-blue-500 to-cyan-600' },
            { icon: Users, label: 'Mis Clientes', color: 'from-green-500 to-emerald-600' },
            { icon: Settings, label: 'Mis Servicios', color: 'from-purple-500 to-pink-600' },
            { icon: Star, label: 'Mis Reseñas', color: 'from-yellow-500 to-orange-600' },
            { icon: BarChart3, label: 'Analíticas', color: 'from-indigo-500 to-purple-600' },
            { icon: Award, label: 'Suscripción', color: 'from-pink-500 to-rose-600' }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className={`bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 shadow-lg animate-in slide-in-from-bottom-4 duration-1000`}
                style={{ animationDelay: `${index * 100 + 1000}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{feature.label}</p>
              </div>
            );
          })}
        </div>

        {/* Loading Message */}
        <div className="mt-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg animate-in slide-in-from-bottom-4 duration-1000 delay-1200">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-lg font-bold text-gray-800 dark:text-white">Optimizando tu experiencia</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Estamos preparando todas las herramientas profesionales que necesitas para hacer crecer tu negocio
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalLoadingScreen;