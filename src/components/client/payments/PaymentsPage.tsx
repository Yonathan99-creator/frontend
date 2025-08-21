import React from 'react';
import PaymentsHero from './PaymentsHero';
import PaymentsStats from './PaymentsStats';
import PaymentMethods from './PaymentMethods';
import TransactionHistory from './TransactionHistory';

const PaymentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <PaymentsHero />
      <PaymentsStats />
      <PaymentMethods />
      <TransactionHistory />
    </div>
  );
};

export default PaymentsPage;