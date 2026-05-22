# Kristy's Birthday Quest

A simple browser-based 2D top-down pixel-style birthday quest for Kristy. It is static, dependency-free, and ready for GitHub Pages.

## How to run locally

Open `index.html` directly in a browser.

You can also run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How to edit memories

Most game content lives in `game.js` inside `GAME_DATA`.

Each house has:

- `id`
- `label`
- `zone`
- `objective`
- `position`
- `unlockOrder`
- `required`
- `memories`

Each memory has:

- `id`
- `title`
- `type`
- `required`
- `lines`
- `image`
- `song`
- `note`

To change dialogue, edit the `lines` array for a memory:

```js
lines: [
  "First line of dialogue.",
  "Second line of dialogue.",
  "Final line."
]
```

Dialogue advances with Space, Enter, or mouse click.

## How to add images

Put image files in:

```text
assets/images/
```

Then set a memory image path in `game.js`:

```js
image: "assets/images/your-photo.jpg"
```

Use relative paths so the game works on GitHub Pages. If `image` is `null`, the game shows a cute placeholder card instead.

## How to add audio later

Put audio files in:

```text
assets/audio/
```

Then set a memory song path in `game.js`:

```js
song: "assets/audio/our-song.mp3"
```

If `song` is `null`, the game shows “Song coming soon” and does not break.

## How to change house order

Main timeline progression is controlled by `unlockOrder`.

Current order:

1. `Where It Started as Friends`
2. `May - August`
3. `September - December`
4. `January - March`
5. `April - Now`
6. `Final Birthday Letter`

To reorder timeline houses, change their `unlockOrder` values. Keep them as consecutive numbers starting at `0`. Special houses do not need `unlockOrder`; they unlock after the first timeline house is completed.

## How to deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Set the source to your main branch and repository root.
5. Save and wait for GitHub to publish the site.

No build step is required.

## Files and folders

- `index.html` - page structure and game screens.
- `style.css` - pixel-style visuals, map, houses, UI, dialogue boxes.
- `game.js` - game data, movement, dialogue, house menus, unlock rules.
- `.nojekyll` - tells GitHub Pages to serve files as plain static assets.
- `assets/images/` - future photos and image memories.
- `assets/audio/` - future songs and audio memories.
- `assets/sprites/` - future character or house sprites.

## Troubleshooting

- If an image does not show, check spelling and capitalization in the path.
- If audio does not play, confirm the file exists and the browser supports the format.
- Use relative paths like `assets/images/photo.jpg`, not local paths like `/Users/name/photo.jpg`.
- If the map looks too small on mobile, rotate the phone or use a desktop browser for the best version.
- If a house seems locked, complete at least one required memory in the current main timeline house.

## Testing checklist before sending the link

- Title screen shows “Kristy's Birthday Quest.”
- NO gives the cute mandatory quest response.
- YES starts the game.
- Kristy moves with WASD and arrow keys.
- Current main quest house has a strong glow and arrow.
- Locked houses show the correct locked dialogue.
- First timeline house completion unlocks special houses.
- Main timeline houses unlock in order.
- Final Birthday Letter stays locked until the timeline is complete.
- Final letter shows the Quest Complete ending.
- Any added image or audio paths work on GitHub Pages.
