import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Grid3X3, Columns, Square, Filter, Search, Bell, Settings, Download, Share2, Star, TrendingUp, Users, Clock, Award, Zap, BarChart3, Sparkles, Crown, Trophy, Flame, Rocket, Medal, Eye, Target, Heart, Bookmark, Gift, Diamond } from 'lucide-react';
import { useApp } from '../../../contexts/AppContext';
import MonthView from './MonthView';
import WeekView from './WeekView';
import DayView from './DayView';

const CalendarView: React.FC = () => {
  const [currentView, setCurrentView] = useState<'day' | 'week' | 'month'>('month');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { appointments = [] } = useApp();

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    
    switch (currentView) {
      case 'day':
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
        break;
      case 'week':
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
        break;
      case 'month':
        newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
        break;
    }
    setCurrentDate(newDate);
  };

  const formatDateHeader = () => {
    switch (currentView) {
      case 'day':
        return currentDate.toLocaleDateString('es-ES', { 
          weekday: 'long',
          day: 'numeric',
          month: 'long', 
          year: 'numeric' 
        });
      case 'week':
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        
        return `${startOfWeek.getDate()} - ${endOfWeek.getDate()} ${endOfWeek.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`;
      case 'month':
        return currentDate.toLocaleDateString('es-ES', { 
          month: 'long', 
          year: 'numeric' 
        });
    }
  };

  const getViewIcon = (view: string) => {
    switch (view) {
      case 'day': return Square;
      case 'week': return Columns;
      case 'month': return Grid3X3;
      default: return Grid3X3;
    }
  };

  const todayAppointments = appointments.filter(apt => 
    apt.startTime.toDateString() === new Date().toDateString()
  ).length;

  const thisWeekAppointments = appointments.filter(apt => {
    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    return apt.startTime >= weekStart && apt.startTime <= weekEnd;
  }).length;

  const quickStats = [
    { label: 'Today', value: todayAppointments.toString(), icon: Clock, color: 'from-blue-500 to-cyan-600' },
    { label: 'This Week', value: thisWeekAppointments.toString(), icon: CalendarIcon, color: 'from-green-500 to-emerald-600' },
    { label: 'Total', value: appointments.length.toString(), icon: BarChart3, color: 'from-purple-500 to-pink-600' },
    { label: 'Rating', value: '4.9', icon: Star, color: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 animate-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group">
              <CalendarIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Mi Calendario
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                Gestiona tu agenda profesional con estilo y eficiencia
              </p>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: Crown, label: 'Calendario Premium', color: 'from-yellow-500 to-orange-600', description: 'Funciones avanzadas' },
              { icon: Trophy, label: 'Organización Perfecta', color: 'from-blue-500 to-purple-600', description: '100% sincronizado' },
              { icon: Medal, label: 'Eficiencia Máxima', color: 'from-green-500 to-emerald-600', description: 'Tiempo optimizado' },
              { icon: Flame, label: 'Agenda Popular', color: 'from-red-500 to-pink-600', description: 'Más solicitado' }
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${badge.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group animate-in slide-in-from-bottom-4 duration-1000`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="font-bold text-sm">{badge.label}</span>
                    <p className="text-xs opacity-90">{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Header with Stats */}
        <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-top-4 duration-1000 mb-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-300/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-32 left-32 w-5 h-5 bg-pink-300/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-300/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="relative p-8">
            {/* Header Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 group">
                  <CalendarIcon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2 animate-in slide-in-from-left-4 duration-1000 text-white">
                    {formatDateHeader()}
                  </h2>
                  <p className="text-blue-100 text-lg animate-in slide-in-from-left-4 duration-1000 delay-200">
                    Vista {currentView === 'day' ? 'diaria' : currentView === 'week' ? 'semanal' : 'mensual'} de tu agenda profesional
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-300">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <span className="font-semibold text-white">Sincronización Activa</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-in slide-in-from-left-4 duration-1000 delay-500">
                      <Zap className="w-4 h-4 text-green-300" />
                      <span className="font-semibold text-white">Google Calendar</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <button className="group flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-in slide-in-from-right-4 duration-1000 text-white">
                  <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="font-bold text-lg">Nueva Cita</span>
                </button>
                <div className="flex space-x-2">
                  <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-200">
                    <Settings className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-300">
                    <Bell className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-in slide-in-from-right-4 duration-1000 delay-400">
                    <Share2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000"
                    style={{ animationDelay: `${index * 150 + 600}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-blue-100">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-200 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Navigation */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 rounded-2xl p-2">
                <button
                  onClick={() => navigateDate('prev')}
                  className="p-3 hover:bg-white dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                </button>
                
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-center min-w-[280px]">
                    {formatDateHeader()}
                  </h3>
                </div>
                
                <button
                  onClick={() => navigateDate('next')}
                  className="p-3 hover:bg-white dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
              >
                Hoy
              </button>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-2xl p-2 shadow-inner">
                {['day', 'week', 'month'].map((view) => {
                  const Icon = getViewIcon(view);
                  const isActive = currentView === view;
                  return (
                    <button
                      key={view}
                      onClick={() => setCurrentView(view as any)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-bold capitalize">
                        {view === 'day' ? 'Día' : view === 'week' ? 'Semana' : 'Mes'}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`p-3 rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 group shadow-lg ${
                    showFilters 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Filter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 hover:rotate-12">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-600/50 animate-in slide-in-from-top-2 duration-300">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                Filtros Avanzados
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar citas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <select className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                  <option value="all">Todos los estados</option>
                  <option value="confirmed">Confirmadas</option>
                  <option value="pending">Pendientes</option>
                  <option value="completed">Completadas</option>
                </select>
                
                <select className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
                  <option value="all">Todos los servicios</option>
                  <option value="haircut">Corte de cabello</option>
                  <option value="color">Tratamiento de color</option>
                  <option value="styling">Peinado</option>
                </select>
                
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold">
                  Aplicar Filtros
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Calendar Content */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
          {currentView === 'day' && <DayView currentDate={currentDate} appointments={appointments} />}
          {currentView === 'week' && <WeekView currentDate={currentDate} appointments={appointments} />}
          {currentView === 'month' && <MonthView currentDate={currentDate} appointments={appointments} />}
        </div>

        {/* Quick Actions Panel */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-3xl transition-all duration-500 animate-in slide-in-from-bottom-4 duration-1000 delay-600 mt-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition-transform duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Acciones Rápidas</h2>
              <p className="text-gray-600 dark:text-gray-400">Gestiona tu calendario de manera eficiente</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: 'Agendar Cita',
                description: 'Nueva reserva',
                icon: Plus,
                color: 'from-blue-500 to-cyan-600',
                bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
              },
              {
                title: 'Ver Agenda',
                description: 'Vista completa',
                icon: Eye,
                color: 'from-green-500 to-emerald-600',
                bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
              },
              {
                title: 'Sincronizar',
                description: 'Google Calendar',
                icon: Zap,
                color: 'from-yellow-500 to-orange-600',
                bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
              },
              {
                title: 'Recordatorios',
                description: 'Notificaciones',
                icon: Bell,
                color: 'from-purple-500 to-violet-600',
                bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20'
              },
              {
                title: 'Exportar',
                description: 'Descargar datos',
                icon: Download,
                color: 'from-orange-500 to-red-600',
                bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
              },
              {
                title: 'Configurar',
                description: 'Preferencias',
                icon: Settings,
                color: 'from-indigo-500 to-purple-600',
                bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
              }
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button 
                  key={action.title}
                  className={`bg-gradient-to-br ${action.bgColor} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border border-white/20 dark:border-gray-700/50 cursor-pointer active:scale-95`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text">{action.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 group animate-bounce">
            <CalendarIcon className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Background Decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-500/3 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 left-32 w-5 h-5 bg-indigo-400/20 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;