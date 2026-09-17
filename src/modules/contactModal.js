// Modal con formulario de contacto. Envía los datos vía FormSubmit en modo
// AJAX (fetch), sin recargar la página — importante porque un reload real
// volvería a mostrar la pantalla de bienvenida (welcomeScreen.js).
//
// FormSubmit no requiere backend propio: recibe el POST y reenvía el
// contenido por correo a la dirección indicada en ENDPOINT. La PRIMERA vez
// que alguien envíe el formulario, FormSubmit le manda un correo de
// confirmación a esa dirección — hay que confirmarlo una sola vez para que
// los envíos siguientes lleguen automáticamente.

export function renderContactModal() {
    return `
    <div id="contact-modal" class="hidden fixed inset-0 z-[100000] bg-black/80 backdrop-blur-sm items-center justify-center p-4">
      <div class="relative w-full max-w-md bg-arcade-navy border-[3px] border-arcade-border shadow-[8px_8px_0px_#000000] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button id="contact-modal-cerrar" aria-label="Cerrar" class="absolute top-3 right-3 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] w-9 h-9 flex items-center justify-center text-arcade-title hover:bg-arcade-aqua-hover hover:text-black transition-colors">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>

        <h3 class="text-xl font-black text-arcade-title uppercase mb-1" style="text-shadow: 2px 2px 0px #000000;">Contactar a Angelo</h3>
        <p class="text-xs font-mono text-arcade-cyan mb-5">Te responderé al correo que dejes aquí.</p>

        <form id="contact-form" class="space-y-4">
          <!-- Honeypot: campo oculto que solo un bot rellenaría. Si llega con
               valor, se descarta el envío como spam. -->
          <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off">

          <div>
            <label for="contact-email" class="block text-xs font-mono text-arcade-cyan uppercase mb-1">Tu email</label>
            <input id="contact-email" name="email" type="email" required
                   class="w-full bg-black/60 border-2 border-arcade-border/60 focus:border-arcade-title px-3 py-2 text-sm text-arcade-text font-mono outline-none transition-colors" />
          </div>

          <div>
            <label for="contact-motivo" class="block text-xs font-mono text-arcade-cyan uppercase mb-1">Motivo</label>
            <select id="contact-motivo" name="motivo" required
                    class="w-full bg-black/60 border-2 border-arcade-border/60 focus:border-arcade-title px-3 py-2 text-sm text-arcade-text font-mono outline-none transition-colors">
              <option value="">Selecciona una opción</option>
              <option value="Oportunidad laboral">Oportunidad laboral</option>
              <option value="Proyecto colaborativo">Proyecto colaborativo</option>
              <option value="Consulta general">Consulta general</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label for="contact-mensaje" class="block text-xs font-mono text-arcade-cyan uppercase mb-1">Mensaje</label>
            <textarea id="contact-mensaje" name="mensaje" rows="4" required
                      class="w-full bg-black/60 border-2 border-arcade-border/60 focus:border-arcade-title px-3 py-2 text-sm text-arcade-text font-mono outline-none transition-colors resize-none"></textarea>
          </div>

          <div>
            <label id="contact-captcha-label" for="contact-captcha" class="block text-xs font-mono text-arcade-cyan uppercase mb-1"></label>
            <input id="contact-captcha" name="captcha" type="text" required autocomplete="off"
                   class="w-full bg-black/60 border-2 border-arcade-border/60 focus:border-arcade-title px-3 py-2 text-sm text-arcade-text font-mono outline-none transition-colors" />
          </div>

          <p id="contact-error" class="hidden text-xs font-mono text-red-400"></p>

          <button type="submit" id="contact-submit"
                  class="w-full bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000000] font-black uppercase text-sm px-6 py-3 transition-all duration-150 hover:bg-arcade-aqua-hover hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 disabled:opacity-50">
            Enviar mensaje
          </button>
        </form>

        <div id="contact-success" class="hidden text-center space-y-3 py-6">
          <i data-lucide="check-circle" class="w-10 h-10 mx-auto text-arcade-link"></i>
          <p class="text-arcade-title font-bold">Correo enviado con éxito</p>
          <p class="text-xs text-arcade-text">Gracias por escribir — te responderé apenas pueda.</p>
        </div>
      </div>
    </div>
  `
}

