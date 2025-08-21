import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, Phone, User, Star, CheckCircle, AlertCircle, XCircle, Edit, MessageCircle, Eye, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Bookmark, Share2 } from 'lucide-react';

const UpcomingAppointments: React.FC = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<number | null>(null);

  const upcomingAppointments = [
    {
      id: 1,
      professional: 'Dr. Emily Davis',
      specialty: 'Cardiologist',
      date: 'Today',
      time: '2:00 PM',
      duration: '30 min',
      type: 'Video Call',
      location: 'Online',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'confirmed',
      price: 200,
      notes: 'Follow-up consultation for recent test results',
      rating: 4.9,
      meetingLink: 'https://meet.probooking.com/dr-emily-davis',
      canReschedule: true,
      reminderSent: true
    },
    {
      id: 2,
      professional: 'James Rodriguez',
      specialty: 'Corporate Lawyer',
      date: 'Tomorrow',
      time: '10:00 AM',
      duration: '60 min',
      type: 'In Person',
      location: 'Downtown Office, 123 Business St',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'confirmed',
      price: 300,
      notes: 'Contract review and business formation discussion',
      rating: 4.8,
      canReschedule: true,
      reminderSent: false
    },
    {
      id: 3,
      professional: 'Dr. Sarah Williams',
      specialty: 'Clinical Psychologist',
      date: 'Dec 28',
      time: '3:30 PM',
      duration: '45 min',
      type: 'Video Call',
      location: 'Online',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'pending',
      price: 150,
      notes: 'Weekly therapy session - anxiety management',
      rating: 4.9,
      meetingLink: 'https://meet.probooking.com/dr-sarah-williams',
      canReschedule: true,
      reminderSent: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Call':
        return Video;
      case 'Phone Call':
        return Phone;
      default:
        return MapPin;
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Appointments</h2>
              <p className="text-gray-600 dark:text-gray-400">Your scheduled consultations and meetings</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {upcomingAppointments.map((appointment, index) => {
            const TypeIcon = getTypeIcon(appointment.type);
            const isSelected = selectedAppointment === appointment.id;
            
            return (
              <div
                key={appointment.id}
                className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000 ${
                  isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedAppointment(isSelected ? null : appointment.id)}
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${
                  appointment.status === 'confirmed' ? 'from-green-500 to-emerald-600' :
                  appointment.status === 'pending' ? 'from-yellow-500 to-orange-600' :
                  'from-red-500 to-pink-600'
                } text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={appointment.avatar}
                          alt={appointment.professional}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300">
                          {appointment.professional}
                        </h3>
                        <p className="text-white/80 font-medium">{appointment.specialty}</p>
                        <div className="flex items-center space-x-1 mt-2">
                          {renderStars(appointment.rating)}
                          <span className="text-sm text-white/80 ml-1">{appointment.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm`}>
                        {getStatusIcon(appointment.status)}
                        <span className="capitalize">{appointment.status}</span>
                      </div>
                      <div className="text-2xl font-bold mt-2 group-hover:scale-110 transition-transform duration-300">
                        ${appointment.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date and Time */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:rotate-12 group-hover/item:scale-110 transition-transform duration-300">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Date</p>
                        <p className="font-bold text-gray-900 dark:text-white">{appointment.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:rotate-12 group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Time</p>
                        <p className="font-bold text-gray-900 dark:text-white">{appointment.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:rotate-12 group-hover/item:scale-110 transition-transform duration-300">
                        <TypeIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Type</p>
                        <p className="font-bold text-gray-900 dark:text-white">{appointment.type}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:rotate-12 group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="font-bold text-gray-900 dark:text-white">{appointment.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Location/Meeting Info */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 mb-6 border border-blue-200/50 dark:border-blue-700/50">
                    <div className="flex items-center space-x-3">
                      <TypeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="text-sm font-bold text-blue-800 dark:text-blue-300">{appointment.type}</p>
                        <p className="text-sm text-blue-700 dark:text-blue-200">{appointment.location}</p>
                        {appointment.meetingLink && (
                          <a href={appointment.meetingLink} className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                            Join Meeting Link
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  {appointment.notes && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-4 mb-6 border-l-4 border-yellow-400">
                      <div className="flex items-start space-x-2">
                        <Target className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-yellow-600 dark:text-yellow-400 mb-1">Notes</p>
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">{appointment.notes}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-2">
                      {appointment.type === 'Video Call' && appointment.meetingLink && (
                        <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-105 font-medium">
                          <Video className="w-4 h-4" />
                          <span>Join Call</span>
                        </button>
                      )}
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105 font-medium">
                        <Eye className="w-4 h-4" />
                        <span>Details</span>
                      </button>
                      {appointment.canReschedule && (
                        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 font-medium">
                          <Edit className="w-4 h-4" />
                          <span>Reschedule</span>
                        </button>
                      )}
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 font-medium">
                        <MessageCircle className="w-4 h-4" />
                        <span>Message</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-300 hover:scale-110">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 hover:scale-110">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl transition-all duration-300 hover:scale-110">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {upcomingAppointments.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No upcoming appointments</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              You don't have any scheduled appointments. Book your first consultation with a professional.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">Book Your First Appointment</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingAppointments;