// Formación: bootcamp en curso (sin título ni certificación completa aún)
// y certificaciones obtenidas por evaluación externa. Se llama "Formación"
// y no "Estudios" a propósito — no hay estudios formales terminados en el
// área todavía, y prometer eso en el título sería engañoso.
export function renderFormacion() {
    return `
    <section id="formacion" class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-8 space-y-5">
      <div class="flex items-center space-x-3 pb-3 border-b-2 border-arcade-border/40">
        <div class="w-9 h-9 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center justify-center text-arcade-cyan">
          <i data-lucide="graduation-cap" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs font-mono text-arcade-border uppercase tracking-wider block">// SECCIÓN 02</span>
          <h2 class="text-2xl font-black text-arcade-cyan uppercase tracking-wide" style="text-shadow: 2px 2px 0px #000000;">
            Formación
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
          Estoy cursando un bootcamp intensivo de JavaScript Full Stack — todavía en curso, sin certificación aún. No tengo estudios formales previos en el área: terminé la educación media en 2005 y desde entonces aprendí <strong class="text-arcade-text-strong font-bold">trabajando, no en un aula</strong>. Ese mismo hábito de aprender haciendo es el que traigo hoy a la programación.
        </p>
        <div class="pt-3 border-t border-arcade-border/30 text-xs font-mono text-arcade-cyan flex items-center gap-2">
          <i data-lucide="check-circle" class="w-4 h-4 text-arcade-link"></i>
          <span>Prefiero construir y equivocarme a memorizar teoría sin aplicarla.</span>
        </div>
      </div>

      <div class="space-y-3 pt-2">
        <h3 class="text-sm font-mono uppercase tracking-widest text-arcade-cyan">» Certificaciones</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <button data-cert-trigger="${import.meta.env.BASE_URL}certificado-ingles.png"
                  class="p-3 bg-black/50 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center gap-3 text-left hover:border-arcade-link transition-colors group">
            <img src="${import.meta.env.BASE_URL}certificado-ingles.png" alt="Certificado de Inglés"
                 class="w-16 h-11 object-cover border-2 border-arcade-border/60 group-hover:border-arcade-link transition-colors" />
            <div>
              <span class="block font-bold text-sm text-arcade-title">Inglés — Nivel C1</span>
              <span class="block text-[11px] font-mono text-arcade-text">Alkemy · Abril 2026 · Score 66% · Ver certificado</span>
            </div>
          </button>

          <div class="p-3 bg-black/20 border-2 border-dashed border-arcade-border/40 flex items-center gap-3">
            <div class="w-16 h-11 flex items-center justify-center border-2 border-dashed border-arcade-border/40">
              <i data-lucide="hammer" class="w-4 h-4 text-arcade-border/60"></i>
            </div>
            <div>
              <span class="block font-bold text-sm text-arcade-text/60">Certificación Bootcamp JS</span>
              <span class="block text-[11px] font-mono text-arcade-text/40">Próximamente</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}