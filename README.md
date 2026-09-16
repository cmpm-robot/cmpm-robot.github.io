# cmpm-robot.github.io

Project page for *Chaining Visuomotor Skills for Constrained Manipulation Through
Perceptual Manipulation*.

Static site: `index.html` + `static/`. There is no build step and no dependencies.

## Local preview

    python3 -m http.server 8000

then open <http://localhost:8000>.

## Deploy

GitHub Pages serves `main` at the repository root. Settings -> Pages -> Source ->
"Deploy from a branch" -> `main` / `/ (root)`. `.nojekyll` turns off Jekyll so the
files are served exactly as committed.
