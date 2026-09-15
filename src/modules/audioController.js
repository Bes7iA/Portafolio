let musica
let sonidoError
let sistemaCorrompido = false

export function initAudio() {
    musica = document.getElementById('reproductor-fantasma')
    sonidoError = document.getElementById('sonido-impacto')

    musica.volume = 0.1
    sonidoError.volume = 0.6

    document.body.addEventListener('click', () => {
        if (sistemaCorrompido) return
        if (document.body.classList.contains('sistema-encendido') && musica.paused) {
            musica.play()
        }
    })

    window.addEventListener('hashchange', () => {
        if (window.location.hash !== '#error-fatal') {
            sistemaCorrompido = false
        }
    })
}

export function reproducirMusica() {
    musica?.play()
}

export function activarFallaSistema() {
    sistemaCorrompido = true
    musica?.pause()
    if (musica) musica.currentTime = 0
    sonidoError?.play()
}