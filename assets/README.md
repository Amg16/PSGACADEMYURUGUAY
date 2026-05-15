# 🎬 PSG Academy Uruguay · Especificaciones de Assets

Este documento describe **cada archivo** que el equipo de diseño / filmmaker debe producir para llenar la landing page. Las rutas y nombres son **obligatorios**: respetarlos hace que todo encaje sin tocar el código.

> ⚡ El sitio ahora usa una **paleta Dark Premium** (azul noche `#020617`). Los assets deben pensarse sobre fondo oscuro: contrastes altos, saturación contenida, look cinemático tipo "día de partido".

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
| Codec MP4      | H.264, CRF 23, AAC silencio                           |
| Codec WebM     | VP9, calidad media                                     |
| Peso máximo    | 8 MB MP4 · 6 MB WebM                                  |
| Contenido      | Slow-motion deportivo: entrenamiento, regate, remate, celebración. Look cinemático azulado/desaturado |
| Notas          | El video lleva un overlay azul noche al 70%. Acción centrada (los bordes se recortan en mobile). El CSS aplica `brightness(0.7)` y `contrast(1.15)` |

### `images/hero-poster.jpg`
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
| `images/favicon.svg`                     | 64 × 64    | 1:1        | Escudo simplificado                            |
| `images/logo-psg-academy.svg`            | 180 × 60   | 3:1        | Versión blanca (header sobre dark)             |
| `images/logo-psg-academy-white.svg`      | 200 × 200  | 1:1        | Grande para el preloader                       |
| `images/logo-psg-academy-footer.svg`     | 240 × 80   | 3:1        | Monocromática blanca para footer               |

### Sección "The PSG Way" (Metodología)

| Archivo                       | Tamaño        | Proporción | Contenido sugerido                              |
|-------------------------------|---------------|------------|--------------------------------------------------|
| `images/metodologia-main.webp`| 1200 × 1500   | 4:5        | Foto cenital de entrenamiento o sesión técnica. Tono editorial dramático. Retina: 2400×3000 |

### Sedes Oficiales

| Archivo                       | Tamaño      | Proporción | Contenido sugerido                          |
|-------------------------------|-------------|------------|----------------------------------------------|
| `images/sede-carrasco.webp`   | 800 × 1000  | 4:5        | Cancha aérea o atleta con equipación PSG    |
| `images/sede-pocitos.webp`    | 800 × 1000  | 4:5        | Vista urbana / entrenamiento en complejo     |
| `images/sede-punta.webp`      | 800 × 1000  | 4:5        | Cancha al aire libre, ambiente costero       |

> **Peso máximo recomendado:** 200 KB cada una en WebP (calidad 82).

### Sección Inscripción (background opcional)

| Archivo                            | Tamaño        | Proporción |
|------------------------------------|---------------|------------|
| `images/inscripcion-bg.webp`       | 2560 × 1440   | 16:9       |

### Sponsors / Patrocinadores institucionales

4 logos monocromáticos blancos sobre fondo dark.

| Archivos                                | Tamaño cada uno | Proporción |
|-----------------------------------------|-----------------|------------|
| `images/sponsor-1.svg` ... `sponsor-4.svg` | 120 × 40       | 3:1        |

---

## 🎯 LOTTIE (opcional)

```
assets/lottie/
├── trophy-spin.json        (200×200 px · loop)
├── ball-bounce.json        (200×200 px · loop)
└── arrow-down.json         (40×60 px · loop)
```

---

## 📐 Convenciones generales

- **Formato preferido:** WebP (foto) y SVG (vectorial). PNG sólo con transparencia compleja.
- **Compresión:** Squoosh.app o ImageOptim antes de subir.
- **Color management:** sRGB para web.
- **Look & feel:** azul noche profundo, contrastes altos, sombras dramáticas. Estética "día de partido nocturno".

---

## 🌐 Match Center (API integration)

La sección Match Center carga datos de **api-football.com** (API-Sports) en tiempo real. Para activarla:

1. Crea cuenta gratuita en [https://dashboard.api-football.com/register](https://dashboard.api-football.com/register).
2. Copia tu API Key del dashboard.
3. Abre `index.html` y pega la key en la constante:

```js
const API_KEY = 'TU_API_KEY_AQUÍ';
```

4. El tier gratuito permite 100 requests/día — suficiente para esta integración.

> Si la `API_KEY` está vacía, la sección muestra un estado **fallback** estético sin romper el layout.

---

## ✅ Checklist para entrega

- [ ] Video hero MP4 + WebM + poster JPG
- [ ] Logos: favicon + 3 versiones SVG
- [ ] Imagen metodología (4:5)
- [ ] 3 imágenes de sedes (4:5)
- [ ] Background inscripción (opcional, 16:9)
- [ ] 4 logos sponsors (3:1)
- [ ] API Key de api-football.com pegada en `index.html`
- [ ] (Opcional) Lottie files

Una vez cargados todos los archivos, la landing page se verá pixel-perfect sin tocar código.
