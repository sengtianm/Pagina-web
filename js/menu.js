/**
 * MENÚ DESPLEGABLE - Toggle
 * ==========================
 * Controla la apertura/cierre del menú hamburguesa
 */

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.navbar-toggle');
    const dropdown = document.querySelector('.navbar-dropdown');

    if (!toggleBtn || !dropdown) return;

    // Toggle del menú al hacer clic en el icono
    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle('is-open');

        // Actualizar atributos de accesibilidad
        toggleBtn.setAttribute('aria-expanded', isOpen);
        dropdown.setAttribute('aria-hidden', !isOpen);
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
            dropdown.classList.remove('is-open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            dropdown.setAttribute('aria-hidden', 'true');
        }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && dropdown.classList.contains('is-open')) {
            dropdown.classList.remove('is-open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            dropdown.setAttribute('aria-hidden', 'true');
            toggleBtn.focus();
        }
    });
});
