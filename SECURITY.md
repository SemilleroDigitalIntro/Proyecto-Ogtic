# Guía de Seguridad - PuntoGob

Este documento describe las prácticas de seguridad implementadas y recomendaciones para el proyecto PuntoGob.

## 🔐 Principios de Seguridad

### Defensa en Profundidad
Múltiples capas de seguridad para proteger el sistema:
1. Validación en cliente (frontend)
2. Validación en servidor (backend)
3. Validación en base de datos (constraints)
4. Cifrado en tránsito (HTTPS)
5. Cifrado en reposo (datos sensibles)

### Principio de Menor Privilegio
- Los usuarios solo tienen acceso a lo que necesitan
- Roles claramente definidos (Usuario, Admin)
- Tokens con expiración limitada

### Seguridad por Diseño
- Seguridad considerada desde el inicio
- Código revisado por seguridad
- Actualizaciones regulares de dependencias

## 🛡️ Autenticación y Autorización

### Contraseñas

#### Almacenamiento
```javascript
// ❌ NUNCA HACER
const user = {
    password: "contraseña123" // Plain text
};

// ✅ CORRECTO
import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const user = {
    password: await hashPassword("contraseña123") // Hash
};
```

#### Requisitos de Contraseñas
- **Longitud mínima**: 8 caracteres
- **Complejidad**: 
  - Al menos una letra mayúscula
  - Al menos una letra minúscula
  - Al menos un número
  - Al menos un carácter especial (recomendado)

#### Validación en Frontend
```javascript
const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    
    if (password.length < minLength) {
        return "La contraseña debe tener al menos 8 caracteres";
    }
    if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
        return "La contraseña debe incluir mayúsculas, minúsculas y números";
    }
    return null; // Válida
};
```

### JSON Web Tokens (JWT)

#### Implementación Recomendada
```javascript
import jwt from 'jsonwebtoken';

// Generar token
const generateToken = (userId) => {
    return jwt.sign(
        { 
            userId,
            role: 'user',
            iat: Date.now()
        },
        process.env.JWT_SECRET,
        { 
            expiresIn: '24h',
            issuer: 'puntogob-api'
        }
    );
};

// Verificar token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error('Token inválido o expirado');
    }
};

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            error: 'Token no proporcionado'
        });
    }
    
    const token = authHeader.substring(7);
    
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: 'Token inválido'
        });
    }
};
```

#### Almacenamiento de Tokens en Frontend

```javascript
// ✅ Buena práctica - httpOnly cookie (requiere backend support)
// El backend setea la cookie
res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
});

// ⚠️ Aceptable - localStorage (vulnerable a XSS)
localStorage.setItem('token', token);

// ❌ Evitar - variable global
window.token = token;
```

### Protección contra Sesiones Múltiples

```javascript
// Implementación actual
const checkActiveSession = async (userId) => {
    const user = await db.query(
        'SELECT InicioSesion FROM Users WHERE id = ?',
        [userId]
    );
    
    if (user[0].InicioSesion === 1) {
        throw new Error('Ya existe una sesión activa');
    }
};

// Al iniciar sesión
await db.query(
    'UPDATE Users SET InicioSesion = 1 WHERE id = ?',
    [userId]
);

// Al cerrar sesión
await db.query(
    'UPDATE Users SET InicioSesion = 0 WHERE id = ?',
    [userId]
);
```

## 🔒 Validación y Sanitización

### Validación de Entrada

#### Backend (Express)
```javascript
import { body, validationResult } from 'express-validator';

// Validación de registro
const validateRegistro = [
    body('cedula')
        .trim()
        .isLength({ min: 11, max: 11 })
        .withMessage('La cédula debe tener 11 dígitos')
        .matches(/^\d+$/)
        .withMessage('La cédula solo debe contener números'),
    
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Email inválido'),
    
    body('password')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('La contraseña debe incluir mayúsculas, minúsculas y números'),
    
    body('nombre')
        .trim()
        .isLength({ min: 2, max: 100 })
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
        .withMessage('El nombre solo debe contener letras'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        next();
    }
];

// Uso en ruta
app.post('/api/Users', validateRegistro, async (req, res) => {
    // Procesar registro
});
```

#### Frontend (React)
```javascript
const validateForm = (data) => {
    const errors = {};
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        errors.email = 'Email inválido';
    }
    
    // Validar cédula
    const cedulaRegex = /^\d{11}$/;
    if (!cedulaRegex.test(data.cedula)) {
        errors.cedula = 'Cédula debe tener 11 dígitos';
    }
    
    // Validar nombre (sin números ni caracteres especiales)
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombreRegex.test(data.nombre)) {
        errors.nombre = 'El nombre solo debe contener letras';
    }
    
    return Object.keys(errors).length === 0 ? null : errors;
};
```

### Prevención de SQL Injection

