# 🎬 PSG Academy Uruguay · Especificaciones de Assets

Este documento describe **cada archivo** que el equipo de diseño / filmmaker debe producir para llenar la landing page. Las rutas y nombres son **obligatorios**: respetarlos hace que todo encaje sin tocar el código.

---

## 📂 Estructura de carpetas

```
assets/
├── images/        ← logos, fotos, posters, sponsors, favicon
├── videos/        ← video de fondo del hero
└── lottie/        ← (opcional) animaciones vectoriales After Effects
```

---

## 🎞️ VIDEOS

### `videos/hero-bg.mp4` + `videos/hero-bg.webm`
| Propiedad      | Valor                                                  |
|----------------|--------------------------------------------------------|
| Dimensiones    | **1920 × 1080 px** mín. (3840 × 2160 px recomendado)  |
| Proporción     | **16:9**                                              |
| Duración       | 12 – 20 segundos, **bucle perfecto** (loop seamless)  |
| Codec MP4      | H.264, CRF 23, AAC silencio (audio será muteado)      |
| Codec WebM     | VP9, calidad media                                     |
| Peso máximo    | 8 MB MP4 · 6 MB WebM                                  |
| Contenido      | Slow-motion deportivo: entrenamiento, regate, remate, celebración. Tono cinemático, look azulado/desaturado |
| Notas          | El video se cubre con overlay azul al 60%. Evitar texto incrustado. Acción centrada (los bordes pueden recortarse en mobile) |

### `images/hero-poster.jpg`
Poster fallback que se muestra mientras el video carga (o si falla).

| Propiedad   | Valor               |
|-------------|---------------------|
| Dimensiones | 1920 × 1080 px      |
| Formato     | JPG progresivo, q85 |
| Peso máximo | 200 KB              |

---

## 🖼️ IMÁGENES

### Logos

| Archivo                                  | Tamaño     | Proporción | Notas                                          |
|------------------------------------------|------------|------------|------------------------------------------------|
| `images/favicon.svg`                     | 64 × 64    | 1:1        | Versión simplificada del escudo                |
| `images/logo-psg-academy.svg`            | 180 × 60   | 3:1        | Versión blanca (header sobre hero oscuro)      |
| `images/logo-psg-academy-white.svg`      | 200 × 200  | 1:1        | Versión grande para preloader                  |
| `images/logo-psg-academy-footer.svg`     | 240 × 80   | 3:1        | Monocromática blanca para footer               |

### Sección "The PSG Way" (Metodología)

| Archivo                       | Tamaño        | Proporción | Contenido sugerido                              |
|-------------------------------|---------------|------------|--------------------------------------------------|
| `images/metodologia-main.webp`| 1200 × 1500   | 4:5        | Foto cenital de entrenamiento o sesión técnica con coaches. Tono editorial. Retina: 2400×3000 |

### Sedes Oficiales (Sección 3)

| Archivo                       | Tamaño      | Proporción | Contenido sugerido                          |
|-------------------------------|-------------|------------|----------------------------------------------|
| `images/sede-carrasco.webp`   | 800 × 1000  | 4:5        | Cancha aérea o atleta con equipación PSG    |
| `images/sede-pocitos.webp`    | 800 × 1000  | 4:5        | Vista urbana / entrenamiento en complejo     |
| `images/sede-punta.webp`      | 800 × 1000  | 4:5        | Cancha al aire libre, ambiente costero       |

> **Peso máximo recomendado:** 200 KB cada una en WebP (calidad 82, compresión sharp).
> Retina: duplicar dimensiones y servir con `srcset` (puede hacerse en una segunda iteración).

### Sección Inscripción (background opcional)

| Archivo                            | Tamaño        | Proporción |
|------------------------------------|---------------|------------|
| `images/inscripcion-bg.webp`       | 2560 × 1440   | 16:9       |

### Sponsors / Patrocinadores institucionales

4 logos monocromáticos (blanco o gris claro) sobre fondo navy.

| Archivos                                | Tamaño cada uno | Proporción |
|-----------------------------------------|-----------------|------------|
| `images/sponsor-1.svg` ... `sponsor-4.svg` | 120 × 40       | 3:1        |

---

## 🎯 LOTTIE (animaciones opcionales)

Si el equipo de After Effects quiere agregar animaciones vectoriales (loaders, micro-interacciones, iconos animados), pueden colocarlas en:

```
assets/lottie/
├── trophy-spin.json        (200×200 px · loop infinito)
├── ball-bounce.json        (200×200 px · loop infinito)
└── arrow-down.json         (40×60 px · loop infinito)
```

> Para integrarlas, agregar `<script src="https://cdn.jsdelivr.net/npm/lottie-web/build/player/lottie.min.js"></script>` y crear un contenedor `<div class="lottie-container" data-src="assets/lottie/X.json"></div>`. (Se puede preparar el wiring si lo solicitan.)

---

## 📐 Convenciones generales

- **Formato preferido:** WebP (foto) y SVG (vectorial). PNG sólo si hay transparencia compleja.
- **Compresión:** Squoosh.app o ImageOptim antes de subir.
- **Nomenclatura:** todo en minúsculas, sin espacios, separadores con guion (`-`).
- **Color management:** sRGB para web.
- **Look & feel:** azul cinemático profundo (#001C3F), contrastes altos, sombras profundas. Tomar como referencia visual `psg.fr` y `psgacademy.com.br`.

---

## ✅ Checklist para entrega

- [ ] Video hero MP4 + WebM + poster JPG
- [ ] Logos: favicon + 3 versiones SVG
- [ ] Imagen metodología (4:5)
- [ ] 3 imágenes de sedes (4:5)
- [ ] Background inscripción (opcional, 16:9)
- [ ] 4 logos sponsors (3:1)
- [ ] (Opcional) Lottie files

Una vez cargados todos los archivos en sus rutas correctas, la landing page se verá pixel-perfect sin modificar el código.

---

**Contacto del developer:** para dudas técnicas o integración de nuevos assets, contactar al equipo de desarrollo antes de subir.
