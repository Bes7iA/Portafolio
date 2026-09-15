# Portafolio — Angelo Sánchez

Portafolio web personal. Sirve como carta de presentación online: da a conocer quién soy, qué sé hacer hoy, y proyectos reales que lo demuestran.

**Sitio en vivo:** https://bes7ia.github.io/Portafolio/

## Stack y por qué

| Herramienta | Por qué se eligió |
|---|---|
| **Vite** | Bundler y servidor de desarrollo. Da hot reload instantáneo y genera un build optimizado para producción sin configuración compleja. Es el estándar actual para proyectos frontend sin framework pesado. |
| **Tailwind CSS v4** | Utilidades CSS directamente en el HTML, con una paleta de colores personalizada centralizada en `src/style.css` (bloque `@theme`) en vez de hardcodear hex por todo el código. |
| **JavaScript vanilla** (sin React/Vue) | El sitio es contenido mayormente estático (sin estado complejo ni interacción de aplicación), así que un framework de UI habría sido complejidad innecesaria. Cada sección es una función que devuelve un string HTML — simple, explícito, fácil de seguir. |
| **pnpm** | Gestor de paquetes más estricto con las dependencias y más eficiente en disco que npm. |
| **Lucide** | Librería de íconos SVG livianos, consistentes en todo el sitio. |
| **GitHub Actions** | Automatiza el build y despliegue a GitHub Pages en cada push a `main` — no hay que subir manualmente una carpeta `dist/`. |

## Estructura del proyecto
```
├── .github/workflows/deploy.yml → Automatización del despliegue (ver abajo)
├── public/ → Assets estáticos (fotos, audio, favicon):
│ se copian tal cual al build final, sin pasar
│ por procesamiento de Vite
├── src/
│ ├── main.js → Punto de entrada: solo importa y ensambla,
│ │ sin lógica propia
│ ├── style.css → Tailwind + paleta de colores + animaciones
│ ├── sections/ → Una función render...() por sección visible
│ │ (navbar, hero, sobre-mi, estudios, experiencia,
│ │ proyectos, habilidades, contacto, footer)
│ └── modules/ → Comportamiento con estado propio, separado
│ (welcomeScreen, audioController, errorScreen) del contenido visual
└── vite.config.js → Configuración de build (incluye la ruta
base necesaria para GitHub Pages)
```

**Por qué esta separación:** cada sección del sitio (Hero, Sobre Mí, etc.) vive en
su propio archivo, exportando una única función `render...()` que devuelve su
HTML. Esto significa que para editar el contenido de una sección solo hay que
tocar un archivo pequeño y autocontenido, sin buscar en un archivo gigante ni
arriesgar romper otra parte del sitio. `main.js` solo importa esas funciones y
decide el orden en que aparecen — nunca contiene contenido en sí mismo.

Los módulos en `src/modules/` siguen un patrón similar, pero para
comportamiento en vez de contenido: cada uno expone una función `render...()`
(genera su HTML) y una función `init...()` (le agrega los event listeners),
separadas para que se pueda insertar el HTML de una vez en `main.js` y recién
después activar el comportamiento, una vez que los elementos ya existen en el
DOM.

## Cómo correr el proyecto localmente

```bash
pnpm install    # instala las dependencias
pnpm dev        # levanta el servidor de desarrollo (localhost:5173)
pnpm build      # genera el build de producción en dist/
```

## Cómo editar el contenido

Para cambiar el texto de cualquier sección (por ejemplo, actualizar la
experiencia o agregar un proyecto nuevo), basta con editar el archivo
correspondiente en `src/sections/` — no es necesario tocar `main.js` ni
ningún otro archivo, salvo que se agregue una sección completamente nueva
(en ese caso, ver el comentario al inicio de `main.js`).

Para agregar una foto, audio u otro archivo estático nuevo: colocarlo en
`public/`, y referenciarlo en el código con el prefijo
`${import.meta.env.BASE_URL}` antes del nombre del archivo (ej.
`` `${import.meta.env.BASE_URL}nueva-foto.png` `` ). Esto es necesario porque el
sitio se publica bajo una subruta (`/Portafolio/`) en GitHub Pages, no en la
raíz del dominio — sin ese prefijo, el archivo cargaría bien en local pero
rompería en producción.

## Despliegue

El despliegue es automático vía GitHub Actions (`.github/workflows/deploy.yml`):
cada push a `main` dispara un workflow que instala dependencias, corre
`pnpm build`, y publica el resultado en GitHub Pages. No requiere ningún paso
manual.