```javascript
// ❌ VULNERABLE - String concatenation
const getUserByEmail = (email) => {
    return db.query(`SELECT * FROM Users WHERE email = '${email}'`);
};
// Ataque: email = "'; DROP TABLE Users; --"

// ✅ SEGURO - Prepared statements
const getUserByEmail = (email) => {
    return db.query('SELECT * FROM Users WHERE email = ?', [email]);
};

// ✅ SEGURO - Parameterized queries (MySQL2)
const getUserByEmail = async (email) => {
    const [rows] = await pool.execute(
        'SELECT * FROM Users WHERE email = ?',
        [email]
    );
    return rows;
};
```

### Prevención de XSS (Cross-Site Scripting)

```javascript
// Frontend - Sanitizar HTML
import DOMPurify from 'dompurify';

// ❌ VULNERABLE
const renderUserInput = (input) => {
    return <div dangerouslySetInnerHTML={{ __html: input }} />;
};

// ✅ SEGURO - React escapa automáticamente
const renderUserInput = (input) => {
    return <div>{input}</div>;
};

// ✅ SEGURO - Si necesitas HTML, sanitiza primero
const renderUserInput = (input) => {
    const clean = DOMPurify.sanitize(input);
    return <div dangerouslySetInnerHTML={{ __html: clean }} />;
};
```

## 🌐 Seguridad en la Red

### CORS (Cross-Origin Resource Sharing)

```javascript
import cors from 'cors';

// ❌ Inseguro - Permite todos los orígenes
app.use(cors({ origin: '*' }));

// ✅ Seguro - Orígenes específicos
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://puntogob.gob.do'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 600 // Cache preflight por 10 minutos
}));
```

### HTTPS en Producción

```javascript
// Express con HTTPS
import https from 'https';
import fs from 'fs';

const options = {
    key: fs.readFileSync('path/to/private-key.pem'),
    cert: fs.readFileSync('path/to/certificate.pem')
};

https.createServer(options, app).listen(443, () => {
    console.log('Servidor HTTPS en puerto 443');
});

// Redireccionar HTTP a HTTPS
import express from 'express';
const httpApp = express();

httpApp.use((req, res) => {
    res.redirect(`https://${req.headers.host}${req.url}`);
});

httpApp.listen(80);
```

### Headers de Seguridad

```javascript
import helmet from 'helmet';

// Usar Helmet para headers de seguridad
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],
            imgSrc: ["'self'", 'data:', 'https:'],
            scriptSrc: ["'self'"]
        }
    },
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }
}));

// Headers personalizados adicionales
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});
```

### Rate Limiting

```javascript
import rateLimit from 'express-rate-limit';

// Rate limiting general
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // límite de 100 requests por ventana
    message: 'Demasiadas solicitudes, intente más tarde'
});

app.use('/api/', limiter);

// Rate limiting estricto para login
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, // 5 intentos de login
    skipSuccessfulRequests: true,
    message: 'Demasiados intentos de inicio de sesión'
});

app.post('/api/auth/login', loginLimiter, loginHandler);
```

## 📧 Seguridad de Email

### Configuración Segura de Nodemailer

```javascript
import nodemailer from 'nodemailer';

// ✅ Usar variables de entorno
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD // NO la contraseña real
    },
    tls: {
        rejectUnauthorized: true
    }
});

// ❌ NUNCA hardcodear credenciales
const transporter = nodemailer.createTransport({
    auth: {
        user: 'correo@gmail.com',
        pass: 'contraseña123' // ¡VULNERABLE!
    }
});
```

### Prevención de Email Injection

```javascript
const sendEmail = async (to, subject, text) => {
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
        throw new Error('Email inválido');
    }
    
    // Sanitizar subject y text
    const cleanSubject = subject.replace(/[\r\n]/g, '');
    const cleanText = text.replace(/[\r\n]/g, ' ');
    
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: to,
        subject: cleanSubject,
        text: cleanText
    });
};
```

## 🔍 Logging y Auditoría

### Logs de Seguridad

```javascript
import winston from 'winston';

const securityLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ 
            filename: 'security.log',
            level: 'warn'
        }),
        new winston.transports.File({ 
            filename: 'audit.log'
        })
    ]
});

// Registrar eventos de seguridad
const logSecurityEvent = (event, userId, details) => {
    securityLogger.info({
        timestamp: new Date().toISOString(),
        event,
        userId,
        details,
        ip: req.ip
    });
};

// Ejemplos de eventos a registrar
logSecurityEvent('LOGIN_SUCCESS', userId, { method: 'password' });
logSecurityEvent('LOGIN_FAILURE', null, { email, reason: 'invalid_password' });
logSecurityEvent('PASSWORD_CHANGE', userId, {});
logSecurityEvent('ACCOUNT_LOCKED', userId, { reason: 'too_many_attempts' });
```

### No Registrar Información Sensible

```javascript
// ❌ NUNCA
logger.info('Usuario logueado', { 
    email, 
    password // ¡NUNCA registrar contraseñas!
});

