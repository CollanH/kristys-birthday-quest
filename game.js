"use strict";

// Kristy's Cooking Adventure
// Edit GAME_DATA to change recipes, ingredients, memories, images, audio, and house order.

const GAME_DATA = {
  cookingHouses: [
    cookingHouse({
      id: "breakfast-house",
      label: "Breakfast House",
      dishName: "Cozy Breakfast Plate",
      position: { x: 22, y: 22 },
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
      position: { x: 36, y: 22 },
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
      position: { x: 50, y: 22 },
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
      position: { x: 64, y: 22 },
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
      position: { x: 78, y: 22 },
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
    memoryHouse("favorite-things", "Favorite Things About Us", 22, 78, [
      memory("favorite-little-things", "Favorite little things", "Favorites", [
        "Memory Lane placeholder: favorite things about us, the tiny habits and moments that make everything feel like home."
      ]),
      memory("favorite-laughs", "Favorite laughs", "Favorites", [
        "A placeholder for laughs that deserve their own little trophy."
      ])
    ]),
    memoryHouse("trips", "Trips", 36, 78, [
      memory("vegas-trips", "Vegas trips", "Travel", ["Trip placeholder: add favorite Vegas details, photos, and chaos here."]),
      memory("montana-big-bear", "Montana and Big Bear", "Travel", ["Travel placeholder: mountain air, cozy plans, and a future photo spot."]),
      memory("future-trips", "Future trips", "Travel", ["Future Trips placeholder: a tiny map of places still waiting for us."])
    ]),
    memoryHouse("music", "Music", 50, 78, [
      memory("song-1", "Song 1 placeholder", "Song", ["Song coming soon. Add an audio path later and it will play here."], null, null),
      memory("song-2", "Song 2 placeholder", "Song", ["Another song placeholder for the soundtrack of us."], null, null),
      memory("song-3", "Song 3 placeholder", "Song", ["One more song placeholder, ready for a real MP3 when you are."])
    ]),
    memoryHouse("shows-movies", "Shows & Movies", 64, 78, [
      memory("favorite-movies", "Favorite movies we watched", "Shows", ["Movie placeholder: add the favorites, the rewatches, and the couch commentary."]),
      memory("favorite-shows", "Favorite TV shows together", "Shows", ["TV placeholder: favorite shows, shared quotes, and the episodes that became a whole thing."]),
      memory("gossip-girl", "Gossip Girl binge", "Shows", ["Gossip Girl placeholder: dramatic, iconic, and somehow exactly right."])
    ]),
    memoryHouse("random-favorites", "Random Favorite Memories", 78, 78, [
      memory("favorite-drunk-memories", "Favorite drunk memories", "Random", ["Random favorite placeholder: add the funny stories here."]),
      memory("alcohol-cleanse", "Favorite alcohol-cleanse memories", "Random", ["A very specific category, which means it definitely belongs in Memory Lane."]),
      memory("recent-favorites", "Recent favorite moments", "Random", ["Recent favorite placeholder: proof the story is still collecting good stuff."])
    ])
  ],
  birthdayHouse: {
    id: "birthday-house",
    label: "Birthday House",
    zone: "birthday",
    position: { x: 92, y: 50 },
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
    { label: "cow", x: 42, y: 43 },
    { label: "pig", x: 56, y: 46 },
    { label: "chicken", x: 48, y: 59 },
    { label: "crops", x: 61, y: 60 },
    { label: "fence", x: 36, y: 55 },
    { label: "crops", x: 52, y: 36 }
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

  GAME_DATA.farmDecor.forEach((item) => {
    const decor = document.createElement("span");
    decor.className = `farm-prop ${item.label}`;
    decor.style.left = `${item.x}%`;
    decor.style.top = `${item.y}%`;
    decor.textContent = farmIcon(item.label);
    els.farmDecor.appendChild(decor);
  });

  refreshHouseClasses();
}

function farmIcon(label) {
  const icons = {
    cow: "cow",
    pig: "pig",
    chicken: "hen",
    crops: "crop",
    fence: "fence"
  };
  return icons[label] || label;
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
  els.cookingRoom.querySelectorAll(".ingredient-object, .combine-station").forEach((node) => node.remove());
  els.recipeTitle.textContent = `${house.label}: ${house.dishName}`;

  house.ingredients.forEach((item) => {
    const ingredientEl = document.createElement("button");
    ingredientEl.type = "button";
    ingredientEl.className = "ingredient-object";
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

init();
