import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Grid3X3, Columns, Square, Filter, Search, Bell, Settings, Download, Share2, Star, TrendingUp, Users, Clock, Award, Zap, BarChart3, Sparkles, Crown, Trophy, Flame, Rocket, Medal } from "lucide-react";
import { useApp } from "../../../contexts/AppContext";
import MonthView from "./MonthView";
import WeekView from "./WeekView";

const CalendarView = () => {
  const [currentView, setCurrentView] = useState<'month' | 'week'>('month');
  const [currentDate, setCurrentDate] = useState(new Date());
  const { user, appointments = [] } = useApp();

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  const formatDateHeader = () => {
    if (currentView === 'month') {
      return currentDate.toLocaleDateString('es-ES', { 
        month: 'long', 
        year: 'numeric' 
      });
    } else {
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      return `${startOfWeek.getDate()} - ${endOfWeek.getDate()} ${endOfWeek.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`;
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Calendario</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-700 min-w-[200px] text-center">
              {formatDateHeader()}
            </h2>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setCurrentView('month')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'month'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid3X3 className="w-4 h-4 mr-2 inline" />
              Mes
            </button>
            <button
              onClick={() => setCurrentView('week')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'week'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Columns className="w-4 h-4 mr-2 inline" />
              Semana
            </button>
          </div>

          {/* Action Buttons */}
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Cita
          </button>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="flex-1 overflow-hidden">
        {currentView === 'month' ? (
          <MonthView currentDate={currentDate} appointments={appointments} />
        ) : (
          <WeekView currentDate={currentDate} appointments={appointments} />
        )}
      </div>
    </div>
  );
};

export default CalendarView;