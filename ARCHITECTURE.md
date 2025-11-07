# Arquitectura del Proyecto - PuntoGob

Este documento describe la arquitectura técnica del sistema PuntoGob, incluyendo la estructura de componentes, flujo de datos, y decisiones de diseño.

## 📐 Visión General de la Arquitectura

PuntoGob es una aplicación web construida con una arquitectura cliente-servidor:

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                         │
│  ┌──────────────────────────────────────────────┐  │
│  │   React + Vite (Port 5173)                   │  │
│  │   - Componentes UI                           │  │
│  │   - React Router                             │  │
│  │   - Material-UI                              │  │
│  │   - LESS Styles                              │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         ↕ HTTP/HTTPS
┌─────────────────────────────────────────────────────┐
│                    BACKEND                          │
│  ┌──────────────────────────────────────────────┐  │
│  │   Express.js (Ports 4000, 4100)              │  │
│  │   - REST API                                 │  │
│  │   - Nodemailer                               │  │
│  │   - Auth Logic                               │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         ↕ SQL
┌─────────────────────────────────────────────────────┐
│                   DATABASE                          │
│  ┌──────────────────────────────────────────────┐  │
│  │   MySQL / SQL Server                         │  │
│  │   - Users                                    │  │
│  │   - Cedulas                                  │  │
│  │   - Citas                                    │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## 🎯 Capas de la Aplicación

### 1. Capa de Presentación (Frontend)

#### Tecnologías Principales
- **React 18.3.1**: Biblioteca UI con hooks
- **Vite 6.0.5**: Build tool moderno y rápido
- **React Router DOM 7.1.5**: Manejo de rutas
- **Material-UI 6.4.5**: Componentes UI predefinidos
- **LESS 4.2.2**: Preprocesador CSS

#### Estructura de Componentes

```
Components/
├── Páginas Principales
│   ├── Inicio.jsx              # Dashboard del usuario
│   ├── InicioAdm.jsx           # Dashboard administrativo
│   ├── Registro.jsx            # Registro de nuevos usuarios
│   ├── Iniciarsesion.jsx       # Login
│   └── ForgetPassword.jsx      # Recuperación de contraseña
│
├── Componentes de Formulario (ComponentesParaF/)
│   ├── SeleccionPuntoGOB.jsx   # Selector de punto de atención
│   ├── SeleccionInstitucion.jsx # Selector de institución
│   ├── SeleccionServicio.jsx   # Selector de servicio
│   ├── Calendario.jsx          # Selector de fecha
│   └── Horas.jsx               # Selector de hora
│
├── Componentes de Notificación (ComponentesParaN/)
│   └── EstandarN.jsx           # Componente de notificación
│
├── Data/
│   ├── DataInst.js             # Datos de instituciones
│   ├── DataServicios.js        # Catálogo de servicios
│   ├── DataCedula.js           # Validación de cédulas
│   └── Form.js                 # Configuración de formularios
│
├── Style/
│   ├── Inicio.less
│   ├── Registro.less
│   ├── IniciarSesion.less
│   └── ...
│
└── Img/
    ├── LogoGob.png
    ├── LogoOffSimbolo.png
    └── ...
```

### 2. Capa de Aplicación (Backend)

#### Tecnologías Principales
- **Express.js 4.21.2**: Framework web
- **Nodemailer 6.10.0**: Envío de emails
- **MySQL2 3.12.0 / MSSQL 11.0.1**: Drivers de BD
- **CORS 2.8.5**: Manejo de políticas CORS
- **Morgan 1.10.0**: Logger HTTP

#### APIs y Endpoints

```javascript
// Gestión de Usuarios
GET    /api/Users              # Obtener todos los usuarios
POST   /api/Users              # Crear nuevo usuario
PUT    /api/Users              # Actualizar usuario
DELETE /api/Users/:id          # Eliminar usuario

// Validación de Cédulas
GET    /api/Cedulas            # Validar cédula
POST   /api/Cedulas            # Registrar nueva cédula

// Gestión de Citas (ejemplo de endpoints esperados)
GET    /api/Citas              # Obtener citas
POST   /api/Citas              # Crear nueva cita
PUT    /api/Citas/:id          # Actualizar cita
DELETE /api/Citas/:id          # Cancelar cita

// Instituciones y Servicios
GET    /api/Instituciones      # Listado de instituciones
GET    /api/Servicios          # Listado de servicios
GET    /api/PuntosGob          # Listado de puntos de atención
```

### 3. Capa de Datos (Database)

#### Modelo de Datos

