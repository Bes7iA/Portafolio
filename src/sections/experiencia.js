export function renderExperiencia() {
    return `
    <section id="experiencia" class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-8 space-y-5">
      <div class="flex items-center space-x-3 pb-3 border-b-2 border-arcade-border/40">
        <div class="w-9 h-9 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center justify-center text-arcade-title">
          <i data-lucide="briefcase" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs font-mono text-arcade-border uppercase tracking-wider block">// SECCIÓN 03</span>
          <h2 class="text-2xl font-black text-arcade-cyan uppercase tracking-wide" style="text-shadow: 2px 2px 0px #000000;">
            Experiencia
          </h2>
        </div>
      </div>

      <div class="p-5 bg-black/50 border-2 border-arcade-border shadow-[4px_4px_0px_#000000] space-y-3">
        <span class="px-2.5 py-1 bg-arcade-border text-black font-mono font-black text-xs uppercase inline-block">
          BALANCE REAL
        </span>
        <p class="text-sm sm:text-base text-arcade-text leading-relaxed">
          Años de <strong class="text-arcade-text-strong font-bold">trabajo en equipo, cumplir plazos y organizar tareas bajo presión</strong>. Aun no tengo experiencia formal en trabajos relacionados a programación o desarrollo web; este portafolio y mis proyectos personales (ver Proyectos) son mi punto de partida, pero esa disciplina la traigo intacta a cualquier equipo de desarrollo.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-3 bg-black/40 border-2 border-arcade-cyan text-center shadow-[2px_2px_0px_#000000]">
          <i data-lucide="users" class="w-5 h-5 mx-auto mb-1"></i>
          <span class="block font-bold text-xs text-arcade-title">Trabajo en Equipo</span>
          <span class="text-[10px] text-arcade-text">Comunicación y empatía</span>
        </div>
        <div class="p-3 bg-black/40 border-2 border-arcade-link text-center shadow-[2px_2px_0px_#000000]">
          <i data-lucide="target" class="w-5 h-5 mx-auto mb-1"></i>
          <span class="block font-bold text-xs text-arcade-title">Registro de Metas</span>
          <span class="text-[10px] text-arcade-text">Seguimiento claro</span>
        </div>
        <div class="p-3 bg-black/40 border-2 border-arcade-border text-center shadow-[2px_2px_0px_#000000]">
          <i data-lucide="clock" class="w-5 h-5 mx-auto mb-1"></i>
          <span class="block font-bold text-xs text-arcade-title">Entrega a Tiempo</span>
          <span class="text-[10px] text-arcade-text">Compromiso con fechas</span>
        </div>
      </div>
    </section>
  `
}