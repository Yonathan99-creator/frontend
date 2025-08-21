import React from 'react';
import ProfessionalNavbar from './ProfessionalNavbar';
import ProfessionalHero from '../landing/ProfessionalHero';
import ProfessionalModules from '../landing/ProfessionalModules';
import ProfessionalCalendar from '../landing/ProfessionalCalendar';
import ProfessionalReviews from '../landing/ProfessionalReviews';
import ProfessionalFooter from './ProfessionalFooter';

interface ProfessionalLandingPageProps {
  onModuleClick?: (moduleName: string) => void;
}

const ProfessionalLandingPage: React.FC<ProfessionalLandingPageProps> = ({ onModuleClick }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfessionalNavbar onLogoClick={() => {}} showBackToLanding={false} isLandingPage={true} />
      <ProfessionalHero />
      <ProfessionalModules onModuleClick={onModuleClick} />
      <ProfessionalCalendar />
      <ProfessionalReviews />
      <ProfessionalFooter />
    </div>
  );
};

export default ProfessionalLandingPage;