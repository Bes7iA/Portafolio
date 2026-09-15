// Habilidades técnicas, generadas desde un array de datos en vez de HTML
// repetido a mano. Para agregar/quitar una habilidad, solo se edita el
// array `skills` — no hace falta tocar el HTML de las tarjetas.
//
// Los nombres en `icon` corresponden 1 a 1 con nombres de íconos de Lucide
// (ver https://lucide.dev/icons para la lista completa).

export function renderHabilidades() {
    const skills = [
        {
            num: '01', tag: 'CORE', icon: 'code-2',
            title: 'JavaScript (ES6+)',
            desc: 'En proceso de aprendizaje activo: funciones flecha, desestructuración, promesas, async/await y manipulación del DOM, aplicados en ejercicios y proyectos del bootcamp.'
        },
        {
            num: '02', tag: 'MARKUP', icon: 'file-code',
            title: 'HTML5',
            desc: 'Estructuras semánticas y buenas prácticas básicas de accesibilidad, como las que ves en este mismo portafolio.'
        },
        {
            num: '03', tag: 'ESTILOS', icon: 'layout',
            title: 'CSS3 / Flexbox & Grid',
            desc: 'Maquetación responsive con Flexbox y Grid, y estilos personalizados con variables CSS y degradados.'
        },
        {
            num: '04', tag: 'FRAMEWORKS', icon: 'box',
            title: 'Bootstrap & Tailwind CSS',
            desc: 'Uso de ambos frameworks utilitarios para construir interfaces rápido, incluyendo la migración de este portafolio de uno a otro.'
        },
        {
            num: '05', tag: 'VERSIONADO', icon: 'git-branch',
            title: 'Git & GitHub',
            desc: 'Control de versiones básico: commits, ramas y manejo de repositorios personales en GitHub.'
        },
        {
            num: '06', tag: 'CREATIVIDAD', icon: 'sparkles',
            title: 'Game Design & Lógica',
            desc: 'Diseño de reglas, mecánicas y narrativa para proyectos propios (ver sección Proyectos), aplicando lógica y resolución creativa de problemas.'
        },
    ]

    // .map() recorre cada objeto de `skills` y genera su tarjeta HTML;
    // .join('') pega todos los bloques en un solo string, porque .map()
    // por sí solo devuelve un array, no un string listo para insertar.


    const cards = skills.map(s => `
    <div class="p-4 bg-black/50 border-2 border-arcade-border shadow-[3px_3px_0px_#000000] space-y-2 hover:border-arcade-link transition-colors">
      <div class="flex items-center justify-between">
        <span class="font-mono text-xs font-bold text-arcade-title">${s.num} // ${s.tag}</span>
        <i data-lucide="${s.icon}" class="w-5 h-5 text-arcade-border"></i>
      </div>
      <h3 class="font-bold text-base text-arcade-cyan">${s.title}</h3>
      <p class="text-xs text-arcade-text leading-relaxed">${s.desc}</p>
    </div>
  `).join('')

    return `
    <section id="habilidades" class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-8 space-y-6">
      <div class="flex items-center space-x-3 pb-3 border-b-2 border-arcade-border/40">
        <div class="w-9 h-9 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center justify-center text-arcade-link">
          <i data-lucide="cpu" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs font-mono text-arcade-border uppercase tracking-wider block">// SECCIÓN 05</span>
          <h2 class="text-2xl sm:text-3xl font-black text-arcade-cyan uppercase tracking-wide" style="text-shadow: 2px 2px 0px #000000;">
            Habilidades &amp; Enfoque Técnico
          </h2>
        </div>
      </div>

      <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 border-2 border-arcade-border/60 text-xs font-mono text-arcade-text">
        <i data-lucide="graduation-cap" class="w-3.5 h-3.5 text-arcade-cyan"></i>
        En formación activa — bootcamp JavaScript Full Stack en curso, sin certificación aún.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${cards}
      </div>
    </section>
  `
}