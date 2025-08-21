import React from 'react';
import ProfessionalNavbar from './ProfessionalNavbar';
import ProfessionalHero from '../landing/ProfessionalHero';
import ProfessionalModules from '../landing/ProfessionalModules';
import ProfessionalCalendar from '../landing/ProfessionalCalendar';
import ProfessionalReviews from '../landing/ProfessionalReviews';
import ProfessionalFooter from './ProfessionalFooter';

const ProfessionalLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfessionalNavbar />
      <ProfessionalHero />
      <ProfessionalModules />
      <ProfessionalCalendar />
      <ProfessionalReviews />
      <ProfessionalFooter />
    </div>
  );
};

export default ProfessionalLandingPage;