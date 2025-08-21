import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, Reply, Share2, Bookmark, Flag, MoreVertical, User, Calendar, Award, Heart, Eye, CheckCircle, Sparkles, Crown, Trophy, Medal, Flame, Zap, Target, Gift, Rocket, Diamond, Edit, Trash2 } from 'lucide-react';

interface Review {
  id: number;
  professionalName: string;
  professionalAvatar: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
  helpful: boolean;
  canEdit: boolean;
  canDelete: boolean;
  professionalReply?: string;
  replyDate?: string;
}

const ReviewsList: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [editingReview, setEditingReview] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [editRating, setEditRating] = useState(5);

  const reviews: Review[] = [
    {
      id: 1,
      professionalName: 'Dr. Emily Davis',
      professionalAvatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150',
      service: 'Cardiology Consultation',
      rating: 5,
      date: '2024-01-15',
      comment: 'Dr. Davis was incredibly thorough and professional. She took the time to explain everything clearly and made me feel comfortable throughout the consultation. Highly recommend!',
      likes: 12,
      helpful: true,
      canEdit: true,
      canDelete: true,
      professionalReply: 'Thank you so much for your kind words! It was a pleasure helping you with your health concerns.',
      replyDate: '2024-01-16'
    },
    {
      id: 2,
      professionalName: 'James Rodriguez',
      professionalAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      service: 'Legal Consultation',
      rating: 4,
      date: '2024-01-12',
      comment: 'Very knowledgeable lawyer who helped me understand complex contract terms. The consultation was worth every penny and saved me from potential legal issues.',
      likes: 8,
      helpful: true,
      canEdit: true,
      canDelete: true
    },
    {
      id: 3,
      professionalName: 'Dr. Sarah Williams',
      professionalAvatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      service: 'Therapy Session',
      rating: 5,
      date: '2024-01-10',
      comment: 'Dr. Williams is an amazing therapist. She creates a safe space and provides practical tools for managing anxiety. I feel much better after our sessions.',
      likes: 15,
      helpful: true,
      canEdit: true,
      canDelete: true,
      professionalReply: 'I\'m so glad our sessions are helping you! Keep up the great work on your mental health journey.',
      replyDate: '2024-01-11'
    },
    {
      id: 4,
      professionalName: 'Michael Thompson',
      professionalAvatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      service: 'Financial Planning',
      rating: 4,
      date: '2024-01-08',
      comment: 'Great financial advisor who helped me create a solid retirement plan. His expertise in investment strategies is impressive and he explains everything clearly.',
      likes: 6,
      helpful: false,
      canEdit: true,
      canDelete: true
    },
    {
      id: 5,
      professionalName: 'Dr. Lisa Chen',
      professionalAvatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      service: 'Dermatology Consultation',
      rating: 5,
      date: '2024-01-05',
      comment: 'Excellent dermatologist! Dr. Chen was very professional and provided great skincare advice. The treatment plan she recommended has worked wonderfully.',
      likes: 18,
      helpful: true,
      canEdit: true,
      canDelete: true,
      professionalReply: 'Thank you for the wonderful review! I\'m thrilled that the treatment plan is working well for you.',
      replyDate: '2024-01-06'
    }
  ];

  const renderStars = (rating: number, interactive: boolean = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
            disabled={!interactive}
            className={`w-5 h-5 transition-all duration-300 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 dark:text-gray-600'
            } ${interactive ? 'hover:scale-110 cursor-pointer' : ''}`}
          >
            <Star className="w-full h-full" />
          </button>
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

  const handleEditReview = (review: Review) => {
    setEditingReview(review.id);
    setEditText(review.comment);
    setEditRating(review.rating);
  };

  const handleSaveEdit = (reviewId: number) => {
    // Here you would typically save to your backend
    console.log('Saving review edit:', { reviewId, text: editText, rating: editRating });
    setEditingReview(null);
    setEditText('');
    setEditRating(5);
  };

  const handleCancelEdit = () => {
    setEditingReview(null);
    setEditText('');
    setEditRating(5);
  };

  const handleDeleteReview = (reviewId: number) => {
    // Here you would typically delete from your backend
    console.log('Deleting review:', reviewId);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Star className="w-5 h-5 text-white fill-current" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Reviews</h2>
              <p className="text-gray-600 dark:text-gray-400">Manage your feedback and experiences</p>
            </div>
          </div>
          
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-2xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold">
            <Edit className="w-5 h-5" />
            <span>Write New Review</span>
          </button>
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-in slide-in-from-bottom-4 duration-1000 ${
                selectedReview === review.id ? 'ring-2 ring-yellow-500 ring-offset-2' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={review.professionalAvatar}
                        alt={review.professionalName}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300">
                        {review.professionalName}
                      </h3>
                      <p className="text-white/80 font-medium">{review.service}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-white/80 mb-2">{formatDate(review.date)}</div>
                    <div className="flex items-center space-x-2">
                      {review.helpful && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Review Text */}
                {editingReview === review.id ? (
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Update Rating
                      </label>
                      {renderStars(editRating, true, setEditRating)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Update Review
                      </label>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none"
                        placeholder="Share your experience..."
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleSaveEdit(review.id)}
                        className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-medium"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    "{review.comment}"
                  </blockquote>
                )}

                {/* Professional Reply */}
                {review.professionalReply && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 mb-6 border-l-4 border-blue-400">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Reply className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            Response from {review.professionalName}
                          </p>
                          <span className="text-xs text-blue-500 dark:text-blue-300">
                            {review.replyDate && formatDate(review.replyDate)}
                          </span>
                        </div>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          "{review.professionalReply}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 group/stat">
                    <ThumbsUp className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover/stat:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Helpful</p>
                      <p className="font-bold text-gray-900 dark:text-white">{review.likes}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 transition-all duration-300 group/stat">
                    <Award className="w-5 h-5 text-green-600 dark:text-green-400 group-hover/stat:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-xs text-green-600 dark:text-green-400">Rating</p>
                      <p className="font-bold text-gray-900 dark:text-white">{review.rating}.0</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300 group/stat">
                    <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover/stat:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-xs text-purple-600 dark:text-purple-400">Date</p>
                      <p className="font-bold text-gray-900 dark:text-white text-xs">{formatDate(review.date)}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    {review.canEdit && (
                      <button
                        onClick={() => handleEditReview(review)}
                        className="flex items-center space-x-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 hover:scale-105 group/btn"
                      >
                        <Edit className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                    )}
                    <button className="flex items-center space-x-2 px-4 py-2 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl transition-all duration-300 hover:scale-105 group/btn">
                      <ThumbsUp className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">Helpful</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl transition-all duration-300 hover:scale-105 group/btn">
                      <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-xl transition-all duration-300 hover:scale-110 group/btn">
                      <Bookmark className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    </button>
                    {review.canDelete && (
                      <button
                        onClick={() => handleDeleteReview(review.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-300 hover:scale-110 group/btn"
                      >
                        <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                    )}
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110 group/btn">
                      <MoreVertical className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {reviews.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Star className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No reviews yet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              You haven't written any reviews yet. Share your experiences to help other clients.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-2xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Edit className="w-5 h-5" />
              <span className="font-bold">Write Your First Review</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsList;