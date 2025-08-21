import React, { useState } from 'react';
import { CheckCircle, Calendar, Clock, User, DollarSign, MapPin, Video, Phone, Star, Award, Crown, Trophy, Medal, Flame, Sparkles, Zap, Target, Heart, Eye, Bookmark, Gift, Rocket, Diamond, CreditCard, Bell, Mail, MessageCircle } from 'lucide-react';

interface BookingConfirmationProps {
  onNavigate?: (page: string) => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ onNavigate }) => {
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('visa-4242');
  const [notes, setNotes] = useState('');

  const bookingDetails = {
    professional: {
      name: 'Dr. Emily Davis',
      specialty: 'Cardiologist',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      reviews: 456
    },
    service: {
      name: 'Initial Consultation',
      duration: 60,
      price: 200,
      type: 'Video Call'
    },
    appointment: {
      date: 'January 25, 2025',
      time: '2:00 PM',
      timezone: 'EST'
    }
  };

  const paymentMethods = [
    { id: 'visa-4242', label: 'Visa ****4242', type: 'Visa', default: true },
    { id: 'mastercard-8888', label: 'Mastercard ****8888', type: 'Mastercard', default: false },
    { id: 'amex-1005', label: 'Amex ****1005', type: 'American Express', default: false }
  ];

  const handleBooking = async () => {
    setIsBooking(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsBooking(false);
    setIsBooked(true);
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

  if (isBooked) {
    return (
      <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-12">
            {/* Success Animation */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin shadow-lg">
                <Sparkles className="h-6 w-6 text-white animate-pulse" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Booking Confirmed! 🎉
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your appointment has been successfully scheduled
            </p>

            {/* Booking Details */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Appointment Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Professional:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{bookingDetails.professional.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Service:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{bookingDetails.service.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Date & Time:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {bookingDetails.appointment.date} at {bookingDetails.appointment.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total:</span>
                  <span className="font-bold text-gray-900 dark:text-white text-lg">${bookingDetails.service.price}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate && onNavigate('appointments')}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
              >
                View My Appointments
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('home')}
                className="px-8 py-4 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 font-bold"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center space-x-4 justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Confirm Your Booking</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Review your appointment details before confirming</p>
        </div>

        {/* Booking Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Appointment Summary</h3>
          
          {/* Professional Info */}
          <div className="flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl mb-6">
            <img
              src={bookingDetails.professional.image}
              alt={bookingDetails.professional.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-lg"
            />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {bookingDetails.professional.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{bookingDetails.professional.specialty}</p>
              <div className="flex items-center space-x-2 mt-1">
                {renderStars(bookingDetails.professional.rating)}
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {bookingDetails.professional.rating} ({bookingDetails.professional.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Service and Schedule Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Service</p>
                  <p className="font-bold text-gray-900 dark:text-white">{bookingDetails.service.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400">Duration</p>
                  <p className="font-bold text-gray-900 dark:text-white">{bookingDetails.service.duration} minutes</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Date & Time</p>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {bookingDetails.appointment.date} at {bookingDetails.appointment.time}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <div>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Total Cost</p>
                  <p className="font-bold text-gray-900 dark:text-white">${bookingDetails.service.price}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Payment Method</h4>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    paymentMethod === method.id
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-white">{method.label}</span>
                    {method.default && (
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-bold">
                        Default
                      </span>
                    )}
                  </div>
                  {paymentMethod === method.id && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Any specific concerns or questions you'd like to discuss..."
            />
          </div>

          {/* Terms */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 mb-6 border border-yellow-200/50 dark:border-yellow-700/50">
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">Booking Terms</h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-200 space-y-1">
                  <li>• Free cancellation up to 24 hours before appointment</li>
                  <li>• Payment will be processed after the consultation</li>
                  <li>• You'll receive a confirmation email with meeting details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Button */}
        <div className="text-center">
          <button
            onClick={handleBooking}
            disabled={isBooking}
            className="inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
          >
            {isBooking ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Confirming Booking...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-6 h-6" />
                <span>Confirm & Book Appointment</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;