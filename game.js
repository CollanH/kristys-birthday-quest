"use strict";

// Kristy's Cooking Adventure
// Edit GAME_DATA to change recipes, ingredients, memories, images, audio, and house order.

const GAME_DATA = {
  // Overworld tiles copied from the asset pack. Replace these paths to change terrain art.
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
  },
  cookingHouses: [
    cookingHouse({
      id: "breakfast-house",
      label: "Breakfast House",
      dishName: "Cozy Breakfast Plate",
      position: { x: 23, y: 14 },
      unlockOrder: 0,
      ingredients: [
        ingredient("eggs", "Eggs", "fridge", 25, 34),
        ingredient("toast", "Toast", "pantry", 68, 32),
        ingredient("strawberries", "Strawberries", "fruit basket", 38, 70)
      ],
      combineStation: { id: "breakfast-table", label: "dining table", x: 72, y: 70 },
      finalDish: {
        name: "Cozy Breakfast Plate",
        image: null,
        lines: [
          "Breakfast placeholder memory: a cozy start, something warm on the table, and Kristy making the whole morning better.",
          "Replace this with the real breakfast memory or a cute note about cooking together."
        ]
      }
    }),
    cookingHouse({
      id: "plantains-house",
      label: "Sweet Plantains House",
      dishName: "Sweet Plantains",
      position: { x: 36.5, y: 14 },
      unlockOrder: 1,
      ingredients: [
        ingredient("sugar", "Sugar", "pantry", 24, 64),
        ingredient("plantains", "Plantains", "fruit basket", 45, 34),
        ingredient("butter", "Butter", "fridge", 75, 35)
      ],
      combineStation: { id: "plantains-counter", label: "dining table", x: 70, y: 72 },
      finalDish: {
        name: "Sweet Plantains",
        image: null,
        lines: [
          "Sweet Plantains placeholder: golden, sweet, and probably gone way too fast.",
          "Add the real story here, especially if this dish has a specific Kristy-approved rating."
        ]
      }
    }),
    cookingHouse({
      id: "dinner-house",
      label: "Dinner House",
      dishName: "Favorite Dinner",
      position: { x: 50, y: 14 },
      unlockOrder: 2,
      ingredients: [
        ingredient("rice", "Rice", "pantry", 22, 30),
        ingredient("veggies", "Veggies", "garden basket", 42, 72),
        ingredient("sauce", "Sauce", "fridge", 78, 55)
      ],
      combineStation: { id: "dinner-counter", label: "kitchen counter", x: 67, y: 28 },
      finalDish: {
        name: "Favorite Dinner",
        image: null,
        lines: [
          "Dinner placeholder memory: the kind of meal that turns an ordinary night into a favorite one.",
          "Add the real dinner, inside joke, or favorite cooking detail later."
        ]
      }
    }),
    cookingHouse({
      id: "dessert-house",
      label: "Dessert House",
      dishName: "Tiny Celebration Dessert",
      position: { x: 63.5, y: 14 },
      unlockOrder: 3,
      ingredients: [
        ingredient("flour", "Flour", "pantry", 28, 35),
        ingredient("chocolate", "Chocolate", "treat shelf", 56, 30),
        ingredient("cream", "Cream", "fridge", 74, 66)
      ],
      combineStation: { id: "dessert-table", label: "dining table", x: 40, y: 72 },
      finalDish: {
        name: "Tiny Celebration Dessert",
        image: null,
        lines: [
          "Dessert placeholder memory: sweet enough to be dangerous, cute enough to belong in this game.",
          "Replace this with the real dessert memory or birthday treat idea."
        ]
      }
    }),
    cookingHouse({
      id: "special-dish-house",
      label: "Special Dish House",
      dishName: "Special Birthday Dish",
      position: { x: 77, y: 14 },
      unlockOrder: 4,
      ingredients: [
        ingredient("love", "Love", "heart jar", 24, 72),
        ingredient("laughs", "Laughs", "memory shelf", 52, 35),
        ingredient("sparkle", "Sparkle", "party cabinet", 78, 70)
      ],
      combineStation: { id: "special-counter", label: "birthday counter", x: 70, y: 42 },
      finalDish: {
        name: "Special Birthday Dish",
        image: null,
        lines: [
          "Special Dish placeholder: the final recipe before the Birthday House. It tastes suspiciously like love and excellent planning.",
          "The Birthday House is ready now."
        ]
      }
    })
  ],
  memoryHouses: [
    memoryHouse("favorite-things", "Favorite Things About Us", 23, 88, [
      memory("favorite-little-things", "Favorite little things", "Favorites", [
        "Memory Lane placeholder: favorite things about us, the tiny habits and moments that make everything feel like home."
      ]),
      memory("favorite-laughs", "Favorite laughs", "Favorites", [
        "A placeholder for laughs that deserve their own little trophy."
      ])
    ]),
    memoryHouse("trips", "Trips", 36.5, 88, [
      memory("vegas-trips", "Vegas trips", "Travel", ["Trip placeholder: add favorite Vegas details, photos, and chaos here."]),
      memory("montana-big-bear", "Montana and Big Bear", "Travel", ["Travel placeholder: mountain air, cozy plans, and a future photo spot."]),
      memory("future-trips", "Future trips", "Travel", ["Future Trips placeholder: a tiny map of places still waiting for us."])
    ]),
    memoryHouse("music", "Music", 50, 88, [
      memory("song-1", "Song 1 placeholder", "Song", ["Song coming soon. Add an audio path later and it will play here."], null, null),
      memory("song-2", "Song 2 placeholder", "Song", ["Another song placeholder for the soundtrack of us."], null, null),
      memory("song-3", "Song 3 placeholder", "Song", ["One more song placeholder, ready for a real MP3 when you are."])
    ]),
    memoryHouse("shows-movies", "Shows & Movies", 63.5, 88, [
      memory("favorite-movies", "Favorite movies we watched", "Shows", ["Movie placeholder: add the favorites, the rewatches, and the couch commentary."]),
      memory("favorite-shows", "Favorite TV shows together", "Shows", ["TV placeholder: favorite shows, shared quotes, and the episodes that became a whole thing."]),
      memory("gossip-girl", "Gossip Girl binge", "Shows", ["Gossip Girl placeholder: dramatic, iconic, and somehow exactly right."])
    ]),
    memoryHouse("random-favorites", "Random Favorite Memories", 77, 88, [
      memory("favorite-drunk-memories", "Favorite drunk memories", "Random", ["Random favorite placeholder: add the funny stories here."]),
      memory("alcohol-cleanse", "Favorite alcohol-cleanse memories", "Random", ["A very specific category, which means it definitely belongs in Memory Lane."]),
      memory("recent-favorites", "Recent favorite moments", "Random", ["Recent favorite placeholder: proof the story is still collecting good stuff."])
    ])
  ],
  birthdayHouse: {
    id: "birthday-house",
    label: "Birthday House",
    zone: "birthday",
    position: { x: 91, y: 50 },
    letter: {
      title: "Birthday letter placeholder",
      image: null,
      song: null,
      lines: [
        "Dear Kristy,",
        "This is the placeholder birthday letter. Replace these lines with the real final note when you are ready.",
        "For now, this little cooking adventure wants you to know: you are loved, celebrated, and absolutely worth every recipe.",
        "Happy Birthday, Kristy."
      ]
    }
  },
  farmDecor: [
    { label: "cow", type: "animal", x: 35, y: 45, speed: 0.016, bounds: { minX: 30, maxX: 44.5, minY: 41, maxY: 59 } },
    { label: "cow", type: "animal", x: 39, y: 52, speed: 0.014, bounds: { minX: 30, maxX: 44.5, minY: 41, maxY: 59 } },
    { label: "cow", type: "animal", x: 44, y: 43, speed: 0.015, bounds: { minX: 30, maxX: 44.5, minY: 41, maxY: 59 } },
    { label: "cow", type: "animal", x: 56, y: 55, speed: 0.013, bounds: { minX: 55.5, maxX: 70, minY: 42, maxY: 59 } },
    { label: "pig", type: "animal", x: 42, y: 49, speed: 0.02, bounds: { minX: 30, maxX: 44.5, minY: 41, maxY: 59 } },
    { label: "pig", type: "animal", x: 56, y: 45, speed: 0.019, bounds: { minX: 55.5, maxX: 70, minY: 42, maxY: 59 } },
    { label: "pig", type: "animal", x: 60, y: 56, speed: 0.018, bounds: { minX: 55.5, maxX: 70, minY: 42, maxY: 59 } },
    { label: "pig", type: "animal", x: 65, y: 47, speed: 0.019, bounds: { minX: 55.5, maxX: 70, minY: 42, maxY: 59 } },
    { label: "sheep", type: "animal", x: 32, y: 55, speed: 0.014, bounds: { minX: 30, maxX: 44.5, minY: 41, maxY: 59 } },
    { label: "sheep", type: "animal", x: 43, y: 49, speed: 0.015, bounds: { minX: 30, maxX: 44.5, minY: 41, maxY: 59 } },
    { label: "sheep", type: "animal", x: 68, y: 53, speed: 0.014, bounds: { minX: 55.5, maxX: 70, minY: 42, maxY: 59 } },
    { label: "capybara", type: "animal", x: 47, y: 42, speed: 0.012, bounds: { minX: 45.5, maxX: 54.5, minY: 41, maxY: 58 } },
    { label: "capybara", type: "animal", x: 52, y: 47, speed: 0.012, bounds: { minX: 45.5, maxX: 54.5, minY: 41, maxY: 58 } },
    { label: "chicken", type: "animal", x: 70, y: 43, speed: 0.03, bounds: { minX: 59, maxX: 71, minY: 40, maxY: 58 } },
    { label: "hay", type: "decor", x: 31, y: 41 },
    { label: "hay", type: "decor", x: 63, y: 41 },
    { label: "trough", type: "decor", x: 49, y: 39 },
    { label: "trough", type: "decor", x: 68, y: 59 },
    { label: "crops", type: "decor", x: 61.5, y: 49 },
    { label: "crops", type: "decor", x: 65, y: 56 }
  ],
  mapDecor: [
    { label: "outdoor-decor", x: 8, y: 22, sx: 0, sy: 0 },
    { label: "outdoor-decor", x: 14, y: 72, sx: 2, sy: 0 },
    { label: "outdoor-decor", x: 18, y: 15, sx: 4, sy: 0 },
    { label: "flowers", x: 29, y: 13, variant: 0 },
    { label: "outdoor-decor", x: 34, y: 86, sx: 1, sy: 1 },
    { label: "flower-grass", x: 44, y: 14, variant: 0 },
    { label: "flowers", x: 53, y: 86, variant: 1 },
    { label: "outdoor-decor", x: 58, y: 15, sx: 5, sy: 1 },
    { label: "outdoor-decor", x: 72, y: 85, sx: 3, sy: 1 },
    { label: "flowers", x: 84, y: 18, variant: 2 },
    { label: "outdoor-decor", x: 92, y: 76, sx: 0, sy: 2 },
    { label: "outdoor-decor", x: 20, y: 87, sx: 4, sy: 1 },
    { label: "outdoor-decor", x: 90, y: 25, sx: 2, sy: 2 },
    { label: "flowers", x: 68, y: 14, variant: 3 },
    { label: "flowers", x: 11, y: 86, variant: 4 },
    { label: "path-decoration", x: 18, y: 49, variant: 0 },
    { label: "path-decoration", x: 86, y: 49, variant: 1 },
    { label: "path-decoration", x: 31, y: 36, variant: 2 },
    { label: "path-decoration", x: 70, y: 64, variant: 0 }
  ]
};

