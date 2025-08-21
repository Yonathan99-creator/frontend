import React from 'react';
import BookingHero from './BookingHero';
import ProfessionalSelection from './ProfessionalSelection';
import ServiceSelection from './ServiceSelection';
import DateTimeSelection from './DateTimeSelection';
import BookingConfirmation from './BookingConfirmation';

interface BookingPageProps {
  onNavigate?: (page: string) => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <BookingHero />
      <ProfessionalSelection onNavigate={onNavigate} />
      <ServiceSelection />
      <DateTimeSelection />
      <BookingConfirmation onNavigate={onNavigate} />
    </div>
  );
};

export default BookingPage;