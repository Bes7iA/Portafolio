// Controla la música de fondo y el sonido de error del "pantallazo azul".
//
// Las variables musica/sonidoError/sistemaCorrompido viven en el ámbito del
// módulo (fuera de cualquier función) en vez de pasarse como parámetros entre
// funciones, porque necesitan persistir mientras dura la sesión del usuario
// en la página y ser compartidas entre varias funciones de este archivo.

let musica
let sonidoError
// Bandera de seguridad: true cuando el usuario activó el pantallazo azul.
// Evita que la música vuelva a sonar por encima del sonido de error si el
// usuario sigue haciendo clic en la página mientras el "sistema" está caído.
let sistemaCorrompido = false

export function initAudio() {
    musica = document.getElementById('reproductor-fantasma')
    sonidoError = document.getElementById('sonido-impacto')

    musica.volume = 0.2
    sonidoError.volume = 0.6

    // Los navegadores bloquean el autoplay de audio sin interacción previa
    // del usuario. Esta escucha global en el body sirve de red de seguridad:
    // si la música se pausó por cualquier motivo, cualquier clic en el sitio
    // (ya con el sistema "encendido") la reanuda.
    document.body.addEventListener('click', () => {
        if (sistemaCorrompido) return
        if (document.body.classList.contains('sistema-encendido') && musica.paused) {
            musica.play()
        }
    })

    // El pantallazo azul se activa/desactiva vía el hash de la URL (#error-fatal),
    // ver errorScreen.js y la regla :target en style.css. Este listener detecta
    // cuando el usuario sale de esa vista (botón atrás, o cierra la pestaña del
    // error) para reactivar el audio normal.
    window.addEventListener('hashchange', () => {
        if (window.location.hash !== '#error-fatal') {
            sistemaCorrompido = false
        }
    })
}

// Se llama desde welcomeScreen.js al hacer clic en "Entrar" — necesita
// ejecutarse dentro de ese evento de clic, no antes, por la política de
// autoplay de los navegadores mencionada arriba.
export function reproducirMusica() {
    musica?.play()
}

// Se llama desde errorScreen.js al hacer clic en "Salir".
export function activarFallaSistema() {
    sistemaCorrompido = true
    musica?.pause()
    if (musica) musica.currentTime = 0
    sonidoError?.play()
}