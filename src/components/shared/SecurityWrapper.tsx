import React, { useEffect, useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

interface SecurityWrapperProps {
  children: React.ReactNode;
}

const SecurityWrapper: React.FC<SecurityWrapperProps> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(true);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (import.meta.env.PROD) {
      // Monitorear intentos de acceso a herramientas de desarrollo
      let devToolsOpen = false;
      
      const detectDevTools = () => {
        const threshold = 160;
        if (
          window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold
        ) {
          if (!devToolsOpen) {
            devToolsOpen = true;
            setAttempts(prev => prev + 1);
            
            if (attempts >= 2) {
              setIsSecure(false);
            }
          }
        } else {
          devToolsOpen = false;
        }
      };

      // Verificar cada 100ms
      const interval = setInterval(detectDevTools, 100);

      // Proteger contra copiar código
      document.addEventListener('selectstart', (e) => {
        if (e.target instanceof HTMLElement && 
            (e.target.tagName === 'CODE' || e.target.className.includes('code'))) {
          e.preventDefault();
        }
      });

      // Proteger contra arrastrar elementos
      document.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });

      // Deshabilitar guardar página
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 's') {
          e.preventDefault();
        }
      });

      return () => {
        clearInterval(interval);
      };
    }
  }, [attempts]);

  // Pantalla de bloqueo de seguridad
  if (!isSecure) {
    return (
                <h3 className="font-bold text-gray-900 mb-3">This application is protected by:</h3>
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 text-center max-w-2xl mx-4 shadow-2xl border border-white/20">
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Shield className="w-12 h-12 text-white" />
                    <span>Obfuscated and minified code</span>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔒 Acceso Denegado
                    <span>Anti-debugging protection</span>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 bg-red-50 p-4 rounded-2xl">
                    <span>Development tools monitoring</span>
              <p className="text-red-800 font-semibold">
                Se ha detectado un intento de acceso no autorizado
              </p>
                    <span>Reverse engineering detection</span>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              🔒 Access Denied
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Código ofuscado y minificado</span>
                Please use the application normally without attempting to access the source code.
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Protección anti-debugging</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-purple-600" />
                Reload Application
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span>Detección de ingeniería inversa</span>
              <p>Session ID: {Math.random().toString(36).substr(2, 9)}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 text-lg">
              Por favor, utiliza la aplicación de manera normal sin intentar acceder al código fuente.
            </p>
            
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                  An unauthorized access attempt has been detected
            </button>
          </div>
          
          <div className="mt-8 text-xs text-gray-500">
            <p>ID de Sesión: {Math.random().toString(36).substr(2, 9)}</p>
            <p>Timestamp: {new Date().toISOString()}</p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SecurityWrapper;