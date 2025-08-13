import React from 'react';
import { Calendar, Mail, Phone, MapPin, Heart, Instagram, Facebook, Twitter, Youtube, Star, Award, Shield, Zap } from 'lucide-react';

const ClientFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Belleza y Estética',
      'Bienestar y Spa',
      'Fitness y Deporte',
      'Salud y Medicina',
      'Cuidado Personal',
      'Servicios a Domicilio'
    ],
    support: [
      'Centro de Ayuda',
      'Cómo Reservar',
      'Política de Cancelación',
      'Garantía de Calidad',
      'Contacto',
      'Preguntas Frecuentes'
    ],
    company: [
      'Sobre Nosotros',
      'Únete como Profesional',
      'Programa de Afiliados',
      'Prensa',
      'Carreras',
      'Blog'
    ]
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500', followers: '125K' },
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600', followers: '89K' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400', followers: '67K' },
    { icon: Youtube, label: 'YouTube', color: 'hover:text-red-500', followers: '45K' }
  ];

  const features = [
    { icon: Shield, text: 'Pagos 100% Seguros' },
    { icon: Award, text: 'Profesionales Verificados' },
    { icon: Star, text: 'Garantía de Calidad' },
    { icon: Zap, text: 'Reservas Instantáneas' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">ProBooking</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              La plataforma líder para encontrar y reservar servicios profesionales de calidad. 
              Conectamos clientes con los mejores profesionales de su ciudad.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 group hover:text-green-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">clientes@probooking.com</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-green-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-green-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Ciudad de México, México</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    className={`w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Soporte</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-green-500/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} ProBooking. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>para conectar clientes y profesionales</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6 mt-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors duration-200">Términos de Servicio</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-200">Política de Privacidad</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-200">Cookies</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-200">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;