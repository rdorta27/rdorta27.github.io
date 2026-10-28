# rdorta27.github.io

Personal site of Rubén A. Dorta A.: Solution Architect | Applied AI & OSS/BSS.

One static page, `index.html`, at the repository root, with five sections: home, projects, how I work, experience and contact. No build, no JavaScript, no dependencies.

Every project card links to the repository and to its `*-site`; this page does not repeat their content. Every claim comes from the public repositories (`flow-audit`, `sentinel-engine`, `knowman`): their README, CHANGELOG and About text.

## Style

Theme: "Mediterráneo" from Theme Studio. Cream background with white cards on a 10 px radius and a tile-blue top rule, and the hero as the theme's color view: deep azulejo blue with serif headings and a gold accent. Dark mode follows the theme's dark view. Fonts: DM Serif Display for headings and Nunito Sans for body, both OFL and served from `fonts/`, with `OFL.txt` and `SOURCE.md` per family. The palette and tokens come from `theme-studio`, `www/styles/themes/mediterraneo.css`.

## Preview locally

```
python3 -m http.server
```

Open http://localhost:8000 from the repository root.

## Publish

GitHub Pages serves this repository. Pages is the default `main` branch deployment; there is no build step, so pushing `main` is the whole release.
