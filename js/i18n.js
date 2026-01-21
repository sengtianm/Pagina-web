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
 * - Modo debug controlado por configuración
 * 
 * Dependencias:
 * - Requiere i18n.config.js cargado previamente
 * 
 * @author Portfolio — Diseñador de Sistemas
 * @version 1.1.0
 */

(function () {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════════
    // ESTADO INTERNO
    // ═══════════════════════════════════════════════════════════════════════

    const translationsCache = {};
    let currentLanguage = null;
    let isInitialized = false;

    // ═══════════════════════════════════════════════════════════════════════
    // FUNCIONES PRIVADAS
    // ═══════════════════════════════════════════════════════════════════════

    function getConfig() {
        if (typeof window.I18N_CONFIG === 'undefined') {
            throw new Error('[i18n] ERROR: i18n.config.js debe cargarse antes que i18n.js');
        }
        return window.I18N_CONFIG;
    }

    /** Log condicional: solo muestra si debug: true */
    function log(...args) {
        if (getConfig().debug) console.log(...args);
    }

    /** Warn condicional: solo muestra si debug: true */
    function warn(...args) {
        if (getConfig().debug) console.warn(...args);
    }

    function normalizeLanguageCode(langCode) {
        if (!langCode || typeof langCode !== 'string') return null;
        return langCode.toLowerCase().substring(0, 2);
    }

    function isLanguageSupported(langCode) {
        return getConfig().supportedLanguages.includes(langCode);
    }

    function detectLanguage() {
        const config = getConfig();

        const storedLang = localStorage.getItem(config.storageKey);
        if (storedLang) {
            const normalized = normalizeLanguageCode(storedLang);
            if (isLanguageSupported(normalized)) {
                log(`[i18n] Idioma desde localStorage: ${normalized}`);
                return normalized;
            }
        }

        if (navigator.language) {
            const normalized = normalizeLanguageCode(navigator.language);
            if (isLanguageSupported(normalized)) {
                log(`[i18n] Idioma desde navigator: ${normalized}`);
                return normalized;
            }
        }

        log(`[i18n] Usando idioma por defecto: ${config.defaultLanguage}`);
        return config.defaultLanguage;
    }

    async function loadTranslations(langCode) {
        const config = getConfig();

        if (translationsCache[langCode]) {
            log(`[i18n] Traducciones de '${langCode}' desde cache`);
            return translationsCache[langCode];
        }

        const url = `${config.localesPath}/${langCode}.json`;

        try {
            log(`[i18n] Cargando: ${url}`);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const translations = await response.json();
            translationsCache[langCode] = translations;
            log(`[i18n] ✓ '${langCode}' cargado`);

            return translations;
        } catch (error) {
            console.error(`[i18n] Error cargando '${langCode}':`, error);
            throw error;
        }
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : undefined;
        }, obj);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // API PÚBLICA
    // ═══════════════════════════════════════════════════════════════════════

    const i18n = {
        async init() {
            if (isInitialized) {
                warn('[i18n] Ya inicializado');
                return;
            }

            try {
                currentLanguage = detectLanguage();
                await loadTranslations(currentLanguage);
                isInitialized = true;
                log(`[i18n] ✓ Idioma activo: ${currentLanguage}`);
            } catch (error) {
                console.error('[i18n] Error inicialización:', error);
                throw error;
            }
        },

        async setLang(langCode) {
            const normalized = normalizeLanguageCode(langCode);

            if (!isLanguageSupported(normalized)) {
                console.error(`[i18n] Idioma '${langCode}' no soportado`);
                return false;
            }

            if (normalized === currentLanguage) {
                log(`[i18n] '${normalized}' ya activo`);
                return true;
            }

            try {
                await loadTranslations(normalized);
                currentLanguage = normalized;
                localStorage.setItem(getConfig().storageKey, normalized);
                log(`[i18n] ✓ Cambiado a: ${normalized}`);
                this.applyTranslations();
                return true;
            } catch (error) {
                console.error(`[i18n] Error cambiando a '${normalized}':`, error);
                return false;
            }
        },

        getLang() {
            return currentLanguage;
        },

        t(key, fallback = null) {
            if (!isInitialized) {
                warn('[i18n] No inicializado');
                return fallback || key;
            }

            const translations = translationsCache[currentLanguage];
            if (!translations) {
                warn(`[i18n] Sin traducciones para '${currentLanguage}'`);
                return fallback || key;
            }

            const value = getNestedValue(translations, key);

            if (value === undefined) {
                warn(`[i18n] Clave no encontrada: '${key}'`);
                return fallback || key;
            }

            return value;
        },

        getSupportedLanguages() {
            return [...getConfig().supportedLanguages];
        },

        getCache() {
            return { ...translationsCache };
        },

        isReady() {
            return isInitialized;
        },

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

            // 4. Procesar data-i18n (textContent)
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const value = this.t(key);
                if (value && value !== key) {
                    el.textContent = value;
                    count++;
                }
            });

            // 5. Procesar data-i18n-attr (atributos)
            document.querySelectorAll('[data-i18n-attr]').forEach(el => {
                const config = el.getAttribute('data-i18n-attr');
                config.split(',').forEach(pair => {
                    const [attr, key] = pair.split(':').map(s => s.trim());
                    if (attr && key) {
                        const value = this.t(key);
                        if (value && value !== key) {
                            el.setAttribute(attr, value);
                            count++;
                        }
                    }
                });
            });

            // 6. Actualizar selector de idioma
            document.querySelectorAll('.lang-btn-floating').forEach(btn => {
                const lang = btn.getAttribute('data-lang');
                if (lang === currentLanguage) {
                    btn.classList.add('is-active');
                } else {
                    btn.classList.remove('is-active');
                }
            });

            log(`[i18n] ✓ ${count} elementos | lang="${currentLanguage}"`);
            return count;
        }
    };

    // ═══════════════════════════════════════════════════════════════════════
    // EXPOSICIÓN GLOBAL
    // ═══════════════════════════════════════════════════════════════════════

    window.i18n = i18n;

})();
