// Utilidades de seguridad para proteger la aplicación

// Deshabilitar herramientas de desarrollo en producción
export const disableDevTools = () => {
  if (import.meta.env.PROD) {
    // Deshabilitar clic derecho
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });

    // Deshabilitar teclas de desarrollo
    document.addEventListener('keydown', (e) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    });

    // Detectar si las herramientas de desarrollo están abiertas
    let devtools = {
      open: false,
      orientation: null as string | null
    };

    const threshold = 160;

    setInterval(() => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          devtools.open = true;
          // Redirigir o mostrar mensaje de advertencia
          console.clear();
          document.body.innerHTML = `
            <div style="
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 999999;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
              <div style="
                background: rgba(255, 255, 255, 0.95);
                padding: 3rem;
                border-radius: 20px;
                text-align: center;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(10px);
                max-width: 500px;
              ">
                <h1 style="
                  color: #1f2937;
                  font-size: 2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
                ">🔒 Acceso Restringido</h1>
                <p style="
                  color: #6b7280;
                  font-size: 1.1rem;
                  line-height: 1.6;
                  margin-bottom: 2rem;
                ">
                  Esta aplicación está protegida. El acceso a las herramientas de desarrollo no está permitido.
                </p>
                <button onclick="window.location.reload()" style="
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  padding: 12px 24px;
                  border: none;
                  border-radius: 10px;
                  font-weight: bold;
                  cursor: pointer;
                  font-size: 1rem;
                ">
                  Recargar Página
                </button>
              </div>
            </div>
          `;
        }
      } else {
        devtools.open = false;
      }
    }, 500);
  }
};

// Ofuscar código JavaScript crítico
export const obfuscateCode = () => {
  // Eliminar referencias a archivos fuente
  if (import.meta.env.PROD) {
    // Limpiar stack traces
    Error.stackTraceLimit = 0;
    
    // Sobrescribir console methods
    const noop = () => {};
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
    console.trace = noop;
  }
};

// Proteger contra debugging
export const antiDebug = () => {
  if (import.meta.env.PROD) {
    // Detectar debugger
    let startTime = performance.now();
    debugger;
    let endTime = performance.now();
    
    if (endTime - startTime > 100) {
      // Debugger detectado
      window.location.href = 'about:blank';
    }

    // Ejecutar cada 1 segundo
    setTimeout(antiDebug, 1000);
  }
};

// Proteger variables globales importantes
export const protectGlobals = () => {
  if (import.meta.env.PROD) {
    // Proteger window object
    Object.defineProperty(window, 'console', {
      get() {
        throw new Error('Access denied');
      },
      set() {
        throw new Error('Access denied');
      }
    });
  }
};

// Detectar herramientas de desarrollo avanzadas
export const detectDevTools = () => {
  if (import.meta.env.PROD) {
    let element = new Image();
    let devtools = false;
    
    Object.defineProperty(element, 'id', {
      get: function() {
        devtools = true;
        throw new Error('Developer tools detected');
      }
    });
    
    setInterval(() => {
      devtools = false;
      console.log(element);
      if (devtools) {
        window.location.href = 'about:blank';
      }
    }, 1000);
  }
};

// Limpiar datos sensibles del DOM
export const cleanupDOM = () => {
  if (import.meta.env.PROD) {
    // Eliminar atributos que puedan revelar información
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      el.removeAttribute('data-testid');
      el.removeAttribute('data-cy');
      el.removeAttribute('data-qa');
    });

    // Eliminar comentarios HTML
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_COMMENT,
      null
    );
    
    const comments = [];
    let node;
    while (node = walker.nextNode()) {
      comments.push(node);
    }
    
    comments.forEach(comment => {
      comment.parentNode?.removeChild(comment);
    });
  }
};

// Función principal para inicializar todas las protecciones
export const initializeSecurity = () => {
  if (import.meta.env.PROD) {
    disableDevTools();
    obfuscateCode();
    antiDebug();
    protectGlobals();
    detectDevTools();
    cleanupDOM();
    
    // Mensaje de advertencia en consola
    console.log('%c🔒 SISTEMA PROTEGIDO', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%cEsta aplicación está protegida contra ingeniería inversa.', 'color: orange; font-size: 14px;');
    console.log('%cEl acceso no autorizado está prohibido.', 'color: red; font-size: 14px;');
  }
};