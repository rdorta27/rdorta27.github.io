# rdorta27.github.io

Personal site of Rubén Dorta: Solution Architect | Applied AI & OSS/BSS.

One static page in `site/` with five sections: home, projects, how I work, experience and contact. No build, no JavaScript, no dependencies.

Every project card links to the repository and to its `*-site`; this page does not repeat their content. Every claim comes from the public repositories (`flow-audit`, `sentinel-engine`, `knowman`): their README, CHANGELOG and About text.

## Style

The stylesheet follows the visual language shared with the three project sites: the same layout classes (`wrap`, `top`, `card`, `grid`, `eyebrow`, `btn`, `footer`), serif headings and dark mode. The palette comes from the knowman brand tokens (`core/branding/tokens.json`): navy and yellow, sharp corners.

## Preview locally

```
cd site
python3 -m http.server
```

Open http://localhost:8000.

## Publish

GitHub Pages serves this repository. Pages is the default `main` branch deployment; there is no build step, so pushing `main` is the whole release.