// ✅ CORRECTO
logger.info('Usuario logueado', { 
    userId,
    email,
    timestamp: new Date()
});
```

## 🗄️ Seguridad de Base de Datos

### Configuración Segura

```javascript
// ✅ Usar pool de conexiones
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: true
    }
});
```

### Principio de Menor Privilegio

```sql
-- Crear usuario con permisos limitados
CREATE USER 'puntogob_app'@'localhost' IDENTIFIED BY 'strong_password';

-- Solo dar permisos necesarios
GRANT SELECT, INSERT, UPDATE ON puntogob_db.Users TO 'puntogob_app'@'localhost';
GRANT SELECT, INSERT, UPDATE ON puntogob_db.Citas TO 'puntogob_app'@'localhost';

-- NO dar permisos de DROP, DELETE en producción
-- NO usar usuario root para la aplicación
```

### Backups Regulares

```bash
#!/bin/bash
# Script de backup diario

BACKUP_DIR="/backups/puntogob"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/puntogob_$DATE.sql"

# Crear backup
mysqldump -u backup_user -p$BACKUP_PASSWORD puntogob_db > $BACKUP_FILE

# Comprimir
gzip $BACKUP_FILE

# Eliminar backups antiguos (más de 30 días)
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete

# Subir a almacenamiento seguro
# aws s3 cp $BACKUP_FILE.gz s3://backups/puntogob/
```

## 🔑 Gestión de Secretos

### Variables de Entorno

```bash
# .env (NUNCA commitear a Git)
DB_PASSWORD=super_secret_password
JWT_SECRET=random_string_muy_largo_y_aleatorio
EMAIL_PASSWORD=app_specific_password

# .env.example (sí commitear)
DB_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret
EMAIL_PASSWORD=your_email_app_password
```

### Archivo .gitignore

```gitignore
# Secretos y configuración
.env
.env.local
.env.production
*.key
*.pem

# Credenciales
credentials.json
secrets.yaml
```

### Rotación de Secretos

```javascript
// Implementar rotación de JWT secrets
const JWT_SECRETS = [
    process.env.JWT_SECRET_CURRENT,
    process.env.JWT_SECRET_PREVIOUS
];

const verifyTokenWithRotation = (token) => {
    for (const secret of JWT_SECRETS) {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            continue;
        }
    }
    throw new Error('Token inválido');
};
```

## 🚨 Respuesta a Incidentes

### Detección

1. **Monitoreo continuo** de logs
2. **Alertas automáticas** para actividad sospechosa
3. **Revisión regular** de logs de seguridad

### Respuesta

1. **Aislar** el sistema comprometido
2. **Preservar** evidencia (logs, backups)
3. **Investigar** el alcance del incidente
4. **Remediar** la vulnerabilidad
5. **Notificar** a usuarios afectados si es necesario

### Contacto de Emergencia

```javascript
// Notificación automática de incidentes críticos
const notifySecurityIncident = async (incident) => {
    await sendEmail(
        'security@ogtic.gob.do',
        'ALERTA DE SEGURIDAD',
        `Incidente detectado: ${incident.type}\n${incident.details}`
    );
};
```

## ✅ Checklist de Seguridad

### Antes de Deployment

- [ ] Todas las contraseñas están hasheadas
- [ ] No hay credenciales en el código
- [ ] Variables de entorno configuradas
- [ ] HTTPS habilitado
- [ ] CORS configurado correctamente
- [ ] Rate limiting implementado
- [ ] Headers de seguridad configurados
- [ ] Validación de entrada en frontend y backend
- [ ] SQL injection prevenido (prepared statements)
- [ ] XSS prevenido (sanitización)
- [ ] Logs de seguridad funcionando
- [ ] Backups automáticos configurados
- [ ] Plan de respuesta a incidentes documentado

### Mantenimiento Regular

- [ ] Actualizar dependencias mensualmente
- [ ] Revisar logs de seguridad semanalmente
- [ ] Auditoría de código trimestral
- [ ] Pruebas de penetración anualmente
- [ ] Rotación de secretos semestralmente
- [ ] Revisar permisos de usuarios mensualmente

## 📚 Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [React Security Best Practices](https://react.dev/reference/react-dom/components/common#security-pitfalls)

## 📞 Reportar Vulnerabilidades

Si descubres una vulnerabilidad de seguridad:

1. **NO** abras un issue público
2. Envía un email a: security@ogtic.gob.do
3. Incluye detalles de la vulnerabilidad
4. Espera confirmación antes de divulgar

---

**Última actualización**: Noviembre 2024

La seguridad es responsabilidad de todos. ¡Reporta cualquier problema que encuentres!
