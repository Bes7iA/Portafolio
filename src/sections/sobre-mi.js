// Presentación personal: trayectoria laboral e intereses fuera de la
// programación. El texto está redactado para conectar explícitamente cada
// experiencia con una habilidad transferible al desarrollo de software.

export function renderSobreMi() {
    return `
    <section id="sobre-mi" class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-8 space-y-6">
      <div class="flex items-center space-x-3 pb-3 border-b-2 border-arcade-border/40">
        <div class="w-9 h-9 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center justify-center text-arcade-title">
          <i data-lucide="user-check" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs font-mono text-arcade-border uppercase tracking-wider block">// SECCIÓN 01</span>
          <h2 class="text-2xl sm:text-3xl font-black text-arcade-cyan uppercase tracking-wide" style="text-shadow: 2px 2px 0px #000000;">
            Sobre Mí
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm sm:text-base leading-relaxed">

        <div class="lg:col-span-8 space-y-4">
          <div class="p-5 bg-black/40 border-2 border-arcade-cyan/50 shadow-[4px_4px_0px_#000000]">
            <p class="text-arcade-text text-base sm:text-lg mb-3">
              "He tenido <strong class="text-arcade-text-strong font-bold">más trabajos que la Barbie</strong> — construcción, reciclaje, seguridad, operario de imprenta, bodega, fábrica de galletas, limpieza, auxiliar de biblioteca, entre otras. Cada uno me obligó a aprender rápido, resolver sobre la marcha y trabajar con gente distinta — la misma base que hoy aplico para aprender a programar."
            </p>
            <p class="text-arcade-text text-base sm:text-lg">
              "Tengo <strong class="text-arcade-text-strong font-bold">inclinación por las artes</strong>: dibujar, escribir, diseñar videojuegos y juegos de mesa. Esa costumbre de imaginar sistemas y reglas desde cero se nota en cómo pienso la lógica de un programa — no es casualidad que mis primeros proyectos propios (ver Proyectos) sean juegos que diseñé yo mismo."
            </p>
          </div>
          <p class="text-xs font-mono text-arcade-cyan">
            // Resiliencia y creatividad no son solo intereses paralelos: son las herramientas con las que resuelvo problemas técnicos.
          </p>
        </div>

        <div class="lg:col-span-4 grid grid-cols-2 gap-3">
          <div class="p-4 bg-black/50 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] text-center space-y-1">
            <i data-lucide="palette" class="w-6 h-6 mx-auto"></i>
            <span class="block font-bold text-xs uppercase text-arcade-title">Dibujo &amp; Arte</span>
            <span class="block text-[11px] text-arcade-text">Creatividad visual</span>
          </div>
          <div class="p-4 bg-black/50 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] text-center space-y-1">
            <i data-lucide="pen-tool" class="w-6 h-6 mx-auto"></i>
            <span class="block font-bold text-xs uppercase text-arcade-title">Escritura</span>
            <span class="block text-[11px] text-arcade-text">Narrativa y conceptos</span>
          </div>
          <div class="p-4 bg-black/50 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] text-center space-y-1">
            <i data-lucide="gamepad-2" class="w-6 h-6 mx-auto"></i>
            <span class="block font-bold text-xs uppercase text-arcade-title">Videojuegos</span>
            <span class="block text-[11px] text-arcade-text">Game Design &amp; Lógica</span>
          </div>
          <div class="p-4 bg-black/50 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] text-center space-y-1">
            <i data-lucide="dices" class="w-6 h-6 mx-auto"></i>
            <span class="block font-bold text-xs uppercase text-arcade-title">Juegos de Mesa</span>
            <span class="block text-[11px] text-arcade-text">Mecánicas y reglas</span>
          </div>
        </div>

      </div>
    </section>
  `
}