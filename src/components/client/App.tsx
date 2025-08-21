import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/shared/Navbar';
import Landing from './components/landing/Landing';
import ProfessionalsPage from './components/professionals/ProfessionalsPage';
import AppointmentsPage from './components/appointments/AppointmentsPage';
import ReviewsPage from './components/reviews/ReviewsPage';
import PaymentsPage from './components/payments/PaymentsPage';
import ProfilesPage from './components/profiles/ProfilesPage';
import BookingPage from './components/booking/BookingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Also scroll to top when the component mounts or page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'professionals':
        return <ProfessionalsPage onNavigate={handleNavigation} />;
      case 'profile':
        return <ProfilesPage onNavigate={handleNavigation} />;
      case 'payments':
        return <PaymentsPage />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'booking':
        return <BookingPage onNavigate={handleNavigation} />;
      default:
        return <Landing onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;