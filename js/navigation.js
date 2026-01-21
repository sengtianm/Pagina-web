/**
 * SISTEMA DE NAVEGACIÓN
 * =====================
 * Controla el menú hamburguesa, navegación por estados (scroll),
 * y sistema adaptativo de transferencia de enlaces
 */

document.addEventListener('DOMContentLoaded', function () {
    // ===== ELEMENTOS DOM =====
    const navbar = document.querySelector('.navbar-floating');
    const toggleBtn = document.querySelector('.navbar-toggle');
    const dropdown = document.querySelector('.navbar-dropdown');
    const logoFloating = document.querySelector('.logo-floating');
    const langSelector = document.querySelector('.lang-selector-floating');
    const homeSection = document.querySelector('#home');

    // Elementos para navegación adaptativa
    const navbarLinks = document.getElementById('navbar-links');
    const overflowLinks = document.getElementById('overflow-links');
    const dropdownDivider = document.getElementById('dropdown-divider');
    const logo = document.querySelector('.navbar-brand');

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

    if (toggleBtn && dropdown) {
        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle('is-open');
            toggleBtn.setAttribute('aria-expanded', isOpen);
            dropdown.setAttribute('aria-hidden', !isOpen);
        });

        // Cerrar menú al hacer clic en cualquier enlace del dropdown
        dropdown.addEventListener('click', function (e) {
            if (e.target.closest('a')) {
                closeDropdown();
            }
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

    if (navbar && logoFloating && homeSection) {
        let scrollTicking = false;

        function updateNavigationState() {
            const homeBottom = homeSection.getBoundingClientRect().bottom;
            const threshold = 100;

            if (homeBottom > threshold) {
                navbar.classList.remove('is-hidden');
                logoFloating.classList.remove('is-visible');
                if (langSelector) langSelector.classList.remove('is-hidden');
            } else {
                navbar.classList.add('is-hidden');
                logoFloating.classList.add('is-visible');
                if (langSelector) langSelector.classList.add('is-hidden');
                closeDropdown();
            }

            scrollTicking = false;
        }

        function onScroll() {
            if (!scrollTicking) {
                window.requestAnimationFrame(updateNavigationState);
                scrollTicking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        updateNavigationState();
    }

    // ===== SISTEMA DE NAVEGACIÓN ADAPTATIVA =====

    if (!navbarLinks || !overflowLinks || !navbar || !logo || !toggleBtn) return;

    // Configuración - Leer de CSS custom properties para mantenibilidad centralizada
    const rootStyles = getComputedStyle(document.documentElement);
    const PADDING_SAFETY = parseInt(rootStyles.getPropertyValue('--nav-padding-safety')) || 60;
    const GAP = parseInt(rootStyles.getPropertyValue('--nav-gap')) || 24;

    // Guardar referencias originales de los enlaces
    const originalLinks = Array.from(navbarLinks.querySelectorAll('li[data-priority]'));

    // Ordenar por prioridad (mayor prioridad = sale primero)
    const linksByPriority = [...originalLinks].sort((a, b) => {
        return parseInt(b.dataset.priority) - parseInt(a.dataset.priority);
    });

    // Estado
    let resizeTicking = false;
    let overflowedLinks = [];

    /**
     * Calcula el ancho disponible para los enlaces
     */
    function getAvailableWidth() {
        const navbarWidth = navbar.offsetWidth;
        const logoWidth = logo.offsetWidth;
        const toggleWidth = toggleBtn.offsetWidth;
        const padding = parseInt(getComputedStyle(navbar).paddingLeft) * 2;

        return navbarWidth - logoWidth - toggleWidth - padding - PADDING_SAFETY;
    }

    /**
     * Calcula el ancho total de los enlaces visibles
     */
    function getLinksWidth() {
        let totalWidth = 0;
        const visibleLinks = originalLinks.filter(li => !li.classList.contains('is-hidden'));

        visibleLinks.forEach((li, index) => {
            totalWidth += li.offsetWidth;
            if (index < visibleLinks.length - 1) {
                totalWidth += GAP;
            }
        });

        return totalWidth;
    }

    /**
     * Mueve un enlace al dropdown (overflow)
     */
    function moveToOverflow(li) {
        li.classList.add('is-hidden');

        // Clonar el enlace para el dropdown
        const link = li.querySelector('a').cloneNode(true);
        const newLi = document.createElement('li');
        newLi.appendChild(link);
        newLi.dataset.originalPriority = li.dataset.priority;

        // Insertar al principio (los que salen primero van arriba)
        overflowLinks.insertBefore(newLi, overflowLinks.firstChild);
        overflowedLinks.push(li);

        updateDividerVisibility();
    }

    /**
     * Restaura un enlace del dropdown a la navbar
     */
    function restoreFromOverflow(li) {
        li.classList.remove('is-hidden');

        // Eliminar del overflow
        const priority = li.dataset.priority;
        const overflowItem = overflowLinks.querySelector(`li[data-original-priority="${priority}"]`);
        if (overflowItem) {
            overflowItem.remove();
        }

        overflowedLinks = overflowedLinks.filter(item => item !== li);
        updateDividerVisibility();
    }

    /**
     * Actualiza visibilidad del separador
     */
    function updateDividerVisibility() {
        if (dropdownDivider) {
            dropdownDivider.style.display = overflowLinks.children.length > 0 ? 'block' : 'none';
        }
    }

    /**
     * Actualiza el estado de overflow basado en el espacio disponible
     */
    function updateOverflow() {
        const availableWidth = getAvailableWidth();
        let currentWidth = getLinksWidth();

        // Fase 1: Mover enlaces al overflow si no caben
        for (const li of linksByPriority) {
            if (li.classList.contains('is-hidden')) continue;

            if (currentWidth > availableWidth) {
                moveToOverflow(li);
                currentWidth = getLinksWidth();
            }
        }

        // Fase 2: Restaurar enlaces si hay espacio
        // Iterar en orden inverso (menor prioridad = restaurar primero)
        const linksToRestore = [...overflowedLinks].sort((a, b) => {
            return parseInt(a.dataset.priority) - parseInt(b.dataset.priority);
        });

        for (const li of linksToRestore) {
            // Temporalmente mostrar para medir
            li.classList.remove('is-hidden');
            const testWidth = getLinksWidth();

            if (testWidth <= availableWidth) {
                // Cabe, restaurar permanentemente
                restoreFromOverflow(li);
            } else {
                // No cabe, volver a ocultar
                li.classList.add('is-hidden');
                break; // No intentar restaurar más
            }
        }

        resizeTicking = false;
    }

    /**
     * Handler de resize con throttle
     */
    function onResize() {
        if (!resizeTicking) {
            window.requestAnimationFrame(updateOverflow);
            resizeTicking = true;
        }
    }

    // Event listeners
    window.addEventListener('resize', onResize, { passive: true });

    // Orientationchange con debounce adicional para evitar múltiples disparos
    let orientationTimeout = null;
    window.addEventListener('orientationchange', function () {
        if (orientationTimeout) clearTimeout(orientationTimeout);
        orientationTimeout = setTimeout(updateOverflow, 150);
    });

    // Estado inicial (con pequeño delay para asegurar renders)
    setTimeout(updateOverflow, 100);

    // Actualizar de nuevo después de que las fuentes carguen
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateOverflow);
    }

    // ===== SELECTOR DE IDIOMA ADAPTATIVO =====

    const dropdownLangSection = document.getElementById('dropdown-lang-section');

    /**
     * Verifica si el selector de idioma flotante se superpone con la navbar
     * y lo migra al dropdown si es necesario
     */
    function updateLangSelectorPosition() {
        if (!langSelector || !navbar || !dropdownLangSection) return;

        // Temporalmente mostrar para poder medir correctamente
        langSelector.style.display = 'flex';

        const navbarRect = navbar.getBoundingClientRect();
        const selectorRect = langSelector.getBoundingClientRect();

        // Calcular si hay superposición (dejando 20px de margen)
        const isOverlapping = selectorRect.left < (navbarRect.right + 20);

        if (isOverlapping) {
            // Ocultar flotante, mostrar en dropdown
            langSelector.style.display = 'none';
            dropdownLangSection.classList.add('is-visible');
        } else {
            // Mantener flotante visible, ocultar en dropdown
            langSelector.style.display = 'flex';
            dropdownLangSection.classList.remove('is-visible');
        }
    }

    // Ejecutar al cargar y al redimensionar
    window.addEventListener('resize', updateLangSelectorPosition, { passive: true });
    setTimeout(updateLangSelectorPosition, 150);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateLangSelectorPosition);
    }
});

