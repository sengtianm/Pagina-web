/**
 * SISTEMA DE NAVEGACIÓN
 * =====================
 * Controla el menú hamburguesa y la navegación por estados (scroll)
 */

document.addEventListener('DOMContentLoaded', function () {
    // ===== ELEMENTOS DOM =====
    const navbar = document.querySelector('.navbar-floating');
    const toggleBtn = document.querySelector('.navbar-toggle');
    const dropdown = document.querySelector('.navbar-dropdown');
    const logoFloating = document.querySelector('.logo-floating');
    const homeSection = document.querySelector('#home');

    // ===== MENÚ DESPLEGABLE =====

    /**
     * Cierra el menú dropdown y actualiza atributos ARIA
     */
    function closeDropdown() {
        if (!dropdown || !toggleBtn) return;
        dropdown.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
    }

    /**
     * Abre/cierra el menú al hacer clic en el icono hamburguesa
     */
    if (toggleBtn && dropdown) {
        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle('is-open');
            toggleBtn.setAttribute('aria-expanded', isOpen);
            dropdown.setAttribute('aria-hidden', !isOpen);
        });

        // Cerrar menú al hacer clic en cualquier enlace del dropdown
        const dropdownLinks = dropdown.querySelectorAll('.dropdown-link');
        dropdownLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeDropdown();
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
                closeDropdown();
            }
        });

        // Cerrar menú con tecla Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && dropdown.classList.contains('is-open')) {
                closeDropdown();
                toggleBtn.focus();
            }
        });
    }

    // ===== NAVEGACIÓN POR ESTADOS (SCROLL) =====

    if (!navbar || !logoFloating || !homeSection) return;

    let ticking = false;

    /**
     * Actualiza la visibilidad de navbar y logo según la posición del scroll
     * - Home: navbar visible, logo flotante oculto
     * - Fuera Home: navbar oculta, logo flotante visible
     */
    function updateNavigationState() {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        const threshold = 100;

        if (homeBottom > threshold) {
            // Usuario en Home: navbar visible, logo oculto
            navbar.classList.remove('is-hidden');
            logoFloating.classList.remove('is-visible');
        } else {
            // Usuario fuera de Home: navbar oculta, logo visible
            navbar.classList.add('is-hidden');
            logoFloating.classList.add('is-visible');

            // Cerrar dropdown cuando navbar se oculta (mejora #2)
            closeDropdown();
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavigationState);
            ticking = true;
        }
    }

    // Escuchar scroll con passive para mejor rendimiento
    window.addEventListener('scroll', onScroll, { passive: true });

    // Estado inicial
    updateNavigationState();
});
