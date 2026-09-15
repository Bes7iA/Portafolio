export function renderEstudios() {
    return `
    <section id="estudios" class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-8 space-y-5">
      <div class="flex items-center space-x-3 pb-3 border-b-2 border-arcade-border/40">
        <div class="w-9 h-9 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center justify-center text-arcade-cyan">
          <i data-lucide="graduation-cap" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs font-mono text-arcade-border uppercase tracking-wider block">// SECCIÓN 02</span>
          <h2 class="text-2xl font-black text-arcade-cyan uppercase tracking-wide" style="text-shadow: 2px 2px 0px #000000;">
            Estudios
          </h2>
        </div>
      </div>

      <div class="p-5 bg-black/50 border-2 border-arcade-border shadow-[4px_4px_0px_#000000] space-y-3">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <span class="px-2.5 py-1 bg-arcade-link text-black font-mono font-black text-xs uppercase">
            EN CURSO (ACTUALIDAD)
          </span>
          <span class="text-xs font-mono text-arcade-title font-bold">JavaScript Full Stack</span>
        </div>
        <h3 class="text-lg font-bold text-arcade-title">
          Aprendizaje Intensivo de JavaScript
        </h3>
        <p class="text-sm text-arcade-text leading-relaxed">
          "Actualmente aprendiendo JavaScript, además de eso no tengo ningún otro estudio relevante, <strong class="text-arcade-text-strong font-bold">terminé la educación media en el 2005 y me puse a trabajar en lo que viniera de inmediato</strong>."
        </p>
        <div class="pt-3 border-t border-arcade-border/30 text-xs font-mono text-arcade-cyan flex items-center gap-2">
          <span class="text-arcade-link"><i data-lucide="check-circle" class="w-4 h-4 text-arcade-link"></i></span>
          <span>Autodidacta, constante y con enfoque pragmático en el código.</span>
        </div>
      </div>

      <div class="p-4 bg-black/30 border border-arcade-border/50 font-mono text-xs text-arcade-text space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-arcade-cyan">» 2005:</span>
          <span>Educación Media Completada</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-arcade-cyan">» 2005 - Presente:</span>
          <span>Escuela del Trabajo Duro &amp; Vida Real</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-arcade-link">» Actual:</span>
          <span class="text-arcade-link font-bold">Desarrollo Web &amp; JavaScript</span>
        </div>
      </div>
    </section>
  `
}