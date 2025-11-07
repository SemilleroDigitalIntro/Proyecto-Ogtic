# Guía de Contribución - PuntoGob

¡Gracias por tu interés en contribuir a PuntoGob! Esta guía te ayudará a entender cómo puedes participar en el desarrollo del proyecto.

## 📜 Código de Conducta

- Sé respetuoso y profesional en todas las interacciones
- Acepta críticas constructivas con mente abierta
- Enfócate en lo que es mejor para la comunidad y el proyecto
- Muestra empatía hacia otros miembros de la comunidad

## 🚀 Cómo Contribuir

### Reportar Bugs

Si encuentras un bug, por favor abre un issue con:

1. **Título descriptivo**
2. **Descripción detallada** del problema
3. **Pasos para reproducir**:
   - Paso 1
   - Paso 2
   - etc.
4. **Comportamiento esperado** vs **Comportamiento actual**
5. **Screenshots** (si aplica)
6. **Información del entorno**:
   - Navegador y versión
   - Sistema operativo
   - Versión de Node.js
   - Versión del proyecto

### Sugerir Mejoras

Para sugerir nuevas funcionalidades:

1. Verifica que la funcionalidad no exista o no esté planeada
2. Abre un issue con etiqueta "enhancement"
3. Describe claramente:
   - ¿Qué problema resuelve?
   - ¿Cómo debería funcionar?
   - ¿Por qué es importante?
   - Mockups o ejemplos (opcional)

### Pull Requests

#### Proceso General

1. **Fork el repositorio**
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/nombre-feature
   # o
   git checkout -b fix/nombre-bug
   ```
3. **Realiza tus cambios**
4. **Commit** con mensajes descriptivos
5. **Push** a tu fork
6. **Abre un Pull Request**

#### Convenciones de Nombres de Ramas

- `feature/` - Nuevas funcionalidades
- `fix/` - Corrección de bugs
- `docs/` - Cambios en documentación
- `style/` - Cambios de formato/estilo (no afectan funcionalidad)
- `refactor/` - Refactorización de código
- `test/` - Agregar o modificar tests
- `chore/` - Tareas de mantenimiento

Ejemplos:
- `feature/calendario-multiple-selection`
- `fix/login-validation-error`
- `docs/update-installation-guide`

## 💻 Configuración del Entorno de Desarrollo

### Configuración Inicial

1. **Fork y clonar**:
   ```bash
   git clone https://github.com/tu-usuario/Proyecto-Ogtic.git
   cd Proyecto-Ogtic
   ```

2. **Agregar upstream**:
   ```bash
   git remote add upstream https://github.com/SemilleroDigitalIntro/Proyecto-Ogtic.git
   ```

3. **Instalar dependencias**:
   ```bash
   npm install
   ```

4. **Configurar `.env`** (ver INSTALLATION.md)

5. **Verificar que todo funciona**:
   ```bash
   npm run dev  # En una terminal
   npm run DB   # En otra terminal
   ```

### Mantener tu Fork Actualizado

```bash
# Obtener cambios del repositorio original
git fetch upstream

# Cambiar a tu rama main
git checkout main

# Mergear cambios
git merge upstream/main

# Actualizar tu fork en GitHub
git push origin main
```

## 📝 Estándares de Código

### JavaScript/React

#### Formato y Estilo

- **Indentación**: 4 espacios (este proyecto usa 4 espacios consistentemente)
- **Comillas**: Simples `'` para strings
- **Punto y coma**: Usar al final de las declaraciones
- **Nombres de variables**: camelCase
- **Nombres de componentes**: PascalCase
- **Nombres de archivos**: PascalCase para componentes

#### Estructura de Componentes React

```javascript
import React from 'react';
import './Style/ComponentName.less';

// Props destructuring cuando sea posible
export default function ComponentName({ prop1, prop2 }) {
    // Estados
    const [state, setState] = React.useState(initialValue);

    // Effects
    React.useEffect(() => {
        // Código del efecto
    }, [dependencies]);

    // Funciones auxiliares
    const handleClick = () => {
        // Lógica
    };

    // Render
    return (
        <div className="component-container">
            {/* Contenido */}
        </div>
    );
}
```

#### Buenas Prácticas

1. **Componentes Funcionales**: Preferir hooks sobre componentes de clase
2. **Nombres Descriptivos**: Variables y funciones con nombres claros
3. **Funciones Pequeñas**: Una responsabilidad por función
4. **Evitar Código Duplicado**: Extraer lógica común a utilidades
5. **Comentarios**: Solo cuando el código no es auto-explicativo
6. **PropTypes o TypeScript**: Validar props (considerar migración futura)

#### Ejemplo de Código Bien Estructurado

