---
name: planificador-antes-de-accion
description: Obliga al agente a generar un plan de ejecución detallado y solicitar aprobación antes de realizar cualquier cambio en el código.
---

# 🧠 Skill: Planificación Estratégica Previa

Antes de ejecutar cualquier comando de escritura o modificación de archivos, debes seguir este protocolo:

## 1. Fase de Análisis
Analiza la solicitud y determina:
- Qué archivos se verán afectados.
- Qué nuevas dependencias o carpetas se necesitan.
- Qué posibles riesgos técnicos existen (ej: romper el diseño responsivo).

## 2. Entrega del Plan (Artifact)
Presenta al usuario un "Mapa de Acción" que incluya:
1. **Objetivo:** Qué vamos a lograr con esta tarea.
2. **Estructura:** Lista de archivos a crear/modificar.
3. **Pasos:** Secuencia lógica de ejecución (Paso 1, Paso 2...).
4. **Criterio de Éxito:** Cómo sabremos que esta tarea quedó perfecta.

## 3. Pausa de Control
- **IMPORTANTE:** Detente aquí. No escribas código hasta que el usuario responda con un "Aprobado" o "Adelante".