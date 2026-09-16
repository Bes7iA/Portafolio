// Pantalla de "pantallazo azul" (easter egg del botón Salir del footer).
//
// A diferencia de welcomeScreen, la MUESTRA/OCULTA de esta pantalla no la
// controla JavaScript directamente — la controla el CSS vía :target (ver
// .capa-error-imagen:target en style.css), activado por el propio navegador
// cuando la URL cambia a "#error-fatal" (el link del botón "Salir" en
// footer.js apunta ahí). JavaScript solo se encarga del efecto de sonido.

import { activarFallaSistema } from './audioController.js'

export function renderErrorScreen() {
    return `
    <div id="error-fatal" class="capa-error-imagen">
      <img src="${import.meta.env.BASE_URL}error.png" alt="Pantallazo azul de Windows" class="w-full h-full object-contain pointer-events-none" />
    </div>
  `
}

export function initErrorScreen() {
    const btnSalir = document.getElementById('btn-salir')
    if (!btnSalir) return

    btnSalir.addEventListener('click', (evento) => {
        // Sin este stopPropagation, el clic "burbujea" hasta el listener global
        // del body en audioController.js, que intentaría reanudar la música
        // justo cuando se supone que el "sistema" se está cayendo.
        evento.stopPropagation()
        activarFallaSistema()
    })
}