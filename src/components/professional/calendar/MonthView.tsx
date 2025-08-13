import React from 'react';
import { Appointment } from '../../../types/calendar';

interface MonthViewProps {
  currentDate: Date;
  appointments: Appointment[];
}

const MonthView: React.FC<MonthViewProps> = ({ currentDate, appointments }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Month View for {currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
      </h2>
      <p>Displaying {appointments.length} appointments.</p>
      {/* Add your month view rendering logic here */}
    </div>
  );
};

export default MonthView;