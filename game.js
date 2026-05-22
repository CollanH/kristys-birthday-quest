"use strict";

// Kristy's Birthday Quest
// Edit GAME_DATA to change the story, memory text, image paths, audio paths, and house order.

const GAME_DATA = {
  houses: [
    {
      id: "friends-start",
      label: "Where It Started as Friends",
      zone: "timeline",
      objective: "Visit the Where It Started as Friends House.",
      position: { x: 16, y: 22 },
      unlockOrder: 0,
      required: true,
      memories: [
        {
          id: "where-it-started",
          title: "Where It Started",
          type: "Story",
          required: true,
          image: null,
          song: null,
          note: "Replace this with the real beginning-of-the-story memory.",
          lines: [
            "This is where the little quest begins: two friends, a bunch of laughs, and one story quietly getting ready to become something bigger.",
            "Placeholder memory: add the real details here later, like the moment things first felt special.",
            "The town stamps this chapter with a tiny heart and unlocks the next part of the path."
          ]
        }
      ]
    },
    {
      id: "may-august",
      label: "May - August",
      zone: "timeline",
      objective: "Visit the May - August House.",
      position: { x: 34, y: 22 },
      unlockOrder: 1,
      required: true,
      memories: [
        {
          id: "first-dates",
          title: "First dates",
          type: "Timeline",
          required: true,
          image: null,
          song: null,
          note: "Add favorite first date details here.",
          lines: [
            "A placeholder for first dates: nervous smiles, good conversations, and the suspiciously fast realization that this was very worth doing again.",
            "Future photo spot: add a favorite picture from one of those early dates."
          ]
        },
        {
          id: "early-favorite-moments",
          title: "Early favorite moments",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add little early moments that still make you smile.",
          lines: [
            "A cozy little shelf for early favorite moments.",
            "The exact details are coming soon, but the vibe is already: Kristy being cute, funny, and dangerously easy to adore."
          ]
        },
        {
          id: "summer-memories",
          title: "Summer memories",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add summer trips, dates, jokes, and photos.",
          lines: [
            "Summer memory placeholder: sunshine, adventures, and probably at least one moment that deserves its own tiny award.",
            "Add the real story here when you are ready."
          ]
        }
      ]
    },
    {
      id: "september-december",
      label: "September - December",
      zone: "timeline",
      objective: "Visit the September - December House.",
      position: { x: 52, y: 22 },
      unlockOrder: 2,
      required: true,
      memories: [
        {
          id: "october-fiascos",
          title: "October Fiascos",
          type: "Timeline",
          required: true,
          image: null,
          song: null,
          note: "Add the funniest October chaos here.",
          lines: [
            "October Fiascos placeholder: every great love story deserves at least one chapter with dramatic title energy.",
            "Insert the hilarious details here, ideally with just enough context to make Kristy laugh immediately."
          ]
        },
        {
          id: "chill-december",
          title: "Chill December",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add quiet holiday-season moments.",
          lines: [
            "Chill December placeholder: soft nights, warm food, relaxed plans, and being happy to simply be together."
          ]
        },
        {
          id: "new-years",
          title: "New Years",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add New Year's memory details.",
          lines: [
            "New Years placeholder: one year turning into the next, with Kristy as the best possible person to start it with."
          ]
        }
      ]
    },
    {
      id: "january-march",
      label: "January - March",
      zone: "timeline",
      objective: "Visit the January - March House.",
      position: { x: 70, y: 22 },
      unlockOrder: 3,
      required: true,
      memories: [
        {
          id: "valentines-day",
          title: "Valentine's Day",
          type: "Timeline",
          required: true,
          image: null,
          song: null,
          note: "Add Valentine's details here.",
          lines: [
            "Valentine's Day placeholder: romance, sweetness, and one more reason the quest log keeps writing Kristy's name in pink ink.",
            "Add the real date, gift, joke, or favorite moment here."
          ]
        },
        {
          id: "at-home-cooking",
          title: "At-home cooking memories",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add favorite meals made at home.",
          lines: [
            "At-home cooking placeholder: chopping, tasting, laughing, and somehow making normal nights feel special."
          ]
        },
        {
          id: "cozy-everyday",
          title: "Cozy everyday memories",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add little daily moments here.",
          lines: [
            "Cozy everyday placeholder: the tiny moments that do not need a big occasion to matter."
          ]
        }
      ]
    },
    {
      id: "april-now",
      label: "April - Now",
      zone: "timeline",
      objective: "Visit the April - Now House.",
      position: { x: 20, y: 45 },
      unlockOrder: 4,
      required: true,
      memories: [
        {
          id: "ren-faire",
          title: "Ren Faire",
          type: "Timeline",
          required: true,
          image: null,
          song: null,
          note: "Add Ren Faire photos and story details.",
          lines: [
            "Ren Faire placeholder: a little magic, a little chaos, and Kristy looking like the main character of the whole kingdom.",
            "Add the real favorite moment here."
          ]
        },
        {
          id: "edc",
          title: "EDC",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add EDC music, photos, and favorite details.",
          lines: [
            "EDC placeholder: lights, music, and the kind of memory that deserves its own soundtrack."
          ]
        },
        {
          id: "recent-favorite-moments",
          title: "Recent favorite moments",
          type: "Timeline",
          required: false,
          image: null,
          song: null,
          note: "Add recent moments here.",
          lines: [
            "Recent favorite moments placeholder: proof that the story is still actively collecting reasons to smile."
          ]
        }
      ]
    },
    {
      id: "travel-house",
      label: "Travel House",
      zone: "special",
      objective: "Explore the Travel House.",
      position: { x: 17, y: 78 },
      required: false,
      memories: [
        memoryStub("vegas-trip-1", "Vegas Trip 1", "Travel"),
        memoryStub("vegas-trip-2", "Vegas Trip 2", "Travel"),
        memoryStub("vegas-trip-3", "Vegas Trip 3", "Travel"),
        memoryStub("vegas-trip-4", "Vegas Trip 4", "Travel"),
        memoryStub("vegas-trip-5", "Vegas Trip 5", "Travel"),
        memoryStub("montana", "Montana", "Travel"),
        memoryStub("big-bear", "Big Bear", "Travel"),
        memoryStub("coachella-valley", "Coachella Valley", "Travel"),
        memoryStub("future-trips", "Future Trips", "Travel")
      ]
    },
    {
      id: "music-room",
      label: "Music Room",
      zone: "special",
      objective: "Explore the Music Room.",
      position: { x: 39, y: 78 },
      required: false,
      memories: [
        songStub("song-1", "Song 1 placeholder"),
        songStub("song-2", "Song 2 placeholder"),
        songStub("song-3", "Song 3 placeholder")
      ]
    },
    {
      id: "kitchen-house",
      label: "Kitchen / Cooking House",
      zone: "special",
      objective: "Explore the Kitchen / Cooking House.",
      position: { x: 61, y: 78 },
      required: false,
      memories: [
        memoryStub("favorite-things-she-cooked", "Favorite things she cooked", "Food"),
        memoryStub("favorite-things-we-cooked", "Favorite things we cooked together", "Food"),
        memoryStub("cozy-food-memories", "Cozy food memories", "Food")
      ]
    },
    {
      id: "random-favorites",
      label: "Random Favorites House",
      zone: "special",
      objective: "Explore the Random Favorites House.",
      position: { x: 83, y: 78 },
      required: false,
      memories: [
        memoryStub("favorite-drunk-memories", "Favorite drunk memories", "Favorites"),
        memoryStub("favorite-alcohol-cleanse", "Favorite alcohol-cleanse memories", "Favorites"),
        memoryStub("favorite-movies", "Favorite movies we watched", "Favorites"),
        memoryStub("favorite-tv-shows", "Favorite TV shows together", "Favorites"),
        memoryStub("gossip-girl-binge", "Gossip Girl binge", "Favorites")
      ]
    },
    {
      id: "final-letter",
      label: "Final Birthday Letter",
      zone: "final",
      objective: "Visit the Final Birthday Letter.",
      position: { x: 86, y: 22 },
      unlockOrder: 5,
      required: true,
      memories: [
        {
          id: "birthday-letter",
          title: "Birthday letter placeholder",
          type: "Final",
          required: true,
          image: null,
          song: null,
          note: "Replace this with the real birthday letter.",
          lines: [
            "Dear Kristy,",
            "This is the placeholder final birthday letter. Replace these lines with the real letter when you are ready.",
            "For now, the game wants you to know: you are loved, celebrated, and very much the reason this tiny town exists.",
            "Happy Birthday, Kristy."
          ]
        }
      ]
    }
  ]
};

