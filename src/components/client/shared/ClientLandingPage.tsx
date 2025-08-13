import React from 'react';
import ClientNavbar from './ClientNavbar';
import ClientHero from '../landing/ClientHero';
import ClientServices from '../landing/ClientServices';
import ClientFeatures from '../landing/ClientFeatures';
import ClientProfessionals from '../landing/ClientProfessionals';
import ClientTestimonials from '../landing/ClientTestimonials';
import ClientFooter from './ClientFooter';

interface ClientLandingPageProps {
  onModuleClick?: (moduleName: string) => void;
}

const ClientLandingPage: React.FC<ClientLandingPageProps> = ({ onModuleClick }) => {
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

export default ClientLandingPage;