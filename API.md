# Documentación de la API - PuntoGob

Esta documentación describe los endpoints de la API REST del sistema PuntoGob.

## 📡 Información General

### Base URL
- **Desarrollo**: `http://localhost:4000/api` y `http://localhost:4100/api`
- **Producción**: `https://tu-dominio.gob.do/api`

### Formato de Respuesta

Todas las respuestas siguen este formato:

#### Respuesta Exitosa
```json
{
    "success": true,
    "data": [...] o {...},
    "message": "Mensaje descriptivo (opcional)"
}
```

#### Respuesta con Error
```json
{
    "success": false,
    "error": "Descripción del error",
    "code": "ERROR_CODE",
    "status": 400
}
```

### Códigos de Estado HTTP

- `200 OK`: Solicitud exitosa
- `201 Created`: Recurso creado exitosamente
- `400 Bad Request`: Datos inválidos o faltantes
- `401 Unauthorized`: No autenticado
- `403 Forbidden`: No autorizado
- `404 Not Found`: Recurso no encontrado
- `409 Conflict`: Conflicto (ej: email duplicado)
- `500 Internal Server Error`: Error del servidor

## 🔐 Autenticación

### POST /api/auth/login
Iniciar sesión de usuario.

**Request Body:**
```json
{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
}
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "user": {
            "id": 1,
            "cedula": "00112345678",
            "nombre": "Juan",
            "apellido": "Pérez",
            "email": "juan.perez@ejemplo.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

**Errores:**
- `400`: Campos faltantes
- `401`: Credenciales inválidas
- `409`: Ya hay una sesión activa

---

### POST /api/auth/logout
Cerrar sesión de usuario.

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Sesión cerrada exitosamente"
}
```

---

### POST /api/auth/forgot-password
Solicitar recuperación de contraseña.

**Request Body:**
```json
{
    "email": "usuario@ejemplo.com"
}
```

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Correo de recuperación enviado"
}
```

---

### POST /api/auth/reset-password
Restablecer contraseña con token.

**Request Body:**
```json
{
    "token": "reset_token_from_email",
    "newPassword": "nuevaContraseña123"
}
```

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Contraseña actualizada exitosamente"
}
```

## 👤 Usuarios

### GET /api/Users
Obtener lista de usuarios (Admin).

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Resultados por página (default: 10)
- `search` (opcional): Buscar por nombre o email

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "cedula": "00112345678",
            "nombre": "Juan",
            "apellido": "Pérez",
            "email": "juan.perez@ejemplo.com",
            "created_at": "2024-01-15T10:30:00Z"
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 50,
        "pages": 5
    }
}
```

---

### GET /api/Users/:id
Obtener usuario específico.

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "cedula": "00112345678",
        "nombre": "Juan",
        "apellido": "Pérez",
        "email": "juan.perez@ejemplo.com",
        "created_at": "2024-01-15T10:30:00Z"
    }
}
```

**Errores:**
- `404`: Usuario no encontrado

---

### POST /api/Users
Crear nuevo usuario (Registro).

**Request Body:**
```json
{
    "cedula": "00112345678",
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan.perez@ejemplo.com",
    "password": "contraseña123"
}
```

**Response (201 Created):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "cedula": "00112345678",
        "nombre": "Juan",
        "apellido": "Pérez",
        "email": "juan.perez@ejemplo.com"
    },
    "message": "Usuario creado exitosamente"
}
```

**Errores:**
- `400`: Datos inválidos o faltantes
- `409`: Email o cédula ya registrados

---

### PUT /api/Users/:id
Actualizar usuario.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body (parcial):**
```json
{
    "nombre": "Juan Carlos",
    "email": "nuevo.email@ejemplo.com"
}
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "cedula": "00112345678",
        "nombre": "Juan Carlos",
        "apellido": "Pérez",
        "email": "nuevo.email@ejemplo.com"
    },
    "message": "Usuario actualizado exitosamente"
}
```

---

### DELETE /api/Users/:id
Eliminar usuario (Admin).

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Usuario eliminado exitosamente"
}
```

## 🆔 Validación de Cédulas

### GET /api/Cedulas
Obtener lista de cédulas válidas (Admin).

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "cedula": "00112345678",
            "nombre": "Juan",
            "apellido": "Pérez",
            "fechaNacimiento": "1990-01-15"
        }
    ]
}
```

---

### GET /api/Cedulas/:cedula
Validar si una cédula existe.

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "valida": true,
        "cedula": "00112345678",
        "nombre": "Juan",
        "apellido": "Pérez"
    }
}
```

