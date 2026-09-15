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

export function initWelcomeScreen(onEnter) {
    const btnEntrar = document.getElementById('btn-entrar')
    if (!btnEntrar) return

    btnEntrar.addEventListener('click', () => {
        if (onEnter) onEnter()

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                document.body.classList.add('sistema-encendido')
            })
        } else {
            document.body.classList.add('sistema-encendido')
        }
    })
}