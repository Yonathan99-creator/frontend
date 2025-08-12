import React from 'react';
import { Appointment } from '../../types/calendar';
import { Clock, User, MapPin, Phone } from 'lucide-react';

interface WeekViewProps {
  currentDate: Date;
  appointments: Appointment[];
}

const WeekView: React.FC<WeekViewProps> = ({ currentDate, appointments }) => {
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day;
  });

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const weekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getAppointmentsForDayAndHour = (day: Date, hour: number) => {
    return appointments.filter(appointment => {
      const appointmentDay = appointment.startTime.toDateString();
      const dayString = day.toDateString();
      const appointmentHour = appointment.startTime.getHours();
      return appointmentDay === dayString && appointmentHour === hour;
    });
  };

  const isToday = (day: Date) => {
    return day.toDateString() === new Date().toDateString();
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-8 gap-1 p-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-t-2xl">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <span className="text-sm font-bold text-gray-700 dark:text-gray-200 tracking-wide">Time</span>
        </div>
        {weekDays.map((day, index) => (
          <div key={day.toISOString()} className="bg-white dark:bg-gray-800 p-4 text-center rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <div className={`inline-flex flex-col items-center ${isToday(day) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}`}>
              <span className="text-sm font-bold tracking-wide">{weekDayNames[index]}</span>
              <span className={`text-lg font-bold mt-2 transition-all duration-300 ${isToday(day) ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg animate-pulse' : ''}`}>
                {day.getDate()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Time Grid */}
      <div className="max-h-[700px] overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-8 gap-1 p-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
          {hours.map((hour) => (
            <React.Fragment key={hour}>
              {/* Time Column */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-300 font-bold">
                  {hour.toString().padStart(2, '0')}:00
                </span>
              </div>
              
              {/* Day Columns */}
              {weekDays.map((day) => {
                const hourAppointments = getAppointmentsForDayAndHour(day, hour);
                
                return (
                  <div 
                    key={`${day.toISOString()}-${hour}`}
                    className="bg-white dark:bg-gray-800 p-3 min-h-[80px] hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-pointer rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group"
                  >
                    {hourAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="group/appointment p-3 rounded-xl text-xs font-medium mb-2 transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border-l-4"
                        style={{ 
                          backgroundColor: appointment.color + '15',
                          borderLeftColor: appointment.color
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold truncate" style={{ color: appointment.color }}>
                            {appointment.title}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" style={{ color: appointment.color }} />
                            <span className="text-xs font-semibold" style={{ color: appointment.color }}>
                              {appointment.startTime.toLocaleTimeString('en-US', { 
                                hour: '2-digit', 
                                minute: '2-digit',
                                hour12: false
                              })}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1 mb-1">
                          <User className="w-3 h-3 text-gray-500" />
                          <div className="font-semibold text-gray-800 dark:text-gray-200 truncate group-hover/appointment:text-gray-900 dark:group-hover/appointment:text-white">
                            {appointment.clientName}
                          </div>
                        </div>
                        
                        <div className="text-gray-600 dark:text-gray-400 text-xs">
                          Service: {appointment.service}
                        </div>
                        
                        {appointment.location && (
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-500 dark:text-gray-400 text-xs truncate">
                              {appointment.location}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {hourAppointments.length === 0 && (
                      <div className="flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="text-xs text-gray-400 dark:text-gray-500 text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-all duration-300">
                            <Clock className="w-4 h-4" />
                          </div>
                          Available Slot
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekView;