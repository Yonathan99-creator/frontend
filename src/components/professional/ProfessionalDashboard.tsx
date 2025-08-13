import React from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { AppProvider, useApp } from '../../contexts/AppContext';
import { LoadingScreen } from '../shared';
import ProfessionalNavbar from './shared/ProfessionalNavbar';
import ProfessionalLandingPage from './shared/ProfessionalLandingPage';
import CalendarView from './calendar/CalendarView';
import MyProfile from './profile/MyProfile';
import MyServices from './services/MyServices';
import MyAppointments from './appointments/MyAppointments';
import MyReviews from './reviews/MyReviews';
import MySubscription from './subscription/MySubscription';

const ProfessionalDashboardContent: React.FC = () => {
  const { currentModule } = useApp();
  const [showLanding, setShowLanding] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time for professional dashboard
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleEnterDashboard = (moduleName?: string) => {
    setShowLanding(false);
    if (moduleName) {
      // Module will be set by the component that calls this
    }
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
  };

  if (showLanding) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ProfessionalLandingPage onModuleClick={handleEnterDashboard} />
      </div>
    );
  }

  const renderCurrentModule = () => {
    switch (currentModule) {
      case 'My Profile':
        return <MyProfile />;
      case 'My Services':
        return <MyServices />;
      case 'My Calendar':
        return <CalendarView />;
      case 'My Appointments':
        return <MyAppointments />;
      case 'My Reviews':
        return <MyReviews />;
      case 'My Subscription':
        return <MySubscription />;
      default:
        return <CalendarView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <ProfessionalNavbar onLogoClick={handleBackToLanding} showBackToLanding={true} isLandingPage={false} />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {renderCurrentModule()}
        </div>
      </main>
    </div>
  );
};

const ProfessionalDashboard: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <ProfessionalDashboardContent />
      </AppProvider>
    </ThemeProvider>
  );
};

export default ProfessionalDashboard;