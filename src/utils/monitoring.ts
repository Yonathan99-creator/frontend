// Sistema de monitoreo y logging seguro

interface SecurityEvent {
  type: 'dev_tools_attempt' | 'unauthorized_access' | 'suspicious_activity';
  timestamp: number;
  userAgent: string;
  url: string;
  details?: any;
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private maxEvents = 100;

  logEvent(type: SecurityEvent['type'], details?: any) {
    if (import.meta.env.PROD) {
      const event: SecurityEvent = {
        type,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        details
      };

      this.events.push(event);
      
      // Mantener solo los últimos eventos
      if (this.events.length > this.maxEvents) {
        this.events = this.events.slice(-this.maxEvents);
      }

      // En producción real, enviar a servidor de monitoreo
      this.sendToServer(event);
    }
  }

  private sendToServer(event: SecurityEvent) {
    // En producción real, implementar envío seguro al servidor
    if (import.meta.env.VITE_MONITORING_ENABLED === 'true') {
      // fetch('/api/security/log', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(event)
      // }).catch(() => {
      //   // Fallar silenciosamente para no exponer errores
      // });
    }
  }

  getEvents(): SecurityEvent[] {
    return [...this.events];
  }

  clearEvents() {
    this.events = [];
  }
}

export const securityMonitor = new SecurityMonitor();

// Función para reportar actividad sospechosa
export const reportSuspiciousActivity = (details: any) => {
  securityMonitor.logEvent('suspicious_activity', details);
};

// Función para reportar intentos de acceso a dev tools
export const reportDevToolsAttempt = () => {
  securityMonitor.logEvent('dev_tools_attempt', {
    screenSize: `${window.screen.width}x${window.screen.height}`,
    windowSize: `${window.innerWidth}x${window.innerHeight}`,
    timestamp: new Date().toISOString()
  });
};

// Función para reportar acceso no autorizado
export const reportUnauthorizedAccess = (details: any) => {
  securityMonitor.logEvent('unauthorized_access', details);
};