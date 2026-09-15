import { activarFallaSistema } from './audioController.js'

export function renderErrorScreen() {
    return `
    <div id="error-fatal" class="capa-error-imagen">
      <img src="/error.png" alt="Pantallazo azul de Windows" class="w-full h-full object-contain pointer-events-none" />
    </div>
  `
}

export function initErrorScreen() {
    const btnSalir = document.getElementById('btn-salir')
    if (!btnSalir) return

    btnSalir.addEventListener('click', (evento) => {
        evento.stopPropagation()
        activarFallaSistema()
    })
}