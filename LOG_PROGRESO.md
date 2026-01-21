# 🚀 Log de Progreso - Portafolio Profesional

Este archivo es la fuente de verdad sobre el avance del proyecto. El agente de Antigravity actualizará este documento tras cada mini-tarea completada.

---

## 📅 Historial de Avances

### ✅ [19-ENE-2026] - Estructura Base del Portafolio

**Estado:** Completado

**Archivos Creados:**
- `index.html` - Estructura HTML5 semántica con 9 secciones
- `css/variables.css` - Sistema de variables CSS con tokens de diseño
- `css/base.css` - Estilos base y jerarquía tipográfica
- `css/layout.css` - Sistema de layout responsive

**Detalles Técnicos:**
- ✅ HTML5 semántico (header, nav, main, section, footer)
- ✅ 9 secciones con IDs únicos: #home, #identidad-proposito, #sistemas-que-diseño, #proyectos, #como-trabajo, #servicios, #arquitectura-conceptual, #perfil-profesional, #contacto
- ✅ Cada sección tiene un `<div class="container">` interno vacío
- ✅ Tipografía Libre Franklin importada desde Google Fonts
- ✅ Sistema de variables CSS: colores (2 principales + 10 secundarios), tipografías, espaciados, radios
- ✅ Jerarquía tipográfica clara (h1-h4, p, a, span)
- ✅ Sistema de layout con containers y grid preparado
- ✅ Breakpoints responsive: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

**Instrucciones de Verificación:**

1. **Abrir el archivo:**
   - Ve a la carpeta `Proyectos\Pagina-web`
   - Haz doble clic en `index.html`
   - Se abrirá en tu navegador

2. **Verificar visualmente:**
   - ✅ El fondo debe ser oscuro (negro/gris oscuro)
   - ✅ El texto debe ser claro (casi blanco)
   - ✅ La tipografía debe verse limpia y profesional
   - ✅ Al hacer scroll, verás que el sitio está vacío (es correcto, solo es la estructura)

3. **Probar responsive:**
   - Presiona F12 en el navegador
   - Cambia el tamaño de la ventana
   - El diseño debe adaptarse sin romperse

4. **Revisar código limpio:**
   - Abre los archivos CSS en un editor de texto
   - Verás que hay comentarios claros organizando el código

**Próximos Pasos Sugeridos:**
- Agregar contenido a cada sección
- Implementar navegación funcional
- Añadir animaciones y transiciones

---

### ✅ [19-ENE-2026] - Organización de Assets y Logo

**Estado:** Completado

**Cambios Realizados:**
- Creada estructura de carpetas: `assets/images/`
- Movidos archivos `logo.png` (196KB) y `logo.svg` (2.7KB) desde la raíz a `assets/images/`
- Agregado logo SVG en el header del sitio
- Implementado favicon con SVG y PNG como fallback
- Creados estilos CSS para el logo (40px de altura, responsive, hover effect)

**Archivos Modificados:**
- `index.html` - Agregado logo en header y favicon en head
- `css/layout.css` - Estilos para `.logo` y `.logo-img`

**Detalles Técnicos:**
- ✅ Estructura de assets organizada: `assets/images/`
- ✅ Logo SVG como principal (mejor calidad, menor peso)
- ✅ Logo PNG como fallback para navegadores antiguos
- ✅ Favicon configurado con ambos formatos
- ✅ Logo responsive (40px altura, se adapta proporcionalmente)
- ✅ Hover effect suave en el logo

**Estructura Actualizada del Proyecto:**
```
📁 Pagina-web/
├── 📁 assets/
│   └── 📁 images/
│       ├── logo.svg (2.7KB)
│       └── logo.png (196KB)
├── 📁 css/
│   ├── variables.css
│   ├── base.css
│   └── layout.css
├── index.html
└── LOG_PROGRESO.md
```

