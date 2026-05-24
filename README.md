# Kristy's Cooking Adventure

A simple browser-based 2D top-down pixel-style birthday cooking quest for Kristy. It is static, dependency-free, and ready for GitHub Pages.

## How to run locally

Open `index.html` directly in a browser.

You can also run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Game structure

The main quest is the Cooking Adventure path:

1. Breakfast House
2. Sweet Plantains House
3. Dinner House
4. Dessert House
5. Special Dish House
6. Birthday House

Memory Lane is optional bonus content. Visiting Memory Lane houses does not unlock the Birthday House and is not required for the ending.

The Birthday House unlocks only when all 5 cooking houses are complete.

## How to edit recipe book text

Most content lives in `game.js` inside `GAME_DATA`.

Each cooking house is created with `cookingHouse({ ... })`.

To change the recipe intro, edit:

```js
dishName: "Sweet Plantains"
```

The recipe book lines are generated from:

- `dishName`
- the 3 `ingredients`
- `combineStation.label`

For example, this data:

```js
dishName: "Sweet Plantains",
ingredients: [
  ingredient("sugar", "Sugar", "pantry", 24, 64),
  ingredient("plantains", "Plantains", "fruit basket", 45, 34),
  ingredient("butter", "Butter", "fridge", 75, 35)
],
combineStation: { id: "plantains-counter", label: "dining table", x: 70, y: 72 }
```

Creates a recipe prompt like:

```text
Today's recipe: Sweet Plantains.
Find 3 ingredients: Sugar from the pantry, Plantains from the fruit basket, Butter from the fridge.
Bring them to the dining table to combine.
```

## How to change the 3 ingredients

Each cooking house should have exactly 3 ingredients:

```js
ingredient("sugar", "Sugar", "pantry", 24, 64)
```

The values are:

1. Ingredient id
2. Display name
3. Source / where it is found
4. X position in the room
5. Y position in the room

Keep ids lowercase and unique within that cooking house.

## How to change where ingredients are found

Change the third value in `ingredient(...)`:

```js
ingredient("butter", "Butter", "fridge", 75, 35)
```

Examples:

- `pantry`
- `fruit basket`
- `fridge`
- `treat shelf`
- `heart jar`

This text appears both in the recipe book and checklist.

## How to add final dish images

Put image files in:

```text
assets/images/
```

Then set the final dish image path:

```js
finalDish: {
  name: "Sweet Plantains",
  image: "assets/images/sweet-plantains.jpg",
  lines: [
    "Your message here."
  ]
}
```

Use relative paths so the game works on GitHub Pages. If `image` is `null` or the path is wrong, the game shows a cute placeholder card instead.

## How to edit dish messages

Each cooking house has a `finalDish.lines` array:

```js
finalDish: {
  name: "Favorite Dinner",
  image: null,
  lines: [
    "First line of the dish memory.",
    "Second line of the dish memory."
  ]
}
```

After Kristy collects all 3 ingredients and combines them at the table/counter, these lines appear in the dialogue box. When the message is finished, the house is marked complete and the next cooking house unlocks.

## How to edit optional Memory Lane content

Memory Lane lives in `GAME_DATA.memoryHouses`.

Example:

```js
memoryHouse("music", "Music", 72, 58, [
  memory("song-1", "Song 1 placeholder", "Song", [
    "Song coming soon."
  ], null, "assets/audio/song.mp3")
])
```

Memory values are:

1. Memory id
2. Memory title
3. Category/type
4. Dialogue lines
5. Optional image path
6. Optional audio path

Memory Lane cards can include images and audio, but they are never required for the Birthday House.

## How the Birthday House unlock works

The Birthday House checks this condition:

```js
GAME_DATA.cookingHouses.every((house) => state.completedCookingHouses.has(house.id))
```

In plain English: all 5 cooking houses must be completed.

Memory Lane does not affect this condition.

If Kristy tries the Birthday House too early, the game says:

```text
The birthday house smells amazing, but the final recipe is not ready yet.
```

## How to add audio later

Put audio files in:

```text
assets/audio/
```

Then set an audio path on a Memory Lane card or final birthday letter:

```js
song: "assets/audio/our-song.mp3"
```

If `song` is `null` or the path is wrong, the game shows “Song coming soon” and does not break.