##### Tabla: Users
```sql
Users
├── id (INT, PK, AUTO_INCREMENT)
├── Cedula (VARCHAR, UNIQUE)
├── Nombre (VARCHAR)
├── Apellido (VARCHAR)
├── Email (VARCHAR, UNIQUE)
├── Password (VARCHAR) -- Hash bcrypt
├── InicioSesion (TINYINT) -- Flag de sesión activa
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

##### Tabla: Cedulas
```sql
Cedulas
├── id (INT, PK, AUTO_INCREMENT)
├── Cedula (VARCHAR, UNIQUE)
├── Nombre (VARCHAR)
├── Apellido (VARCHAR)
├── FechaNacimiento (DATE)
└── Activo (BOOLEAN)
```

##### Tabla: Citas
```sql
Citas
├── id (INT, PK, AUTO_INCREMENT)
├── user_id (INT, FK -> Users.id)
├── PuntoGob (VARCHAR)
├── Institucion (VARCHAR)
├── Servicio (VARCHAR)
├── Fecha (DATE)
├── Hora (TIME)
├── Estado (ENUM: 'Pendiente', 'Confirmada', 'Cancelada', 'Completada')
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

## 🔄 Flujo de Datos

### Flujo de Registro de Usuario

```
1. Usuario ingresa cédula
   ↓
2. Frontend valida formato
   ↓
3. POST /api/Cedulas - Verificar si cédula existe en BD
   ↓
4. Si existe → Mostrar formulario completo
   ↓
5. Usuario completa datos (email, password)
   ↓
6. Frontend valida campos
   ↓
7. POST /api/Users - Crear cuenta
   ↓
8. Backend hashea password
   ↓
9. Guardar en BD
   ↓
10. Enviar email de confirmación (Nodemailer)
    ↓
11. Redirigir a login
```

### Flujo de Inicio de Sesión

```
1. Usuario ingresa email y password
   ↓
2. POST /api/Users (con credenciales)
   ↓
3. Backend busca usuario por email
   ↓
4. Verificar password (bcrypt.compare)
   ↓
5. Si válido → Actualizar InicioSesion = 1
   ↓
6. Crear sesión/token
   ↓
7. Retornar datos del usuario
   ↓
8. Frontend guarda en localStorage/sessionStorage
   ↓
9. Redirigir a /Inicio
```

### Flujo de Agendamiento de Cita

```
1. Usuario en /Inicio
   ↓
2. Selecciona PuntoGob
   ↓
3. Selecciona Institución (filtrado por PuntoGob)
   ↓
4. Selecciona Servicio (filtrado por Institución)
   ↓
5. Selecciona Fecha en Calendario
   ↓
6. Selecciona Hora disponible
   ↓
7. Confirma datos
   ↓
8. POST /api/Citas
   ↓
9. Backend valida disponibilidad
   ↓
10. Guardar en BD
    ↓
11. Enviar email de confirmación
    ↓
12. Actualizar UI con nueva cita
```

## 🔐 Seguridad

### Autenticación y Autorización

#### Implementación Actual
- Validación de cédula contra base de datos
- Hash de contraseñas (bcrypt recomendado)
- Flag de sesión activa (InicioSesion)

#### Mejoras Recomendadas
- Implementar JWT para autenticación stateless
- Refresh tokens para sesiones largas
- Rate limiting para prevenir ataques de fuerza bruta
- HTTPS en producción
- Validación y sanitización de inputs
- Prepared statements para prevenir SQL injection

### Protección de Datos Sensibles

```javascript
// Ejemplo de hash de password
import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}
```

### CORS y Políticas de Seguridad

```javascript
// Configuración CORS recomendada
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## 🎨 Patrones de Diseño

### 1. Component Pattern (React)

Componentes reutilizables y composables:

```javascript
// Componente padre
<Inicio>
    <SeleccionPuntoGOB />
    <SeleccionInstitucion />
    <SeleccionServicio />
    <Calendario />
    <Horario />
</Inicio>
```

### 2. State Management

Actualmente usando:
- **React useState**: Estado local de componentes
- **Export/Import**: Compartir estado entre componentes

Variables globales exportadas:
```javascript
// De SeleccionPuntoGOB.jsx
export const PuntoGOBSelecionado;

// De SeleccionInstitucion.jsx
export const InstitucionSeleccionada;

// De Calendario.jsx
export const DiaSeleccionado;
```

**Recomendación futura**: Migrar a Context API o Redux para mejor gestión de estado.

### 3. MVC Pattern (Backend)

Aunque no está estrictamente implementado, se recomienda:

```
backend/
├── models/
│   ├── User.js
│   ├── Cedula.js
│   └── Cita.js
├── controllers/
│   ├── userController.js
│   ├── cedulaController.js
│   └── citaController.js
├── routes/
│   ├── userRoutes.js
│   ├── cedulaRoutes.js
│   └── citaRoutes.js
└── server.js
```

## 📊 Gestión de Estado

### Estado Local (useState)

Usado para:
- Estado de formularios
- UI temporal (loading, errors)
- Modales y overlays

### Estado Compartido (Export/Import)

Actualmente se exportan variables desde componentes para compartir estado:

```javascript
// SeleccionPuntoGOB.jsx
export let PuntoGOBSelecionado = '';

// Inicio.jsx
import { PuntoGOBSelecionado } from './ComponentesParaF/SeleccionPuntoGOB';
```

**Limitaciones**:
- No es reactivo automáticamente
- Difícil de depurar
- Acoplamiento entre componentes

**Solución recomendada**: Context API

```javascript
// CitaContext.js
const CitaContext = React.createContext();

export function CitaProvider({ children }) {
    const [puntoGob, setPuntoGob] = useState('');
    const [institucion, setInstitucion] = useState('');
    const [servicio, setServicio] = useState('');
    
    return (
        <CitaContext.Provider value={{
            puntoGob, setPuntoGob,
            institucion, setInstitucion,
            servicio, setServicio
        }}>
            {children}
        </CitaContext.Provider>
    );
}
```

## 🔌 Integración de Servicios

### EmailJS (Frontend)

```javascript
// index.html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>emailjs.init('wLDpPJaHpot_G8GQ1')</script>
```

### Nodemailer (Backend)

```javascript
// testEmail.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
```

## 🚀 Build y Deployment

### Desarrollo

```bash
# Frontend (Vite Dev Server)
npm run dev
# → http://localhost:5173

# Backend (Nodemon)
npm run DB
# → http://localhost:4000
```

### Producción

```bash
# Build
npm run build

# Preview
npm run preview
```

Archivos generados en `dist/`:
```
dist/
├── index.html
├── assets/
│   ├── index.[hash].js
│   ├── index.[hash].css
│   └── ...
└── ...
```

### Consideraciones de Deployment

#### Frontend
- Hosting estático: Vercel, Netlify, GitHub Pages
- Variables de entorno para API URLs
- Minificación y tree-shaking automático (Vite)

#### Backend
- Servidor Node.js: Heroku, Railway, DigitalOcean
- Variables de entorno seguras
- Reverse proxy (Nginx) recomendado
- Process manager (PM2) para producción

#### Base de Datos
- MySQL en servidor dedicado
- Backups automáticos
- Conexión SSL
- Pool de conexiones optimizado

## 📈 Escalabilidad

### Frontend
- Code splitting por rutas
- Lazy loading de componentes
- Optimización de imágenes
- CDN para assets estáticos

### Backend
- Caching (Redis)
- Load balancing
- Microservicios (separar autenticación, citas, notificaciones)
- Queue system para emails (Bull, RabbitMQ)

### Base de Datos
- Índices en columnas de búsqueda frecuente
- Particionamiento de tablas grandes
- Read replicas para consultas
- Archivado de datos históricos

## 🔍 Monitoreo y Logging

### Recomendaciones

```javascript
// Logger estructurado (Winston)
import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});
```

### Métricas a monitorear
- Tiempo de respuesta de API
- Tasa de errores
- Uso de memoria/CPU
- Citas creadas por día
- Usuarios registrados
- Disponibilidad del sistema

## 🧪 Testing (Futuro)

### Estrategia de Testing

```
Testing Pyramid
    /\
   /  \  E2E (5%)      - Cypress
  /    \
 /------\ Integration  - Supertest (API)
/--------\             - React Testing Library
----------  Unit (70%) - Jest, Vitest
```

## 📚 Dependencias Clave

### Frontend
- `react`, `react-dom`: UI library
- `react-router-dom`: Routing
- `@mui/material`: UI components
- `axios`: HTTP client
- `dayjs`: Date manipulation

### Backend
- `express`: Web framework
- `mysql2` / `mssql`: Database drivers
- `nodemailer`: Email service
- `cors`: CORS middleware
- `dotenv`: Environment variables

### Dev Tools
- `vite`: Build tool
- `eslint`: Linting
- `nodemon`: Auto-reload
- `less`: CSS preprocessor

## 🔄 Ciclo de Vida de Desarrollo

```
1. Desarrollo Local
   ↓
2. Commit a Feature Branch
   ↓
3. Pull Request
   ↓
4. Code Review
   ↓
5. Merge to Main
   ↓
6. CI/CD Pipeline (futuro)
   ↓
7. Deploy to Staging
   ↓
8. QA Testing
   ↓
9. Deploy to Production
```

## 📝 Notas Adicionales

- El proyecto está en desarrollo activo
- Algunos componentes en `Componentes sin usar/` son legacy
- Se recomienda implementar tests antes de producción
- Considerar migración a TypeScript para mejor type safety
- Documentar APIs con OpenAPI/Swagger

---

**Última actualización**: Noviembre 2024
