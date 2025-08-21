import React from 'react';
import ClientHero from './ClientHero';
import ClientServices from './ClientServices';
import ClientFeatures from './ClientFeatures';
import ClientProfessionals from './ClientProfessionals';
import ClientTestimonials from './ClientTestimonials';
import ClientFooter from './ClientFooter';
import ClientNavbar from '../shared/ClientNavbar';

interface ClientLandingProps {
  onNavigate?: (page: string) => void;
}

const ClientLanding: React.FC<ClientLandingProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ClientNavbar onLogoClick={() => {}} showBackToLanding={false} isLandingPage={true} />
      <main>
        <ClientHero />
        <ClientServices />
        <ClientFeatures />
        <ClientProfessionals />
        <ClientTestimonials />
      </main>
      <ClientFooter />
    </div>
  );
};

export default ClientLanding;