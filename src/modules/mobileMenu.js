// Comportamiento del menú hamburguesa en pantallas angostas (<768px).
// El menú desktop (navbar.js) usa hidden md:flex — siempre visible desde
// tablet hacia arriba. Este módulo solo controla el menú alternativo que
// aparece en celular.

export function initMobileMenu() {
    const btn = document.getElementById('btn-menu-movil')
    const menu = document.getElementById('menu-movil')
    if (!btn || !menu) return

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden')
    })

    // Cierra el menú automáticamente al elegir un link — sin esto, el menú
    // se quedaría abierto tapando la sección a la que el usuario acaba de saltar.
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.add('hidden'))
    })
}