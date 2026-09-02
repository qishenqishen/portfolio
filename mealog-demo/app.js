const STORAGE_KEY = "mealog-demo-memories";

const PEOPLE = ["Mia", "Lena", "Alex", "June", "Mom", "Solo"];
const MOODS = [
  { id: "soft", label: "soft" },
  { id: "bright", label: "bright" },
  { id: "homesick", label: "homesick" },
  { id: "celebratory", label: "celebratory" },
  { id: "quiet", label: "quiet" }
];
const PHOTOS = [
  { id: "cafe", src: "../assets/mealog-ticker-01.jpg", alt: "Cafe table memory" },
  { id: "noodle", src: "../assets/mealog-ticker-05.jpg", alt: "Noodle meal memory" },
  { id: "breakfast", src: "../assets/mealog-ticker-09.jpg", alt: "Breakfast table memory" },
  { id: "dessert", src: "../assets/mealog-ticker-12.jpg", alt: "Dessert memory" }
];

const SAMPLE_MEMORIES = [
  {
    id: "sample-1",
    title: "Late lunch after the library",
    place: "Koreatown",
    people: ["Mia", "Lena"],
    mood: "soft",
    photo: "noodle",
    note: "We sat by the window, compared notes, and let the afternoon become slower.",
    date: "Aug 12"
  },
  {
    id: "sample-2",
    title: "A tiny birthday dessert",
    place: "West Village",
    people: ["June", "Alex"],
    mood: "celebratory",
    photo: "dessert",
    note: "One candle, too many forks, and a quiet promise to make more time for each other.",
    date: "Aug 19"
  },
  {
    id: "sample-3",
    title: "Breakfast before moving day",
    place: "Los Feliz",
    people: ["Mom"],
    mood: "homesick",
    photo: "breakfast",
    note: "The meal tasted ordinary, but the table felt like a small anchor.",
    date: "Aug 27"
  }
];

let memories = loadMemories();
let selectedPeople = ["Mia", "Lena"];
let selectedMood = "soft";
let selectedPhoto = "cafe";
let activeMemoryId = memories[0]?.id || null;
let activeTab = "today";
let recapMode = 0;

function loadMemories() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (error) {
    return SAMPLE_MEMORIES.slice();
  }
  return SAMPLE_MEMORIES.slice();
}

function saveMemories() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function photoById(id) {
  return PHOTOS.find((photo) => photo.id === id) || PHOTOS[0];
}