function cookingHouse(config) {
  return {
    zone: "cooking",
    completed: false,
    ...config
  };
}

function ingredient(id, name, source, x, y) {
  return { id, name, source, x, y, collected: false };
}

function memoryHouse(id, label, x, y, memories) {
  return {
    id,
    label,
    zone: "memory",
    position: { x, y },
    memories
  };
}

function memory(id, title, type, lines, image = null, song = null) {
  return {
    id,
    title,
    type,
    image,
    song,
    viewed: false,
    lines
  };
}

const state = {
  screen: "title",
  mapPlayer: { x: 8, y: 50, speed: 0.34 },
  roomPlayer: { x: 50, y: 82, speed: 0.44 },
  keys: new Set(),
  currentCookingOrder: 0,
  completedCookingHouses: new Set(),
  viewedMemories: new Set(),
  activeMemory: null,
  nearbyMapHouseId: null,
  activeCookingHouseId: null,
  activeMemoryHouseId: null,
  nearbyRoomTarget: null,
  dialogueMode: null,
  dialogueLines: [],
  dialogueIndex: 0,
  dialogueTitle: "Kristy's Cooking Adventure",
  titleNoCount: 0,
  questComplete: false
};

const MAP_COLS = 40;
const MAP_ROWS = 22;
const farmBounds = { minX: 29.5, maxX: 72, minY: 37.5, maxY: 61.5 };
const farmAnimals = [];

