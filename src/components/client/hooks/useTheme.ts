import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Función para obtener el tema inicial
  const getInitialTheme = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    // Primero verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Si no hay preferencia guardada, usar la del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  // Aplicar el tema al DOM
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Escuchar cambios en la preferencia del sistema solo si no hay preferencia guardada
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Solo cambiar si no hay una preferencia manual guardada
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setIsDark(e.matches);
      }
    };

    // Solo agregar el listener si no hay preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    }
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  // Función para resetear al tema del sistema
  const resetToSystemTheme = () => {
    localStorage.removeItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemPrefersDark);
  };

  return { 
    isDark, 
    toggleTheme,
    resetToSystemTheme
  };
};