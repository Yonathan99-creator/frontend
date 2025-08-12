import React from 'react';
import Hero from '../landing/Hero';
import ModuleCards from '../landing/ModuleCards';
import LandingCalendar from '../landing/LandingCalendar';
import Reviews from '../landing/Reviews';
import Footer from './Footer';
import { UserRole } from '../../types/auth';

interface LandingPageProps {
  onModuleClick?: (moduleName: string) => void;
  userRole?: UserRole;
}

const LandingPage: React.FC<LandingPageProps> = ({ onModuleClick, userRole }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main>
        <Hero userRole={userRole} />
        <ModuleCards onModuleClick={onModuleClick} userRole={userRole} />
        <LandingCalendar userRole={userRole} />
        <Reviews userRole={userRole} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;