**Response (404 Not Found):**
```json
{
    "success": false,
    "error": "Cédula no encontrada",
    "data": {
        "valida": false
    }
}
```

---

### POST /api/Cedulas
Registrar nueva cédula (Admin).

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
    "cedula": "00112345678",
    "nombre": "Juan",
    "apellido": "Pérez",
    "fechaNacimiento": "1990-01-15"
}
```

**Response (201 Created):**
```json
{
    "success": true,
    "message": "Cédula registrada exitosamente"
}
```

## 📅 Citas

### GET /api/Citas
Obtener citas del usuario autenticado.

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
- `estado` (opcional): Filtrar por estado (Pendiente, Confirmada, Cancelada, Completada)
- `desde` (opcional): Fecha inicio (YYYY-MM-DD)
- `hasta` (opcional): Fecha fin (YYYY-MM-DD)

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "puntoGob": "PuntoGob Centro",
            "institucion": "OGTIC",
            "servicio": "Registro de Cédula",
            "fecha": "2024-02-15",
            "hora": "10:00:00",
            "estado": "Confirmada",
            "created_at": "2024-01-10T14:30:00Z"
        }
    ]
}
```

---

### GET /api/Citas/:id
Obtener detalle de una cita específica.

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "puntoGob": "PuntoGob Centro",
        "institucion": "OGTIC",
        "servicio": "Registro de Cédula",
        "fecha": "2024-02-15",
        "hora": "10:00:00",
        "estado": "Confirmada",
        "usuario": {
            "nombre": "Juan",
            "apellido": "Pérez",
            "email": "juan.perez@ejemplo.com"
        }
    }
}
```

---

### POST /api/Citas
Crear nueva cita.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
    "puntoGob": "PuntoGob Centro",
    "institucion": "OGTIC",
    "servicio": "Registro de Cédula",
    "fecha": "2024-02-15",
    "hora": "10:00"
}
```

**Response (201 Created):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "puntoGob": "PuntoGob Centro",
        "institucion": "OGTIC",
        "servicio": "Registro de Cédula",
        "fecha": "2024-02-15",
        "hora": "10:00:00",
        "estado": "Pendiente"
    },
    "message": "Cita creada exitosamente. Se ha enviado una confirmación por email."
}
```

**Errores:**
- `400`: Datos inválidos o faltantes
- `409`: Horario no disponible

---

### PUT /api/Citas/:id
Actualizar cita (cambiar fecha/hora).

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
    "fecha": "2024-02-20",
    "hora": "14:00"
}
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "fecha": "2024-02-20",
        "hora": "14:00:00"
    },
    "message": "Cita actualizada exitosamente"
}
```

---

### DELETE /api/Citas/:id
Cancelar cita.

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Cita cancelada exitosamente"
}
```

## 🏢 Instituciones

### GET /api/Instituciones
Obtener lista de instituciones.

**Query Parameters:**
- `puntoGob` (opcional): Filtrar por punto de atención

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "nombre": "OGTIC",
            "descripcion": "Oficina Gubernamental de Tecnologías de la Información",
            "puntoGob": "PuntoGob Centro"
        }
    ]
}
```

---

### GET /api/Instituciones/:id
Obtener detalles de institución específica.

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "nombre": "OGTIC",
        "descripcion": "Oficina Gubernamental de Tecnologías de la Información",
        "puntoGob": "PuntoGob Centro",
        "servicios": [...]
    }
}
```

## 🔧 Servicios

### GET /api/Servicios
Obtener lista de servicios.

**Query Parameters:**
- `institucion` (opcional): Filtrar por institución

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "nombre": "Registro de Cédula",
            "descripcion": "Servicio de registro de cédula de identidad",
            "institucion": "OGTIC",
            "duracion": 30,
            "requiereDocumentos": ["Acta de nacimiento", "Foto 2x2"]
        }
    ]
}
```

---

