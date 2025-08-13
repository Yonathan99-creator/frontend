import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  title?: string;
  subtitle?: string;
  showProgress?: boolean;
}

export default function LoadingScreen({ 
  title = "Loading...", 
  subtitle,
  showProgress = false 
}: LoadingScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-gray-600 mb-4">
            {subtitle}
          </p>
        )}
        
        {showProgress && (
          <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '45%' }}></div>
          </div>
        )}
      </div>
    </div>
  );
}