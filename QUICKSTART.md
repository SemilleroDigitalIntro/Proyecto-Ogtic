# Guía Rápida - PuntoGob

Esta es una guía rápida para comenzar a usar PuntoGob rápidamente.

## 🚀 Inicio Rápido para Desarrolladores

### 1. Clonar e Instalar
```bash
git clone https://github.com/SemilleroDigitalIntro/Proyecto-Ogtic.git
cd Proyecto-Ogtic
npm install
```

### 2. Configurar
```bash
# Crear archivo .env
cp .env.example .env
# Editar .env con tus credenciales
```

### 3. Ejecutar
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run DB
```

### 4. Acceder
- Frontend: http://localhost:5173
- Backend: http://localhost:4000

## 📖 Documentación Completa

- **[README.md](README.md)** - Descripción general del proyecto
- **[INSTALLATION.md](INSTALLATION.md)** - Guía de instalación detallada
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Cómo contribuir al proyecto
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Arquitectura técnica
- **[API.md](API.md)** - Documentación de la API REST
- **[SECURITY.md](SECURITY.md)** - Guía de seguridad

## 👤 Para Usuarios

### Registrarse

1. Visita la aplicación
2. Navega a "Registro"
3. Ingresa tu cédula (debe estar en el sistema)
4. Completa el formulario:
   - Nombre y Apellido
   - Email
   - Contraseña (mínimo 8 caracteres)
5. Haz clic en "Registrar"
6. Recibirás un email de confirmación

### Agendar una Cita

1. Inicia sesión con tu email y contraseña
2. En el Dashboard, haz clic en "Agendar Cita"
3. Selecciona:
   - **PuntoGob**: Ubicación del centro de atención
   - **Institución**: Organismo gubernamental
   - **Servicio**: Servicio que necesitas
   - **Fecha**: Día de tu cita
   - **Hora**: Horario disponible
4. Confirma los detalles
5. Recibirás confirmación por email

### Ver tus Citas

1. Inicia sesión
2. En el Dashboard, ve a "Mis Citas"
3. Podrás ver:
   - Citas próximas
   - Citas pasadas
   - Estado de cada cita

### Cancelar una Cita

1. Ve a "Mis Citas"
2. Selecciona la cita que deseas cancelar
3. Haz clic en "Cancelar Cita"
4. Confirma la cancelación

## 💻 Para Desarrolladores

### Estructura de Archivos Clave

```
Proyecto-Ogtic/
├── Index.jsx              # Punto de entrada, rutas
├── index.html             # HTML principal
├── Components/
│   ├── Inicio.jsx         # Dashboard principal
│   ├── Registro.jsx       # Formulario de registro
│   ├── Iniciarsesion.jsx  # Login
│   └── ComponentesParaF/  # Componentes de formularios
├── package.json           # Dependencias
└── vite.config.js         # Configuración de Vite
```

### Scripts Disponibles

```bash
npm run dev      # Desarrollo frontend (Vite)
npm run DB       # Servidor backend (Nodemon)
npm run build    # Build para producción
npm run preview  # Preview de build
npm run lint     # Verificar código
```

### Hacer Cambios

1. Crea una rama:
   ```bash
   git checkout -b feature/mi-feature
   ```

2. Realiza cambios

3. Prueba localmente:
   ```bash
   npm run dev
   npm run DB
   ```

4. Commit:
   ```bash
   git add .
   git commit -m "feat: descripción del cambio"
   ```

5. Push y abre PR:
   ```bash
   git push origin feature/mi-feature
   ```

### Agregar un Nuevo Componente

```javascript
// Components/MiComponente.jsx
import React from 'react';
import './Style/MiComponente.less';