export function initContactModal() {
    const btnAbrir = document.getElementById('btn-abrir-contacto')
    const modal = document.getElementById('contact-modal')
    const btnCerrar = document.getElementById('contact-modal-cerrar')
    const form = document.getElementById('contact-form')
    const successBox = document.getElementById('contact-success')
    const errorBox = document.getElementById('contact-error')
    const submitBtn = document.getElementById('contact-submit')
    const captchaInput = document.getElementById('contact-captcha')
    const captchaLabel = document.getElementById('contact-captcha-label')

    if (!btnAbrir || !modal || !form) return

    // IMPORTANTE: esta dirección debe confirmarse una vez en FormSubmit
    // (llega un correo la primera vez que alguien envía el formulario).
    const ENDPOINT = 'https://formsubmit.co/ajax/angelob7a@gmail.com'

    // No permite reenviar antes de 60s desde el último envío exitoso,
    // guardado en localStorage de quien visita (persiste entre recargas
    // de ESE navegador, no es una protección infalible ni global).
    const ESPERA_MS = 60 * 1000

    let captchaEsperado = 0

    function generarCaptcha() {
        const a = Math.floor(Math.random() * 8) + 1
        const b = Math.floor(Math.random() * 8) + 1
        captchaEsperado = a + b
        captchaLabel.textContent = `¿Cuánto es ${a} + ${b}? (verificación anti-spam)`
        captchaInput.value = ''
    }

    function mostrarError(mensaje) {
        errorBox.textContent = mensaje
        errorBox.classList.remove('hidden')
    }

    function ocultarError() {
        errorBox.classList.add('hidden')
        errorBox.textContent = ''
    }

    function abrirModal() {
        modal.classList.remove('hidden')
        modal.classList.add('flex')
        form.classList.remove('hidden')
        successBox.classList.add('hidden')
        ocultarError()
        generarCaptcha()
    }

    function cerrarModal() {
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }

    btnAbrir.addEventListener('click', abrirModal)
    btnCerrar.addEventListener('click', cerrarModal)
    // Cierra al hacer clic en el fondo oscuro, fuera del cuadro del formulario
    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) cerrarModal()
    })

    form.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        ocultarError()

        const ultimoEnvio = Number(localStorage.getItem('ultimoContactoEnviado') || 0)
        if (Date.now() - ultimoEnvio < ESPERA_MS) {
            mostrarError('Ya enviaste un mensaje hace muy poco — espera un momento antes de intentar de nuevo.')
            return
        }

        if (Number(captchaInput.value) !== captchaEsperado) {
            mostrarError('Respuesta incorrecta a la verificación. Inténtalo de nuevo.')
            generarCaptcha()
            return
        }

        const datos = Object.fromEntries(new FormData(form).entries())

        // Si el honeypot llegó con contenido, es casi seguro un bot — se
        // descarta en silencio, sin mostrar error (para no delatar que fue detectado).
        if (datos._honey) return

        submitBtn.disabled = true
        submitBtn.textContent = 'Enviando...'

        try {
            const respuesta = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(datos),
            })

            if (!respuesta.ok) throw new Error('Falló el envío')

            localStorage.setItem('ultimoContactoEnviado', String(Date.now()))
            form.classList.add('hidden')
            successBox.classList.remove('hidden')
        } catch (error) {
            mostrarError('No se pudo enviar el mensaje. Intenta de nuevo o escribe directamente a angelob7a@gmail.com.')
        } finally {
            submitBtn.disabled = false
            submitBtn.textContent = 'Enviar mensaje'
        }
    })
}