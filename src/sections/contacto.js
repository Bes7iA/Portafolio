const iconos = {
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#0A66C2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="32.77" height="32" viewBox="0 0 256 250"><path fill="#161614" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0"/></svg>`,
    youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="45.52" height="32" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>`,
    gmail: `<svg xmlns="http://www.w3.org/2000/svg" width="42.45" height="32" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/></svg>`,
}

export function renderContacto() {
    const redes = [
        { nombre: 'LINKEDIN', valor: '/in/angelo-sanchez', url: 'https://www.linkedin.com/in/angelo-sanchez-b88235412/', icon: iconos.linkedin },
        { nombre: 'GITHUB', valor: 'ver perfil', url: 'https://github.com/Bes7iA', icon: iconos.github },
        { nombre: 'YOUTUBE', valor: '@Bes7iA', url: 'https://www.youtube.com/@Bes7iA', icon: iconos.youtube },
        { nombre: 'EMAIL DIRECTO', valor: 'angelob7a@gmail.com', url: 'mailto:angelob7a@gmail.com', icon: iconos.gmail },
    ]

    const links = redes.map(r => `
    <a href="${r.url}" target="_blank" rel="noreferrer"
       class="bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000000] font-black uppercase text-xs p-4 flex flex-col items-center justify-center gap-2 transition-all duration-150 hover:bg-arcade-aqua-hover hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 text-center group">
      <span class="group-hover:scale-110 transition-transform">${r.icon}</span>
      <span class="text-xs font-black">${r.nombre}</span>
      <span class="text-[10px] font-mono lowercase text-gray-700">${r.valor}</span>
    </a>
  `).join('')

    return `
    <section id="contacto" class="bg-arcade-navy/45 backdrop-blur-md border-[3px] border-arcade-border shadow-[6px_6px_0px_#000000] p-6 sm:p-10 space-y-6">
      <div class="flex items-center space-x-3 pb-3 border-b-2 border-arcade-border/40">
        <div class="w-9 h-9 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] flex items-center justify-center text-arcade-border">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs font-mono text-arcade-border uppercase tracking-wider block">// SECCIÓN 06</span>
          <h2 class="text-2xl sm:text-3xl font-black text-arcade-cyan uppercase tracking-wide" style="text-shadow: 2px 2px 0px #000000;">
            Contacto &amp; Redes Sociales
          </h2>
        </div>
      </div>

      <p class="text-sm sm:text-base text-arcade-text max-w-3xl">
        ¿Tienes una oportunidad para un desarrollador motivado, un proyecto colaborativo o simplemente quieres conversar sobre código o juegos de mesa? Contáctame a través de mis canales oficiales:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        ${links}
      </div>

    </section>
  `
}