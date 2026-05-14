# 🏆 PSG Academy Uruguay — Landing Page

Sitio oficial de la academia del **Paris Saint-Germain en Uruguay**.
Construido como una experiencia cinematográfica premium, listo para deployar en GitHub Pages, Netlify o Vercel sin build step.

---

## 🧱 Stack técnico

| Capa            | Tecnología                                         |
|-----------------|----------------------------------------------------|
| Estructura      | HTML5 semántico                                    |
| Estilos         | Tailwind CSS (CDN) + CSS personalizado             |
| Animaciones     | GSAP 3.12 + ScrollTrigger                          |
| Smooth scroll   | Lenis                                              |
| Tipografía      | Archivo Black + Public Sans (Google Fonts)        |
| Dependencias    | **0 build step** · todo carga desde CDN            |

---

## 📁 Estructura

```
psg-academy-uruguay/
├── index.html              ← Página principal
├── README.md               ← Este archivo
└── assets/
    ├── css/styles.css      ← Estilos personalizados
    ├── js/main.js          ← GSAP + Lenis + interacciones
    ├── images/             ← Llenar según assets/README.md
    ├── videos/             ← Video hero (1920×1080 mín)
    ├── lottie/             ← Animaciones (opcional)
    └── README.md           ← Especificaciones de assets
```

---

## 🚀 Deploy

### GitHub Pages
1. Sube el contenido completo de la carpeta a un repo nuevo.
2. **Settings → Pages → Source:** `Deploy from a branch` → `main` → `/root`.
3. El sitio estará disponible en `https://<usuario>.github.io/<repo>/`.

### Netlify / Vercel
Arrastra la carpeta al dashboard — detecta sitio estático automáticamente. Sin configuración necesaria.

### Servidor local
```bash
# Python 3
python3 -m http.server 8080

# Node
npx serve .
```
Luego abre `http://localhost:8080`.

---

## 🎨 Personalizar

- **Paleta:** editar las variables CSS en `assets/css/styles.css` (líneas 9-15) y la config Tailwind dentro del `<script>` en `index.html`.
- **Tipografía:** cambiar la URL de Google Fonts en `<head>`.
- **Contenido:** todo el copy está en `index.html`, sin templating.
- **Animaciones:** parámetros centralizados en `assets/js/main.js`.

---

## ✨ Características de UX

- ✅ Preloader con animación de barra
- ✅ Smooth scrolling (Lenis) — efecto silky
- ✅ Cursor custom con efecto magnético en hover
- ✅ Texto revelado por líneas con stagger
- ✅ Parallax suave en imágenes
- ✅ Counters animados al scroll
- ✅ Magnetic buttons (botones que siguen al cursor)
- ✅ Menú mobile fullscreen con stagger
- ✅ Validación de formulario nativa
- ✅ Respeto a `prefers-reduced-motion`
- ✅ 100% responsive (mobile-first)

---

## 📦 Próximos pasos sugeridos

1. **Llenar `/assets/images/` y `/assets/videos/`** según `assets/README.md`.
2. Conectar formulario a Formspree, Netlify Forms o backend propio (línea 290 de `main.js`).
3. Agregar Google Analytics / Meta Pixel.
4. SEO: completar `<meta>` Open Graph, JSON-LD `SportsActivityLocation`.
5. Generar `sitemap.xml` y `robots.txt`.

---

**Built with passion · Ici c'est Paris · Aquí es Uruguay.**
