import React from 'react';
import { Calendar, Users, Clock, TrendingUp, BarChart3 } from 'lucide-react';
import { UserRole } from '../../types/auth';

interface HeroProps {
  userRole?: UserRole;
}

const Hero: React.FC<HeroProps> = ({ userRole }) => {
  const stats = [
    { icon: Users, label: 'Clientes Activos', value: '2,847' },
    { icon: Calendar, label: 'Citas Este Mes', value: '342' },
    { icon: Clock, label: 'Horas Trabajadas', value: '1,680' },
    { icon: TrendingUp, label: 'Crecimiento', value: '+24%' },
  ];

  const getHeroContent = () => {
    switch (userRole) {
      case 'client':
        return {
          title: 'Encuentra tu profesional ideal',
          subtitle: 'Reserva citas con los mejores profesionales de tu área',
          description: 'Descubre servicios de calidad, lee reseñas reales y agenda tu próxima cita de manera fácil y segura.'
        };
      case 'superadmin':
        return {
          title: 'Panel de administración',
          subtitle: 'Gestiona la plataforma ProBooking',
          description: 'Supervisa usuarios, analiza métricas del sistema y administra la plataforma de manera eficiente.'
        };
      default:
        return {
          title: 'Gestiona tu práctica profesional',
          subtitle: 'La plataforma integral para profesionales',
          description: 'La plataforma integral que necesitas para administrar citas, clientes y hacer crecer tu negocio de manera eficiente y profesional.'
        };
    }
  };

  const content = getHeroContent();

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-in slide-in-from-bottom-4 duration-1000">
            {content.title.split(' ').slice(0, -1).join(' ')}
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {content.title.split(' ').slice(-1)[0]}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            {content.description}
          </p>

          {userRole === 'professional' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
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
          )}

          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              {userRole === 'client' ? 'Explorar Servicios' : userRole === 'superadmin' ? 'Ver Dashboard' : 'Comenzar Ahora'}
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;