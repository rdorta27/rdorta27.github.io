# rdorta27.github.io

Personal site of Rubén A. Dorta A.: Solution Architect | Applied AI & OSS/BSS.

Two static pages in three languages, no build, no JavaScript, no dependencies:

| Language | Home (`index.html`) | Full experience (`experience.html`) |
| --- | --- | --- |
| English (source) | `index.html` | `experience.html` |
| Spanish (Latin America) | `es-419/index.html` | `es-419/experience.html` |
| Portuguese (Brazil) | `pt-br/index.html` | `pt-br/experience.html` |

`index.html` carries five sections: home, projects, OSS/BSS, how I work, an experience summary, and contact. `experience.html` is the compact timeline: projects behind it, then Solution Architect at Ericsson, Integration Engineer, Oracle OSM at Tecnocom and BPM at Animaciones iCONOS. Roles carry no dates. The site publishes no phone, email, visa status or license numbers.

English is the source: change it first, then mirror the change in `es-419/` and `pt-br/`. Every page carries the language pills in the header and `hreflang` alternates pointing at the canonical URLs. The translation folders hold HTML only; the stylesheet, the fonts and the favicon are shared from the root.

Every project card links to the repository and to its `*-site`; this page does not repeat their content. Every claim comes from the public repositories (`flow-audit`, `sentinel-engine`, `knowman`): their README, CHANGELOG and About text.

## Style

Theme: "Mediterráneo" from Theme Studio. Cream background with white cards on a 10 px radius and a tile-blue top rule, and the hero as the theme's color view: deep azulejo blue with serif headings and a gold accent. Dark mode follows the theme's dark view. Fonts: DM Serif Display for headings and Nunito Sans for body, both OFL and served from `fonts/`, with `OFL.txt` and `SOURCE.md` per family.

## Preview locally

```
python3 -m http.server
```

Open http://localhost:8000 from the repository root.

## Publish

GitHub Pages serves this repository. Pages is the default `main` branch deployment; there is no build step, so pushing `main` is the whole release.
