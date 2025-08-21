import React from 'react';
import ReviewsHero from './ReviewsHero';
import ReviewsStats from './ReviewsStats';
import ReviewsList from './ReviewsList';

const ReviewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <ReviewsHero />
      <ReviewsStats />
      <ReviewsList />
    </div>
  );
};

export default ReviewsPage;