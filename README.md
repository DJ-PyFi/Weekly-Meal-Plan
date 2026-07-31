[README.md](https://github.com/user-attachments/files/30594553/README.md)
# The Weekly Board

A 4-week household meal-planning app — day-by-day meals, macros, batch-prep schedule, and a synced grocery checklist.

## Files

- **`index.html`** — the app itself. This is what Claude regenerates whenever you ask for a new recipe, swapped meal, or new week. Safe to overwrite entirely each time.
- **`config.js`** — your real Firebase credentials + private household sync ID. Claude will never touch this file. Fill it in once (see the comment block inside it) and leave it alone.
- **`README.md`** — this file.

## Updating the app

1. Ask Claude for whatever change you want.
2. Download the new `index.html` it gives you.
3. Drop it into this folder, overwriting the old one.
4. Commit + push. `config.js` stays untouched, so sync keeps working with no extra steps.

## Repo visibility

Keep this repo **private**. `config.js` is committed here (for convenience), and while Firebase web API keys aren't secret by design, `HOUSEHOLD_ID` in `config.js` is effectively the password that keeps your grocery-list data separate from anyone else's. A private repo keeps that string out of public view.

## Running it

Just open `index.html` in a browser (double-click, or `file://` path) — no build step, no server required. If `config.js` has real Firebase values filled in, cross-device sync turns on automatically; otherwise it falls back to this-device-only via `localStorage`.
