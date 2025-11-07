# Guía de Instalación - PuntoGob

Esta guía proporciona instrucciones detalladas para instalar y configurar el proyecto PuntoGob en tu entorno local.

## 📋 Requisitos Previos

### Software Necesario

1. **Node.js y npm**
   - Versión mínima: Node.js 16.x o superior
   - Verificar instalación:
   ```bash
   node --version
   npm --version
   ```
   - Descargar desde: https://nodejs.org/

2. **Base de Datos**
   - MySQL 8.0+ o SQL Server 2019+
   - Cliente de base de datos (MySQL Workbench, DBeaver, etc.)

3. **Editor de Código (Recomendado)**
   - Visual Studio Code
   - Extensiones recomendadas:
     - ESLint
     - Prettier
     - ES7+ React/Redux/React-Native snippets

4. **Git**
   - Para clonar el repositorio
   - Verificar instalación: `git --version`

## 🔽 Instalación Paso a Paso

### 1. Clonar el Repositorio

```bash
# Clonar el proyecto
git clone https://github.com/SemilleroDigitalIntro/Proyecto-Ogtic.git

# Entrar al directorio
cd Proyecto-Ogtic
```

### 2. Instalar Dependencias

```bash
# Instalar todas las dependencias del proyecto
npm install

# Si encuentras errores, intenta limpiar el cache
npm cache clean --force
npm install
```

Este proceso instalará:
- Dependencias de React y librerías UI
- Herramientas de desarrollo (Vite, ESLint)
- Librerías backend (Express, bases de datos)
- Utilidades (Nodemailer, Axios)

### 3. Configurar la Base de Datos

#### Para MySQL:

1. **Crear la base de datos**
```sql
CREATE DATABASE puntogob_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE puntogob_db;
```

2. **Crear tabla de usuarios**
```sql
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Cedula VARCHAR(20) UNIQUE NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    InicioSesion TINYINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. **Crear tabla de cédulas válidas**
```sql
CREATE TABLE Cedulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Cedula VARCHAR(20) UNIQUE NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    FechaNacimiento DATE
);
```

4. **Crear tabla de citas**
```sql
CREATE TABLE Citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    PuntoGob VARCHAR(200),
    Institucion VARCHAR(200),
    Servicio VARCHAR(200),
    Fecha DATE,
    Hora TIME,
    Estado VARCHAR(50) DEFAULT 'Pendiente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
```

#### Para SQL Server:

1. **Crear la base de datos**
```sql
CREATE DATABASE puntogob_db;
GO
USE puntogob_db;
GO
```

2. **Crear tablas similares adaptadas a SQL Server** (ajustar tipos de datos según sea necesario)

### 4. Configurar Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```bash
# Crear archivo .env
touch .env
```

Agregar las siguientes variables (ajustar según tu configuración):

```env
# Configuración del Puerto
PORT=4000
PORT_CEDULAS=4100

# Configuración de Base de Datos MySQL
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=puntogob_db

# Configuración de Base de Datos SQL Server (alternativa)
# DB_TYPE=mssql
# DB_HOST=localhost
# DB_PORT=1433
# DB_USER=sa
# DB_PASSWORD=tu_contraseña
# DB_NAME=puntogob_db

# Configuración de Email (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=tu_email@gmail.com
EMAIL_PASSWORD=tu_app_password
EMAIL_FROM=gobagendatucita@gmail.com

# EmailJS (para el frontend)
EMAILJS_PUBLIC_KEY=wLDpPJaHpot_G8GQ1

# Configuración de Sesión
SESSION_SECRET=tu_secreto_aleatorio_seguro

# Modo de Desarrollo
NODE_ENV=development
```

### 5. Configurar Servidor Backend

Si no existe, crear un archivo `server.js` en la raíz del proyecto con la configuración básica de Express:

```javascript
// Este es un ejemplo básico - ajustar según la implementación real
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Rutas de ejemplo
app.get('/api/Users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Users');
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### 6. Configurar Email (Gmail)

1. **Activar verificación en 2 pasos** en tu cuenta de Gmail
2. **Generar contraseña de aplicación**:
   - Ve a: https://myaccount.google.com/apppasswords
   - Genera una nueva contraseña para "Otra (nombre personalizado)"
   - Copia la contraseña de 16 caracteres
   - Úsala en `EMAIL_PASSWORD` en el archivo `.env`

### 7. Poblar Base de Datos con Datos de Prueba (Opcional)

```sql
-- Insertar cédulas de prueba
INSERT INTO Cedulas (Cedula, Nombre, Apellido, FechaNacimiento) VALUES
('00112345678', 'Juan', 'Pérez', '1990-01-15'),
('00198765432', 'María', 'García', '1985-05-20'),
('00156781234', 'Carlos', 'Rodríguez', '1992-08-10');

-- Insertar usuario de prueba
INSERT INTO Users (Cedula, Nombre, Apellido, Email, Password) VALUES
('00112345678', 'Juan', 'Pérez', 'juan.perez@test.com', '$2b$10$hashedpassword');
```

## 🚀 Ejecutar el Proyecto

### Modo Desarrollo

1. **Terminal 1 - Frontend (Vite)**
```bash
npm run dev
```
Acceder a: http://localhost:5173

2. **Terminal 2 - Backend (Express)**
```bash
npm run DB
```
Servidor API: http://localhost:4000

### Verificar que Todo Funciona

1. **Verificar Frontend**: Abrir http://localhost:5173 en el navegador
2. **Verificar Backend**: 
   ```bash
   curl http://localhost:4000/api/Users
   ```
3. **Verificar Base de Datos**: 
   ```sql
   USE puntogob_db;
   SHOW TABLES;
   ```

## 🔧 Solución de Problemas Comunes

### Error: "Cannot find module"
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"
```bash
# En Linux/Mac
lsof -ti:5173 | xargs kill -9
lsof -ti:4000 | xargs kill -9

# En Windows
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

### Error de Conexión a Base de Datos
- Verificar que MySQL/SQL Server esté corriendo
- Verificar credenciales en archivo `.env`
- Verificar que la base de datos existe
- Revisar permisos del usuario de base de datos

### Error de CORS
- Verificar que el backend tenga configurado CORS correctamente
- Verificar las URLs en el frontend (puerto correcto)

### Error de Email
- Verificar contraseña de aplicación de Gmail
- Verificar que la verificación en 2 pasos esté activa
- Revisar logs del servidor para mensajes de error específicos

## 📦 Build para Producción

```bash
# Generar build optimizada
npm run build

# Previsualizar build
npm run preview
```

Los archivos generados estarán en la carpeta `dist/`

## 🔄 Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar todas las dependencias
npm update

# Actualizar una dependencia específica
npm install [package]@latest
```

## 📝 Próximos Pasos

Después de la instalación exitosa:

1. Revisar y personalizar los datos en `Components/Data/`
2. Configurar los servicios e instituciones disponibles
3. Ajustar estilos según la identidad visual
4. Configurar backup de base de datos
5. Implementar medidas de seguridad adicionales para producción

## 🆘 Soporte

Si encuentras problemas durante la instalación:
1. Revisar los logs de error en la consola
2. Verificar que todos los prerequisitos estén instalados
3. Consultar la documentación de las dependencias
4. Abrir un issue en el repositorio de GitHub

---

**Última actualización**: Noviembre 2024
