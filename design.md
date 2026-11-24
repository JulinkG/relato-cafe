# Relato café — Style Reference
> Cuaderno de cuentos dibujado a crayón. Fondo blanco limpio, stickers hechos a mano con línea oscura que se salen del borde, Granada como acento que marca el ritmo, Caramelo como chispa cálida, y una tipografía hecha a mano (Gaegu) apoyada en una sans redonda y legible (Nunito).

**Theme:** light

> **Actualización de marca (nov 2026) — vinculante.** La paleta y las tipografías de esta sección reemplazan a las de la Propuesta A "Grana y Rayón". En el resto del documento, los nombres antiguos se leen así: **Papel → Blanco**, **Tinta → Expreso**, **Grana → Granada**, **Agave → Caramelo** (BARDO), **Fraunces y Shantell Sans → Gaegu**, **Figtree → Nunito**. Los nombres de token CSS se conservan (`--color-papel`, `--color-tinta`, `--color-grana`) y apuntan a los nuevos valores `--relato-*`.

Colores, tipografías e ilustraciones son exclusivamente de Relato café. No usar paletas, fuentes ni ilustraciones de otras marcas.

Relato se lee como un libro de relatos ilustrado a mano que vive dentro de una cafetería. El lienzo es Blanco (#FFFFFF) y toda la estructura tipográfica la lleva Expreso (#2C1E16), un café casi negro. Granada (#C0392B) es el color secundario: títulos de sección, botones principales, enlaces y franjas de impacto; nunca en nombres de producto ni precios. Caramelo (#D98A2B) es el acento: BARDO · Barra errante, detalles y estados seleccionados. Sobre Caramelo el texto va en Expreso (el blanco no contrasta lo suficiente). La tipografía tiene dos voces: Gaegu (hecha a mano) para títulos, nombres de producto, logotipo y frases emotivas, y Nunito para texto, UI, precios y etiquetas. Los componentes son ligeros (tarjetas de 8px, botones píldora de 32px, líneas finas) para que los dibujos de crayón cuenten la historia.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Blanco | `#FFFFFF` · rgb(255,255,255) | `--relato-blanco` (`--color-papel`, `--color-blanco`) | Primario. Fondo de toda la página, tarjetas y formularios. También es el texto sobre Granada y Expreso |
| Granada | `#C0392B` · rgb(192,57,43) | `--relato-granada` (`--color-grana`) | Secundario. Etiquetas y títulos de sección, botones principales, enlaces, slogan y franjas completas. Nunca en nombres de producto ni precios |
| Caramelo | `#D98A2B` · rgb(217,138,43) | `--relato-caramelo` (`--color-caramelo`) | Acento. Banda y botón de BARDO, chips seleccionados, foco de campos. Texto encima siempre en Expreso, nunca en Blanco |
| Expreso | `#2C1E16` · rgb(44,30,22) | `--relato-expreso` (`--color-tinta`) | Texto: títulos, nombres de producto, precios, texto principal, navegación y pie de página. Nunca negro puro |
| Expreso suave | `#66564B` | `--color-cacao` | Derivado de Expreso para descripciones, notas y leyendas (no es color de marca, solo texto secundario) |
| Línea | Expreso @ 10–20% / Granada @ 40% | `--color-linea`, `--color-linea-grana` | Divisores finos y bordes de campos. No hay grises sólidos |

## Tokens — Typography

Gaegu ES (archivos locales en `app/fonts`, pesos 300/400/700, con acentos y signos del español) y Google Fonts `Nunito:wght@400;600;700;800`, cargadas con `next/font` en `app/layout.tsx`.

### Gaegu — Títulos · `--font-display`
- **Weights:** 700 (títulos, productos, logotipo), 400 (frases a mano)
- **Line height:** 0.85–1.2
- **Role:** Títulos de página y de sección, nombres de producto, encabezados de tarjetas, logotipo "Relato", "BARDO · Barra errante" y frases emotivas ("Historias con café", "Elige tu capítulo de hoy"). Mayúscula inicial, nunca todo en mayúsculas.

### Nunito — Textos · `--font-body`
- **Weights:** 400 (párrafos), 600, 700 (precios, botones, etiquetas), 800 (énfasis)
- **Sizes:** 11px–16px
- **Letter spacing:** normal en párrafos; 0.12–0.2em en etiquetas y botones en mayúsculas
- **Role:** Párrafos, descripciones, formularios, navegación, precios, botones y etiquetas de sección (CLÁSICOS, PARA COMER, COTIZA TU EVENTO), además de "café" en el logotipo.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing |
|------|--------|--------|------|-------------|----------------|
| caption | Nunito | 400 | 12px | 1.5 | normal |
| label | Nunito | 700 | 12px | 1.2 | 0.18em (mayúsculas) |
| body-sm | Nunito | 400 | 14px | 1.55 | normal |
| body | Nunito | 400 | 16px | 1.6 | normal |
| product | Gaegu | 700 | 18px | 1.2 | normal |
| script | Gaegu | 400 | 24px | 1.2 | normal |
| heading-sm | Gaegu | 700 | 32px | 1.1 | normal |
| heading | Gaegu | 700 | 46px | 1.08 | normal |
| heading-lg | Gaegu | 700 | 56px | 1.05 | normal |
| logo | Gaegu | 700 | 60–88px | 0.85 | normal |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** cómoda en móvil, espaciosa en escritorio

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 16px |
| cards | 8px |
| inputs | 8px |
| buttons | 32px |
| bandas BARDO | 10px |
| divisores | ondas SVG, sin radio fijo |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| soft | `rgba(58, 31, 34, 0.06) 0px 16px 24px 0px` | `--shadow-soft` |
| card | `rgba(58, 31, 34, 0.12) -14px 10px 40px 0px` | `--shadow-card` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px (escritorio), 48px (móvil)
- **Card padding:** 16px
- **Element gap:** 8px
- **Margen lateral móvil:** 16px

## Components

### Botón principal (Grana)
**Role:** Acción principal de la cafetería: "Ver menú", "Escríbenos por WhatsApp".

Fondo Grana (#A3123A), texto Papel (#F6F0F2), radio 32px, padding 16px × 32px (móvil) / 20px × 40px (escritorio). Texto en Figtree 700, 13px, mayúsculas, letter-spacing 0.12em. Sin borde ni sombra. Altura mínima 44px.

### Botón BARDO (Agave)
**Role:** Acción principal del mundo eventos: "Agenda tu evento", "Cotiza".

Igual que el botón principal pero con fondo Agave (#4F6B54). Solo dentro de secciones de BARDO.

### Botón secundario (contorno)
**Role:** Acciones de exploración: "Conoce BARDO", "Ver galería".

Fondo transparente, borde 2px Grana, texto Grana, radio 32px, mismo padding y tipografía. Lleva una flecha a la derecha. Sobre fondos Grana o Agave se invierte a borde y texto Papel.

### Barra de navegación
**Role:** Navegación persistente.

Fondo Papel. Logotipo a la izquierda (cara del cacomixtle + "Relato café"), enlaces al centro (MENÚ, BARDO, GALERÍA, VISÍTANOS) en Figtree 700, 12–13px, mayúsculas, letter-spacing 0.15em, color Tinta. Botón principal a la derecha ("Pide por WhatsApp"). En móvil: logotipo + botón de menú hamburguesa.

### Producto del menú
**Role:** Renglón de producto en la carta.

Nombre en Fraunces 600 18px Tinta y precio en Figtree 700 15px Tinta alineado a la derecha, en la misma línea. Debajo, descripción en Figtree 13px Cacao, line-height 1.4. Sin líneas punteadas. Las secciones van encabezadas por una etiqueta Grana (Figtree 700 mayúsculas) con una línea fina Grana al 40% debajo.

### Tarjeta destacada
**Role:** Destacados del menú, paquetes de BARDO, fotos de eventos en carrusel.

Fondo Blanco, radio 8px, sombra `--shadow-card`. Foto a sangre arriba (proporción 4:3), padding 16px. Título en Fraunces 600, etiqueta pequeña (precio, "Barra de café") en Figtree mayúsculas con espaciado.

### Hero con cacomixtle
**Role:** Primera pantalla.

Fondo Papel. Izquierda: logotipo grande, título en Fraunces 600 (p. ej. "Café de especialidad en la Reforma") y debajo "Historias con café" en Shantell Sans, Grana. Derecha: la cara del cacomixtle grande, con uno o dos dibujos de crayón saliéndose del borde. Botones principal + secundario debajo del texto. En móvil todo se apila, con el cacomixtle arriba.

### Franja Grana
**Role:** Momento de impacto entre secciones (p. ej. "Nuestros especiales").

Sección de ancho completo con fondo Grana y texto Papel. Los stickers de crayón se ven bien sobre ella porque conservan su contorno claro.

### Banda BARDO
**Role:** Puerta de entrada al mundo eventos.

Sección de ancho completo (o bloque con radio 10px) en Agave con texto Papel. "BARDO · Barra errante" en Gaegu 700, frase en Shantell Sans, botón Papel con texto Agave o botón de contorno Papel. Espacio para el logo de BARDO (cacomixtle con sombrero de pluma y guitarra).

### Formulario de agenda (BARDO)
**Role:** Solicitud de evento con cotización en vivo.

Por pasos (fecha → invitados y horas → tipo de barra → extras → contacto). Campos Blanco con borde Tinta al 20%, radio 8px, altura mínima 44px; etiquetas en Figtree 700 12px mayúsculas. La cotización estimada se muestra en una tarjeta Blanco con total en Fraunces 600 32px Tinta y desglose en Cacao. Botón final en Agave.

### Galería de eventos
**Role:** Fotos de eventos de BARDO aprobadas por el dueño.

Rejilla de 2 columnas en móvil y 3–4 en escritorio, fotos radio 8px. El botón "Sube tus fotos" abre la carga; las fotos quedan pendientes hasta aprobarse.

### Divisor ondulado
**Role:** Separador orgánico entre secciones.

Ruta SVG de 60–120px de alto con una onda suave, rellena del color de la sección siguiente (Papel → Grana, Papel → Agave, Papel → Tinta). Nunca una línea recta entre bloques de color.

### Etiqueta de sección
**Role:** Pequeño texto en mayúsculas sobre títulos (CLÁSICOS, PARA COMER, COTIZA TU EVENTO).

Figtree 700, 12–13px, letter-spacing 0.18em, color Grana (o Papel sobre franjas). Puede acompañarse de un dibujo de crayón pequeño a la izquierda.

## Do's and Don'ts

### Do
- Usar Grana como único color de botón principal en la cafetería y Agave como único color de botón principal en BARDO.
- Escribir títulos en Fraunces 600 con mayúscula inicial y acompañarlos de una frase corta en Shantell Sans: el título de dos voces es la firma de la marca.
- Poner las etiquetas de sección en Figtree 700 mayúsculas con espaciado 0.15–0.2em.
- Usar radio 32px en botones y 8px en tarjetas y campos.
- Colocar tarjetas Blanco sobre el lienzo Papel en lugar de usar grises.
- Separar secciones con ondas SVG del color de la sección siguiente.
- Usar solo los dibujos de crayón de `/public/marca` y la cara del cacomixtle, girados ±10° y saliéndose del borde.
- Leer menú y tarifas desde `/data`; nunca escribir precios a mano en componentes.

### Don't
- No usar Grana en nombres de producto ni en precios: van en Tinta.
- No usar Agave fuera de BARDO ni Grana como color dominante de BARDO.
- No usar negro puro (#000000) ni grises de relleno: el texto es Tinta y las superficies son Papel o Blanco.
- No poner Gaegu en títulos de sección o texto corrido: es solo logotipo y BARDO.
- No poner Shantell Sans en botones, etiquetas o navegación.
- No usar gradientes, manchas de colores ajenos a la paleta, íconos de otra estética ni ilustraciones que no sean de Relato.
- No encerrar los dibujos de crayón en cajas o círculos.
- No poner sombras en botones ni en la navegación.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Lienzo Papel | `#F6F0F2` | Fondo base de la página y del hero |
| 2 | Tarjeta Blanco | `#FFFFFF` | Tarjetas, paneles, formularios y cotización |
| 3 | Franja Grana | `#A3123A` | Sección de impacto de la cafetería, texto Papel |
| 4 | Franja Agave | `#4F6B54` | Secciones de BARDO, texto Papel |
| 5 | Pie Tinta | `#3A1F22` | Pie de página, texto Papel |

## Elevation

- **Tarjeta:** `rgba(58, 31, 34, 0.12) -14px 10px 40px 0px`
- **Superficie flotante / hover:** `rgba(58, 31, 34, 0.06) 0px 16px 24px 0px`

## Imagery

Dos modos. (1) Ilustración: los dibujos de crayón oficiales de Relato (café para llevar, soda, pata, flor) y la cara del cacomixtle, con trazo oscuro tipo crayón y contorno claro de sticker; se colocan sueltos, girados y saliéndose de los bordes. (2) Fotografía: bebidas y comida reales de la cafetería y fotos de eventos de BARDO, con luz natural cálida, tomas cercanas y ligeramente cenitales sobre madera, barro o lino, sin filtros fuertes ni duotonos. Las ilustraciones aportan el carácter; la fotografía, el antojo.

## Layout

Lienzo Papel a ancho completo con contenido centrado a 1200px máximo. Ritmo de página: Papel (hero) → Papel (destacados del menú en carrusel de tarjetas) → franja Grana (especiales) → Papel (ubicación y horario) → franja Agave (BARDO) → Papel (galería) → pie Tinta. Cada cambio de color lleva un divisor ondulado. Mobile first: la mayoría de visitas llegan desde Instagram y WhatsApp, así que todo se apila en una columna, los botones ocupan el ancho y tienen al menos 44px de alto.

## Agent Prompt Guide

**Quick Color Reference**
- Texto: #3A1F22 Tinta (títulos, productos, precios, cuerpo), #5B4840 Cacao (descripciones)
- Fondo: #F6F0F2 Papel (lienzo), #FFFFFF (tarjetas)
- Línea: Tinta o Grana con opacidad 15–40%
- Acento: #A3123A Grana (etiquetas, botones, slogan, franjas)
- BARDO: #4F6B54 Agave

**Example Component Prompts**
1. *Encabezado del hero*: título 56px en Fraunces 600, color #3A1F22, letter-spacing -0.015em. Debajo, "Historias con café" en Shantell Sans 28px, color #A3123A. Fondo #F6F0F2, cara del cacomixtle a la derecha con un dibujo de crayón girado 8° saliéndose del borde.
2. *Botón principal*: píldora radio 32px, fondo #A3123A, texto #F6F0F2, Figtree 700 13px mayúsculas, letter-spacing 0.12em, padding 16px × 32px, altura mínima 44px. Etiqueta: "VER MENÚ".
3. *Botón BARDO*: igual al principal con fondo #4F6B54. Etiqueta: "AGENDA TU EVENTO".
4. *Producto del menú*: "Macchiato Ámbar" en Fraunces 600 18px #3A1F22 y "$60" en Figtree 700 15px #3A1F22 a la derecha; descripción en Figtree 13px #5B4840.
5. *Divisor*: onda SVG de 80px de alto, relleno #4F6B54, entre la sección Papel y la banda de BARDO.

## Color Behavior Rules

La tensión es entre papel tranquilo y carmín vivo. Tinta lleva toda la estructura (títulos, productos, precios, texto); Grana es el único acento y marca dónde mirar (etiquetas, botones, slogan) o pinta franjas completas en momentos de impacto. Agave es un mundo aparte: solo existe en BARDO, y su aparición le dice al usuario que entró a la parte de eventos. Cacao es la voz baja de las descripciones. Nunca cruzar carriles: Grana no va en productos ni precios, Agave no va en la cafetería, y no se agregan colores nuevos.

## Illustration Integration

Los dibujos de crayón nunca van dentro de cajas: se salen de los bordes, cruzan los divisores y quedan parcialmente tapados por otros elementos. Varían de tamaño (pequeños junto a etiquetas, grandes ocupando 25–35% de una sección) y se giran ±5–10° para que se sientan colocados a mano. Sobre Grana, Agave o Tinta se usan en su versión sticker (con contorno claro); sobre Papel pueden ir con o sin contorno. Máximo 3–4 dibujos por pantalla para que no se vea saturado.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-papel: #F6F0F2;
  --color-tinta: #3A1F22;
  --color-grana: #A3123A;
  --color-cacao: #5B4840;
  --color-agave: #4F6B54;
  --color-blanco: #FFFFFF;
  --color-linea: rgba(58, 31, 34, 0.2);

  /* Typography — Font Families */
  --font-gaegu: 'Gaegu', cursive;
  --font-nunito: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  --font-fraunces: 'Fraunces', ui-serif, Georgia, serif;
  --font-figtree: 'Figtree', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-shantell: 'Shantell Sans', cursive;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-label: 12px;
  --tracking-label: 0.18em;
  --text-body-sm: 14px;
  --leading-body-sm: 1.55;
  --text-body: 16px;
  --leading-body: 1.6;
  --text-product: 18px;
  --text-script: 24px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.1;
  --text-heading: 46px;
  --leading-heading: 1.08;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.05;
  --tracking-heading: -0.01em;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 16px;
  --element-gap: 8px;

  /* Named Radii */
  --radius-tags: 16px;
  --radius-cards: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 32px;
  --radius-bardo: 10px;

  /* Shadows */
  --shadow-soft: rgba(58, 31, 34, 0.06) 0px 16px 24px 0px;
  --shadow-card: rgba(58, 31, 34, 0.12) -14px 10px 40px 0px;

  /* Surfaces */
  --surface-papel: #F6F0F2;
  --surface-tarjeta: #FFFFFF;
  --surface-grana: #A3123A;
  --surface-agave: #4F6B54;
  --surface-pie: #3A1F22;
}
```

### Google Fonts

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Figtree:wght@400;700&family=Shantell+Sans:wght@400;500&family=Gaegu:wght@700&family=Nunito:wght@700&display=swap">
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-papel: #F6F0F2;
  --color-tinta: #3A1F22;
  --color-grana: #A3123A;
  --color-cacao: #5B4840;
  --color-agave: #4F6B54;
  --color-blanco: #FFFFFF;

  /* Typography */
  --font-gaegu: 'Gaegu', cursive;
  --font-nunito: 'Nunito', ui-sans-serif, system-ui, sans-serif;
  --font-fraunces: 'Fraunces', ui-serif, Georgia, serif;
  --font-figtree: 'Figtree', ui-sans-serif, system-ui, sans-serif;
  --font-shantell: 'Shantell Sans', cursive;

  /* Typography — Scale */
  --text-caption: 12px;
  --text-label: 12px;
  --text-body-sm: 14px;
  --text-body: 16px;
  --text-product: 18px;
  --text-script: 24px;
  --text-heading-sm: 32px;
  --text-heading: 46px;
  --text-heading-lg: 56px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-cards: 8px;
  --radius-tags: 16px;
  --radius-buttons: 32px;
  --radius-bardo: 10px;

  /* Shadows */
  --shadow-soft: rgba(58, 31, 34, 0.06) 0px 16px 24px 0px;
  --shadow-card: rgba(58, 31, 34, 0.12) -14px 10px 40px 0px;
}
```
