import React from 'react';
import ClientHero from './ClientHero';
import UpcomingAppointments from './UpcomingAppointments';
import ModuleCards from './ModuleCards';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';

interface ClientLandingProps {
  onNavigate?: (page: string) => void;
}

const ClientLanding: React.FC<ClientLandingProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <ClientHero onNavigate={onNavigate} />
      <UpcomingAppointments onNavigate={onNavigate} />
      <ModuleCards onNavigate={onNavigate} />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ClientLanding;