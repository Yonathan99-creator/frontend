import React from 'react';
import { Appointment } from '../../types/calendar';
import { Clock, User, Phone, MapPin, Mail, Calendar as CalendarIcon } from 'lucide-react';

interface DayViewProps {
  currentDate: Date;
  appointments: Appointment[];
}

const DayView: React.FC<DayViewProps> = ({ currentDate, appointments }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const getAppointmentsForHour = (hour: number) => {
    return appointments.filter(appointment => {
      const appointmentDay = appointment.startTime.toDateString();
      const currentDay = currentDate.toDateString();
      const appointmentHour = appointment.startTime.getHours();
      return appointmentDay === currentDay && appointmentHour === hour;
    });
  };

  const isToday = currentDate.toDateString() === new Date().toDateString();

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-8 rounded-t-2xl border-b border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {currentDate.toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {appointments.filter(apt => apt.startTime.toDateString() === currentDate.toDateString()).length} appointments scheduled
              </p>
            </div>
          </div>
          {isToday && (
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
              Today
            </span>
          )}
        </div>
      </div>

      {/* Schedule */}
      <div className="max-h-[700px] overflow-y-auto custom-scrollbar">
        {hours.map((hour) => {
          const hourAppointments = getAppointmentsForHour(hour);
          const currentHour = new Date().getHours();
          const isCurrentHour = isToday && hour === currentHour;

          return (
            <div 
              key={hour}
              className={`flex border-b border-gray-100 dark:border-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group ${
                isCurrentHour ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-l-blue-500' : ''
              }`}
            >
              {/* Time Column */}
              <div className="w-28 p-6 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 flex flex-col items-center justify-center">
                <span className={`text-lg font-bold transition-all duration-300 ${
                  isCurrentHour 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {hour.toString().padStart(2, '0')}:00
                </span>
                {isCurrentHour && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                )}
              </div>
              
              {/* Appointments Column */}
              <div className="flex-1 p-6 min-h-[100px]">
                {hourAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {hourAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="group/appointment p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer border-l-4 hover:shadow-xl bg-white dark:bg-gray-800"
                        style={{ 
                          backgroundColor: appointment.color + '08',
                          borderLeftColor: appointment.color
                        }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover/appointment:scale-105 transition-transform duration-300">
                            {appointment.title}
                          </h4>
                          <span 
                            className="text-xs px-3 py-1 rounded-full font-bold shadow-sm"
                            style={{ 
                              backgroundColor: appointment.color + '25',
                              color: appointment.color
                            }}
                          >
                            {appointment.status}
                          </span>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Client</p>
                                <p className="font-semibold text-gray-900 dark:text-white">{appointment.clientName}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                  {appointment.startTime.toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                  })} - {appointment.endTime.toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                              <CalendarIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Service</p>
                                <p className="font-semibold text-gray-900 dark:text-white">{appointment.service}</p>
                              </div>
                            </div>
                            
                            {appointment.clientPhone && (
                              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                <div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                                  <p className="font-semibold text-gray-900 dark:text-white">{appointment.clientPhone}</p>
                                </div>
                              </div>
                            )}
                            
                            {appointment.clientEmail && (
                              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                                <div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                                  <p className="font-semibold text-gray-900 dark:text-white">{appointment.clientEmail}</p>
                                </div>
                              </div>
                            )}
                            
                            {appointment.location && (
                              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                <div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                                  <p className="font-semibold text-gray-900 dark:text-white">{appointment.location}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {appointment.notes && (
                          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-400">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                              <strong>Notes:</strong> {appointment.notes}
                            </p>
                          </div>
                        )}
                        
                        <div className="flex justify-end space-x-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <button className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300">
                            Edit
                          </button>
                          <button className="px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300">
                            Complete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-all duration-300">
                        <Clock className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium">Available Time Slot</span>
                      <p className="text-xs mt-1">Click to schedule an appointment</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayView;