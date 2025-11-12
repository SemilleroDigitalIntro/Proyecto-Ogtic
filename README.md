# Sistema de Citas para Servicios Gubernamentales

## 📋 Descripción

PuntoGob es una aplicación web desarrollada en React que permite a los ciudadanos dominicanos agendar citas para servicios gubernamentales de manera digital. El sistema facilita la gestión de citas en diferentes instituciones públicas, reduciendo tiempos de espera y mejorando la experiencia del usuario.

## ✨ Características Principales

- **Sistema de Registro y Autenticación**: Registro de usuarios con validación de cédula
- **Agendamiento de Citas**: Selección de institución, servicio, fecha y hora
- **Panel de Usuario**: Gestión de citas agendadas y notificaciones
- **Panel Administrativo**: Gestión de servicios y citas
- **Notificaciones por Email**: Confirmación de citas via correo electrónico
- **Recuperación de Contraseña**: Sistema para recuperar acceso a la cuenta

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Router DOM 7.1.5** - Navegación entre páginas
- **Vite 6.0.5** - Build tool y development server
- **Material-UI (MUI) 6.4.5** - Componentes de interfaz
- **Less 4.2.2** - Preprocesador CSS
- **Day.js 1.11.13** - Manejo de fechas

### Backend & Servicios
- **Express 4.21.2** - Framework para Node.js
- **MSSQL 11.0.1 / MySQL2 3.12.0** - Bases de datos
- **Nodemailer 6.10.0** - Envío de correos electrónicos
- **Axios 1.7.9** - Cliente HTTP

### Herramientas de Desarrollo
- **ESLint 9.17.0** - Linter de código
- **Nodemon 3.1.9** - Auto-restart del servidor en desarrollo

## 📁 Estructura del Proyecto

```
Proyecto-Ogtic/
├── Components/              # Componentes React principales
│   ├── ComponentesParaF/   # Componentes del formulario de citas
│   │   ├── Calendario.jsx  # Selector de fecha
│   │   ├── Horas.jsx       # Selector de hora
│   │   ├── SeleccionInstitucion.jsx
│   │   ├── SeleccionPuntoGOB.jsx
│   │   └── SeleccionServicio.jsx
│   ├── ComponentesParaN/   # Componentes de notificaciones
│   ├── Data/               # Datos y configuración
│   │   ├── DataInst.js     # Datos de instituciones
│   │   ├── DataServicios.js # Datos de servicios
│   │   ├── DataCedula.js   # Validación de cédulas
│   │   └── Form.js         # Formularios
│   ├── Img/                # Recursos gráficos
│   ├── Style/              # Estilos LESS
│   ├── Inicio.jsx          # Página principal
│   ├── Registro.jsx        # Registro de usuarios
│   ├── Iniciarsesion.jsx   # Inicio de sesión
│   ├── InicioAdm.jsx       # Panel administrativo
│   └── ForgetPassword.jsx  # Recuperación de contraseña
├── Componentes sin usar/   # Componentes legacy
├── nashla/                 # Recursos adicionales
├── Index.jsx               # Punto de entrada de la aplicación
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias del proyecto
└── testEmail.js            # Prueba de envío de emails

```

## 🚀 Instalación y Configuración

### Prerequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Base de datos MySQL o SQL Server

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/SemilleroDigitalIntro/Proyecto-Ogtic.git
cd Proyecto-Ogtic
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Configuración de base de datos
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=puntogob_db

# Configuración de email
EMAIL_USER=tu_email@gmail.com
EMAIL_PASSWORD=tu_app_password
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

5. **Iniciar el servidor backend** (en otra terminal)
```bash
npm run DB
```

El servidor backend estará disponible en `http://localhost:4000` y `http://localhost:4100`

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Vite
- `npm run DB` - Inicia el servidor backend con nodemon
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 🔐 Flujo de Usuario

1. **Registro**: El usuario se registra con su cédula de identidad
2. **Validación**: El sistema valida la cédula contra la base de datos
3. **Login**: El usuario inicia sesión con email y contraseña
4. **Selección**: Elige PuntoGob, institución, servicio, fecha y hora
5. **Confirmación**: Recibe confirmación por email
6. **Gestión**: Puede ver y gestionar sus citas desde el panel

## 🎨 Interfaz de Usuario

La aplicación utiliza:
- Diseño responsive adaptado a móviles y desktop
- Paleta de colores institucional (#003876 - azul gobierno)
- Tipografía Poppins para mejor legibilidad
- Iconos de Boxicons
- Componentes Material-UI para interacciones avanzadas

## 🔧 API Endpoints

El backend expone los siguientes endpoints:

- `GET /api/Users` - Obtener usuarios
- `POST /api/Users` - Crear nuevo usuario
- `PUT /api/Users` - Actualizar usuario
- `GET /api/Cedulas` - Validar cédula
- (Otros endpoints según la implementación del backend)

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Importantes

- El proyecto está configurado para trabajar con bases de datos locales en desarrollo
- Las credenciales de email en `testEmail.js` son de prueba y deben ser reemplazadas
- El sistema de validación de cédulas requiere una base de datos poblada
- Se recomienda usar variables de entorno para credenciales sensibles

## 👥 Equipo de Desarrollo

Proyecto desarrollado por el Semillero Digital Intro para OGTIC (Oficina Gubernamental de Tecnologías de la Información y Comunicación).

## 📄 Licencia

Este proyecto es privado y está destinado para uso gubernamental.

## 🐛 Reportar Problemas

Para reportar problemas o sugerir mejoras, por favor abre un issue en el repositorio de GitHub.

---

**PuntoGob** - Simplificando el acceso a servicios gubernamentales 🇩🇴