const els = {
  screens: {
    title: document.querySelector("#title-screen"),
    game: document.querySelector("#game-screen"),
    cooking: document.querySelector("#cooking-screen"),
    house: document.querySelector("#house-screen"),
    ending: document.querySelector("#ending-screen")
  },
  titleText: document.querySelector("#title-dialogue-text"),
  yesButton: document.querySelector("#yes-button"),
  noButton: document.querySelector("#no-button"),
  townMap: document.querySelector("#town-map"),
  farmDecor: document.querySelector("#farm-decor"),
  mapPlayer: document.querySelector("#player"),
  mapPrompt: document.querySelector("#interact-prompt"),
  mainObjective: document.querySelector("#main-objective"),
  optionalObjective: document.querySelector("#optional-objective"),
  recipeTitle: document.querySelector("#recipe-title"),
  recipeChecklist: document.querySelector("#recipe-checklist"),
  cookingRoom: document.querySelector("#cooking-room"),
  roomPlayer: document.querySelector("#room-player"),
  roomPrompt: document.querySelector("#room-prompt"),
  houseTitle: document.querySelector("#house-title"),
  houseNote: document.querySelector("#house-note"),
  memoryList: document.querySelector("#memory-list"),
  backToMap: document.querySelector("#back-to-map"),
  overlay: document.querySelector("#dialogue-overlay"),
  speaker: document.querySelector("#speaker-name"),
  dialogueText: document.querySelector("#dialogue-text"),
  memoryImage: document.querySelector("#memory-image"),
  imagePlaceholder: document.querySelector("#image-placeholder"),
  memoryAudio: document.querySelector("#memory-audio"),
  audioPlaceholder: document.querySelector("#audio-placeholder"),
  endingBackButton: document.querySelector("#ending-back-button")
};

function init() {
  validateAssetPaths(GAME_DATA.tileAssets);
  renderMap();
  updateObjective();
  updateMapPlayer();
  bindEvents();
  requestAnimationFrame(gameLoop);
}

function bindEvents() {
  els.yesButton.addEventListener("click", startGame);
  els.noButton.addEventListener("click", handleNoChoice);
  els.backToMap.addEventListener("click", returnToMap);
  els.endingBackButton.addEventListener("click", returnToMap);
  els.overlay.addEventListener("click", advanceDialogue);

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (["arrowup", "arrowdown", "arrowleft", "arrowright", " ", "enter"].includes(key)) {
      event.preventDefault();
    }

    if (!els.overlay.classList.contains("hidden") && (key === " " || key === "enter")) {
      advanceDialogue();
      return;
    }

    if (state.screen === "title" && (key === "enter" || key === " ")) {
      startGame();
      return;
    }

    if ((state.screen === "house" || state.screen === "cooking") && key === "escape") {
      returnToMap();
      return;
    }

    if (state.screen === "game" && key === "e") {
      interactWithMapHouse();
      return;
    }

    if (state.screen === "cooking" && key === "e") {
      interactInCookingRoom();
      return;
    }

    state.keys.add(key);
  });

  window.addEventListener("keyup", (event) => {
    state.keys.delete(event.key.toLowerCase());
  });
}

function startGame() {
  setScreen("game");
}

function handleNoChoice() {
  state.titleNoCount += 1;
  els.titleText.textContent = state.titleNoCount === 1
    ? "Unfortunately, this quest is mandatory."
    : "The NO button checked the recipe book and found only YES.";
  els.noButton.textContent = "NO?";
  els.yesButton.classList.add("selected");
}

function setScreen(name) {
  state.screen = name;
  Object.entries(els.screens).forEach(([screenName, element]) => {
    element.classList.toggle("active", screenName === name);
  });
}

function gameLoop() {
  updateFarmAnimals();

  if (els.overlay.classList.contains("hidden")) {
    if (state.screen === "game") {
      movePlayer(state.mapPlayer, 4, 96, 8, 94);
      updateNearbyMapHouse();
      updateMapPlayer();
    }

    if (state.screen === "cooking") {
      movePlayer(state.roomPlayer, 8, 92, 15, 88);
      updateNearbyRoomTarget();
      updateRoomPlayer();
    }
  }

  requestAnimationFrame(gameLoop);
}

function updateFarmAnimals() {
  const now = performance.now();

  farmAnimals.forEach((animal) => {
    if (now < animal.pauseUntil) return;

    const dx = animal.targetX - animal.x;
    const dy = animal.targetY - animal.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 0.35) {
      animal.targetX = randomBetween(animal.bounds.minX, animal.bounds.maxX);
      animal.targetY = randomBetween(animal.bounds.minY, animal.bounds.maxY);
      animal.pauseUntil = now + randomBetween(450, 1800);
      animal.element.classList.remove("walking");
      return;
    }

    animal.x += (dx / distance) * animal.speed;
    animal.y += (dy / distance) * animal.speed;
    animal.element.style.left = `${animal.x}%`;
    animal.element.style.top = `${animal.y}%`;
    animal.element.classList.add("walking");
    animal.element.classList.toggle("face-left", dx < 0);
  });
}

function movePlayer(player, minX, maxX, minY, maxY) {
  let dx = 0;
  let dy = 0;

  if (state.keys.has("arrowleft") || state.keys.has("a")) dx -= 1;
  if (state.keys.has("arrowright") || state.keys.has("d")) dx += 1;
  if (state.keys.has("arrowup") || state.keys.has("w")) dy -= 1;
  if (state.keys.has("arrowdown") || state.keys.has("s")) dy += 1;

  if (dx !== 0 && dy !== 0) {
    dx *= 0.707;
    dy *= 0.707;
  }

  player.x = clamp(player.x + dx * player.speed, minX, maxX);
  player.y = clamp(player.y + dy * player.speed, minY, maxY);
}

function renderMap() {
  renderTileMap();
  renderFenceRails();

  const houses = [
    ...GAME_DATA.cookingHouses,
    ...GAME_DATA.memoryHouses,
    GAME_DATA.birthdayHouse
  ];

  houses.forEach((house) => {
    const houseEl = document.createElement("button");
    houseEl.type = "button";
    houseEl.className = `house ${house.zone}`;
    houseEl.dataset.houseId = house.id;
    houseEl.style.left = `${house.position.x}%`;
    houseEl.style.top = `${house.position.y}%`;
    houseEl.innerHTML = `
      <span class="house-sprite" aria-hidden="true"></span>
      <span class="house-label">${house.label}</span>
    `;
    houseEl.addEventListener("click", () => {
      state.nearbyMapHouseId = house.id;
      interactWithMapHouse();
    });
    els.townMap.appendChild(houseEl);
  });

  GAME_DATA.mapDecor.forEach((item) => {
    const decor = document.createElement("span");
    decor.className = `map-prop ${item.label}`;
    decor.style.left = `${item.x}%`;
    decor.style.top = `${item.y}%`;
    decor.style.setProperty("--variant", item.variant || 0);
    decor.style.setProperty("--sx", item.sx || 0);
    decor.style.setProperty("--sy", item.sy || 0);
    decor.setAttribute("aria-hidden", "true");
    els.townMap.appendChild(decor);
  });

  GAME_DATA.farmDecor.forEach((item) => {
    const decor = document.createElement("span");
    decor.className = `farm-prop ${item.type} ${item.label}`;
    decor.style.left = `${item.x}%`;
    decor.style.top = `${item.y}%`;
    decor.setAttribute("aria-label", item.label);
    els.farmDecor.appendChild(decor);

    if (item.type === "animal") {
      farmAnimals.push(createFarmAnimal(item, decor));
    }
  });

  refreshHouseClasses();
}

function renderTileMap() {
  const oldLayer = els.townMap.querySelector(".tile-layer");
  if (oldLayer) oldLayer.remove();

  const layer = document.createElement("div");
  layer.className = "tile-layer";
  layer.style.setProperty("--cols", MAP_COLS);
  layer.style.setProperty("--rows", MAP_ROWS);

  const specialTiles = buildSpecialTileMap();

  specialTiles.forEach((special, key) => {
    const [col, row] = key.split(",").map(Number);
    const tile = document.createElement("span");
    tile.className = `map-tile ${special.type}`;
    if (special.edge) tile.className += ` ${special.edge}`;
    tile.style.left = `${(col / MAP_COLS) * 100}%`;
    tile.style.top = `${(row / MAP_ROWS) * 100}%`;
    tile.style.width = `calc(${100 / MAP_COLS}% + 1px)`;
    tile.style.height = `calc(${100 / MAP_ROWS}% + 1px)`;
    layer.appendChild(tile);
  });

  els.townMap.prepend(layer);
}

function buildSpecialTileMap() {
  const tiles = new Map();

  addRect(tiles, 0, 10, 7, 2, "path");
  addRect(tiles, 33, 10, 7, 2, "path");
  addRect(tiles, 7, 5, 26, 3, "path");
  addRect(tiles, 7, 15, 26, 3, "path");
  addRect(tiles, 7, 8, 3, 7, "path");
  addRect(tiles, 30, 8, 3, 7, "path");

  addRect(tiles, 10, 8, 20, 7, "farm-grass");
  addRect(tiles, 18, 9, 4, 4, "water");
  addRect(tiles, 24, 8, 6, 6, "farmland");

  return tiles;
}

function renderFenceRails() {
  const oldLayer = els.townMap.querySelector(".fence-layer");
  if (oldLayer) oldLayer.remove();

  const layer = document.createElement("div");
  layer.className = "fence-layer";

  [
    { col: 10, row: 8, width: 20, height: 7 }
  ].forEach((box) => {
    [
      { side: "top", col: box.col, row: box.row, width: box.width, height: 0.6 },
      { side: "bottom", col: box.col, row: box.row + box.height - 0.6, width: box.width, height: 0.6 },
      { side: "left", col: box.col, row: box.row, width: 0.6, height: box.height },
      { side: "right", col: box.col + box.width - 0.6, row: box.row, width: 0.6, height: box.height }
    ].forEach((rail) => {
      const element = document.createElement("span");
      element.className = `fence-rail ${rail.side}`;
      element.style.left = `${(rail.col / MAP_COLS) * 100}%`;
      element.style.top = `${(rail.row / MAP_ROWS) * 100}%`;
      element.style.width = `${(rail.width / MAP_COLS) * 100}%`;
      element.style.height = `${(rail.height / MAP_ROWS) * 100}%`;
      layer.appendChild(element);
    });

    [
      { corner: "tl", col: box.col, row: box.row },
      { corner: "tr", col: box.col + box.width - 0.6, row: box.row },
      { corner: "bl", col: box.col, row: box.row + box.height - 0.6 },
      { corner: "br", col: box.col + box.width - 0.6, row: box.row + box.height - 0.6 }
    ].forEach((corner) => {
      const element = document.createElement("span");
      element.className = `fence-corner ${corner.corner}`;
      element.style.left = `${(corner.col / MAP_COLS) * 100}%`;
      element.style.top = `${(corner.row / MAP_ROWS) * 100}%`;
      element.style.width = `${(0.6 / MAP_COLS) * 100}%`;
      element.style.height = `${(0.6 / MAP_ROWS) * 100}%`;
      layer.appendChild(element);
    });
  });

  els.townMap.appendChild(layer);
}

function addRect(tiles, startCol, startRow, width, height, type) {
  for (let row = startRow; row < startRow + height; row += 1) {
    for (let col = startCol; col < startCol + width; col += 1) {
      tiles.set(tileKey(col, row), { type });
    }
  }
}

function tileKey(col, row) {
  return `${col},${row}`;
}

function refreshHouseClasses() {
  const currentCookingHouse = getCurrentCookingHouse();

  document.querySelectorAll(".house").forEach((houseEl) => {
    const house = getHouse(houseEl.dataset.houseId);
    const unlocked = isHouseUnlocked(house);
    houseEl.classList.toggle("locked", !unlocked);
    houseEl.classList.toggle("current", Boolean(currentCookingHouse && house.id === currentCookingHouse.id));
    houseEl.classList.toggle("optional-ready", Boolean(unlocked && house.zone === "memory"));
    houseEl.classList.toggle("completed", Boolean(house.zone === "cooking" && state.completedCookingHouses.has(house.id)));
    houseEl.classList.toggle("birthday-ready", Boolean(house.zone === "birthday" && unlocked));
  });
}

function createFarmAnimal(item, element) {
  return {
    id: item.label,
    element,
    x: item.x,
    y: item.y,
    targetX: item.x,
    targetY: item.y,
    bounds: item.bounds || farmBounds,
    speed: item.speed,
    pauseUntil: performance.now() + randomBetween(200, 1200)
  };
}

function updateMapPlayer() {
  els.mapPlayer.style.left = `${state.mapPlayer.x}%`;
  els.mapPlayer.style.top = `${state.mapPlayer.y}%`;
}

function updateRoomPlayer() {
  els.roomPlayer.style.left = `${state.roomPlayer.x}%`;
  els.roomPlayer.style.top = `${state.roomPlayer.y}%`;
}

function updateNearbyMapHouse() {
  const houses = [
    ...GAME_DATA.cookingHouses,
    ...GAME_DATA.memoryHouses,
    GAME_DATA.birthdayHouse
  ];
  let closest = null;
  let closestDistance = Infinity;

  houses.forEach((house) => {
    const distance = Math.hypot(state.mapPlayer.x - house.position.x, state.mapPlayer.y - house.position.y);
    if (distance < closestDistance) {
      closest = house;
      closestDistance = distance;
    }
  });

  state.nearbyMapHouseId = closestDistance < 9 ? closest.id : null;
  els.mapPrompt.style.display = state.nearbyMapHouseId ? "block" : "none";
}

function interactWithMapHouse() {
  if (!state.nearbyMapHouseId) return;

  const house = getHouse(state.nearbyMapHouseId);
  if (!isHouseUnlocked(house)) {
    showLockedDialogue(house);
    return;
  }

  if (house.zone === "cooking") {
    enterCookingHouse(house.id);
    return;
  }

  if (house.zone === "memory") {
    openMemoryHouse(house.id);
    return;
  }

  enterBirthdayHouse();
}

function enterCookingHouse(houseId) {
  const house = getCookingHouse(houseId);
  state.activeCookingHouseId = house.id;
  state.roomPlayer = { x: 50, y: 82, speed: 0.44 };
  resetRecipeProgress(house);
  renderCookingRoom(house);
  setScreen("cooking");
  updateObjective();
  startDialogue("recipeIntro", house.label, buildRecipeIntroLines(house), { image: null, song: null });
}

function resetRecipeProgress(house) {
  house.ingredients.forEach((item) => {
    item.collected = false;
  });
}

function buildRecipeIntroLines(house) {
  const ingredientList = house.ingredients.map((item) => `${item.name} from the ${item.source}`).join(", ");
  return [
    `Today's recipe: ${house.dishName}.`,
    `Find 3 ingredients: ${ingredientList}.`,
    `Bring them to the ${house.combineStation.label} to combine.`
  ];
}

function renderCookingRoom(house) {
  els.cookingRoom.querySelectorAll(".ingredient-object, .combine-station, .room-decor").forEach((node) => node.remove());
  els.recipeTitle.textContent = `${house.label}: ${house.dishName}`;

  renderRoomDecor();

  house.ingredients.forEach((item) => {
    const ingredientEl = document.createElement("button");
    ingredientEl.type = "button";
    ingredientEl.className = `ingredient-object ingredient-${item.id}`;
    ingredientEl.dataset.targetId = item.id;
    ingredientEl.style.left = `${item.x}%`;
    ingredientEl.style.top = `${item.y}%`;
    ingredientEl.innerHTML = `<span>${item.name}</span><small>${item.source}</small>`;
    ingredientEl.addEventListener("click", () => {
      state.nearbyRoomTarget = { type: "ingredient", id: item.id };
      interactInCookingRoom();
    });
    els.cookingRoom.appendChild(ingredientEl);
  });

  const stationEl = document.createElement("button");
  stationEl.type = "button";
  stationEl.className = "combine-station";
  stationEl.dataset.targetId = house.combineStation.id;
  stationEl.style.left = `${house.combineStation.x}%`;
  stationEl.style.top = `${house.combineStation.y}%`;
  stationEl.innerHTML = `<span>${house.combineStation.label}</span><small>combine here</small>`;
  stationEl.addEventListener("click", () => {
    state.nearbyRoomTarget = { type: "station", id: house.combineStation.id };
    interactInCookingRoom();
  });
  els.cookingRoom.appendChild(stationEl);

  updateRecipeChecklist(house);
  updateRoomPlayer();
  updateNearbyRoomTarget();
}

function renderRoomDecor() {
  [
    { label: "Pantry", className: "pantry", x: 18, y: 25 },
    { label: "Fridge", className: "fridge", x: 82, y: 27 },
    { label: "Shelf", className: "shelf", x: 28, y: 82 },
    { label: "Chair", className: "chair", x: 82, y: 76 }
  ].forEach((decorItem) => {
    const decor = document.createElement("span");
    decor.className = `room-decor ${decorItem.className}`;
    decor.style.left = `${decorItem.x}%`;
    decor.style.top = `${decorItem.y}%`;
    decor.setAttribute("aria-label", decorItem.label);
    els.cookingRoom.appendChild(decor);
  });
}

function updateRecipeChecklist(house) {
  els.recipeChecklist.innerHTML = "";
  house.ingredients.forEach((item) => {
    const row = document.createElement("li");
    row.className = item.collected ? "checked" : "";
    row.textContent = `${item.collected ? "☑" : "☐"} ${item.name} (${item.source})`;
    els.recipeChecklist.appendChild(row);
  });

  const ready = areAllIngredientsCollected(house);
  const stationEl = els.cookingRoom.querySelector(".combine-station");
  if (stationEl) stationEl.classList.toggle("active", ready);

  const stationRow = document.createElement("li");
  stationRow.className = ready ? "ready" : "";
  stationRow.textContent = ready
    ? `Ready: bring everything to the ${house.combineStation.label}.`
    : `Then combine at the ${house.combineStation.label}.`;
  els.recipeChecklist.appendChild(stationRow);
}

function updateNearbyRoomTarget() {
  const house = getCookingHouse(state.activeCookingHouseId);
  if (!house) return;

  const targets = [
    ...house.ingredients
      .filter((item) => !item.collected)
      .map((item) => ({ type: "ingredient", id: item.id, x: item.x, y: item.y })),
    { type: "station", id: house.combineStation.id, x: house.combineStation.x, y: house.combineStation.y }
  ];

  let closest = null;
  let closestDistance = Infinity;
  targets.forEach((target) => {
    const distance = Math.hypot(state.roomPlayer.x - target.x, state.roomPlayer.y - target.y);
    if (distance < closestDistance) {
      closest = target;
      closestDistance = distance;
    }
  });

  state.nearbyRoomTarget = closestDistance < 11 ? closest : null;
  els.roomPrompt.style.display = state.nearbyRoomTarget ? "block" : "none";
  els.roomPrompt.textContent = state.nearbyRoomTarget?.type === "station"
    ? "Press E to combine"
    : "Press E to collect";
}

function interactInCookingRoom() {
  const house = getCookingHouse(state.activeCookingHouseId);
  if (!house || !state.nearbyRoomTarget) return;

  if (state.nearbyRoomTarget.type === "ingredient") {
    const item = house.ingredients.find((ingredientItem) => ingredientItem.id === state.nearbyRoomTarget.id);
    if (!item || item.collected) return;
    item.collected = true;
    const itemEl = els.cookingRoom.querySelector(`[data-target-id="${item.id}"]`);
    if (itemEl) itemEl.classList.add("collected");
    updateRecipeChecklist(house);
    updateNearbyRoomTarget();
    return;
  }

  if (!areAllIngredientsCollected(house)) {
    startDialogue("notice", house.dishName, ["The recipe still needs all 3 ingredients first."], { image: null, song: null });
    return;
  }

  startDialogue("finalDish", house.finalDish.name, house.finalDish.lines, {
    image: house.finalDish.image,
    song: house.finalDish.song
  });
}

function areAllIngredientsCollected(house) {
  return house.ingredients.every((item) => item.collected);
}

function finishCookingHouse() {
  const house = getCookingHouse(state.activeCookingHouseId);
  if (!house) return;

  house.completed = true;
  state.completedCookingHouses.add(house.id);
  if (house.unlockOrder === state.currentCookingOrder) {
    state.currentCookingOrder += 1;
  }

  refreshAfterProgression();
  returnToMap();
}

function openMemoryHouse(houseId) {
  const house = getMemoryHouse(houseId);
  state.activeMemoryHouseId = houseId;
  els.houseTitle.textContent = house.label;
  els.houseNote.textContent = "Optional Memory Lane cards are bonus favorite moments and do not affect the Birthday House unlock.";
  els.memoryList.innerHTML = "";

  house.memories.forEach((memoryItem) => {
    const memoryButton = document.createElement("button");
    memoryButton.type = "button";
    memoryButton.className = "memory-card";
    memoryButton.classList.toggle("completed", state.viewedMemories.has(memoryKey(house.id, memoryItem.id)));
    memoryButton.innerHTML = `
      <h3>${memoryItem.title}</h3>
      <p>${memoryItem.type} | Optional</p>
      <p>${state.viewedMemories.has(memoryKey(house.id, memoryItem.id)) ? "Viewed" : "Bonus memory card"}</p>
    `;
    memoryButton.addEventListener("click", () => startMemoryCard(house, memoryItem));
    els.memoryList.appendChild(memoryButton);
  });

  setScreen("house");
}

function startMemoryCard(house, memoryItem) {
  state.activeMemoryHouseId = house.id;
  state.dialogueMode = "memory";
  state.activeMemory = memoryItem;
  startDialogue("memory", memoryItem.title, memoryItem.lines, {
    image: memoryItem.image,
    song: memoryItem.song
  });
}

function finishMemoryCard() {
  const house = getMemoryHouse(state.activeMemoryHouseId);
  if (house && state.activeMemory) {
    state.viewedMemories.add(memoryKey(house.id, state.activeMemory.id));
    openMemoryHouse(house.id);
  }
}

function enterBirthdayHouse() {
  const letter = GAME_DATA.birthdayHouse.letter;
  startDialogue("birthday", letter.title, letter.lines, {
    image: letter.image,
    song: letter.song
  });
}

function showLockedDialogue(house) {
  const message = house.zone === "birthday"
    ? "The birthday house smells amazing, but the final recipe is not ready yet."
    : "This cooking house is still warming up. Complete the next recipe first.";

  startDialogue("notice", house.label, [message], { image: null, song: null });
}

function startDialogue(mode, title, lines, media) {
  state.dialogueMode = mode;
  state.dialogueTitle = title;
  state.dialogueLines = Array.isArray(lines) && lines.length
    ? lines
    : ["This moment is waiting for its story."];
  state.dialogueIndex = 0;
  configureMedia({ title, ...media });
  showDialogueLine();
  els.overlay.classList.remove("hidden");
}

function configureMedia(memory) {
  els.memoryImage.onload = null;
  els.memoryImage.onerror = null;
  els.memoryImage.removeAttribute("src");
  els.memoryImage.alt = `${memory.title} image`;
  els.memoryImage.style.display = "none";
  els.imagePlaceholder.style.display = "grid";

  if (memory.image) {
    els.memoryImage.onload = () => {
      els.memoryImage.style.display = "block";
      els.imagePlaceholder.style.display = "none";
    };
    els.memoryImage.onerror = () => {
      els.memoryImage.style.display = "none";
      els.imagePlaceholder.style.display = "grid";
    };
    els.memoryImage.src = memory.image;
  }

  els.memoryAudio.onerror = null;
  els.memoryAudio.pause();
  els.memoryAudio.removeAttribute("src");
  els.memoryAudio.load();
  els.memoryAudio.style.display = "none";
  els.audioPlaceholder.style.display = "block";
  els.audioPlaceholder.textContent = memory.song ? "Loading song..." : "Song coming soon";

  if (memory.song) {
    els.memoryAudio.onerror = () => {
      els.memoryAudio.style.display = "none";
      els.audioPlaceholder.style.display = "block";
      els.audioPlaceholder.textContent = "Song coming soon";
    };
    els.memoryAudio.src = memory.song;
    els.memoryAudio.load();
    els.memoryAudio.style.display = "block";
    els.audioPlaceholder.style.display = "none";
  }
}

function showDialogueLine() {
  els.speaker.textContent = state.dialogueTitle;
  els.dialogueText.textContent = state.dialogueLines[state.dialogueIndex];
}

function advanceDialogue() {
  if (els.overlay.classList.contains("hidden")) return;

  state.dialogueIndex += 1;
  if (state.dialogueIndex < state.dialogueLines.length) {
    showDialogueLine();
    return;
  }

  const mode = state.dialogueMode;
  els.overlay.classList.add("hidden");
  els.memoryAudio.pause();
  state.dialogueMode = null;

  if (mode === "memory") {
    finishMemoryCard();
  }

  if (mode === "finalDish") {
    finishCookingHouse();
  }

  if (mode === "birthday") {
    state.questComplete = true;
    setScreen("ending");
    updateObjective();
    refreshHouseClasses();
  }
}

function returnToMap() {
  state.activeCookingHouseId = null;
  state.activeMemoryHouseId = null;
  els.overlay.classList.add("hidden");
  setScreen("game");
  refreshAfterProgression();
}

function refreshAfterProgression() {
  updateObjective();
  refreshHouseClasses();
}

function updateObjective() {
  const currentHouse = getCurrentCookingHouse();
  const recipesComplete = state.completedCookingHouses.size;

  if (state.questComplete) {
    els.mainObjective.textContent = "Main Quest: The cooking adventure is complete.";
    els.optionalObjective.textContent = "Optional: Revisit Memory Lane or replay favorite recipe houses.";
    return;
  }

  if (state.screen === "cooking" && state.activeCookingHouseId) {
    const house = getCookingHouse(state.activeCookingHouseId);
    els.mainObjective.textContent = `Main Quest: Complete ${house.dishName}.`;
    els.optionalObjective.textContent = "Recipe checklist is shown in this room.";
    return;
  }

  if (isBirthdayUnlocked() && !currentHouse) {
    els.mainObjective.textContent = "Main Quest: Enter the Birthday House.";
  } else {
    els.mainObjective.textContent = currentHouse
      ? `Main Quest: Complete the next recipe at ${currentHouse.label}.`
      : "Main Quest: The cooking adventure is complete.";
  }

  els.optionalObjective.textContent = `Optional: Visit Memory Lane for favorite moments about us. Recipes complete: ${recipesComplete}/5.`;
}

function getCurrentCookingHouse() {
  return GAME_DATA.cookingHouses.find((house) => house.unlockOrder === state.currentCookingOrder);
}

function isBirthdayUnlocked() {
  return GAME_DATA.cookingHouses.every((house) => state.completedCookingHouses.has(house.id));
}

function isHouseUnlocked(house) {
  if (house.zone === "cooking") return house.unlockOrder <= state.currentCookingOrder;
  if (house.zone === "memory") return true;
  if (house.zone === "birthday") return isBirthdayUnlocked();
  return false;
}

function getHouse(houseId) {
  return getCookingHouse(houseId)
    || getMemoryHouse(houseId)
    || (GAME_DATA.birthdayHouse.id === houseId ? GAME_DATA.birthdayHouse : null);
}

function getCookingHouse(houseId) {
  return GAME_DATA.cookingHouses.find((house) => house.id === houseId);
}

function getMemoryHouse(houseId) {
  return GAME_DATA.memoryHouses.find((house) => house.id === houseId);
}

function memoryKey(houseId, memoryId) {
  return `${houseId}:${memoryId}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function validateAssetPaths(paths) {
  const flatPaths = Object.values(paths).flat();
  flatPaths.forEach((path) => {
    const image = new Image();
    image.onerror = () => {
      console.warn(`Missing overworld asset: ${path}. The tilemap will use CSS fallback colors for that tile.`);
    };
    image.src = path;
  });
}

init();