## How to change house order

Cooking progression is controlled by `unlockOrder`.

Keep cooking house `unlockOrder` values as consecutive numbers starting at `0`.

Memory Lane houses do not use `unlockOrder` because they are optional.

## How to deploy on GitHub Pages

1. Push this folder to GitHub.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Set the source to your `main` branch and repository root.
5. Save and wait for GitHub to publish the site.

No build step is required.

## Files and folders

- `index.html` - page structure and game screens.
- `style.css` - pixel-style visuals, map, cooking room, houses, UI, dialogue boxes.
- `game.js` - game data, movement, dialogue, cooking room logic, Memory Lane, unlock rules.
- `.nojekyll` - tells GitHub Pages to serve files as plain static assets.
- `assets/images/` - future photos and final dish images.
- `assets/audio/` - future songs and audio memories.
- `assets/sprites/` - future character, house, ingredient, or farm sprites.

## Using the asset pack

The overworld is now built from asset-pack tiles instead of CSS-generated terrain shapes.

The main terrain paths are defined in `GAME_DATA.tileAssets` in `game.js`:

```js
tileAssets: {
  grass: [
    "assets/images/map/grass-1.png",
    "assets/images/map/grass-2.png",
    "assets/images/map/grass-3.png"
  ],
  path: "assets/images/map/path-middle.png",
  farmland: "assets/images/map/farmland-tile.png",
  water: "assets/images/map/water-middle.png",
  fence: "assets/images/map/fence-big.png"
}
```

Current map asset locations:

- Grass tiles: `assets/images/map/grass-1.png`, `grass-2.png`, `grass-3.png`
- Road/path tile: `assets/images/map/path-middle.png`
- Pond/water tile: `assets/images/map/water-middle.png`
- Farm soil tile: `assets/images/map/farmland-tile.png`
- Fence rails: `assets/images/map/fence-big.png`
- Crops: `assets/images/map/crops.png`
- Flowers and grass props: `assets/images/map/flowers.png`, `flower-grass.png`, `grass-detail.png`, `outdoor-decor.png`
- Houses: `assets/images/houses/standard-house.png`, `birthday-barn.png`
- Animals: `assets/sprites/cow.png`, `pig.png`, `chicken.png`

To replace a tile image, put the new PNG in `assets/images/map/` and update the matching path in `GAME_DATA.tileAssets` or the related CSS rule in `style.css`.

To add new tile variations, add the PNG to `assets/images/map/`, then either:

- add it to `GAME_DATA.tileAssets.grass` if it is a grass variation
- create a new CSS class like `.map-tile.my-new-tile` in `style.css`
- update `buildSpecialTileMap()` in `game.js` to place that tile on the overworld grid

The overworld grid uses `MAP_COLS` and `MAP_ROWS` in `game.js`. The current map is `40 x 22` tiles. Keep new terrain aligned to that grid so paths, houses, farm zones, and labels stay clean.

If a tile asset path is missing, the game logs a warning in the browser console and uses a CSS fallback color so the page does not break.

## Troubleshooting

- If an image does not show, check spelling and capitalization in the path.
- If audio does not play, confirm the file exists and the browser supports the format.
- Use relative paths like `assets/images/photo.jpg`, not local paths like `/Users/name/photo.jpg`.
- If a cooking house seems locked, complete the current recipe first.
- If the Birthday House is locked, complete all 5 cooking houses.
- If an ingredient is hard to reach, adjust its x/y values in `game.js`.

## Testing checklist before sending the link

- Title screen shows “Kristy's Cooking Adventure.”
- NO gives the cute mandatory quest response.
- YES starts the game.
- Kristy moves with WASD and arrow keys.
- Current cooking house has a strong glow and arrow.
- Locked cooking houses show a locked dialogue.
- Birthday House stays locked until 5 cooking houses are complete.
- Each cooking house shows a recipe intro.
- Each cooking room has 3 visible ingredients.
- Ingredients can be collected with E.
- Checklist updates as ingredients are collected.
- Combine station works only after all 3 ingredients are collected.
- Final dish message completes the house and unlocks the next cooking house.
- Memory Lane houses are visitable and optional.
- Final Birthday House shows the birthday letter and Quest Complete ending.
- Added image/audio paths work on GitHub Pages.
