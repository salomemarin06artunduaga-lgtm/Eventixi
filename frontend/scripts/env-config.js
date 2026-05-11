/**
 * =====================================================
 * CONFIGURACIÓN DE ENTORNO
 * =====================================================
 * Este archivo gestiona las URLs según el ambiente
 * de ejecución (desarrollo local o producción)
 */

// Determinar el ambiente
const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';

const ENV_CONFIG = {
    development: {
        API_BASE_URL: 'http://localhost:5000/api',
        API_AUTH_URL: 'http://localhost:5000/api/auth',
        APP_NAME: 'Eventixi (Dev)',
        DEBUG: true
    },
    production: {
        API_BASE_URL: 'https://tu-backend-url.com/api',  // ⚠️ ACTUALIZAR
        API_AUTH_URL: 'https://tu-backend-url.com/api/auth',  // ⚠️ ACTUALIZAR
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
