export function renderFooter() {
    return `
    <footer class="max-w-7xl mx-auto mt-12 px-4 sm:px-8">
      <div class="bg-arcade-navy/45 backdrop-blur-md border-2 border-arcade-border shadow-[6px_6px_0px_#000000] p-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <a href="#" id="btn-subir"
           class="w-full md:w-auto px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider bg-arcade-navy text-arcade-link border-2 border-arcade-border shadow-[4px_4px_0px_#000000] hover:bg-arcade-aqua-hover hover:text-black transition-all flex items-center justify-center gap-2">
          <i data-lucide="arrow-up" class="w-4 h-4"></i>
          <span>▲ VOLVER ARRIBA</span>
        </a>

        <div class="text-center font-mono text-xs text-arcade-text">
          <span class="text-arcade-title font-bold">Angelo Patricio Sánchez Aceituno</span>
        </div>

        <a href="#error-fatal" id="btn-salir"
           class="w-full md:w-auto px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider bg-[#3a0d0d] text-arcade-emergency-text border-2 border-arcade-emergency-red shadow-[4px_4px_0px_#000000] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
          <i data-lucide="power" class="w-4 h-4 text-red-400"></i>
          <span>X SALIR DE FORMA SEGURA</span>
        </a>

      </div>
    </footer>
  `
}