### GET /api/Servicios/:id
Obtener detalles de servicio específico.

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "nombre": "Registro de Cédula",
        "descripcion": "Servicio de registro de cédula de identidad",
        "institucion": "OGTIC",
        "duracion": 30,
        "requiereDocumentos": ["Acta de nacimiento", "Foto 2x2"],
        "horariosDisponibles": [...]
    }
}
```

## 📍 Puntos de Gobierno

### GET /api/PuntosGob
Obtener lista de puntos de atención.

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "nombre": "PuntoGob Centro",
            "direccion": "Av. México esq. Leopoldo Navarro",
            "telefono": "809-555-0100",
            "horario": "Lunes a Viernes: 8:00 AM - 4:00 PM",
            "coordenadas": {
                "lat": 18.4861,
                "lng": -69.9312
            }
        }
    ]
}
```

## 🔔 Notificaciones

### GET /api/Notificaciones
Obtener notificaciones del usuario.

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
- `leidas` (opcional): true/false

**Response (200 OK):**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "titulo": "Cita Confirmada",
            "mensaje": "Su cita para el 15/02/2024 a las 10:00 AM ha sido confirmada",
            "tipo": "confirmacion",
            "leida": false,
            "created_at": "2024-01-10T14:30:00Z"
        }
    ]
}
```

---

### PUT /api/Notificaciones/:id/leer
Marcar notificación como leída.

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Notificación marcada como leída"
}
```

## 🔍 Disponibilidad

### GET /api/Disponibilidad
Consultar horarios disponibles.

**Query Parameters:**
- `puntoGob` (requerido): ID del punto de gobierno
- `institucion` (requerido): ID de la institución
- `servicio` (requerido): ID del servicio
- `fecha` (requerido): Fecha en formato YYYY-MM-DD

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "fecha": "2024-02-15",
        "horariosDisponibles": [
            "08:00",
            "08:30",
            "09:00",
            "10:00",
            "10:30"
        ],
        "horariosOcupados": [
            "09:30",
            "11:00"
        ]
    }
}
```

## 📊 Estadísticas (Admin)

### GET /api/admin/estadisticas
Obtener estadísticas del sistema.

**Headers:**
```
Authorization: Bearer {admin_token}
```

**Response (200 OK):**
```json
{
    "success": true,
    "data": {
        "usuariosRegistrados": 1250,
        "citasHoy": 45,
        "citasTotales": 8420,
        "institucionesMasPopulares": [
            {"nombre": "OGTIC", "citas": 320},
            {"nombre": "TSE", "citas": 280}
        ]
    }
}
```

## 🚨 Manejo de Errores

### Errores Comunes

#### 400 Bad Request
```json
{
    "success": false,
    "error": "Datos inválidos",
    "details": {
        "email": "Email inválido",
        "password": "Contraseña debe tener al menos 8 caracteres"
    }
}
```

#### 401 Unauthorized
```json
{
    "success": false,
    "error": "Token inválido o expirado",
    "code": "UNAUTHORIZED"
}
```

#### 404 Not Found
```json
{
    "success": false,
    "error": "Recurso no encontrado",
    "code": "NOT_FOUND"
}
```

#### 500 Internal Server Error
```json
{
    "success": false,
    "error": "Error interno del servidor",
    "code": "INTERNAL_ERROR"
}
```

## 📝 Notas Importantes

1. **Rate Limiting**: Las APIs tienen límite de 100 requests por minuto por IP
2. **Paginación**: Las listas grandes están paginadas (max 100 items por página)
3. **Caché**: Algunas respuestas se cachean por 5 minutos
4. **Versionado**: Esta es la v1 de la API. Futuras versiones usarán `/api/v2/`

## 🔗 Ejemplos de Uso

### Ejemplo con cURL

```bash
# Login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"juan@ejemplo.com","password":"pass123"}'

# Obtener citas (con token)
curl http://localhost:4000/api/Citas \
  -H "Authorization: Bearer YOUR_TOKEN"

# Crear cita
curl -X POST http://localhost:4000/api/Citas \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"puntoGob":"PuntoGob Centro","institucion":"OGTIC","servicio":"Registro","fecha":"2024-02-15","hora":"10:00"}'
```

### Ejemplo con JavaScript (Axios)

```javascript
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 5000
});

// Login
const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        const { token } = response.data.data;
        localStorage.setItem('token', token);
        return response.data;
    } catch (error) {
        console.error('Error en login:', error.response.data);
    }
};

// Obtener citas
const getCitas = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.get('/Citas', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error obteniendo citas:', error.response.data);
    }
};
```

---

**Última actualización**: Noviembre 2024

Para reportar problemas con la API, por favor abre un issue en GitHub.
