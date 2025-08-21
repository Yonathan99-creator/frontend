import React from 'react';
import { User, Settings, Calendar, Clock, Star, CreditCard, ArrowRight, Sparkles, TrendingUp, Shield, BarChart3, Scissors, MessageCircle } from 'lucide-react';
import { useApp } from '../../../contexts/AppContext';

interface ProfessionalModulesProps {
  onModuleClick?: (moduleName: string) => void;
}

const ProfessionalModules: React.FC<ProfessionalModulesProps> = ({ onModuleClick }) => {
  const appContext = useApp();
  const setCurrentModule = appContext?.setCurrentModule;

  const modules = [
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

  const handleModuleClick = (module: typeof modules[0]) => {
    setCurrentModule?.(module.moduleName);
    if (onModuleClick) {
      onModuleClick(module.moduleName);
    }
  };

  return (
    <section id="modules" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Módulos Profesionales</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre las herramientas profesionales que te ayudarán a gestionar tu práctica de manera eficiente y hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
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

                <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-600/50">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleModuleClick(module);
                    }}
                    className={`w-full py-3 px-4 bg-gradient-to-r ${module.color} text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 opacity-0 group-hover:opacity-100`}
                  >
                    Explorar Módulo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Analytics Avanzados',
              description: 'Obtén insights detallados sobre tu negocio',
              color: 'from-green-500 to-emerald-600'
            },
            {
              icon: Shield,
              title: 'Seguridad Premium',
              description: 'Tus datos protegidos con encriptación de nivel empresarial',
              color: 'from-blue-500 to-cyan-600'
            },
            {
              icon: Sparkles,
              title: 'Actualizaciones Constantes',
              description: 'Nuevas funcionalidades cada mes sin costo adicional',
              color: 'from-purple-500 to-pink-600'
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${(index + 6) * 150}ms` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalModules;