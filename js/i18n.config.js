/**
 * ═══════════════════════════════════════════════════════════════════════════
 * i18n.config.js — Configuración del Sistema de Internacionalización
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Este archivo centraliza toda la configuración del motor i18n.
 * El motor depende exclusivamente de estos valores, sin hardcodear nada.
 * 
 * @author Portfolio — Diseñador de Sistemas
 * @version 1.0.0
 */

const I18N_CONFIG = {
    /**
     * Lista de idiomas soportados por la aplicación.
     * El motor validará contra esta lista antes de aplicar cualquier idioma.
     */
    supportedLanguages: ['es', 'en'],

    /**
     * Idioma por defecto cuando:
     * - No hay preferencia en localStorage
     * - navigator.language no está en la lista de soportados
     * - Ocurre cualquier error de detección
     */
    defaultLanguage: 'es',

    /**
     * Clave usada en localStorage para persistir la preferencia de idioma.
     */
    storageKey: 'lang',

    /**
     * Ruta base donde se encuentran los archivos de traducción.
     * Los archivos deben seguir el patrón: {basePath}/{langCode}.json
     */
    localesPath: './locales',

    /**
     * Modo debug: muestra logs en consola.
     * Cambiar a false antes de publicar en producción.
     */
    debug: false
};

// Exportar para uso global (compatible con scripts tradicionales)
if (typeof window !== 'undefined') {
    window.I18N_CONFIG = I18N_CONFIG;
}
