import React from 'react';
import { AuthProvider, useAuth } from '../../contexts/auth/AuthContext';
import { ThemeProvider } from '../../contexts/ThemeContext';
import ClientNavbar from './shared/ClientNavbar';
import ClientLanding from './landing/ClientLanding';
import ProfessionalsPage from './professionals/ProfessionalsPage';
import AppointmentsPage from './appointments/AppointmentsPage';
import ReviewsPage from './reviews/ReviewsPage';
import PaymentsPage from './payments/PaymentsPage';
import ProfilesPage from './profiles/ProfilesPage';
import BookingPage from './booking/BookingPage';

const ClientDashboardContent: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Also scroll to top when the component mounts or page changes
  React.useEffect(() => {
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
        return <ClientLanding onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen">
      <ClientNavbar currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
    </div>
  );
};

const ClientDashboard: React.FC = () => {
  return (
    <ClientDashboardContent />
  );
};

export default ClientDashboard;