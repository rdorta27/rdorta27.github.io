# rdorta27.github.io

Personal site of Rubén A. Dorta A.: Solution Architect | Applied AI & OSS/BSS.

Three static pages in three languages, no build and no dependencies. A small `site.js` adds the theme toggle, the diagram tabs and the AI-layer toggle; the pages read fine without it.

| Language | Home | Expertise | Full experience |
| --- | --- | --- | --- |
| English (source) | `index.html` | `expertise.html` | `experience.html` |
| Spanish (Latin America) | `es-419/index.html` | `es-419/expertise.html` | `es-419/experience.html` |
| Portuguese (Brazil) | `pt-br/index.html` | `pt-br/expertise.html` | `pt-br/experience.html` |

`index.html` carries four sections: home, projects, an experience summary and contact. `expertise.html` is the OSS/BSS page: an interactive "From catalog to bill" diagram with an optional AI layer (Knowman, Flow Audit, Sentinel Engine), the stack and the work with clients and teams. `experience.html` is the compact timeline: Applied AI (independent), Solution Architect at Ericsson, Integration Engineer, Oracle OSM at Tecnocom and BPM at Animaciones iCONOS. Roles carry no dates beyond the year range. The site publishes no phone, email, visa status or license numbers.

English is the source: change it first, then mirror the change in `es-419/` and `pt-br/`. Every page carries the language pills in the header and `hreflang` alternates pointing at the canonical URLs. The translation folders hold HTML only; the stylesheet, the fonts and the favicon are shared from the root.

Every project card links to the repository and to its `*-site`; this page does not repeat their content. Every claim comes from the public repositories (`flow-audit`, `sentinel-engine`, `knowman`). Flow Audit is shown as under construction (version 0.2.0, milestone M0 closed); it does not analyse data yet: their README, CHANGELOG and About text.

## Style

Blue theme. Dark is the default: deep blue background with a gold accent. A light view (cream background, white cards, blue accent) is available from the toggle and remembered in the browser. Cards use a 10 px radius. Fonts: DM Serif Display for headings and Nunito Sans for body, both OFL and served from `fonts/`, with `OFL.txt` and `SOURCE.md` per family.

## Preview locally

```
python3 -m http.server
```

Open http://localhost:8000 from the repository root.

## Publish

GitHub Pages serves this repository. Pages is the default `main` branch deployment; there is no build step, so pushing `main` is the whole release.
