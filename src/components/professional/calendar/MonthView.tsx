import React from 'react';
import { Appointment } from '../../types/calendar';
import { isSameDay, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth } from 'date-fns';
import { Clock, User, MapPin } from 'lucide-react';

interface MonthViewProps {
  currentDate: Date;
  appointments: Appointment[];
}

const MonthView: React.FC<MonthViewProps> = ({ currentDate, appointments }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getAppointmentsForDay = (day: Date) => {
    return appointments.filter(appointment => 
      isSameDay(appointment.startTime, day)
    );
  };

  const isToday = (day: Date) => {
    return isSameDay(day, new Date());
  };

  return (
    <div className="overflow-hidden">
      {/* Week Days Header */}
      <div className="grid grid-cols-7 gap-px bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 p-1 rounded-t-2xl">
        {weekDays.map((day) => (
          <div 
            key={day}
            className="bg-white dark:bg-gray-800 p-4 text-center rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-sm font-bold text-gray-700 dark:text-gray-200 tracking-wide">
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 p-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
        {calendarDays.map((day) => {
          const dayAppointments = getAppointmentsForDay(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const todayClass = isToday(day);

          return (
            <div 
              key={day.toISOString()}
              className={`bg-white dark:bg-gray-800 rounded-xl p-3 min-h-[140px] hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:scale-105 transform border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 ${
                !isCurrentMonth ? 'opacity-60' : ''
              }`}
            >
              <div className="flex flex-col h-full">
                <div className={`inline-flex items-center justify-center w-10 h-10 text-sm font-bold rounded-full mb-3 transition-all duration-300 shadow-sm ${
                  todayClass 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg animate-pulse' 
                    : 'text-gray-900 dark:text-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                }`}>
                  {format(day, 'd')}
                </div>
                
                <div className="flex-1 space-y-2 overflow-hidden">
                  {dayAppointments.slice(0, 3).map((appointment) => (
                    <div
                      key={appointment.id}
                      className="group/appointment p-2 rounded-lg text-xs font-medium truncate transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md border-l-4"
                      style={{ 
                        backgroundColor: appointment.color + '15',
                        borderLeftColor: appointment.color
                      }}
                    >
                      <div className="flex items-center space-x-1 mb-1">
                        <Clock className="w-3 h-3" style={{ color: appointment.color }} />
                        <span className="font-bold" style={{ color: appointment.color }}>
                          {format(appointment.startTime, 'HH:mm')}
                        </span>
                      </div>
                      <div className="truncate font-semibold text-gray-800 dark:text-gray-200 group-hover/appointment:text-gray-900 dark:group-hover/appointment:text-white">
                        {appointment.title}
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <User className="w-3 h-3 text-gray-500" />
                        <span className="truncate text-gray-600 dark:text-gray-400">
                          {appointment.clientName}
                        </span>
                      </div>
                    </div>
                  ))}
                  {dayAppointments.length > 3 && (
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 pl-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 cursor-pointer">
                      +{dayAppointments.length - 3} more appointments
                    </div>
                  )}
                  {dayAppointments.length === 0 && (
                    <div className="flex-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-xs text-gray-400 dark:text-gray-500 text-center">
                        <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <Clock className="w-3 h-3" />
                        </div>
                        Available
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;