function memoryStub(id, title, type) {
  return {
    id,
    title,
    type,
    required: false,
    image: null,
    song: null,
    note: "Future content placeholder. Add dialogue, image, and audio whenever you want.",
    lines: [
      `${title} placeholder memory.`,
      "Add the real story here later, plus a favorite photo if you have one."
    ]
  };
}

function songStub(id, title) {
  return {
    id,
    title,
    type: "Song",
    required: false,
    image: null,
    song: null,
    note: "Add an MP3 path later, for example assets/audio/our-song.mp3.",
    lines: [
      `${title}: song coming soon.`,
      "When you add an audio path, the player will appear here automatically."
    ]
  };
}

const state = {
  screen: "title",
  player: { x: 50, y: 62, speed: 0.34 },
  keys: new Set(),
  completedMemories: new Set(),
  completedHouses: new Set(),
  currentMainOrder: 0,
  nearbyHouseId: null,
  activeHouseId: null,
  activeMemory: null,
  dialogueLines: [],
  dialogueIndex: 0,
  titleNoCount: 0
};

const els = {
  screens: {
    title: document.querySelector("#title-screen"),
    game: document.querySelector("#game-screen"),
    house: document.querySelector("#house-screen"),
    ending: document.querySelector("#ending-screen")
  },
  titleText: document.querySelector("#title-dialogue-text"),
  yesButton: document.querySelector("#yes-button"),
  noButton: document.querySelector("#no-button"),
  townMap: document.querySelector("#town-map"),
  player: document.querySelector("#player"),
  prompt: document.querySelector("#interact-prompt"),
  mainObjective: document.querySelector("#main-objective"),
  optionalObjective: document.querySelector("#optional-objective"),
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
  renderHouses();
  updateObjective();
  updatePlayer();
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

    if (state.screen === "house" && key === "escape") {
      returnToMap();
      return;
    }

    if (state.screen === "game" && key === "e") {
      interactWithNearbyHouse();
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
    : "The NO button tried its best, but the birthday magic says YES.";
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
  if (state.screen === "game" && els.overlay.classList.contains("hidden")) {
    movePlayer();
    updateNearbyHouse();
    updatePlayer();
  }
  requestAnimationFrame(gameLoop);
}

function movePlayer() {
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

  state.player.x = clamp(state.player.x + dx * state.player.speed, 4, 96);
  state.player.y = clamp(state.player.y + dy * state.player.speed, 8, 94);
}

function updatePlayer() {
  els.player.style.left = `${state.player.x}%`;
  els.player.style.top = `${state.player.y}%`;
}

function renderHouses() {
  GAME_DATA.houses.forEach((house) => {
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
      state.nearbyHouseId = house.id;
      interactWithNearbyHouse();
    });
    els.townMap.appendChild(houseEl);
  });
  refreshHouseClasses();
}

