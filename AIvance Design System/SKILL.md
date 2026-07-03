---
name: aivance-design
description: Use this skill to generate well-branded interfaces and assets for AIvance (AI + Advance) and its products AICura, AICopia, and AICreo — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, iconography, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — brand overview, CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY, component + UI-kit index.
- `styles.css` — single entry point; `@import`s all tokens. Link this + Bootstrap Icons CDN.
- `tokens/` — colors, typography, spacing, effects, fonts (CSS custom properties).
- `components/` — React primitives (forms, feedback, surfaces, commerce). Access via `window.AIvanceDesignSystem_2cbb92` after loading `_ds_bundle.js`.
- `ui_kits/` — full-screen recreations: AICopia storefront, AICreo corporate site, AICura ad dashboard.
- `templates/` — copyable starting pages (`.dc.html`) that consume this DS: `aivance-home`, `aicopia-storefront`, `aicreo-corporate`, `aicura-dashboard`.
- `guidelines/` — foundation specimen cards.

## Non-negotiables
- Icons: **Bootstrap Icons** only (no emoji, no hand-drawn SVG).
- Fonts: Noto Sans KR (body/UI), Space Grotesk (display/wordmark), JetBrains Mono (code).
- Tone: Korean, concrete, trust-first — prove "innovation" with numbers and automation, never with hype adjectives or emoji.
- Product accents (confirmed): AICura = teal `#12B3A6`, AICopia = violet `#7C3AED`, AICreo = rose `#F0568C`; parent AIvance = Advance Blue `#2563EB`.
- Logo: original *Signal Path* mark (`assets/logo-mark.svg` / `-white` / `-mono`) + Space Grotesk wordmark (`AI` in brand color). Tint the mono mark to the product accent on product surfaces.
