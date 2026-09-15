export function renderHero() {
    return `
    <section class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-10 relative overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        <div class="lg:col-span-8 space-y-5 text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/60 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] text-xs font-mono font-bold text-arcade-link">
            <span class="w-2.5 h-2.5 bg-arcade-link animate-ping inline-block"></span>
            MODO APRENDIZAJE ACTIVO // OPEN TO WORK
          </div>

          <div class="space-y-1">
            <span class="block text-xs uppercase font-mono tracking-widest text-arcade-cyan">Angelo Patricio Sánchez Aceituno</span>
            <h1 class="text-4xl sm:text-6xl font-black text-arcade-title leading-tight tracking-tight" style="text-shadow: 4px 4px 0px #000000;">
              Angelo Sánchez
            </h1>
            <p class="text-lg sm:text-2xl font-bold text-arcade-cyan tracking-wide pt-1">
              Desarrollador Full Stack Javascript en formación.
            </p>
          </div>

          <div class="p-5 bg-black/40 border-l-4 border-arcade-border space-y-3">
            <p class="text-base sm:text-lg text-arcade-text leading-relaxed">
              Vengo de una trayectoria laboral muy variada — construcción, bodega, imprenta, biblioteca, entre otras — y hace poco decidí encaminar esa capacidad de adaptación hacia el desarrollo web. Hoy estoy terminando un bootcamp intensivo de JavaScript Full Stack, construyendo proyectos reales con Node, Express y bases de datos.
            </p>
            <p class="text-base sm:text-lg text-arcade-text leading-relaxed">
              <strong class="text-arcade-text-strong font-bold">Siempre dispuesto a aprender cosas nuevas.</strong>
            </p>
          </div>

          <div class="pt-4 border-t-2 border-arcade-border/30 flex flex-wrap gap-2 text-xs font-mono">
            <span class="bg-black/45 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] px-3 py-1 font-bold text-arcade-text"># Adaptabilidad Total</span>
            <span class="bg-black/45 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] px-3 py-1 font-bold text-arcade-text"># Trabajo en Equipo</span>
            <span class="bg-black/45 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] px-3 py-1 font-bold text-arcade-text"># Entrega a Tiempo</span>
            <span class="bg-black/45 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] px-3 py-1 font-bold text-arcade-text"># Pasión por las Artes</span>
          </div>
        </div>

        <div class="lg:col-span-4 flex justify-center items-center">
          <div class="relative group">
            <div class="absolute inset-0 bg-black translate-x-2.5 translate-y-2.5"></div>
            <div class="relative bg-arcade-navy p-1.5 border-4 border-arcade-border shadow-[6px_6px_0px_#000000]">
              <div class="relative w-64 h-64 sm:w-72 sm:h-72 overflow-hidden group/avatar">
                <img src="/foto1.png" alt="Angelo Patricio Sánchez Aceituno" class="w-full h-full object-cover block" />
                <img src="/foto2.png" alt="Angelo Patricio Sánchez Aceituno - modo alternativo"
                     class="absolute inset-0 w-full h-full object-cover opacity-0 blur-md scale-105 transition-all duration-300 ease-out group-hover/avatar:opacity-100 group-hover/avatar:blur-none group-hover/avatar:scale-100 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
}