function refreshHouseClasses() {
  const currentHouse = getCurrentMainHouse();

  document.querySelectorAll(".house").forEach((houseEl) => {
    const house = getHouse(houseEl.dataset.houseId);
    const unlocked = isHouseUnlocked(house);
    houseEl.classList.toggle("locked", !unlocked);
    houseEl.classList.toggle("current", Boolean(currentHouse && house.id === currentHouse.id));
    houseEl.classList.toggle("optional-ready", Boolean(unlocked && house.zone === "special"));
  });
}

function updateNearbyHouse() {
  let closest = null;
  let closestDistance = Infinity;

  GAME_DATA.houses.forEach((house) => {
    const distance = Math.hypot(state.player.x - house.position.x, state.player.y - house.position.y);
    if (distance < closestDistance) {
      closest = house;
      closestDistance = distance;
    }
  });

  state.nearbyHouseId = closestDistance < 9 ? closest.id : null;
  els.prompt.style.display = state.nearbyHouseId ? "block" : "none";
}

function interactWithNearbyHouse() {
  if (!state.nearbyHouseId) return;

  const house = getHouse(state.nearbyHouseId);
  if (!isHouseUnlocked(house)) {
    showLockedDialogue(house);
    return;
  }

  openHouse(house.id);
}

function openHouse(houseId) {
  const house = getHouse(houseId);
  state.activeHouseId = houseId;
  els.houseTitle.textContent = house.label;
  els.houseNote.textContent = house.zone === "final"
    ? "The final door is open. This one is meant to feel extra special."
    : house.zone === "special"
      ? "Optional memories can be visited in any order."
      : "Finish at least one required memory here to unlock the next main house.";

  els.memoryList.innerHTML = "";
  house.memories.forEach((memory) => {
    const memoryButton = document.createElement("button");
    memoryButton.type = "button";
    memoryButton.className = "memory-card";
    memoryButton.classList.toggle("completed", isMemoryCompleted(house.id, memory.id));
    memoryButton.innerHTML = `
      <h3>${memory.title}</h3>
      <p>${memory.type}${memory.required ? " | Required" : " | Optional"}</p>
      <p>${memory.note || "Ready for a future photo, song, or longer story."}</p>
    `;
    memoryButton.addEventListener("click", () => startMemory(house, memory));
    els.memoryList.appendChild(memoryButton);
  });

  setScreen("house");
}

