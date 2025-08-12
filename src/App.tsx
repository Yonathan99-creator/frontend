import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider, useApp } from './contexts/AppContext';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './components/LandingPage';
import CalendarView from './components/calendar/CalendarView';
import MyProfile from './components/profile/MyProfile';
import MyServices from './components/services/MyServices';
import MyAppointments from './components/appointments/MyAppointments';
import MyReviews from './components/reviews/MyReviews';
import MySubscription from './components/subscription/MySubscription';

const AppContent: React.FC = () => {
  const { currentModule } = useApp();
  const [isLoading, setIsLoading] = React.useState(true);
  const [showLanding, setShowLanding] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLanding(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterDashboard = (moduleName?: string) => {
    setShowLanding(false);
    if (moduleName) {
      // Module will be set by the component that calls this
    }
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar onLogoClick={handleBackToLanding} showBackToLanding={false} />
        <LoadingScreen />
      </div>
    );
  }

  if (showLanding) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar onLogoClick={handleBackToLanding} showBackToLanding={false} />
        <LandingPage onModuleClick={handleEnterDashboard} />
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
      <Navbar onLogoClick={handleBackToLanding} showBackToLanding={true} />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {renderCurrentModule()}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;