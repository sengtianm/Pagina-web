/**
 * ═══════════════════════════════════════════════════════════════════════════
 * i18n.js — Motor de Internacionalización Desacoplado
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Sistema de internacionalización modular y desacoplado.
 * 
 * Características:
 * - Detección automática de idioma (localStorage > navigator.language)
 * - Normalización de códigos de idioma (en-US → en)
 * - Validación contra lista de idiomas soportados
 * - Cache en memoria para rendimiento
 * - API expuesta para cambio dinámico por consola
 * 
 * Dependencias:
 * - Requiere i18n.config.js cargado previamente
 * 
 * @author Portfolio — Diseñador de Sistemas
 * @version 1.0.0
 */

(function () {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════════
    // ESTADO INTERNO
    // ═══════════════════════════════════════════════════════════════════════

    /**
     * Cache en memoria para las traducciones cargadas.
     * Estructura: { 'es': {...}, 'en': {...} }
     */
    const translationsCache = {};

    /**
     * Idioma actualmente activo.
     */
    let currentLanguage = null;

    /**
     * Flag para indicar si el sistema está inicializado.
     */
    let isInitialized = false;

    // ═══════════════════════════════════════════════════════════════════════
    // FUNCIONES PRIVADAS
    // ═══════════════════════════════════════════════════════════════════════

    /**
     * Obtiene la configuración del sistema.
     * Valida que i18n.config.js esté cargado.
     * @returns {Object} Configuración del sistema
     * @throws {Error} Si la configuración no está disponible
     */
    function getConfig() {
        if (typeof window.I18N_CONFIG === 'undefined') {
            throw new Error('[i18n] ERROR: i18n.config.js debe cargarse antes que i18n.js');
        }
        return window.I18N_CONFIG;
    }

    /**
     * Normaliza un código de idioma.
     * Convierte formatos como 'en-US', 'en_US', 'EN' a 'en'.
     * @param {string} langCode - Código de idioma a normalizar
     * @returns {string} Código normalizado (primeros 2 caracteres en minúsculas)
     */
    function normalizeLanguageCode(langCode) {
        if (!langCode || typeof langCode !== 'string') {
            return null;
        }
        // Tomar solo los primeros 2 caracteres y convertir a minúsculas
        // Esto maneja: en-US, en_US, EN, en, etc.
        return langCode.toLowerCase().substring(0, 2);
    }

    /**
     * Valida si un idioma está en la lista de soportados.
     * @param {string} langCode - Código de idioma normalizado
     * @returns {boolean} True si el idioma está soportado
     */
    function isLanguageSupported(langCode) {
        const config = getConfig();
        return config.supportedLanguages.includes(langCode);
    }

    /**
     * Detecta el idioma preferido del usuario.
     * Prioridad: localStorage > navigator.language > defaultLanguage
     * @returns {string} Código de idioma detectado y validado
     */
    function detectLanguage() {
        const config = getConfig();

        // 1. Intentar obtener de localStorage
        const storedLang = localStorage.getItem(config.storageKey);
        if (storedLang) {
            const normalized = normalizeLanguageCode(storedLang);
            if (isLanguageSupported(normalized)) {
                console.log(`[i18n] Idioma detectado desde localStorage: ${normalized}`);
                return normalized;
            }
        }

        // 2. Intentar obtener de navigator.language
        if (navigator.language) {
            const normalized = normalizeLanguageCode(navigator.language);
            if (isLanguageSupported(normalized)) {
                console.log(`[i18n] Idioma detectado desde navigator: ${normalized}`);
                return normalized;
            }
        }

        // 3. Fallback al idioma por defecto
        console.log(`[i18n] Usando idioma por defecto: ${config.defaultLanguage}`);
        return config.defaultLanguage;
    }

    /**
     * Carga las traducciones de un idioma desde el archivo JSON.
     * Utiliza cache para evitar peticiones duplicadas.
     * @param {string} langCode - Código de idioma a cargar
     * @returns {Promise<Object>} Promesa que resuelve con las traducciones
     */
    async function loadTranslations(langCode) {
        const config = getConfig();

        // Verificar si ya está en cache
        if (translationsCache[langCode]) {
            console.log(`[i18n] Traducciones de '${langCode}' obtenidas desde cache`);
            return translationsCache[langCode];
        }

        // Cargar desde archivo
        const url = `${config.localesPath}/${langCode}.json`;

        try {
            console.log(`[i18n] Cargando traducciones desde: ${url}`);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const translations = await response.json();

            // Guardar en cache
            translationsCache[langCode] = translations;
            console.log(`[i18n] Traducciones de '${langCode}' cargadas y cacheadas exitosamente`);

            return translations;
        } catch (error) {
            console.error(`[i18n] Error cargando traducciones de '${langCode}':`, error);
            throw error;
        }
    }

    /**
     * Accede a un valor anidado en un objeto usando notación de puntos.
     * Ejemplo: getNestedValue(obj, 'nav.home') → obj.nav.home
     * @param {Object} obj - Objeto donde buscar
     * @param {string} path - Ruta en notación de puntos
     * @returns {*} Valor encontrado o undefined
     */
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : undefined;
        }, obj);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // API PÚBLICA
    // ═══════════════════════════════════════════════════════════════════════

    const i18n = {
        /**
         * Inicializa el sistema de internacionalización.
         * Detecta el idioma y carga las traducciones.
         * @returns {Promise<void>}
         */
        async init() {
            if (isInitialized) {
                console.warn('[i18n] El sistema ya está inicializado');
                return;
            }

            console.log('[i18n] ══════════════════════════════════════════');
            console.log('[i18n] Inicializando sistema de internacionalización');
            console.log('[i18n] ══════════════════════════════════════════');

            try {
                const config = getConfig();
                console.log('[i18n] Configuración cargada:', config);

                // Detectar idioma
                currentLanguage = detectLanguage();

                // Cargar traducciones
                await loadTranslations(currentLanguage);

                isInitialized = true;
                console.log(`[i18n] ✓ Sistema inicializado. Idioma activo: ${currentLanguage}`);
            } catch (error) {
                console.error('[i18n] ✗ Error durante inicialización:', error);
                throw error;
            }
        },

        /**
         * Cambia el idioma activo.
         * @param {string} langCode - Código del nuevo idioma
         * @returns {Promise<boolean>} True si el cambio fue exitoso
         */
        async setLang(langCode) {
            const normalized = normalizeLanguageCode(langCode);

            if (!isLanguageSupported(normalized)) {
                console.error(`[i18n] Idioma '${langCode}' no está soportado`);
                console.log(`[i18n] Idiomas disponibles: ${getConfig().supportedLanguages.join(', ')}`);
                return false;
            }

            if (normalized === currentLanguage) {
                console.log(`[i18n] El idioma '${normalized}' ya está activo`);
                return true;
            }

            try {
                // Cargar traducciones del nuevo idioma
                await loadTranslations(normalized);

                // Actualizar estado
                currentLanguage = normalized;

                // Persistir en localStorage
                const config = getConfig();
                localStorage.setItem(config.storageKey, normalized);

                console.log(`[i18n] ✓ Idioma cambiado a: ${normalized}`);

                // FASE 2: Aplicar traducciones al DOM
                this.applyTranslations();

                return true;
            } catch (error) {
                console.error(`[i18n] Error al cambiar idioma a '${normalized}':`, error);
                return false;
            }
        },

        /**
         * Obtiene el idioma actualmente activo.
         * @returns {string} Código del idioma activo
         */
        getLang() {
            return currentLanguage;
        },

        /**
         * Obtiene una traducción por su clave.
         * @param {string} key - Clave de traducción en notación de puntos (ej: 'nav.home')
         * @param {string} [fallback] - Valor a retornar si no se encuentra la clave
         * @returns {string} Texto traducido o fallback
         */
        t(key, fallback = null) {
            if (!isInitialized) {
                console.warn('[i18n] El sistema no está inicializado. Llama a i18n.init() primero.');
                return fallback || key;
            }

            const translations = translationsCache[currentLanguage];
            if (!translations) {
                console.warn(`[i18n] No hay traducciones cargadas para '${currentLanguage}'`);
                return fallback || key;
            }

            const value = getNestedValue(translations, key);

            if (value === undefined) {
                console.warn(`[i18n] Clave no encontrada: '${key}'`);
                return fallback || key;
            }

            return value;
        },

        /**
         * Obtiene la lista de idiomas soportados.
         * @returns {string[]} Array de códigos de idioma
         */
        getSupportedLanguages() {
            return [...getConfig().supportedLanguages];
        },

        /**
         * Obtiene el contenido completo del cache de traducciones.
         * Útil para depuración.
         * @returns {Object} Cache de traducciones
         */
        getCache() {
            return { ...translationsCache };
        },

        /**
         * Verifica si el sistema está inicializado.
         * @returns {boolean}
         */
        isReady() {
            return isInitialized;
        },

        /**
         * FASE 3: Aplica traducciones a elementos con data-i18n.
         * - data-i18n="clave" → reemplaza textContent
         * - data-i18n-attr="attr:clave" → reemplaza atributo
         * - Preserva texto original si clave no existe
         * - Actualiza <html lang="">
         * - Actualiza <title> y <meta description>
         * @returns {number} Cantidad de elementos traducidos
         */
        applyTranslations() {
            if (!isInitialized) return 0;
            let count = 0;

            // 1. Actualizar <html lang="">
            document.documentElement.lang = currentLanguage;

            // 2. Actualizar <title>
            const titleValue = this.t('meta.title');
            if (titleValue && titleValue !== 'meta.title') {
                document.title = titleValue;
                count++;
            }

            // 3. Actualizar <meta description>
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                const descValue = this.t('meta.description');
                if (descValue && descValue !== 'meta.description') {
                    metaDesc.setAttribute('content', descValue);
                    count++;
                }
            }

            // 4. Procesar elementos con data-i18n (textContent)
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const value = this.t(key);
                // Preservar original si clave no existe
                if (value && value !== key) {
                    el.textContent = value;
                    count++;
                }
            });

            // 5. Procesar elementos con data-i18n-attr (atributos)
            document.querySelectorAll('[data-i18n-attr]').forEach(el => {
                const config = el.getAttribute('data-i18n-attr');
                // Formato: "attr:clave" o "attr1:clave1,attr2:clave2"
                config.split(',').forEach(pair => {
                    const [attr, key] = pair.split(':').map(s => s.trim());
                    if (attr && key) {
                        const value = this.t(key);
                        // Preservar original si clave no existe
                        if (value && value !== key) {
                            el.setAttribute(attr, value);
                            count++;
                        }
                    }
                });
            });

            // 6. Actualizar estado visual del selector de idioma flotante
            document.querySelectorAll('.lang-btn-floating').forEach(btn => {
                const lang = btn.getAttribute('data-lang');
                if (lang === currentLanguage) {
                    btn.classList.add('is-active');
                } else {
                    btn.classList.remove('is-active');
                }
            });

            console.log(`[i18n] ✓ ${count} elementos traducidos | lang="${currentLanguage}"`);
            return count;
        }
    };

    // ═══════════════════════════════════════════════════════════════════════
    // EXPOSICIÓN GLOBAL
    // ═══════════════════════════════════════════════════════════════════════

    // Exponer en window para acceso por consola
    window.i18n = i18n;

    console.log('[i18n] Módulo cargado. Usa i18n.init() para inicializar.');

})();
