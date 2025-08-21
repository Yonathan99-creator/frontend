import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Star, Eye, Bookmark, Gift, Rocket, Diamond } from 'lucide-react';

const DateTimeSelection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const unavailableSlots = ['10:00 AM', '2:30 PM', '4:00 PM'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.toDateString() === date2.toDateString();
  };

  const hasAvailableSlots = (date: Date) => {
    // Mock logic - some days have no availability
    const day = date.getDate();
    return ![7, 14, 21, 28].includes(day); // Sundays typically unavailable
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentMonth(newDate);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center space-x-4 justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Select Date & Time</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Choose your preferred appointment date and time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((day) => (
                <div key={day} className="text-center py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {getDaysInMonth(currentMonth).map((date, index) => (
                <div key={index} className="aspect-square">
                  {date ? (
                    <button
                      onClick={() => !isPastDate(date) && hasAvailableSlots(date) && setSelectedDate(date)}
                      disabled={isPastDate(date) || !hasAvailableSlots(date)}
                      className={`w-full h-full rounded-xl text-sm font-medium transition-all duration-300 relative ${
                        isPastDate(date) || !hasAvailableSlots(date)
                          ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                          : isToday(date)
                            ? 'bg-blue-500 text-white shadow-lg hover:shadow-xl'
                            : selectedDate && isSameDay(date, selectedDate)
                              ? 'bg-purple-500 text-white shadow-lg'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:scale-110'
                      }`}
                    >
                      {date.getDate()}
                      {hasAvailableSlots(date) && !isPastDate(date) && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"></div>
                      )}
                    </button>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Available</span>
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Available Times</h3>
            </div>

            {selectedDate ? (
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Available times for {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time, index) => {
                    const isUnavailable = unavailableSlots.includes(time);
                    const isSelected = selectedTime === time;
                    
                    return (
                      <button
                        key={time}
                        onClick={() => !isUnavailable && setSelectedTime(time)}
                        disabled={isUnavailable}
                        className={`p-4 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          isUnavailable
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                            : isSelected
                              ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                              : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400'
                        }`}
                      >
                        {time}
                        {isSelected && (
                          <CheckCircle className="w-4 h-4 inline ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Select a Date First</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a date from the calendar to see available time slots
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        {selectedDate && selectedTime && (
          <div className="text-center mt-12 animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-6 border border-purple-200/50 dark:border-purple-700/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Selected Appointment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })} at {selectedTime}
              </p>
            </div>
            <button className="inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg">
              <CheckCircle className="w-6 h-6" />
              <span>Confirm Booking</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DateTimeSelection;