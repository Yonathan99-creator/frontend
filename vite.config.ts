import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minificar y ofuscar el código
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true, // Eliminar debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Eliminar funciones específicas
      },
      mangle: {
        // Ofuscar nombres de variables y funciones
        toplevel: true,
        safari10: true,
      },
      format: {
        comments: false, // Eliminar comentarios
      },
    },
    // Configurar chunks para ofuscar estructura
    rollupOptions: {
      output: {
        // Ofuscar nombres de archivos
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
        // Dividir en chunks más pequeños para ofuscar
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['date-fns', 'lucide-react'],
        },
      },
    },
    // Configuraciones adicionales de seguridad
    sourcemap: false, // No generar source maps en producción
    cssCodeSplit: true, // Dividir CSS para ofuscar
  },
  // Configuración para desarrollo
  server: {
    // Deshabilitar overlay de errores que puede exponer código
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
