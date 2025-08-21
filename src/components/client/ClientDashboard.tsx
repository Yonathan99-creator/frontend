import React from 'react';
import { useAuth } from '../../contexts/auth/AuthContext';
import { LoadingScreen } from '../shared';
import App from './App';

const ClientDashboard: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user || user.role !== 'client') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            You don't have permission to access this dashboard.
          </p>
        </div>
      </div>
    );
  }

  return <App />;
};

export default ClientDashboard;