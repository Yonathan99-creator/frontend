import React from 'react';
import { ArrowRight, Play, Star, Users, CheckCircle } from 'lucide-react';

interface ClientHeroProps {
  onNavigate?: (page: string) => void;
}

const ClientHero: React.FC<ClientHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30 overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400 to-pink-600 rounded-full opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 dark:opacity-5 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-8 border border-blue-200/50 dark:border-blue-700/50">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-blue-800 dark:text-blue-300 font-medium">Trusted by 50,000+ clients</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight animate-fade-in-up animation-delay-300">
            Book Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-text-shimmer"> Professional</span>
            <br />
            in Minutes
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
            Connect with verified professionals across all industries. From healthcare to legal services, 
            find and book appointments with top-rated experts instantly.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-700">
            <button 
              onClick={() => onNavigate && onNavigate('booking')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-lg animate-pulse-glow"
            >
              Book Appointment Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => onNavigate && onNavigate('professionals')}
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
              Browse Professionals
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-1000">
            <div className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Verified Professionals</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group animation-delay-300">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">50K+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group animation-delay-500">
              <Star className="h-8 w-8 text-yellow-500" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-yellow-600 transition-colors">4.9</div>
                <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;