export default function MiComponente({ prop1, prop2 }) {
    return (
        <div className="mi-componente">
            <h2>Mi Componente</h2>
            {/* Tu código aquí */}
        </div>
    );
}
```

### Agregar un Nuevo Endpoint

```javascript
// En server.js
app.get('/api/nuevo-endpoint', async (req, res) => {
    try {
        // Tu lógica aquí
        res.json({ success: true, data: resultado });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});
```

## 🔧 Solución Rápida de Problemas

### Puerto en Uso
```bash
# Matar proceso en puerto 5173
npx kill-port 5173

# Matar proceso en puerto 4000
npx kill-port 4000
```

### Error de Dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de Base de Datos
1. Verifica que MySQL esté corriendo
2. Verifica credenciales en `.env`
3. Verifica que la base de datos exista:
   ```sql
   SHOW DATABASES;
   ```

### Error de CORS
- Verifica que el backend tenga CORS habilitado
- Verifica las URLs en el frontend

## 🌐 URLs Útiles

- **Desarrollo Frontend**: http://localhost:5173
- **Desarrollo Backend**: http://localhost:4000
- **API Base**: http://localhost:4000/api
- **GitHub**: https://github.com/SemilleroDigitalIntro/Proyecto-Ogtic

## 📞 Obtener Ayuda

- **Issues**: [GitHub Issues](https://github.com/SemilleroDigitalIntro/Proyecto-Ogtic/issues)
- **Documentación**: Ver archivos `.md` en el repositorio
- **Contribuir**: Ver [CONTRIBUTING.md](CONTRIBUTING.md)

## ⚡ Atajos de Teclado (VSCode)

- `Ctrl + P` - Buscar archivo
- `Ctrl + Shift + F` - Buscar en todos los archivos
- `Ctrl + B` - Toggle sidebar
- `F12` - Ir a definición
- `Alt + Shift + F` - Formatear documento

## 🎯 Checklist de Desarrollo

Antes de hacer commit:
- [ ] El código funciona localmente
- [ ] No hay errores en consola
- [ ] Seguiste las convenciones de código
- [ ] Actualizaste documentación si es necesario
- [ ] Probaste en diferentes navegadores

Antes de hacer deploy:
- [ ] Build funciona (`npm run build`)
- [ ] Variables de entorno configuradas
- [ ] Base de datos migrada
- [ ] Backups configurados
- [ ] HTTPS habilitado
- [ ] Logs funcionando

## 📚 Recursos de Aprendizaje

- **React**: https://react.dev/learn
- **Vite**: https://vitejs.dev/guide/
- **Express**: https://expressjs.com/es/starter/installing.html
- **MySQL**: https://dev.mysql.com/doc/

## 🎨 Estándares de Diseño

### Colores
- Primario: `#003876` (Azul Gobierno)
- Secundario: `#0066CC`
- Texto: `#333333`
- Fondo: `#FFFFFF`

### Fuentes
- Principal: Poppins
- Tamaños: 14px (body), 18px (h3), 24px (h2), 32px (h1)

### Espaciado
- Unidad base: 8px
- Pequeño: 8px
- Medio: 16px
- Grande: 24px
- Extra grande: 32px

## 🔐 Seguridad Rápida

- **NUNCA** commitear `.env`
- **SIEMPRE** hashear contraseñas
- **USAR** prepared statements en SQL
- **VALIDAR** entrada del usuario
- **SANITIZAR** HTML renderizado

## 📝 Convenciones de Nombres

- **Archivos**: PascalCase para componentes (`MiComponente.jsx`)
- **Funciones**: camelCase (`miFunction()`)
- **Constantes**: UPPER_SNAKE_CASE (`MI_CONSTANTE`)
- **CSS Classes**: kebab-case (`.mi-clase`)

## 🚦 Estado del Proyecto

- ✅ Frontend funcional
- ✅ Sistema de autenticación
- ✅ Agendamiento de citas
- ✅ Notificaciones por email
- ⏳ Tests (pendiente)
- ⏳ CI/CD (pendiente)

---

**¿Necesitas más ayuda?** Consulta la documentación completa o abre un issue en GitHub.