function startMemory(house, memory) {
  state.activeHouseId = house.id;
  state.activeMemory = memory;
  state.dialogueLines = Array.isArray(memory.lines) && memory.lines.length
    ? memory.lines
    : ["This memory is waiting for its story."];
  state.dialogueIndex = 0;
  configureMedia(memory);
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
  els.speaker.textContent = state.activeMemory?.title || "Kristy's Birthday Quest";
  els.dialogueText.textContent = state.dialogueLines[state.dialogueIndex];
}

function advanceDialogue() {
  if (els.overlay.classList.contains("hidden")) return;

  state.dialogueIndex += 1;
  if (state.dialogueIndex < state.dialogueLines.length) {
    showDialogueLine();
    return;
  }

  if (!state.activeHouseId) {
    els.overlay.classList.add("hidden");
    state.activeMemory = null;
    return;
  }

  finishMemory();
}

function finishMemory() {
  const house = getHouse(state.activeHouseId);
  const memory = state.activeMemory;
  markMemoryComplete(house, memory);
  els.overlay.classList.add("hidden");
  els.memoryAudio.pause();

  if (house.zone === "final") {
    completeHouseIfReady(house);
    setScreen("ending");
    refreshAfterProgression();
    return;
  }

  completeHouseIfReady(house);
  openHouse(house.id);
  refreshAfterProgression();
}

function markMemoryComplete(house, memory) {
  state.completedMemories.add(memoryKey(house.id, memory.id));
}

function completeHouseIfReady(house) {
  const requiredMemories = house.memories.filter((memory) => memory.required);
  const hasCompletedRequired = requiredMemories.length === 0
    || requiredMemories.some((memory) => isMemoryCompleted(house.id, memory.id));

  if (!hasCompletedRequired) return;

  state.completedHouses.add(house.id);
  if ((house.zone === "timeline" || house.zone === "final") && house.unlockOrder === state.currentMainOrder) {
    state.currentMainOrder += 1;
  }
}

function refreshAfterProgression() {
  updateObjective();
  refreshHouseClasses();
}

function returnToMap() {
  setScreen("game");
  refreshAfterProgression();
}

function showLockedDialogue(house) {
  const message = house.zone === "final"
    ? "This door feels special, but it's waiting for a few more memories first."
    : house.zone === "special"
      ? "These special memories will open after the story begins."
      : "This memory is still sealed. Follow the main quest first.";

  state.activeHouseId = null;
  state.activeMemory = { title: house.label };
  state.dialogueLines = [message];
  state.dialogueIndex = 0;
  configureMedia({ title: house.label, image: null, song: null });
  showDialogueLine();
  els.overlay.classList.remove("hidden");
}

function updateObjective() {
  const currentHouse = getCurrentMainHouse();
  els.mainObjective.textContent = currentHouse
    ? `Main Quest: ${currentHouse.objective}`
    : "Main Quest: The birthday quest is complete.";

  els.optionalObjective.textContent = areSpecialHousesUnlocked()
    ? "Optional: Explore the special memory houses at the bottom of town."
    : "Optional: Special memory houses will open after the story begins.";
}

function getCurrentMainHouse() {
  return GAME_DATA.houses.find((house) => {
    if (house.zone === "timeline") return house.unlockOrder === state.currentMainOrder;
    if (house.zone === "final") return house.unlockOrder === state.currentMainOrder;
    return false;
  });
}

function isHouseUnlocked(house) {
  if (house.zone === "timeline") return house.unlockOrder <= state.currentMainOrder;
  if (house.zone === "special") return areSpecialHousesUnlocked();
  if (house.zone === "final") return house.unlockOrder <= state.currentMainOrder;
  return false;
}

function areSpecialHousesUnlocked() {
  return state.completedHouses.has("friends-start");
}

function isMemoryCompleted(houseId, memoryId) {
  return state.completedMemories.has(memoryKey(houseId, memoryId));
}

function memoryKey(houseId, memoryId) {
  return `${houseId}:${memoryId}`;
}

function getHouse(houseId) {
  return GAME_DATA.houses.find((house) => house.id === houseId);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

init();
