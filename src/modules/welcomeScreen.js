// Pantalla de bienvenida (landing negra con el botón "Entrar") y la
// transición animada hacia el sitio real.
//
// Patrón render/init: render() devuelve el HTML (se inserta una sola vez,
// junto con el resto del sitio, en main.js). init() se llama DESPUÉS de esa
// inserción y le agrega el comportamiento — porque necesita encontrar el
// botón #btn-entrar en el DOM, que hasta ese momento no existe todavía.

export function renderWelcomeScreen() {
    return `
    <div id="pantalla-bienvenida" class="fixed inset-0 bg-black flex justify-center items-center z-[999999]">
      <div class="text-center">
        <h1 class="text-4xl sm:text-6xl font-black text-arcade-title mb-8" style="text-shadow: 4px 4px 0 #000000;">
          Angelo Patricio Sánchez Aceituno
        </h1>
        <button id="btn-entrar" class="bg-black text-[#00ff00] border-[3px] border-[#00ff00] px-6 py-3 font-mono text-lg cursor-pointer transition-all duration-150 hover:bg-[#00ff00] hover:text-black">
          Entrar
        </button>
      </div>
    </div>
  `
}

// onEnter: función que se ejecuta al hacer clic, ANTES de la transición
// (en este proyecto, siempre es reproducirMusica — ver main.js). Se recibe
// como parámetro en vez de importar audioController directamente aquí,
// para que este módulo no necesite saber nada de audio: solo avisa "el
// usuario entró" y quien lo llama decide qué hacer con eso.
export function initWelcomeScreen(onEnter) {
    const btnEntrar = document.getElementById('btn-entrar')
    if (!btnEntrar) return

    btnEntrar.addEventListener('click', () => {
        if (onEnter) onEnter()

        // View Transitions API: captura el estado "antes" (pantalla negra) y
        // "después" (sitio visible), y anima el cambio entre ambos usando las
        // reglas @keyframes definidas en style.css. No todos los navegadores
        // la soportan todavía, por eso el fallback en el else: sin animación,
        // pero el sitio igual funciona.
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                document.body.classList.add('sistema-encendido')
            })
        } else {
            document.body.classList.add('sistema-encendido')
        }
    })
}