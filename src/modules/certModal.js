// Modal (lightbox) genérico para mostrar certificados en tamaño completo.
// Cualquier elemento con el atributo data-cert-trigger="ruta-de-imagen.png"
// abre el modal con esa imagen — para agregar un certificado nuevo no hace
// falta tocar este archivo, solo agregar ese atributo en la tarjeta.

export function renderCertModal() {
    return `
    <div id="cert-modal" class="hidden fixed inset-0 z-[100000] bg-black/80 backdrop-blur-sm items-center justify-center p-4">
      <button id="cert-modal-cerrar" aria-label="Cerrar" class="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black border-2 border-arcade-border shadow-[3px_3px_0px_#000000] w-10 h-10 flex items-center justify-center text-arcade-title hover:bg-arcade-aqua-hover hover:text-black transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <img id="cert-modal-img" src="" alt="Certificado ampliado" class="max-w-full max-h-full border-4 border-arcade-border shadow-[8px_8px_0px_#000000]" />
    </div>
  `
}

export function initCertModal() {
    const modal = document.getElementById('cert-modal')
    const modalImg = document.getElementById('cert-modal-img')
    const btnCerrar = document.getElementById('cert-modal-cerrar')
    if (!modal || !modalImg || !btnCerrar) return

    document.querySelectorAll('[data-cert-trigger]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            modalImg.src = trigger.dataset.certTrigger
            modal.classList.remove('hidden')
            modal.classList.add('flex')
        })
    })

    const cerrar = () => {
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }

    btnCerrar.addEventListener('click', cerrar)
    // Cierra también al hacer clic en el fondo oscuro (fuera de la imagen)
    modal.addEventListener('click', (evento) => {
        if (evento.target === modal) cerrar()
    })
}