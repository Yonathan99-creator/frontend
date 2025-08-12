import React from 'react';
import Hero from './landing/Hero';
import ModuleCards from './landing/ModuleCards';
import LandingCalendar from './landing/LandingCalendar';
import Reviews from './landing/Reviews';
import Footer from './Footer';

interface LandingPageProps {
  onModuleClick?: (moduleName: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onModuleClick }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main>
        <Hero />
        <ModuleCards onModuleClick={onModuleClick} />
        <LandingCalendar />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;