```javascript
import React from 'react';
import './Style/UserCard.less';

export default function UserCard({ user, onEdit, onDelete }) {
    const handleEditClick = () => {
        if (user && user.id) {
            onEdit(user.id);
        }
    };

    const handleDeleteClick = () => {
        if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
            onDelete(user.id);
        }
    };

    return (
        <div className="user-card">
            <h3>{user.nombre} {user.apellido}</h3>
            <p>{user.email}</p>
            <div className="user-card-actions">
                <button onClick={handleEditClick}>Editar</button>
                <button onClick={handleDeleteClick}>Eliminar</button>
            </div>
        </div>
    );
}
```

### CSS/LESS

- **Nombres de clases**: kebab-case
- **BEM** para componentes complejos (opcional)
- **Anidación**: Máximo 3 niveles
- **Variables**: Usar para colores, tamaños, etc.

```less
// Variables
@primary-color: #003876;
@secondary-color: #0066CC;
@spacing-unit: 8px;

// Componente
.user-card {
    padding: @spacing-unit * 2;
    border: 1px solid @primary-color;
    
    &-title {
        color: @primary-color;
        font-size: 18px;
    }
    
    &-actions {
        display: flex;
        gap: @spacing-unit;
    }
}
```

### Base de Datos

- **Nombres de tablas**: PascalCase
- **Nombres de columnas**: camelCase o snake_case (consistente)
- **Siempre usar prepared statements** para prevenir SQL injection
- **Índices**: En columnas de búsqueda frecuente

## 🧪 Testing (Futuro)

Aunque actualmente el proyecto no tiene tests, al contribuir considera:

1. **Tests Unitarios**: Para funciones y utilidades
2. **Tests de Componentes**: Para componentes React
3. **Tests de Integración**: Para flujos completos

Frameworks sugeridos:
- Jest
- React Testing Library
- Cypress (para E2E)

## 📋 Checklist antes de PR

Antes de abrir un Pull Request, verifica:

- [ ] El código sigue los estándares del proyecto
- [ ] Los cambios funcionan correctamente en local
- [ ] No hay errores en la consola
- [ ] El código está comentado donde es necesario
- [ ] Has actualizado la documentación si es necesario
- [ ] Has probado en diferentes navegadores (si aplica)
- [ ] Los commits tienen mensajes descriptivos
- [ ] Has actualizado el CHANGELOG (si existe)

## ✍️ Convenciones de Commits

Usar mensajes claros y descriptivos:

### Formato
```
tipo(alcance): descripción corta

Descripción más detallada si es necesaria.

Closes #123
```

### Tipos
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma, etc (sin cambio de código)
- `refactor`: Refactorización de código
- `test`: Agregar tests
- `chore`: Mantenimiento, actualización de dependencias

### Ejemplos
```bash
git commit -m "feat(auth): agregar recuperación de contraseña"
git commit -m "fix(calendar): corregir selección de fecha en Safari"
git commit -m "docs(readme): actualizar instrucciones de instalación"
```

## 🔍 Revisión de Código

### Como Autor

- Responde a comentarios de manera constructiva
- Realiza los cambios solicitados
- Mantén la conversación profesional
- Agradece las revisiones

### Como Revisor

- Sé constructivo y específico
- Explica el "por qué" de tus sugerencias
- Reconoce las buenas prácticas
- Usa prefijos en comentarios:
  - `[CRITICAL]` - Debe ser corregido
  - `[SUGGESTION]` - Sugerencia de mejora
  - `[QUESTION]` - Pregunta para aclarar
  - `[NITPICK]` - Detalle menor

## 🎯 Áreas Prioritarias para Contribuir

1. **Seguridad**
   - Validación de inputs
   - Sanitización de datos
   - Manejo seguro de contraseñas
   - Protección contra SQL injection

2. **Accesibilidad**
   - Labels en formularios
   - ARIA attributes
   - Navegación por teclado
   - Contraste de colores

3. **Performance**
   - Optimización de consultas
   - Lazy loading de componentes
   - Caching cuando sea apropiado

4. **UX/UI**
   - Mensajes de error claros
   - Loading states
   - Responsive design
   - Validación en tiempo real

5. **Documentación**
   - Comentarios en código complejo
   - Actualización de README
   - Guías de usuario
   - API documentation

## 📞 Comunicación

- **Issues**: Para bugs, features, y discusiones técnicas
- **Pull Requests**: Para revisión de código
- **Discussions** (si está habilitado): Para ideas y preguntas generales

## 🏆 Reconocimiento

Todos los contribuidores serán reconocidos en el proyecto. ¡Tu contribución es valiosa!

## 📚 Recursos Útiles

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Express.js Guide](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## ❓ Preguntas

Si tienes preguntas sobre cómo contribuir:
1. Revisa la documentación existente
2. Busca en issues cerrados
3. Abre un nuevo issue con la etiqueta "question"

---

¡Gracias por contribuir a PuntoGob! 🚀🇩🇴
