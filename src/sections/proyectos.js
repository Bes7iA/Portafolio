// Sección de proyectos personales, dividida en dos categorías:
// "Desarrollo" (código propio, sin ejercicios grupales de clase) y
// "Proyectos Creativos" (juegos de mesa/rol diseñados por mí, aunque
// no sean el foco técnico del portafolio).

const desarrollo = [
    {
        titulo: 'Máquinas de Guerra',
        estado: 'Proyecto propio',
        desc: 'Adaptación web de un juego de mesa de estrategia por turnos diseñado por mí, aplicando modularización y estándares ES6 con apoyo de inteligencia artificial.',
        links: [
            { label: 'Repositorio', url: 'https://github.com/Bes7iA/MG', icon: 'github' },
            { label: 'Jugar ahora', url: 'https://bes7ia.github.io/MG/', icon: 'play' },
        ],
    },
]
const creativos = [
    {
        titulo: 'La Torre',
        tag: 'RPG Roguelike',
        desc: 'Juego de rol roguelike sin mucha presión: hay zonas para guardar la partida y un árbol de 30 clases que se van descubriendo según las decisiones del jugador. La historia es minimalista — el objetivo principal fue explorar hasta dónde podía llegar sin conocimientos extensos de programación.',
        links: [
            { label: 'Descargar', url: 'https://drive.google.com/file/d/11bG-1Rix-PAE6PyHBDXs7YsXsSJFffh0/view?usp=drive_link', icon: 'download' },
        ],
    },
    {
        titulo: 'Hijos del Vacío',
        tag: 'RPG en desarrollo activo',
        desc: 'Proyecto más largo y ambicioso, con fuerte énfasis en historia y mecánicas más elaboradas. Requirió aplicar conocimientos de programación y aprender a integrar herramientas externas. Esta es la primera parte de un proyecto en curso.',
        links: [
            { label: 'Descargar (Parte 1)', url: 'https://drive.google.com/file/d/1OfOFPDZQojxjJ6S8nUmo7WZySONGMUcs/view?usp=drive_link', icon: 'download' },
        ],
    },
]

// Genera los botones de enlace (repositorio, jugar, descargar) de una
// tarjeta de proyecto. Reutilizada tanto por renderDesarrolloCard como
// por renderCreativoCard para no duplicar este bloque de HTML dos veces.

function renderLinks(links) {
    return links.map(l => `
    <a href="${l.url}" target="_blank" rel="noreferrer"
       class="inline-flex items-center gap-1.5 bg-black/50 border-2 border-arcade-border shadow-[2px_2px_0px_#000000] px-3 py-1.5 text-xs font-mono font-bold text-arcade-link hover:bg-arcade-aqua-hover hover:text-black hover:shadow-[1px_1px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
      <i data-lucide="${l.icon}" class="w-3.5 h-3.5"></i>
      ${l.label}
    </a>
  `).join('')
}

function renderDesarrolloCard(p) {
    return `
    <div class="p-5 bg-black/50 border-2 border-arcade-border shadow-[4px_4px_0px_#000000] space-y-3">
      <span class="px-2.5 py-1 bg-arcade-link text-black font-mono font-black text-xs uppercase inline-block">
        ${p.estado}
      </span>
      <h3 class="text-lg font-bold text-arcade-title">${p.titulo}</h3>
      <p class="text-sm text-arcade-text leading-relaxed">${p.desc}</p>
      <div class="flex flex-wrap gap-2 pt-1">${renderLinks(p.links)}</div>
    </div>
  `
}

function renderCreativoCard(p) {
    return `
    <div class="p-5 bg-black/50 border-2 border-arcade-cyan/50 shadow-[4px_4px_0px_#000000] space-y-3">
      <span class="px-2.5 py-1 bg-arcade-cyan text-black font-mono font-black text-xs uppercase inline-block">
        ${p.tag}
      </span>
      <h3 class="text-lg font-bold text-arcade-title">${p.titulo}</h3>
      <p class="text-sm text-arcade-text leading-relaxed">${p.desc}</p>
      <div class="flex flex-wrap gap-2 pt-1">${renderLinks(p.links)}</div>
    </div>
  `
}

// Tarjeta placeholder para proyectos de desarrollo aún no listos para
// compartir (ver TODOs abajo) — mantiene la grilla visualmente completa
// mientras se suman más proyectos con el tiempo.
//
// TODO: agregar la app de gestión de arriendos cuando esté lista para compartir.
// TODO: agregar un proyecto de API/backend hecho en solitario (el de la Junta de
// Vecinos del bootcamp fue un ejercicio grupal de clase, no se incluye aquí).
function renderProximamenteCard() {
    return `
    <div class="p-5 bg-black/20 border-2 border-dashed border-arcade-border/40 flex flex-col items-center justify-center text-center space-y-2 min-h-[160px]">
      <i data-lucide="hammer" class="w-6 h-6 text-arcade-border/60"></i>
      <span class="text-xs font-mono text-arcade-text/60 uppercase tracking-wider">Próximamente</span>
      <span class="text-[11px] text-arcade-text/40">Más proyectos de desarrollo en camino</span>
    </div>
  `
}

export function renderProyectos() {
    return `
    <section id="proyectos" class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-8 space-y-8">
      <div class="flex items-center space-x-3 pb-3 border-b-2 border-arcade-border/40">
        <div class="w-9 h-9 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center justify-center text-arcade-title">
          <i data-lucide="folder-git-2" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs font-mono text-arcade-border uppercase tracking-wider block">// SECCIÓN 04</span>
          <h2 class="text-2xl sm:text-3xl font-black text-arcade-cyan uppercase tracking-wide" style="text-shadow: 2px 2px 0px #000000;">
            Proyectos
          </h2>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-sm font-mono uppercase tracking-widest text-arcade-link">» Desarrollo</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${desarrollo.map(renderDesarrolloCard).join('')}
          ${renderProximamenteCard()}
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-sm font-mono uppercase tracking-widest text-arcade-cyan">» Proyectos Creativos</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${creativos.map(renderCreativoCard).join('')}
        </div>
      </div>
    </section>
  `
}