function activeMemory() {
  return memories.find((memory) => memory.id === activeMemoryId) || memories[0];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function formatPeople(list) {
  if (!list.length) return "solo";
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
}

function getStats() {
  const allPeople = unique(memories.flatMap((memory) => memory.people));
  const allPlaces = unique(memories.map((memory) => memory.place));
  return {
    count: memories.length,
    people: allPeople.length,
    places: allPlaces.length
  };
}

function getPeopleCounts() {
  const counts = new Map();
  memories.forEach((memory) => {
    memory.people.forEach((person) => {
      counts.set(person, (counts.get(person) || 0) + 1);
    });
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function getMoodCounts() {
  const counts = new Map();
  memories.forEach((memory) => counts.set(memory.mood, (counts.get(memory.mood) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function renderPickers() {
  const peoplePicker = document.querySelector("[data-people-picker]");
  const moodPicker = document.querySelector("[data-mood-picker]");
  const photoPicker = document.querySelector("[data-photo-picker]");

  peoplePicker.innerHTML = PEOPLE.map((person) => `
    <button class="person-pill ${selectedPeople.includes(person) ? "is-active" : ""}" type="button" data-person="${escapeHtml(person)}">
      ${escapeHtml(person)}
    </button>
  `).join("");

  moodPicker.innerHTML = MOODS.map((mood) => `
    <button class="mood-pill ${selectedMood === mood.id ? "is-active" : ""}" type="button" data-mood="${escapeHtml(mood.id)}">
      ${escapeHtml(mood.label)}
    </button>
  `).join("");

  photoPicker.innerHTML = PHOTOS.map((photo) => `
    <button class="photo-choice ${selectedPhoto === photo.id ? "is-active" : ""}" type="button" data-photo="${escapeHtml(photo.id)}">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}">
    </button>
  `).join("");
}

function renderPhoneToday(memory) {
  const photo = photoById(memory.photo);
  return `
    <div class="phone-hero">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}">
      <div class="phone-hero-copy">
        <span>${escapeHtml(memory.date)} / ${escapeHtml(memory.place)}</span>
        <strong>${escapeHtml(memory.title)}</strong>
      </div>
    </div>
    <div class="phone-body">
      <div class="phone-section-title">
        <h3>today's table</h3>
        <span>${escapeHtml(memory.mood)}</span>
      </div>
      <article class="mini-card">
        <strong>with ${escapeHtml(formatPeople(memory.people))}</strong>
        <p>${escapeHtml(memory.note)}</p>
        <div class="tag-line">
          <span>${escapeHtml(memory.place)}</span>
          <span>${escapeHtml(memory.mood)}</span>
          <span>${memory.people.length || 1} seat${memory.people.length === 1 ? "" : "s"}</span>
        </div>
      </article>
      <article class="mini-card">
        <strong>quiet prompt</strong>
        <p>What detail from this meal would you want to remember one month from now?</p>
      </article>
    </div>
  `;
}

function renderPhoneMonth() {
  const stats = getStats();
  const topMood = getMoodCounts()[0]?.[0] || "soft";
  const dots = Array.from({ length: 28 }, (_, index) => {
    const hasMemory = index < Math.min(memories.length * 3, 28);
    const isActive = index === Math.min(21, memories.length * 3 - 1);
    return `<span class="month-dot ${hasMemory ? "has-memory" : ""} ${isActive ? "is-active" : ""}"></span>`;
  }).join("");

  return `
    <div class="phone-body">
      <div class="phone-section-title">
        <h3>August table</h3>
        <span>${stats.count} memories</span>
      </div>
      <article class="mini-card">
        <strong>${stats.people} people, ${stats.places} places</strong>
        <p>This month leaned ${escapeHtml(topMood)}. Your meals are clustering around ${escapeHtml(memories[0]?.place || "home")} and ${escapeHtml(memories[1]?.place || "campus")}.</p>
      </article>
      <div class="month-grid">${dots}</div>
      <article class="mini-card">
        <strong>monthly texture</strong>
        <p>Mealog reads repetition as signal: who keeps showing up, which places hold memory, and what feelings return.</p>
      </article>
    </div>
  `;
}

function renderPhonePeople() {
  const counts = getPeopleCounts();
  const max = Math.max(1, ...counts.map((entry) => entry[1]));
  const rows = counts.map(([person, count]) => `
    <div class="people-row">
      <strong>${escapeHtml(person)}</strong>
      <i style="--fill: ${(count / max) * 100}%"></i>
      <span>${count}</span>
    </div>
  `).join("");

  return `
    <div class="phone-body">
      <div class="phone-section-title">
        <h3>people rhythm</h3>
        <span>private by default</span>
      </div>
      <div class="people-stack">${rows || "<p>No people yet.</p>"}</div>
      <article class="mini-card">
        <strong>relationship note</strong>
        <p>The product treats meals as small social proof: not performative, just remembered.</p>
      </article>
    </div>
  `;
}

function renderPhone() {
  const memory = activeMemory();
  if (!memory) return;

  document.querySelector('[data-panel="today"]').innerHTML = renderPhoneToday(memory);
  document.querySelector('[data-panel="month"]').innerHTML = renderPhoneMonth();
  document.querySelector('[data-panel="people"]').innerHTML = renderPhonePeople();

  document.querySelectorAll("[data-tab]").forEach((button) => {
    const isActive = button.dataset.tab === activeTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== activeTab;
  });
}

function renderStats() {
  const stats = getStats();
  Object.entries(stats).forEach(([key, value]) => {
    const element = document.querySelector(`[data-stat="${key}"]`);
    if (element) element.textContent = value;
  });
}

function renderMemoryList() {
  const list = document.querySelector("[data-memory-list]");
  list.innerHTML = memories.map((memory) => {
    const photo = photoById(memory.photo);
    return `
      <button class="memory-row ${memory.id === activeMemoryId ? "is-active" : ""}" type="button" data-memory="${escapeHtml(memory.id)}">
        <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}">
        <span>
          <strong>${escapeHtml(memory.title)}</strong>
          <small>${escapeHtml(memory.date)} / ${escapeHtml(memory.place)} / ${escapeHtml(formatPeople(memory.people))}</small>
          <small>${escapeHtml(memory.mood)} - ${escapeHtml(memory.note)}</small>
        </span>
      </button>
    `;
  }).join("");
}

function renderConnectionBoard() {
  const board = document.querySelector("[data-connection-board]");
  const counts = getPeopleCounts();
  board.innerHTML = counts.map(([person, count]) => {
    const lastMemory = memories.find((memory) => memory.people.includes(person));
    return `
      <div class="connection-card">
        <strong>${escapeHtml(person)}</strong>
        <span>${count} shared meal${count === 1 ? "" : "s"} / last remembered at ${escapeHtml(lastMemory?.place || "the table")}</span>
      </div>
    `;
  }).join("") || `
    <div class="connection-card">
      <strong>No table yet</strong>
      <span>Add a meal memory to build the relationship map.</span>
    </div>
  `;
}

function recapText() {
  const stats = getStats();
  const peopleCounts = getPeopleCounts();
  const moodCounts = getMoodCounts();
  const topPerson = peopleCounts[0]?.[0] || "yourself";
  const topMood = moodCounts[0]?.[0] || "soft";
  const places = unique(memories.map((memory) => memory.place)).slice(0, 3);
  const variants = [
    `This month, meals became a quiet map: ${stats.count} memories across ${stats.places} places, with ${topPerson} showing up most often. The strongest emotional note was ${topMood}.`,
    `Your table is becoming a social diary. ${formatPeople(places)} are not just places to eat; they are where relationships repeated, shifted, and became easier to remember.`,
    `Mealog would suggest one gentle action: invite ${topPerson} again, revisit ${places[0] || "a familiar place"}, and capture one detail that usually disappears.`
  ];
  return variants[recapMode % variants.length];
}

function renderRecap() {
  const card = document.querySelector("[data-recap-card]");
  const peopleCounts = getPeopleCounts();
  const topPerson = peopleCounts[0]?.[0] || "someone";
  const topMood = getMoodCounts()[0]?.[0] || "soft";

  card.innerHTML = `
    <h3>August felt ${escapeHtml(topMood)}.</h3>
    <p>${escapeHtml(recapText())}</p>
    <ul>
      <li>Most repeated companion: ${escapeHtml(topPerson)}</li>
      <li>Most recent memory: ${escapeHtml(memories[0]?.title || "Add one meal")}</li>
      <li>Product signal: repeated meals become relationship context.</li>
    </ul>
  `;
}

function renderAll() {
  renderPickers();
  renderStats();
  renderPhone();
  renderMemoryList();
  renderConnectionBoard();
  renderRecap();
}

function addMemory() {
  const title = document.querySelector("[data-title]").value.trim() || "Untitled meal memory";
  const place = document.querySelector("[data-place]").value.trim() || "Somewhere warm";
  const note = document.querySelector("[data-note]").value.trim() || "A small detail worth remembering.";
  const today = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date());
  const people = selectedPeople.length ? selectedPeople.slice() : ["Solo"];
  const memory = {
    id: `memory-${Date.now()}`,
    title,
    place,
    people,
    mood: selectedMood,
    photo: selectedPhoto,
    note,
    date: today
  };

  memories.unshift(memory);
  activeMemoryId = memory.id;
  activeTab = "today";
  saveMemories();
  renderAll();
}

document.addEventListener("click", (event) => {
  const person = event.target.closest("[data-person]");
  if (person) {
    const value = person.dataset.person;
    selectedPeople = selectedPeople.includes(value)
      ? selectedPeople.filter((item) => item !== value)
      : selectedPeople.concat(value);
    renderPickers();
    return;
  }

  const mood = event.target.closest("[data-mood]");
  if (mood) {
    selectedMood = mood.dataset.mood;
    renderPickers();
    return;
  }

  const photo = event.target.closest("[data-photo]");
  if (photo) {
    selectedPhoto = photo.dataset.photo;
    renderPickers();
    return;
  }

  const tab = event.target.closest("[data-tab]");
  if (tab) {
    activeTab = tab.dataset.tab;
    renderPhone();
    return;
  }

  const memoryButton = event.target.closest("[data-memory]");
  if (memoryButton) {
    activeMemoryId = memoryButton.dataset.memory;
    activeTab = "today";
    renderAll();
    return;
  }

  if (event.target.closest("[data-add]")) {
    addMemory();
    return;
  }

  if (event.target.closest("[data-recap]")) {
    recapMode += 1;
    renderRecap();
    return;
  }

  if (event.target.closest("[data-reset]")) {
    memories = SAMPLE_MEMORIES.slice();
    activeMemoryId = memories[0].id;
    recapMode = 0;
    saveMemories();
    renderAll();
  }
});

renderAll();
