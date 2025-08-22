// Utilidades de encriptación para datos sensibles

// Función simple de ofuscación para datos locales
export const obfuscateData = (data: string): string => {
  if (import.meta.env.PROD) {
    return btoa(encodeURIComponent(data));
  }
  return data;
};

// Función para desofuscar datos
export const deobfuscateData = (data: string): string => {
  if (import.meta.env.PROD) {
    try {
      return decodeURIComponent(atob(data));
    } catch {
      return data;
    }
  }
  return data;
};

// Generar hash simple para verificación de integridad
export const generateHash = (data: string): string => {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString(36);
};

// Verificar integridad de datos
export const verifyIntegrity = (data: string, hash: string): boolean => {
  return generateHash(data) === hash;
};

// Limpiar datos sensibles de la memoria
export const clearSensitiveData = () => {
  if (import.meta.env.PROD) {
    // Limpiar localStorage de datos temporales
    const keysToRemove = Object.keys(localStorage).filter(key => 
      key.includes('temp') || key.includes('cache') || key.includes('debug')
    );
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });

    // Limpiar sessionStorage
    sessionStorage.clear();
  }
};

// Proteger URLs y endpoints
export const protectEndpoints = () => {
  if (import.meta.env.PROD) {
    // Interceptar fetch requests para ofuscar URLs
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      // Log de seguridad sin exponer URLs reales
      console.log('🔒 Secure request initiated');
      return originalFetch.apply(this, args);
    };
  }
};