# Eventixi

**Plataforma Digital de Eventos** - Un sitio frontend para reservar espacios y venues en Neiva.

## 📋 Descripción

Eventixi es una plataforma digital que permite a los usuarios explorar y reservar diferentes espacios para eventos, incluyendo:

- ⚽ Canchas deportivas
- 🏨 Hoteles
- 🏕️ Glamping y espacios en naturaleza
- 🎉 Salones y espacios para eventos

## 🏗️ Estructura del Proyecto

```
frontend/
├── pages/              # Páginas HTML
│   ├── index.html     # Página principal
│   └── admin_dashboard.html  # Panel administrativo
├── scripts/           # Archivos JavaScript
│   ├── main.js        # Lógica principal
│   ├── api.js         # Llamadas a API
│   ├── auth-api.js    # Autenticación
│   ├── login.js       # Gestión de login
│   ├── session.js     # Gestión de sesiones
│   ├── reservations.js # Lógica de reservas
│   ├── admin_dashboard.js    # Panel admin
│   ├── Bookingvalidators.js  # Validaciones
│   └── Testemail.js   # Pruebas de email
├── styles/            # Estilos CSS
│   └── admin-dashboard.css   # Estilos del panel
└── assets/            # Recursos estáticos
    ├── icons/         # Iconos
    ├── img/           # Imágenes
    └── video/         # Videos
```

## 🚀 Despliegue en Vercel

### Requisitos previos
- Cuenta en [Vercel](https://vercel.com)
- Proyecto en GitHub, GitLab o Bitbucket

### Pasos para desplegar

1. **Preparar el repositorio Git:**
   ```bash
   git add .
   git commit -m "Preparación para despliegue en Vercel"
   git push origin main
   ```

2. **Conectar con Vercel:**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio
   - Vercel detectará automáticamente que es un proyecto estático
   - Haz clic en "Deploy"

3. **Configuración automática:**
   - El archivo `vercel.json` ya está configurado
   - La carpeta `frontend` se sirve como raíz pública
   - Los assets se cachean automáticamente

## 💻 Tecnologías

- **HTML5** - Estructura
- **CSS3** - Estilos (Vanilla + CSS personalizado)
- **JavaScript Vanilla** - Interactividad
- **Fuentes de Google** - Tipografía (Nunito, Poppins, Inter)
- **Font Awesome** - Iconos

## 📝 Variables de Entorno

Si necesitas variables de entorno, créalas en un archivo `.env.local`:

```env
VITE_API_URL=https://tu-api-url.com
```

> **Nota:** Este proyecto es frontend-only. Para conectar con un backend, actualiza las URLs de API en los archivos JavaScript.

## 🔍 Archivos importantes para producción

- ✅ `vercel.json` - Configuración de Vercel
- ✅ `.gitignore` - Archivos ignorados en Git
- ✅ `frontend/` - Carpeta raíz del contenido estático

## 🛠️ Desarrollo local

Para ver el proyecto localmente:

1. Abre `frontend/pages/index.html` en tu navegador
2. O usa un servidor local (LiveServer, http-server, etc.)

```bash
# Con Python 3
python -m http.server 8000 --directory frontend

# O con Node.js (http-server)
npx http-server frontend -p 8000
```

Luego accede a `http://localhost:8000`

## 📌 Checklist antes de desplegar

- [x] Archivos estáticos organizados correctamente
- [x] Rutas relativas correctas en el código
- [x] `vercel.json` configurado
- [x] `.gitignore` configurado
- [x] Sin secretos o credenciales en el código
- [x] Todas las imágenes y assets accesibles
- [x] Links internos funcionando correctamente

## ⚙️ Configuración adicional

### Cache de assets
Los assets en `/assets/` se cachean por 1 año (31536000 segundos) automáticamente en Vercel.

### Headers de seguridad
Se incluyen headers de seguridad por defecto:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`

## 📞 Soporte

Para problemas con Vercel, consulta:
- [Documentación de Vercel](https://vercel.com/docs)
- [Troubleshooting guide](https://vercel.com/support)

## 📄 Licencia

Proyecto privado - Todos los derechos reservados.

---

**Última actualización:** Mayo 2026