# Local Preview

Run commands from the repository root with Docker Desktop running. The existing Gemfile supplies the GitHub Pages dependencies.

## PowerShell

```powershell
docker run --rm -it -v "${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve --host 0.0.0.0 --watch --force_polling
```

## Windows Command Prompt

```bat
docker run --rm -it -v "%cd%:/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve --host 0.0.0.0 --watch --force_polling
```

Open <http://localhost:4000/>. The command keeps running; stop it with Ctrl+C. `0.0.0.0` is the server bind address, not the browser destination. Polling detects edits on Windows bind mounts. If port 4000 is occupied, use `-p 4001:4000` and open <http://localhost:4001/>.

Rebuilding can, if required, be done via

```bat
docker exec <container-id> jekyll build
```

## Build Checks

```powershell
docker run --rm -v "${PWD}:/srv/jekyll" jekyll/jekyll jekyll build
node --check assets/js/skill-tree.js
```

Jekyll generates `_site`; do not edit it manually. If a running watcher misses newly added files, restart it or run `docker exec <container-id> jekyll build` in that preview container.

## Tree Checks

- Confirm three language roots (Python, C/C++, GDScript), eight projects, and ten connections. `pymembar` appears once between Python and C/C++, with violet and green halves and a green connection from C/C++. `shmqueue` branches from `shmlock`, not directly from Python.
- Hover or focus a project to reveal its description; move into the popup and verify its repository link remains reachable.
- Click or tap to pin details, select another project, and dismiss with Escape, the close button, or an outside click. Escape and the close button return focus to the triggering node.
- Check desktop and narrow mobile widths for circular nodes, readable labels, aligned connectors, and no horizontal overflow.
- Disable JavaScript and confirm project summaries and repository links remain available. Enable reduced motion and verify interaction remains usable.
- Verify the existing Google verification page and local documentation still render.

The Lucide icon distribution is bundled locally at `assets/js/lucide.min.js`; its license is alongside it in `assets/js/lucide.LICENSE`. Icons have text fallbacks; Google Fonts has local font fallbacks.
