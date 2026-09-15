import './style.css'
import { createIcons, icons } from 'lucide'
import { renderNavbar } from './sections/navbar.js'
import { renderHero } from './sections/hero.js'
import { renderSobreMi } from './sections/sobre-mi.js'
import { renderEstudios } from './sections/estudios.js'
import { renderExperiencia } from './sections/experiencia.js'
import { renderProyectos } from './sections/proyectos.js'
import { renderHabilidades } from './sections/habilidades.js'
import { renderContacto } from './sections/contacto.js'
import { renderFooter } from './sections/footer.js'
import { renderWelcomeScreen, initWelcomeScreen } from './modules/welcomeScreen.js'
import { renderErrorScreen, initErrorScreen } from './modules/errorScreen.js'
import { initAudio, reproducirMusica } from './modules/audioController.js'

document.querySelector('#app').innerHTML = `
  ${renderWelcomeScreen()}
  ${renderNavbar()}
  <main class="relative z-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 py-4">
    ${renderHero()}
    ${renderSobreMi()}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      ${renderEstudios()}
      ${renderExperiencia()}
    </div>
    ${renderProyectos()}
    ${renderHabilidades()}
    ${renderContacto()}
  </main>
  ${renderFooter()}
  ${renderErrorScreen()}

  <audio id="reproductor-fantasma" src="/musica.mp3"></audio>
  <audio id="sonido-impacto" src="/win-error.mp3"></audio>
`

createIcons({ icons })
initAudio()
initWelcomeScreen(reproducirMusica)
initErrorScreen()