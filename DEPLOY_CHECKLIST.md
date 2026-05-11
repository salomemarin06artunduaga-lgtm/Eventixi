# CHECKLIST: Preparación para Deploy en Vercel

## ✅ Ya completado

- [x] **vercel.json** - Configurado con rutas correctas
- [x] **.gitignore** - Creado para ignorar archivos innecesarios  
- [x] **README.md** - Actualizado con instrucciones de deploy
- [x] **.nojekyll** - Creado para evitar procesamiento de Jekyll
- [x] **env-config.js** - Archivo de configuración de ambiente

## ⚠️ CRÍTICO - Acciones requeridas ANTES de desplegar

### 1. Actualizar URLs de API para PRODUCCIÓN

**Archivo:** `frontend/scripts/env-config.js`

Reemplaza `https://tu-backend-url.com/api` con tu URL real de backend:

```javascript
production: {
    API_BASE_URL: 'https://TU-DOMINIO.com/api',
    API_AUTH_URL: 'https://TU-DOMINIO.com/api/auth',
}
```

---

### 2. Incluir env-config.js en tus HTML files

En ambos archivos HTML (`index.html` y `admin_dashboard.html`), agrega esta línea **antes** de cargar otros scripts:

```html
<!-- En el <head> o justo antes del closing </body> -->
<script src="../scripts/env-config.js"></script>
```

---

### 3. Actualizar api.js y auth-api.js para usar CURRENT_ENV

En `api.js`, reemplaza:
```javascript
// ❌ ANTES (hardcoded)
const API_CONFIG = {
    baseURL: 'http://localhost:5000/api',
};

// ✅ DESPUÉS (dinámico)
const API_CONFIG = {
    baseURL: CURRENT_ENV.API_BASE_URL,
};
```

Lo mismo en `auth-api.js`:
```javascript
// ✅ DESPUÉS
const AUTH_CONFIG = {
    baseURL: CURRENT_ENV.API_AUTH_URL,
};
```

---

### 4. Verificar rutas relativas en los HTML

**Asegúrate que todas las rutas en HTML sean relativas:**

✅ Correcto:
```html
<link rel="stylesheet" href="../styles/admin-dashboard.css">
<script src="../scripts/admin_dashboard.js"></script>
```

❌ Incorrecto (no usar):
```html
<link rel="stylesheet" href="/styles/admin-dashboard.css">
<script src="/scripts/admin_dashboard.js"></script>
```

---

## 📋 Pasos finales para Git + Vercel

1. **Hacer commit de los cambios:**
   ```bash
   git add .
   git commit -m "Configuración para Vercel: env-config, vercel.json, gitignore"
   git push origin main
   ```

2. **Conectar repositorio a Vercel:**
   - Ir a https://vercel.com/new
   - Seleccionar tu repositorio
   - Vercel detectará automáticamente que es un proyecto estático
   - Root Directory: `.` (dejar por defecto)
   - Vercel será lo maneja automáticamente con vercel.json
   - Haz clic en "Deploy"

3. **Configurar dominio personalizado (opcional):**
   - En Vercel dashboard → Settings → Domains
   - Agregar tu dominio

---

## 🔒 Variables de entorno en Vercel (si necesitas)

Si necesitas variables de entorno secretas (API keys, tokens, etc.):

1. En Vercel Dashboard → Settings → Environment Variables
2. Agregar variable: `VITE_API_URL=https://tu-api.com`
3. Usar en tu código:
   ```javascript
   const apiUrl = process.env.VITE_API_URL || CURRENT_ENV.API_BASE_URL;
   ```

---

## 🧪 Pruebas antes de desplegar

- [ ] Abre `frontend/pages/index.html` localmente y verifica que cargue correctamente
- [ ] Abre DevTools (F12) → Console y verifica que NO haya errores de rutas
- [ ] Prueba funciones que hacen llamadas a API (debe fallar gracefully si backend no está disponible)
- [ ] Verifica que todas las imágenes en `/assets/` carguen correctamente
- [ ] Prueba navegación entre páginas (`index.html` → `admin_dashboard.html`)

---

## 🚨 Posibles problemas después del deploy

| Problema | Solución |
|----------|----------|
| **404 en rutas** | Vercel.json está configurado. Si aún falla, revisa routes en `vercel.json` |
| **Assets no cargan** | Verifica que rutas sean relativas (`../assets/...`) |
| **API calls fallan** | Actualiza `env-config.js` con URL correcta de backend |
| **CORS errors** | Configura CORS en tu backend para permitir `https://tu-dominio.vercel.app` |
| **CSS/JS inline no cargan** | Asegúrate que los archivos HTML tengan rutas relativas correctas |

---

## 📚 Referencias útiles

- [Vercel Static Site Deployment](https://vercel.com/docs/frameworks/static-sites)
- [Vercel Configuration File](https://vercel.com/docs/projects/project-configuration)
- [CORS Issues Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

**Status:** Listo para desplegar (después de completar acciones requeridas)
