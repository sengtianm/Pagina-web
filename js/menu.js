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


/**
 * NAVEGACIÓN POR ESTADOS
 * =======================
 * Controla la visibilidad de navbar y logo flotante según scroll
 * - Home: navbar visible, logo flotante oculto
 * - Fuera Home: navbar oculta, logo flotante visible
 */

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-floating');
    const logoFloating = document.querySelector('.logo-floating');
    const homeSection = document.querySelector('#home');

    if (!navbar || !logoFloating || !homeSection) return;

    // Throttle para optimizar rendimiento
    let ticking = false;

    function updateNavigationState() {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        const threshold = 100; // Margen antes de cambiar estado

        if (homeBottom > threshold) {
            // Usuario en Home: navbar visible, logo oculto
            navbar.classList.remove('is-hidden');
            logoFloating.classList.remove('is-visible');
        } else {
            // Usuario fuera de Home: navbar oculta, logo visible
            navbar.classList.add('is-hidden');
            logoFloating.classList.add('is-visible');
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavigationState);
            ticking = true;
        }
    }

    // Escuchar scroll
    window.addEventListener('scroll', onScroll, { passive: true });

    // Estado inicial
    updateNavigationState();
});