**Beneficios:**
- Proyecto mejor organizado y escalable
- Preparado para agregar más assets (iconos, imágenes, etc.)
- Logo visible en pestaña del navegador (favicon)
- Logo clickeable que lleva al inicio (#home)

---

### ✅ [20-ENE-2026] - Barra de Navegación Flotante

**Estado:** Completado

**Cambios Realizados:**
- Creada barra de navegación flotante tipo "isla" centrada
- Implementado efecto visual 3D suave con iluminación sutil
- Navbar fija que permanece visible al hacer scroll

**Archivos Modificados:**
- `css/variables.css` - Nuevas variables: `--navbar-height`, `--navbar-top-offset`, `--navbar-max-width`, `--navbar-bg`, `--navbar-border-color`, `--navbar-glow`
- `css/layout.css` - Nuevos estilos `.navbar-floating` (reemplazan estilos del header anterior)
- `index.html` - Nuevo elemento `<nav class="navbar-floating">` (reemplaza el header anterior)

**Especificaciones Técnicas:**
- ✅ Altura fija: 40px
- ✅ Separación del borde superior: 20px
- ✅ Ancho máximo: 600px (espacio para ~7 secciones)
- ✅ Bordes redondeados (16px)
- ✅ Fondo igual a página (#242124)
- ✅ Borde sutil más claro (rgba blanco 8%)
- ✅ Sombra y glow para efecto 3D suave
- ✅ Posición fija centrada (visible al scroll)
- ✅ Navbar vacía (sin contenido, como solicitado)

**Instrucciones de Verificación:**

1. **Abrir el archivo:**
   - Ve a la carpeta `Proyectos\Pagina-web`
   - Haz doble clic en `index.html`

2. **Verificar visualmente:**
   - ✅ La barra debe aparecer centrada en la parte superior
   - ✅ Debe haber espacio entre la barra y el borde superior
   - ✅ La barra tiene bordes redondeados y un borde sutil más claro
   - ✅ Se nota un efecto de sombra suave (3D)
   - ✅ La barra está vacía (sin links ni contenido)

3. **Probar scroll:**
   - Haz scroll hacia abajo en la página
   - ✅ La barra debe permanecer visible en la misma posición

**Próximos Pasos Sugeridos:**
- Agregar enlaces de navegación dentro de la barra
- Implementar logo en la barra
- Añadir efectos hover en los enlaces

---

### ✅ [20-ENE-2026] - Mejoras Prioridad Alta (Navbar)

**Estado:** Completado

**Mejoras Implementadas:**
1. **Glassmorphism** - `backdrop-filter: blur(12px)` con fallback
2. **Variables de Transición** - `--transition-fast/base/slow/smooth`
3. **Variables de Sombras** - `--shadow-navbar/glow-subtle/inset-glow`
4. **Estructura Flexbox** - Preparada para 7 elementos futuros
5. **Optimización** - `will-change: transform` para GPU

**Archivos Modificados:**
- `css/variables.css` - +15 líneas (transiciones + sombras)
- `css/layout.css` - Navbar actualizada (+24 líneas)

**Verificación:**
1. Abre `index.html` en el navegador
2. La navbar debe verse semi-transparente con efecto vidrio

---

### ✅ [20-ENE-2026] - Mejoras Prioridad Media (Navbar Responsive)

**Estado:** Completado

**Cambios por Breakpoint:**

| Dispositivo | Ancho | Altura | Offset Top | Padding |
|-------------|-------|--------|------------|---------|
| Desktop (>1024px) | max 600px | 40px | 20px | 24px |
| Tablet (≤1024px) | max 520px | 40px | 16px | 16px |
| Mobile (≤768px) | 94% | 36px | 12px | 8px |

**Archivos Modificados:**
- `css/layout.css` - +20 líneas en media queries

**Verificación:**
1. Cambia el tamaño de la ventana del navegador
2. La navbar debe adaptarse suavemente en cada breakpoint

---

### ✅ [20-ENE-2026] - Mejoras Prioridad Baja (Variables rgba + Zona Segura)

**Estado:** Completado

**Nuevas Variables rgba Centralizadas:**
- `--color-bg-glass` - Fondo glassmorphism
- `--color-border-subtle` - Bordes sutiles
- `--color-shadow-dark` - Sombras oscuras
- `--color-glow-light` - Glow sutil
- `--color-border-light` - Bordes claros

**Variable Zona Segura:**
- `--navbar-safe-zone` - Espacio reservado (80px desktop) para evitar contenido oculto

**Archivos Modificados:**
- `css/variables.css` - +12 líneas (variables rgba + zona segura)
- `css/layout.css` - Actualizado para usar variables

**Beneficio:** Ahora puedes ajustar sombras/transparencias desde un solo lugar.

---

### ✅ [20-ENE-2026] - Logo + Nombre en Navbar

**Estado:** Completado

**Elementos Agregados:**
- Logo clicable (SVG) en esquina derecha
- Nombre "Sebastián Moreno" junto al logo
- Enlace a `#home`

**Estilos Creados:**
- `.navbar-brand` - Contenedor flexbox
- `.navbar-logo` - Logo 24px altura
- `.navbar-name` - Tipografía 14px medium

**Archivos Modificados:**
- `css/layout.css` - +30 líneas (estilos brand)
- `index.html` - Estructura logo + nombre

**Verificación:**
1. Abre `index.html`
2. Logo y nombre deben verse en la esquina derecha
3. Clic debe llevar al inicio (#home)

---

### ✅ [20-ENE-2026] - Icono Hamburguesa + Menú Desplegable

**Estado:** Completado

**Elementos Agregados:**
- Icono ☰ en esquina derecha
- Hover cambia a amarillo (#F9C74F)
- Menú desplegable vertical vacío
- Toggle abrir/cerrar

**Archivos Creados:**
- `js/menu.js` - Lógica toggle con accesibilidad

**Archivos Modificados:**
- `css/layout.css` - +80 líneas (toggle + dropdown)
- `index.html` - Estructura icono + menú + script

**Verificación:**
1. Haz clic en ☰ para abrir menú
2. Clic fuera cierra el menú
3. Tecla Escape también cierra

---

### ✅ [20-ENE-2026] - Sistema de Navegación por Estados

**Estado:** Completado

**Estados del Sistema:**
| Ubicación | Navbar | Logo Flotante |
|-----------|--------|---------------|
| Home | ✅ Visible | ❌ Oculto |
| Fuera Home | ❌ Oculto | ✅ Visible |

**Características:**
- Logo flotante más grande (32px vs 24px)
- Transiciones suaves (fade + scale)
- Throttle para rendimiento óptimo
- Nunca ambos visibles simultáneamente

**Archivos Modificados:**
- `css/layout.css` - +60 líneas (estados + logo flotante)
- `js/menu.js` - +50 líneas (detección scroll)
- `index.html` - Logo flotante independiente

**Verificación:**
1. En Home: navbar visible
2. Scroll abajo: navbar desaparece, logo flotante aparece
3. Scroll arriba: navbar reaparece

---

### ✅ [20-ENE-2026] - Mejoras de Revisión Crítica (8 puntos)

**Estado:** Completado

**Prioridad Alta:**
- ✅ Agregado `focus-visible` al botón hamburguesa (accesibilidad)
- ✅ Dropdown se cierra automáticamente al ocultar navbar

**Prioridad Media:**
- ✅ Estilos responsive para `.logo-floating` (tablet/móvil)
- ✅ Estilos responsive para `.navbar-dropdown` (tablet/móvil)
- ✅ Renombrado `menu.js` → `navigation.js`

**Prioridad Baja:**
- ✅ Unificados los dos `DOMContentLoaded` en uno
- ✅ Variable `--color-shadow-dark` para drop-shadow
- ✅ Documentada clase `.navbar-name` como reservada

**Archivos Modificados:**
- `css/layout.css` - +40 líneas (focus-visible, responsive)
- `js/navigation.js` - Nuevo (reemplaza menu.js)
- `index.html` - Actualizada referencia script

**Archivos Eliminados:**
- `js/menu.js`

---

### ✅ [20-ENE-2026] - Aumento de Espacio en Navbar

**Estado:** Completado

**Cambios Realizados:**
- Aumentado ancho máximo de la navbar: `600px` → `750px`
- Aumentado padding horizontal interno: `--spacing-md` (24px) → `--spacing-lg` (32px)

**Archivos Modificados:**
- `css/variables.css` - Variable `--navbar-max-width` actualizada
- `css/layout.css` - Padding de `.navbar-floating` actualizado

**Resultado:**
- ✅ Mayor espacio entre el logo "SM" y los enlaces de navegación
- ✅ Mayor espacio entre los enlaces de navegación y el icono ☰
- ✅ Navbar más ancha y con mejor distribución visual

**Instrucciones de Verificación:**
1. Abre `index.html` en el navegador
2. La navbar debe verse más amplia con mayor separación entre elementos
3. Los espacios entre logo, enlaces y hamburguesa son más generosos

---

### ✅ [20-ENE-2026] - Mejoras de Revisión Crítica (9 puntos)

**Estado:** Completado

**Prioridad Alta (3 puntos):**
- ✅ Corregido ID/href inconsistente: `#como-ayudo` → `#como-transformo`
- ✅ Eliminado `min-height: 150px` del dropdown (se adapta al contenido)
- ✅ Eliminada transición `background-color` huérfana en `.dropdown-link`

**Prioridad Media (3 puntos):**
- ✅ Colores hardcodeados reemplazados por variables CSS (`--color-text-primary`, `--color-accent-5`)
- ✅ Agregado control de overflow para móviles en `.navbar-links` (`max-width`, `overflow: hidden`)
- ✅ Accesibilidad mejorada: `id="navbar-toggle"` + `aria-labelledby="navbar-toggle"`

**Prioridad Baja (3 puntos):**
- ✅ Verificado `logo-alt.svg` existe correctamente
- ✅ Smooth scroll ya implementado en `base.css`
- ✅ Sistema de z-index con variables: `--z-dropdown`, `--z-navbar`, `--z-modal`, `--z-tooltip`, `--z-toast`

**Archivos Modificados:**
- `index.html` - IDs, hrefs, atributos ARIA
- `css/layout.css` - Colores con variables, overflow, z-index
- `css/variables.css` - Sistema z-index agregado

**Instrucciones de Verificación:**
1. Abre `index.html` en el navegador
2. El enlace "Cómo transformo" debe navegar correctamente
3. El dropdown se ajusta al contenido sin espacio vacío
4. Los colores siguen funcionando igual

---

### ✅ [20-ENE-2026] - Sistema de Navegación Adaptativo

**Estado:** Completado

**Descripción:**
Implementado sistema inteligente de transferencia de secciones que reorganiza la navegación según el espacio disponible, sin comprimir ni romper texto.

**Comportamiento:**
- Los enlaces migran de derecha a izquierda: Contacto → Servicios → Proyectos → Cómo transformo → Sobre mí
- Los enlaces migrados aparecen arriba en el menú hamburguesa
- Al ampliar ventana, los enlaces regresan a la barra principal
- El dropdown se adapta automáticamente al contenido

**Archivos Creados/Modificados:**
- `index.html` - Agregado `data-priority` a enlaces, sección `overflow-links` y `dropdown-divider`
- `css/layout.css` - Estilos para `.overflow-links`, `.dropdown-divider`, dropdown auto-width, `.is-hidden`
- `js/navigation.js` - Módulo completo de navegación adaptativa (~150 líneas nuevas)

**Aspectos Técnicos:**
- ✅ Detección real de espacio disponible (no media queries estáticas)
- ✅ Transferencia dinámica de nodos DOM
- ✅ Throttle con `requestAnimationFrame` para rendimiento
- ✅ Soporte para cambio de orientación
- ✅ Espera a que las fuentes carguen antes de calcular

**Instrucciones de Verificación:**
1. Abre `index.html` en el navegador
2. Reduce el ancho de la ventana lentamente
3. Los enlaces deben desaparecer uno por uno (sin cortes de texto)
4. Haz clic en ☰ para ver los enlaces migrados arriba
5. Amplía la ventana y los enlaces deben regresar

---

### ✅ [20-ENE-2026] - Mejoras Finales de Navbar (6 puntos)

**Estado:** Completado

**Prioridad Media (3 puntos):**
- ✅ `white-space: nowrap` en `.overflow-links li`
- ✅ `role="navigation"` agregado al `<nav>` para screen readers antiguos
- ✅ Debounce (150ms) en `orientationchange` para evitar múltiples disparos

**Prioridad Baja (3 puntos):**
- ✅ Transición suave en `.dropdown-divider`
- ✅ `prefers-reduced-motion` para usuarios con sensibilidad al movimiento
- ✅ Constantes JS movidas a CSS: `--nav-gap`, `--nav-padding-safety`

**Archivos Modificados:**
- `index.html` - Agregado `role="navigation"`
- `css/base.css` - Media query `prefers-reduced-motion`
- `css/layout.css` - `white-space: nowrap` en li, transición en divider
- `css/variables.css` - Variables `--nav-gap` y `--nav-padding-safety`
- `js/navigation.js` - Lee variables CSS, debounce en orientationchange

---

## 🎉 NAVBAR COMPLETADA - LISTA PARA PRODUCCIÓN

La barra de navegación está completamente terminada con:
- ✅ Sistema adaptativo inteligente
- ✅ Accesibilidad completa (ARIA, focus, reduced-motion)
- ✅ Rendimiento optimizado
- ✅ Variables CSS centralizadas
- ✅ Código limpio y documentado

---

### ✅ [21-ENE-2026] - Sistema i18n FASE 1: Infraestructura Base

**Estado:** Completado

**Descripción:**
Implementada la infraestructura base del sistema de internacionalización (i18n) sin afectar la UI existente. El sistema permite cargar y cambiar idiomas por consola para pruebas.

**Archivos Creados:**
- `js/i18n.config.js` - Configuración centralizada (idiomas soportados, idioma por defecto, rutas)
- `js/i18n.js` - Motor principal de internacionalización
- `locales/es.json` - Diccionario de traducciones en español
- `locales/en.json` - Diccionario de traducciones en inglés

**Archivos Modificados:**
- `index.html` - Agregados scripts de i18n (sin conectar al DOM)

**Estructura del Sistema:**
```
📁 Pagina-web/
├── 📁 js/
│   ├── i18n.config.js  ← Configuración
│   ├── i18n.js         ← Motor
│   └── navigation.js
├── 📁 locales/
│   ├── es.json         ← Español
│   └── en.json         ← Inglés
└── index.html
```

**Características Implementadas:**
- ✅ Detección automática de idioma (localStorage → navigator.language → fallback)
- ✅ Normalización de códigos (en-US → en)
- ✅ Validación contra lista de idiomas soportados
- ✅ Cache en memoria para rendimiento
- ✅ API expuesta en `window.i18n` para consola
- ✅ Configuración externalizada (sin valores hardcodeados)

**Restricciones Respetadas:**
- ❌ NO se modificó estructura HTML existente
- ❌ NO se modificó navbar
- ❌ NO se modificaron estilos ni layout
- ❌ NO se reemplazaron textos

**Instrucciones de Verificación:**

1. **Abrir la página:**
   - Abre `index.html` con un servidor local (Live Server, etc.)
   - Nota: Requiere servidor por las peticiones `fetch()` a los JSON

2. **Abrir consola del navegador:**
   - Presiona `F12` y ve a la pestaña "Console"

3. **Probar comandos:**
   ```javascript
   // Ver idioma actual
   i18n.getLang()           // → 'es'

   // Cambiar a inglés
   i18n.setLang('en')       // → true

   // Verificar cambio
   i18n.getLang()           // → 'en'

   // Obtener traducción
   i18n.t('nav.home')       // → 'Home'
   i18n.t('hero.title')     // → 'Operating & Decision Systems Designer'

   // Ver idiomas disponibles
   i18n.getSupportedLanguages()  // → ['es', 'en']

   // Ver cache cargadas
   i18n.getCache()
   ```

4. **Verificar persistencia:**
   - Recarga la página
   - Ejecuta `i18n.getLang()` → debe mantener 'en'

**Próximos Pasos (FASE 2):**
- Conectar el motor al DOM
- Agregar selector de idioma en navbar
- Implementar actualización dinámica de textos

---

### ✅ [21-ENE-2026] - Sistema i18n FASE 2: Conexión Mínima DOM

**Estado:** Completado y Verificado

---

#### 📋 Objetivo de la Fase

Conectar el motor i18n al HTML de forma limitada para validar la integración técnica antes de la migración completa. Esta fase fue una **prueba de concepto**, no una migración total.

---

#### 🔧 Cambios Realizados

**Archivo: `js/i18n.js`**

1. **Nueva función `applyTranslations()`**
   - Lee todos los nodos con atributo `data-i18n`
   - Busca la clave en el diccionario cargado
   - Reemplaza solo `textContent` (no innerHTML)
   - Retorna cantidad de elementos traducidos

```javascript
applyTranslations() {
    if (!isInitialized) return 0;
    let count = 0;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = this.t(key);
        if (value && value !== key) {
            el.textContent = value;
            count++;
        }
    });
    console.log(`[i18n] ✓ ${count} elementos traducidos`);
    return count;
}
```

2. **Modificación a `setLang()`**
   - Ahora llama automáticamente a `applyTranslations()` después de cambiar el idioma
   - Esto permite actualización en tiempo real al hacer clic en los botones

---

**Archivo: `index.html`**

1. **4 textos de prueba agregados** (fuera de navbar):

| Elemento | Clave i18n | Ubicación | Texto ES | Texto EN |
|----------|------------|-----------|----------|----------|
| H1 | `hero.title` | `#home` | Diseñador de Sistemas... | Operating & Decision... |
| P | `hero.subtitle` | `#home` | Arquitectura organizacional... | Organizational architecture... |
| H2 | `about.title` | `#sobre-mi` | Sobre Mí | About Me |
| P | `footer.rights` | `footer` | Todos los derechos reservados | All rights reserved |

2. **Selector de idioma temporal**
   - Ubicación: esquina inferior derecha (position: fixed)
   - ID: `i18n-test-selector`
   - Botones simples: ES / EN
   - Estilos inline (no CSS externo)
   - No toca navbar ni layout

```html
<div id="i18n-test-selector" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: rgba(0,0,0,0.8); padding: 10px; border-radius: 8px;">
    <button onclick="i18n.setLang('es')">ES</button>
    <button onclick="i18n.setLang('en')">EN</button>
</div>
```

3. **Bloque de inicialización actualizado**
   - Al cargar página → `i18n.init()` + `applyTranslations()`
   - Al cambiar idioma → `setLang()` llama automáticamente a `applyTranslations()`

---

#### ✅ Verificación Realizada

| Criterio | Resultado |
|----------|-----------|
| Aparecen los 4 textos de prueba | ✅ Sí |
| Cambian ES ⇄ EN | ✅ Sí |
| Nada más cambia | ✅ Sí |
| Navbar intacta | ✅ Sí |
| Animaciones intactas | ✅ Sí |
| Sin errores en consola | ⚠️ Solo CORS con `file://` |
| Al borrar bloque prueba, web queda igual | ✅ Sí |

**Nota:** Las advertencias CORS solo ocurren al abrir con `file://`. Usando un servidor local (Live Server, http-server, etc.) no aparecen.

---

#### 🚫 Restricciones Respetadas

- ❌ NO se refactorizó estructura HTML
- ❌ NO se rediseñó navbar
- ❌ NO se modificaron estilos ni layout
- ❌ NO se migró todo el contenido
- ❌ NO se tocaron componentes críticos

---

#### 📁 Estructura de Archivos Afectados

```
📁 Pagina-web/
├── 📁 js/
│   ├── i18n.config.js  ← Sin cambios
│   ├── i18n.js         ← +applyTranslations(), setLang() modificado
│   └── navigation.js   ← Sin cambios
├── 📁 locales/
│   ├── es.json         ← Sin cambios
│   └── en.json         ← Sin cambios
└── index.html          ← +4 textos data-i18n, +selector temporal
```

---

#### 🎯 Conclusión

**FASE 2 SUPERADA.** La integración técnica del motor i18n con el DOM es viable y funciona correctamente. El sistema está listo para la migración completa en **FASE 3**.

**Próximos Pasos (FASE 3):**
- Migrar todos los textos estáticos al sistema i18n
- Diseñar selector de idioma integrado en navbar
- Actualizar metatags y atributo `lang` del HTML según idioma
- Eliminar textos de prueba y selector temporal

---

### ✅ [21-ENE-2026] - Sistema i18n FASE 3 Parcial: Migrar Navbar y Metadatos

**Estado:** Completado

---

#### 📋 Alcance de la Fase

Migración parcial de componentes existentes (las secciones del sitio están vacías):
- Navbar (8 enlaces)
- `<title>`
- `<meta description>`
- `aria-labels`
- Selector de idioma real

---

#### 🔧 Cambios Realizados

**1. JSONs Actualizados** (`/locales/es.json` y `/locales/en.json`)

Nuevas secciones agregadas:

```json
{
    "meta": {
        "title": "Portafolio Profesional",
        "description": "Portafolio profesional de Diseñador de Sistemas..."
    },
    "nav": {
        "aboutMe": "Sobre mí",
        "howITransform": "Cómo transformo",
        "projects": "Proyectos",
        "services": "Servicios",
        "contact": "Contacto",
        "models": "Modelos",
        "howIWork": "Cómo trabajo",
        "profile": "Perfil profesional"
    },
    "aria": {
        "goHome": "Ir al inicio",
        "mainNav": "Navegación principal",
        "openMenu": "Abrir menú",
        "logo": "Logo - Ir al inicio",
        "logoAlt": "Logo"
    },
    "langSelector": {
        "es": "Español",
        "en": "English"
    }
}
```

---

**2. Motor i18n Extendido** (`js/i18n.js`)

Función `applyTranslations()` mejorada:

| Funcionalidad | Descripción |
|---------------|-------------|
| `data-i18n="clave"` | Reemplaza `textContent` |
| `data-i18n-attr="attr:clave"` | Reemplaza atributos (aria-label, alt, etc.) |
| `<html lang="">` | Se actualiza automáticamente al idioma activo |
| `<title>` | Se actualiza dinámicamente desde `meta.title` |
| `<meta description>` | Se actualiza dinámicamente desde `meta.description` |
| Preservación | Si una clave no existe, el texto original permanece |

---

**3. HTML Migrado** (`index.html`)

Enlaces de navbar principal:
```html
<a href="#sobre-mi" class="navbar-link" data-i18n="nav.aboutMe">Sobre mí</a>
<a href="#como-transformo" class="navbar-link" data-i18n="nav.howITransform">Cómo transformo</a>
<!-- etc. -->
```

Enlaces de dropdown:
```html
<a href="#modelos" class="dropdown-link" data-i18n="nav.models">Modelos</a>
<a href="#como-trabajo" class="dropdown-link" data-i18n="nav.howIWork">Cómo trabajo</a>
<!-- etc. -->
```

Aria-labels:
```html
<nav data-i18n-attr="aria-label:aria.mainNav">
<button data-i18n-attr="aria-label:aria.openMenu">
<img data-i18n-attr="alt:aria.logo">
```

Selector de idioma (dentro del dropdown):
```html
<div class="dropdown-lang-selector">
    <button onclick="i18n.setLang('es')" data-i18n="langSelector.es">Español</button>
    <button onclick="i18n.setLang('en')" data-i18n="langSelector.en">English</button>
</div>
```

---

**4. Estilos CSS** (`css/layout.css`)

Nuevos estilos para selector de idioma:

```css
.dropdown-lang-selector { display: flex; gap: var(--spacing-xs); }
.lang-btn { 
    font-size: 0.75rem; 
    border: 1px solid var(--color-border-subtle);
    /* ... */
}
.lang-btn:hover { color: var(--color-accent-5); }
```

---

#### ⚠️ Requisito Técnico

**CORS con file://**

El sistema usa `fetch()` para cargar los JSON de traducciones. Los navegadores bloquean esto con el protocolo `file://` por seguridad.

**Solución:** Usar un servidor local:
- VS Code: Extensión **Live Server**
- Terminal: `npx http-server`
- Python: `python -m http.server`

---

#### ✅ Verificación Realizada

| Criterio | Resultado |
|----------|-----------|
| Navbar muestra 8 enlaces | ✅ |
| Dropdown abre correctamente | ✅ |
| Selector de idioma visible | ✅ |
| Estilos aplicados | ✅ |
| Motor i18n funciona (con servidor) | ✅ |
| Traducciones bloqueadas con file:// | ⚠️ Esperado |

---

#### 📁 Archivos Modificados

| Archivo | Cambios |
|---------|---------|
| `locales/es.json` | +nav, +meta, +aria, +langSelector |
| `locales/en.json` | +nav, +meta, +aria, +langSelector |
| `js/i18n.js` | applyTranslations() extendido |
| `index.html` | +data-i18n en navbar, +selector idioma |
| `css/layout.css` | +estilos .dropdown-lang-selector, .lang-btn |

---

#### 🎯 Conclusión

**FASE 3 PARCIAL COMPLETADA.** 

- Todos los componentes existentes están migrados a i18n
- El selector de idioma está integrado en el dropdown
- El sistema actualiza automáticamente: navbar, title, meta, html lang
- Las secciones vacías están listas para recibir contenido i18n en el futuro

**Pendiente para cuando haya contenido:**
- Migrar textos de hero, about, services, contact, footer
- Eliminar comentarios "Contenido pendiente"

