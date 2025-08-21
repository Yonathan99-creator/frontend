import React from 'react';
import AppointmentsHero from './AppointmentsHero';
import AppointmentsStats from './AppointmentsStats';
import AppointmentsList from './AppointmentsList';
import UpcomingAppointments from './UpcomingAppointments';

const AppointmentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <AppointmentsHero />
      <AppointmentsStats />
      <UpcomingAppointments />
      <AppointmentsList />
    </div>
  );
};

export default AppointmentsPage;