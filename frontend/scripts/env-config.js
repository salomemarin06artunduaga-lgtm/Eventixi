/**
 * =====================================================
 * CONFIGURACIÓN DE ENTORNO
 * =====================================================
 * Este archivo gestiona las URLs según el ambiente
 * de ejecución (desarrollo local o producción)
 * 
 * En Vercel, configura estas variables de entorno:
 * - VITE_BACKEND_URL: https://tu-backend-url.com/api
 * - VITE_AUTH_URL: https://tu-backend-url.com/api/auth (opcional)
 */

// Determinar el ambiente
const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname === '::1';

// Obtener URLs de variables de entorno o usar defaults
const getBackendURL = () => {
    // En Vercel, acceder a variable de entorno global
    if (typeof window !== 'undefined' && window.VITE_BACKEND_URL) {
        return window.VITE_BACKEND_URL;
    }
    // Fallback según ambiente
    return isDevelopment 
        ? 'http://localhost:5000/api'
        : 'https://tu-backend-url.com/api'; // Fallback producción
};

const getAuthURL = () => {
    if (typeof window !== 'undefined' && window.VITE_AUTH_URL) {
        return window.VITE_AUTH_URL;
    }
    const backendURL = getBackendURL();
    return `${backendURL}/auth`;
};

const ENV_CONFIG = {
    development: {
        API_BASE_URL: 'http://localhost:5000/api',
        API_AUTH_URL: 'http://localhost:5000/api/auth',
        APP_NAME: 'Eventixi (Dev)',
        DEBUG: true
    },
    production: {
        API_BASE_URL: getBackendURL(),
        API_AUTH_URL: getAuthURL(),
        APP_NAME: 'Eventixi',
        DEBUG: false
    }
};

// Seleccionar configuración según ambiente
const CURRENT_ENV = isDevelopment ? ENV_CONFIG.development : ENV_CONFIG.production;

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CURRENT_ENV;
}

// Registrar ambiente en consola
console.log(`%c🚀 Eventixi - ${isDevelopment ? 'DESARROLLO' : 'PRODUCCIÓN'}`, 
    'color: #4ab3e8; font-weight: bold; font-size: 12px;');
console.log('📍 API URL:', CURRENT_ENV.API_BASE_URL);
console.log('🔐 Auth URL:', CURRENT_ENV.API_AUTH_URL);
console.log('💾 Debug mode:', CURRENT_ENV.DEBUG);
