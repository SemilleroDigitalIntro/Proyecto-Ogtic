# Changelog - PuntoGob

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [No Publicado]

### Agregado
- Documentación completa del proyecto
  - README.md con descripción general y guía básica
  - INSTALLATION.md con instrucciones detalladas de instalación
  - CONTRIBUTING.md con guías para contribuidores
  - ARCHITECTURE.md explicando la arquitectura técnica
  - API.md con documentación completa de endpoints
  - SECURITY.md con mejores prácticas de seguridad
  - QUICKSTART.md con guía rápida de inicio
- Archivo .env.example como plantilla de configuración

## [0.0.0] - 2024-11-07

### Agregado
- Sistema de registro de usuarios con validación de cédula
- Sistema de autenticación (login/logout)
- Panel de usuario para gestión de citas
- Panel administrativo
- Agendamiento de citas con selección de:
  - PuntoGob (centro de atención)
  - Institución gubernamental
  - Servicio específico
  - Fecha y hora
- Notificaciones por email usando Nodemailer
- Sistema de recuperación de contraseña
- Componentes reutilizables para formularios:
  - Selector de PuntoGob
  - Selector de Institución
  - Selector de Servicio
  - Calendario de fechas
  - Selector de horarios
- Validación de cédulas contra base de datos
- Integración con Material-UI para componentes de interfaz
- Estilos personalizados con LESS
- Configuración de Vite para desarrollo rápido
- Backend con Express.js
- Soporte para MySQL y SQL Server

### Tecnologías
- React 18.3.1
- Vite 6.0.5
- React Router DOM 7.1.5
- Material-UI 6.4.5
- Express 4.21.2
- Nodemailer 6.10.0
- MySQL2 3.12.0 / MSSQL 11.0.1
- Day.js 1.11.13
- Axios 1.7.9

---

## Tipos de Cambios

- `Agregado` - Para nuevas funcionalidades
- `Cambiado` - Para cambios en funcionalidades existentes
- `Obsoleto` - Para funcionalidades que serán removidas
- `Removido` - Para funcionalidades removidas
- `Corregido` - Para corrección de bugs
- `Seguridad` - Para cambios de seguridad

## Notas de Versión

### Convención de Versiones (Semantic Versioning)

Dado un número de versión MAJOR.MINOR.PATCH:

- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nuevas funcionalidades compatibles con versiones anteriores
- **PATCH**: Correcciones de bugs compatibles con versiones anteriores

### Ejemplo de Futuras Entradas

```markdown
## [1.0.0] - YYYY-MM-DD

### Agregado
- Primera versión estable para producción
- Sistema de tests unitarios e integración
- CI/CD pipeline con GitHub Actions
- Documentación de API con Swagger

### Cambiado
- Migración de estado global a Context API
- Optimización de consultas a base de datos

### Corregido
- Bug en validación de fechas pasadas
- Problema de memoria en carga de imágenes

### Seguridad
- Implementación de rate limiting
- Mejoras en validación de inputs
```

---

Para ver el historial completo de commits: `git log --oneline`
