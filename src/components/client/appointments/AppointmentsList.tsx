import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, Phone, User, Star, CheckCircle, AlertCircle, XCircle, Edit, MessageCircle, Eye, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Bookmark, Share2, Filter, Download } from 'lucide-react';

const AppointmentsList: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [selectedAppointment, setSelectedAppointment] = useState<number | null>(null);

  const allAppointments = [
    {
      id: 1,
      professional: 'Dr. Emily Davis',
      specialty: 'Cardiologist',
      date: '2024-01-20',
      time: '2:00 PM',
      duration: '30 min',
      type: 'Video Call',
      location: 'Online',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'completed',
      price: 200,
      rating: 5,
      review: 'Excellent consultation, very thorough and professional.',
      notes: 'Follow-up consultation for recent test results'
    },
    {
      id: 2,
      professional: 'James Rodriguez',
      specialty: 'Corporate Lawyer',
      date: '2024-01-18',
      time: '10:00 AM',
      duration: '60 min',
      type: 'In Person',
      location: 'Downtown Office',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'completed',
      price: 300,
      rating: 4,
      review: 'Very knowledgeable and helped with contract review.',
      notes: 'Contract review and business formation discussion'
    },
    {
      id: 3,
      professional: 'Dr. Sarah Williams',
      specialty: 'Clinical Psychologist',
      date: '2024-01-15',
      time: '3:30 PM',
      duration: '45 min',
      type: 'Video Call',
      location: 'Online',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'completed',
      price: 150,
      rating: 5,
      review: 'Amazing therapist, very understanding and helpful.',
      notes: 'Weekly therapy session - anxiety management'
    },
    {
      id: 4,
      professional: 'Michael Thompson',
      specialty: 'Financial Advisor',
      date: '2024-01-12',
      time: '11:00 AM',
      duration: '45 min',
      type: 'Video Call',
      location: 'Online',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      status: 'completed',
      price: 180,
      rating: 4,
      review: 'Great advice on investment strategy and retirement planning.',
      notes: 'Investment portfolio review and retirement planning'
    },
    {
      id: 5,
      professional: 'Dr. Lisa Chen',
      specialty: 'Dermatologist',
      date: '2024-01-10',
      time: '9:00 AM',
      duration: '30 min',
      type: 'In Person',
      location: 'Medical Center',
      avatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      status: 'cancelled',
      price: 175,
      notes: 'Skin consultation and treatment options'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
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
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredAppointments = allAppointments.filter(appointment => 
    filterStatus === 'all' || appointment.status === filterStatus
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Appointment History</h2>
              <p className="text-gray-600 dark:text-gray-400">View and manage all your appointments</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="date">Sort by Date</option>
              <option value="professional">Professional Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>

            <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-6">
          {filteredAppointments.map((appointment, index) => {
            const TypeIcon = getTypeIcon(appointment.type);
            const isSelected = selectedAppointment === appointment.id;
            
            return (
              <div
                key={appointment.id}
                className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-in slide-in-from-bottom-4 duration-1000 ${
                  isSelected ? 'ring-2 ring-purple-500 ring-offset-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedAppointment(isSelected ? null : appointment.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={appointment.avatar}
                        alt={appointment.professional}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {appointment.professional}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {appointment.specialty}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-gray-500 dark:text-gray-500">
                            {formatDate(appointment.date)} • {appointment.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(appointment.status)} mb-2`}>
                        {getStatusIcon(appointment.status)}
                        <span className="capitalize">{appointment.status}</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${appointment.price}
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                      <TypeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Type</p>
                        <p className="font-medium text-gray-900 dark:text-white">{appointment.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                      <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="font-medium text-gray-900 dark:text-white">{appointment.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                      <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                        <p className="font-medium text-gray-900 dark:text-white">{appointment.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  {appointment.notes && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 mb-4 border border-blue-200/50 dark:border-blue-700/50">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Notes:</strong> {appointment.notes}
                      </p>
                    </div>
                  )}

                  {/* Review (if completed) */}
                  {appointment.status === 'completed' && appointment.rating && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-4 mb-4 border border-yellow-200/50 dark:border-yellow-700/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-bold text-yellow-800 dark:text-yellow-300">Your Review</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= appointment.rating! 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        "{appointment.review}"
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105 font-medium">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      {appointment.status === 'completed' && !appointment.rating && (
                        <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-xl hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-all duration-300 hover:scale-105 font-medium">
                          <Star className="w-4 h-4" />
                          <span>Leave Review</span>
                        </button>
                      )}
                      <button className="flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 font-medium">
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
        {filteredAppointments.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No appointments found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              No appointments match your current filter criteria. Try adjusting your filters or book a new appointment.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">Book New Appointment</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentsList;