# Repository Guidelines

## Scope and Source

This repository is a personal GitHub Pages portfolio built with Jekyll and the Modernist remote theme. Keep changes compatible with GitHub Pages and the existing static HTML, Liquid, CSS, and JavaScript stack.

- Maintain portfolio content in [index.md](index.md). Its YAML front matter defines `trees`, `projects`, and `edges`; do not duplicate that content in the README.
- Edit tree markup in [_includes/skill-tree.html](_includes/skill-tree.html), page composition in [_layouts/skill-tree.html](_layouts/skill-tree.html), and shared layout in [_layouts/default.html](_layouts/default.html).
- Keep node positioning and presentation in [assets/css/skill-tree.css](assets/css/skill-tree.css) and interaction behavior in [assets/js/skill-tree.js](assets/js/skill-tree.js).
- Treat `_site/` as generated output. Change source files and rebuild; never edit generated files manually.
- Preserve the Google verification page and bundled Lucide distribution and license. Do not edit minified vendor code for site-specific behavior.

## Interface Changes

Preserve the existing visual language and responsive layout. Keep hover, keyboard focus, touch, pinned details, dismissal, and focus restoration working. Project summaries and repository links must remain available without JavaScript; respect reduced-motion preferences.

## Validation

Follow [docs/local_testing.md](docs/local_testing.md) for Jekyll builds, local preview commands, and tree interaction checks. Run commands from the repository root.

- After JavaScript changes, run `node --check assets/js/skill-tree.js`.
- After content, Liquid, CSS, or configuration changes, run a Jekyll build using the documented environment when available.
- For visual or interaction changes, check desktop and narrow mobile widths, keyboard and touch behavior, connector alignment, and horizontal overflow.
- Report checks performed and any environment blockers. Do not claim a build or browser check passed unless it ran.

Keep agent instructions excluded from published output in [_config.yml](_config.yml).