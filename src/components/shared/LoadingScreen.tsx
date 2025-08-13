import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  title?: string;
  subtitle?: string;
  showProgress?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  title = "ProBooking",
  subtitle = "Cargando tu espacio...",
  showProgress = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-300 pt-16">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-bounce">
            <Calendar className="h-12 w-12 text-white animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-in slide-in-from-bottom-4 duration-1000">
          {title}
        </h1>

        {/* Loading Animation */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce shadow-lg"></div>
            <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <div className="space-y-3">
            <div className="animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 h-3 w-80 rounded-full mx-auto shadow-lg"></div>
            <div className="animate-pulse bg-gradient-to-r from-purple-600 to-indigo-600 h-3 w-64 rounded-full mx-auto shadow-lg" style={{ animationDelay: '0.2s' }}></div>
            <div className="animate-pulse bg-gradient-to-r from-indigo-600 to-blue-600 h-3 w-48 rounded-full mx-auto shadow-lg" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-2xl text-gray-600 dark:text-gray-300 font-bold animate-pulse mb-4 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000 delay-200">
          {subtitle}
        </p>
        
        <p className="text-base text-gray-500 dark:text-gray-400 font-medium animate-in slide-in-from-bottom-4 duration-1000 delay-300">
          Preparando la mejor experiencia para ti
        </p>

        {/* Progress Indicators */}
        {showProgress && (
        <div className="mt-12 space-y-4 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
          <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-medium">Inicializando</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              <span className="font-medium">Sincronizando datos</span>
            </span>
            <span className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
              <span className="font-medium">Finalizando</span>
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-96 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
        )}
      </div>

      {/* Background Animation */}