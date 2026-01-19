---
name ingenieria-software-senior
description Aplica estándares de arquitectura de software profesional, rendimiento y accesibilidad en cada línea de código generada.
---

# 🛠️ Estándares de Ingeniería de Software Senior

Debes aplicar estas reglas técnicas de alto nivel en cada tarea de programación

## 1. HTML Semántico y Accesibilidad (A11y)
- Estructura No uses solo `div`. Utiliza etiquetas semánticas (`header`, `main`, `section`, `article`, `footer`) para que buscadores y lectores de pantalla entiendan el sitio.
- Accesibilidad Todo elemento interactivo debe tener etiquetas ARIA si es necesario y contrastes de color que cumplan con los estándares profesionales de legibilidad.

## 2. CSS Moderno y Escalable (Arquitectura de Estilos)
- Variables CSS Define colores, fuentes y espaciados como variables globales (Custom Properties). Esto permite cambiar el vibe de todo el sitio modificando un solo lugar.
- Mobile-First El código debe escribirse pensando primero en dispositivos móviles y luego expandirse a escritorio.
- FlexboxGrid Prohibido usar métodos antiguos de posicionamiento. Usa arquitecturas modernas de distribución de elementos.

## 3. Calidad de Código y Clean Code
- DRY (Don't Repeat Yourself) Si una lógica o estilo se repite, conviértelo en un componente o clase reutilizable.
- Validación de Errores Si añades interactividad (JavaScript), incluye siempre manejo de errores para que la web no se rompa si algo falla.
- Rendimiento El código debe ser ligero. Evita cargar librerías externas pesadas si la tarea se puede resolver con código nativo sencillo.

## 4. Auditoría Post-Ejecución
Al finalizar el código, el agente debe auto-revisar
1. ¿Es este código fácil de entender para el usuario
2. ¿Cumple con el diseño minimalista y corporativo solicitado
3. ¿Es escalable para el futuro crecimiento del portafolio