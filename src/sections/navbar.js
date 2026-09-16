// Barra de navegación fija (sticky) en la parte superior. Los links usan
// anclas (#sobre-mi, #estudios, etc.) que coinciden con los id="" de cada
// sección — el scroll suave y el offset para no tapar títulos están
// definidos en style.css (scroll-behavior y scroll-margin-top).
//
// En pantallas angostas (<768px) el menú horizontal se oculta y se
// reemplaza por un botón hamburguesa (#btn-menu-movil) que despliega
// #menu-movil — ver el comportamiento en modules/mobileMenu.js.
export function renderNavbar() {
    return `
    <header class="sticky top-0 z-50 w-full bg-gradient-to-r from-arcade-navy to-arcade-teal border-b-[3px] border-arcade-border shadow-[0_6px_20px_rgba(0,0,0,0.45)] mb-8 px-4 sm:px-8 py-3.5">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-arcade-border border-2 border-black shadow-[3px_3px_0px_#000000] flex items-center justify-center font-mono font-black text-black text-lg group-hover:bg-arcade-cyan transition-colors">
            AS
          </div>
          <div>
            <span class="block font-black tracking-wider text-lg sm:text-xl text-arcade-title" style="text-shadow: 2px 2px 0px #000000;">
              ANGELO SÁNCHEZ
            </span>
            <span class="block font-mono text-[11px] text-arcade-cyan tracking-widest uppercase">
              // Full Stack JS Dev en formación
            </span>
          </div>
        </a>

        <nav class="hidden md:flex items-center space-x-6 font-mono text-xs uppercase tracking-wider font-bold">
          <a href="#sobre-mi" class="text-arcade-text hover:text-arcade-link-hover transition-colors">
            <span class="text-arcade-border">01.</span> Sobre Mí
          </a>
          <a href="#formacion" class="text-arcade-text hover:text-arcade-link-hover transition-colors">
            <span class="text-arcade-border">02.</span> Formacion
          </a>
          <a href="#experiencia" class="text-arcade-text hover:text-arcade-link-hover transition-colors">
            <span class="text-arcade-border">03.</span> Experiencia
          </a>
          <a href="#proyectos" class="text-arcade-text hover:text-arcade-link-hover transition-colors">
            <span class="text-arcade-border">04.</span> Proyectos
          </a>
          <a href="#habilidades" class="text-arcade-text hover:text-arcade-link-hover transition-colors">
            <span class="text-arcade-border">05.</span> Habilidades
          </a>
          <a href="#contacto" class="text-arcade-text hover:text-arcade-link-hover transition-colors">
            <span class="text-arcade-border">06.</span> Contacto
          </a>
        </nav>

        <button id="btn-menu-movil" aria-label="Abrir menú" class="md:hidden bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] w-10 h-10 flex items-center justify-center text-arcade-title">
          <i data-lucide="menu" class="w-5 h-5"></i>
        </button>
      </div>

      <nav id="menu-movil" class="hidden md:hidden flex-col items-start gap-1 px-4 pt-4 pb-1 font-mono text-xs uppercase tracking-wider font-bold border-t-2 border-arcade-border/30 mt-3.5">
        <a href="#sobre-mi" class="w-full py-2 text-arcade-text hover:text-arcade-link-hover transition-colors">
          <span class="text-arcade-border">01.</span> Sobre Mí
        </a>
        <a href="#estudios" class="w-full py-2 text-arcade-text hover:text-arcade-link-hover transition-colors">
          <span class="text-arcade-border">02.</span> Estudios
        </a>
        <a href="#experiencia" class="w-full py-2 text-arcade-text hover:text-arcade-link-hover transition-colors">
          <span class="text-arcade-border">03.</span> Experiencia
        </a>
        <a href="#proyectos" class="w-full py-2 text-arcade-text hover:text-arcade-link-hover transition-colors">
          <span class="text-arcade-border">04.</span> Proyectos
        </a>
        <a href="#habilidades" class="w-full py-2 text-arcade-text hover:text-arcade-link-hover transition-colors">
          <span class="text-arcade-border">05.</span> Habilidades
        </a>
        <a href="#contacto" class="w-full py-2 text-arcade-text hover:text-arcade-link-hover transition-colors">
          <span class="text-arcade-border">06.</span> Contacto
        </a>
      </nav>
    </header>
  `
}