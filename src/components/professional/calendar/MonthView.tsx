import React, { useState } from 'react';
import { Appointment } from '../../../types/calendar';
import { isSameDay, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth } from 'date-fns';
import { Clock, User, MapPin, Star, Calendar, Plus, Eye, Edit, MessageSquare, Phone, Mail, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Award, Heart, CheckCircle, AlertCircle, XCircle, Gift, Rocket, Diamond } from 'lucide-react';

interface MonthViewProps {
  currentDate: Date;
  appointments: Appointment[];
}

const MonthView: React.FC<MonthViewProps> = ({ currentDate, appointments = [] }) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [hoveredDay, setHoveredDay] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });

  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const getAppointmentsForDay = (day: Date) => {
    return appointments.filter(appointment => 
      isSameDay(appointment.startTime, day)
    );
  };

  const isToday = (day: Date) => {
    return isSameDay(day, new Date());
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-blue-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-3 h-3 text-white" />;
      case 'pending':
        return <AlertCircle className="w-3 h-3 text-white" />;
      case 'completed':
        return <CheckCircle className="w-3 h-3 text-white" />;
      case 'cancelled':
        return <XCircle className="w-3 h-3 text-white" />;
      default:
        return <Clock className="w-3 h-3 text-white" />;
    }
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Enhanced Week Days Header */}
      <div className="grid grid-cols-7 gap-1 p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 border-b border-gray-200 dark:border-gray-700">
        {weekDays.map((day, index) => (
          <div 
            key={day}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 group animate-in slide-in-from-top-4 duration-1000"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
              <span className="text-sm font-bold text-white tracking-wide">
                {day.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200 tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Enhanced Calendar Grid */}
      <div className="flex-1 p-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="grid grid-cols-7 gap-3 h-full">
          {calendarDays.map((day, index) => {
            const dayAppointments = getAppointmentsForDay(day);
            const isCurrentMonth = isSameMonth(day, currentDate);
            const todayClass = isToday(day);
            const isSelected = selectedDay && isSameDay(day, selectedDay);
            const isHovered = hoveredDay && isSameDay(day, hoveredDay);

            return (
              <div 
                key={day.toISOString()}
                className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 min-h-[140px] transition-all duration-500 cursor-pointer group border-2 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 animate-in slide-in-from-bottom-4 duration-1000 ${
                  !isCurrentMonth 
                    ? 'opacity-40 hover:opacity-70' 
                    : 'opacity-100'
                } ${
                  todayClass 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-blue-200 dark:shadow-blue-800' 
                    : isSelected
                      ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30'
                      : isHovered
                        ? 'border-indigo-300 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
                style={{ animationDelay: `${index * 20}ms` }}
                onClick={() => setSelectedDay(isSelected ? null : day)}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <div className="flex flex-col h-full">
                  {/* Day Number */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 text-sm font-bold rounded-xl transition-all duration-300 shadow-sm group-hover:shadow-lg ${
                      todayClass 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg animate-pulse transform scale-110' 
                        : isSelected
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg transform scale-105'
                          : 'text-gray-900 dark:text-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110'
                    }`}>
                      {format(day, 'd')}
                    </div>
                    
                    {dayAppointments.length > 0 && (
                      <div className="flex items-center space-x-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg animate-pulse ${
                          dayAppointments.length > 3 ? 'bg-gradient-to-r from-red-500 to-pink-600' :
                          dayAppointments.length > 1 ? 'bg-gradient-to-r from-yellow-500 to-orange-600' :
                          'bg-gradient-to-r from-green-500 to-emerald-600'
                        }`}>
                          {dayAppointments.length}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Appointments */}
                  <div className="flex-1 space-y-2 overflow-hidden">
                    {dayAppointments.slice(0, 3).map((appointment, aptIndex) => (
                      <div
                        key={appointment.id}
                        className="group/appointment p-3 rounded-xl text-xs font-medium transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border-l-4 relative overflow-hidden"
                        style={{ 
                          backgroundColor: appointment.color + '15',
                          borderLeftColor: appointment.color
                        }}
                      >
                        {/* Background Gradient */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover/appointment:opacity-20 transition-opacity duration-300 rounded-xl"
                          style={{ background: `linear-gradient(135deg, ${appointment.color}20, ${appointment.color}40)` }}
                        ></div>
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center shadow-sm ${getStatusColor(appointment.status)}`}>
                                {getStatusIcon(appointment.status)}
                              </div>
                              <span className="font-bold text-xs" style={{ color: appointment.color }}>
                                {format(appointment.startTime, 'HH:mm')}
                              </span>
                            </div>
                            <div className="opacity-0 group-hover/appointment:opacity-100 transition-opacity duration-300 flex space-x-1">
                              <button className="p-1 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-md transition-all duration-200">
                                <Eye className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                              </button>
                              <button className="p-1 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-md transition-all duration-200">
                                <Edit className="w-3 h-3 text-green-600 dark:text-green-400" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="truncate font-bold text-gray-800 dark:text-gray-200 group-hover/appointment:text-gray-900 dark:group-hover/appointment:text-white mb-1 transition-colors duration-300">
                            {appointment.title}
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                              <User className="w-2 h-2 text-white" />
                            </div>
                            <span className="truncate text-gray-600 dark:text-gray-400 group-hover/appointment:text-gray-700 dark:group-hover/appointment:text-gray-300 transition-colors duration-300">
                              {appointment.clientName}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                              <Sparkles className="w-2 h-2 text-white" />
                            </div>
                            <span className="truncate text-gray-500 dark:text-gray-400 text-xs">
                              {appointment.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {dayAppointments.length > 3 && (
                      <div className="text-xs font-bold text-center py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 border border-blue-200/50 dark:border-blue-700/50">
                        <div className="flex items-center justify-center space-x-2">
                          <Plus className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          <span className="text-blue-600 dark:text-blue-400">
                            +{dayAppointments.length - 3} más
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {dayAppointments.length === 0 && (
                      <div className="flex-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300 shadow-sm">
                            <Plus className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                          </div>
                          <span className="text-xs text-gray-400 dark:text-gray-500 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                            Disponible
                          </span>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Day Detail Panel */}
      {selectedDay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300" onClick={() => setSelectedDay(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-500" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedDay.toLocaleDateString('es-ES', { 
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {getAppointmentsForDay(selectedDay).length} citas programadas
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDay(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <XCircle className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Appointments List */}
            <div className="space-y-4">
              {getAppointmentsForDay(selectedDay).length > 0 ? (
                getAppointmentsForDay(selectedDay).map((appointment, index) => (
                  <div
                    key={appointment.id}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-in slide-in-from-right-4 duration-1000"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: appointment.color }}
                        >
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {appointment.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">{appointment.service}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        appointment.status === 'completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {appointment.status}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {format(appointment.startTime, 'HH:mm')} - {format(appointment.endTime, 'HH:mm')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">{appointment.clientName}</span>
                      </div>
                      {appointment.clientPhone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          <span className="text-gray-700 dark:text-gray-300">{appointment.clientPhone}</span>
                        </div>
                      )}
                      {appointment.location && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                          <span className="text-gray-700 dark:text-gray-300">{appointment.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105 text-sm font-medium">
                        Ver Detalles
                      </button>
                      <button className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-105 text-sm font-medium">
                        Editar
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Calendar className="w-10 h-10 text-gray-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sin citas programadas</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Este día está disponible para nuevas reservas
                  </p>
                  <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Plus className="w-5 h-5" />
                    <span className="font-bold">Agendar Cita</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;