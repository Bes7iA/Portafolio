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
          <a href="#estudios" class="text-arcade-text hover:text-arcade-link-hover transition-colors">
            <span class="text-arcade-border">02.</span> Estudios
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
      </div>
    </header>
  `
}