# 🏆 PSG Academy Uruguay — Landing Page · Dark Premium Edition

Sitio oficial de la academia del **Paris Saint-Germain en Uruguay**.
Estética **Dark / Premium Sport** con tarjetas glassmorphism, integración API en vivo y experiencia cinematográfica.

---

## 🎨 Identidad visual

| Token         | Valor          | Uso                                |
|---------------|----------------|-------------------------------------|
| `psg-night`   | `#020617`      | Background base (azul noche profundo) |
| `psg-night-soft` | `#0A1428`   | Variante para alternar secciones    |
| `psg-red`     | `#EF3340`      | Acentos, CTAs, indicadores LIVE     |
| `psg-red-deep`| `#C8242F`      | Hover de botones primarios          |
| Glass         | `rgba(255,255,255,0.04)` + `backdrop-blur(20px)` | Sistema de tarjetas |
| Headlines     | Archivo Black 900, stroke 0.5px, `tracking-psg` (-0.03em) | "Match-day weight" |

---

## 🧱 Stack técnico

| Capa            | Tecnología                                         |
|-----------------|----------------------------------------------------|
| Estructura      | HTML5 semántico                                    |
| Estilos         | Tailwind CSS (CDN) + CSS personalizado             |
| Animaciones     | GSAP 3.12 + ScrollTrigger                          |
| Smooth scroll   | Lenis                                              |
| API en vivo     | api-football.com (api-sports.io)                   |
| Tipografía      | Archivo Black + Public Sans (Google Fonts)        |
| Build step      | **0** · todo carga desde CDN                       |

---

## 📁 Estructura

```
psg-academy-uruguay/
├── index.html              ← Página principal + script Match Center
├── README.md               ← Este archivo
└── assets/
    ├── css/styles.css      ← Estilos dark + glassmorphism
    ├── js/main.js          ← GSAP + Lenis + interacciones
    ├── images/             ← Llenar según assets/README.md
    ├── videos/             ← Video hero (1920×1080 mín)
    ├── lottie/             ← Animaciones (opcional)
    └── README.md           ← 📐 Especificaciones de assets
```

---

## ⚽ Match Center · API Setup

La sección **Match Center** consume `https://v3.football.api-sports.io/fixtures?team=85&next=3` para mostrar los próximos 3 partidos del PSG en tiempo real, formatea horas a `America/Montevideo` y muestra un indicador **LIVE** con punto rojo titilando cuando el estado del partido es `1H`, `2H`, `HT`, `ET`, `P` o `BT`.

### Activar la integración

1. Registra una cuenta gratuita: [https://dashboard.api-football.com/register](https://dashboard.api-football.com/register)
2. Copia tu API Key del dashboard.
3. Abre `index.html`, busca el bloque comentado `<!-- MATCH CENTER · Consumo API-Football -->` cerca del final, y pega tu key:

```js
const API_KEY = 'PEGA_TU_API_KEY_AQUÍ';
```

4. Listo. Si la API Key falta o falla, se muestra un estado fallback estético sin romper el layout.

**Cuota gratuita:** 100 requests/día. Más que suficiente.

---

## 🚀 Deploy

### GitHub Pages
1. Sube el contenido completo al repo.
2. **Settings → Pages → Source:** `Deploy from a branch` → `main` → `/root`.
3. Sitio disponible en `https://<usuario>.github.io/<repo>/`.

### Netlify / Vercel
Arrastra la carpeta al dashboard — detecta sitio estático automáticamente.

### Servidor local
```bash
python3 -m http.server 8080
# o
npx serve .
```

---

## ✨ Características de UX

- ✅ Tema **Dark Premium** con glassmorphism
- ✅ **Match Center** dinámico con API en vivo + indicador LIVE titilando
- ✅ Preloader con animación de barra
- ✅ Smooth scrolling (Lenis)
- ✅ Cursor custom magnético
- ✅ Texto revelado por líneas (stagger)
- ✅ Parallax suave en imágenes y video
- ✅ Counters animados al scroll
- ✅ Magnetic buttons con elastic ease
- ✅ Menú mobile fullscreen
- ✅ Validación de formulario nativa
- ✅ Respeto a `prefers-reduced-motion`
- ✅ 100% responsive

---

## 📦 Próximos pasos

1. **Llenar `/assets/images/` y `/assets/videos/`** según `assets/README.md`.
2. **Pegar API Key** de api-football.com en `index.html`.
3. Conectar formulario a Formspree, Netlify Forms o backend.
4. Agregar Google Analytics / Meta Pixel.
5. SEO: completar `<meta>` Open Graph, JSON-LD `SportsActivityLocation`.

---

**Ici c'est Paris · Aquí es Uruguay.**
