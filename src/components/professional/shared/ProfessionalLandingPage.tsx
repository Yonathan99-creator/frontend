import React from 'react';
import ProfessionalNavbar from './ProfessionalNavbar';
import ProfessionalHero from '../landing/ProfessionalHero';
import ProfessionalModules from '../landing/ProfessionalModules';
import ProfessionalCalendar from '../landing/ProfessionalCalendar';
import ProfessionalReviews from '../landing/ProfessionalReviews';
import ProfessionalFooter from './ProfessionalFooter';
import { User, Scissors, Calendar, Clock, MessageCircle, CreditCard, ArrowRight, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Award, Heart, Star, Eye, Bookmark, Gift, Rocket, Diamond, Settings, Bell, Share2, Plus, CheckCircle, TrendingUp, BarChart3, Activity, Users, DollarSign, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useApp } from '../../../contexts/AppContext';

interface ProfessionalLandingPageProps {
  onModuleClick?: (moduleName: string) => void;
}

const ProfessionalLandingPage: React.FC<ProfessionalLandingPageProps> = ({ onModuleClick }) => {
  const appContext = useApp();
  const setCurrentModule = appContext?.setCurrentModule;

  const navbarModules = [
    {
      icon: User,
      title: 'Mi Perfil',
      moduleName: 'My Profile',
      description: 'Gestiona tu información personal y profesional',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      features: ['Información personal', 'Certificaciones', 'Horarios de trabajo']
    },
    {
      icon: Scissors,
      title: 'Mis Servicios',
      moduleName: 'My Services',
      description: 'Administra tus servicios y precios',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      features: ['Catálogo de servicios', 'Precios dinámicos', 'Categorización']
    },
    {
      icon: Calendar,
      title: 'Mi Calendario',
      moduleName: 'My Calendar',
      description: 'Visualiza y organiza tu agenda',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      features: ['Vista mensual/semanal', 'Sincronización', 'Recordatorios']
    },
    {
      icon: Clock,
      title: 'Mis Citas',
      moduleName: 'My Appointments',
      description: 'Gestiona todas tus citas y clientes',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      features: ['Gestión completa', 'Estados de citas', 'Historial detallado']
    },
    {
      icon: MessageCircle,
      title: 'Mis Reseñas',
      moduleName: 'My Reviews',
      description: 'Monitorea la satisfacción de tus clientes',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      features: ['Calificaciones', 'Comentarios', 'Análisis de tendencias']
    },
    {
      icon: CreditCard,
      title: 'Mi Suscripción',
      moduleName: 'My Subscription',
      description: 'Administra tu plan y facturación',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      features: ['Planes flexibles', 'Facturación', 'Soporte premium']
    }
  ];

  const handleModuleClick = (module: typeof navbarModules[0]) => {
    if (onModuleClick) {
      setCurrentModule?.(module.moduleName);
      onModuleClick(module.moduleName);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ProfessionalNavbar onLogoClick={() => {}} showBackToLanding={false} isLandingPage={true} />
      <main>
        <ProfessionalHero />
        
        {/* Navbar Modules Section */}
        <section id="navbar-modules" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Módulos del Dashboard</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Acceso Rápido a tus Herramientas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Navega directamente a las funciones principales de tu dashboard profesional desde aquí.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {navbarModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <div
                    key={module.title}
                    onClick={() => handleModuleClick(module)}
                    className={`group bg-gradient-to-br ${module.bgColor} rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-1000 cursor-pointer`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                      {module.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.color}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
        <ProfessionalCalendar />
        <ProfessionalReviews />
      </main>
      <ProfessionalFooter />
    </div>
  );
};

                    <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-600/50">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleModuleClick(module);
                        }}
                        className={`w-full py-3 px-4 bg-gradient-to-r ${module.color} text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 opacity-0 group-hover:opacity-100`}
                      >
                        Acceder al Módulo
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <ProfessionalModules onModuleClick={onModuleClick} />
export default ProfessionalLandingPage;