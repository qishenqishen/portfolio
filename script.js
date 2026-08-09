let isSoundOn = false;

function updateSoundButton() {
  const button = document.querySelector(".sound-toggle");
  if (!button) return;
  button.textContent = isSoundOn ? "sound on" : "sound off";
  button.setAttribute("aria-pressed", String(isSoundOn));
}

async function startSound() {
  const audio = document.querySelector("#site-audio");
  if (!audio) return;

  audio.volume = 0.28;

  if (typeof audio.play !== "function") {
    isSoundOn = true;
    updateSoundButton();
    return;
  }

  try {
    await audio.play();
    isSoundOn = true;
  } catch {
    isSoundOn = false;
  }

  updateSoundButton();
}

function stopSound() {
  const audio = document.querySelector("#site-audio");
  if (!audio) return;

  audio.pause();
  isSoundOn = false;
  updateSoundButton();
}

function fallbackCopy(text) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.top = "-999px";
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
}

function copyContact(button) {
  const value = button.dataset.copy || button.dataset.email || "";
  const label = button.dataset.label || button.textContent || "copy";
  button.textContent = "copied";

  (async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
      } else {
        fallbackCopy(value);
      }
    } catch {
      fallbackCopy(value);
    }
  })();

  window.setTimeout(() => {
    button.textContent = label;
  }, 1600);
}

function setIntroVisible(isVisible) {
  const note = document.querySelector("#intro-note");
  const acceptButton = document.querySelector(".call-accept");
  if (!note) return;

  note.hidden = !isVisible;
  note.classList.toggle("is-open", isVisible);
  acceptButton?.setAttribute("aria-expanded", String(isVisible));
}

function updateLocalTime() {
  const time = document.querySelector("#la-time");
  if (!time) return;

  time.textContent = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles"
  }).format(new Date());
}

function setupPhotoArchive() {
  const toolbar = document.querySelector(".photo-toolbar");
  const archive = document.querySelector(".photo-archive");
  if (!toolbar || !archive) return;

  const scaleInput = toolbar.querySelector("[data-photo-scale]");
  const scaleValue = toolbar.querySelector(".scale-value");
  const listButton = toolbar.querySelector("[data-photo-list]");
  const typeSelect = toolbar.querySelector("[data-photo-type]");
  const locationSelect = toolbar.querySelector("[data-photo-location]");
  const items = Array.from(archive.querySelectorAll(".photo-item"));
  const dividers = Array.from(archive.querySelectorAll(".photo-divider[data-group]"));

  items.forEach((item) => {
    const base = parseFloat(item.style.getPropertyValue("--photo-w")) || 240;
    item.dataset.baseWidth = String(base);
  });

  function updateGroupLabels() {
    dividers.forEach((divider) => {
      const group = divider.dataset.group;
      const visibleCount = items.filter((item) => !item.hidden && item.dataset.tone === group).length;
      divider.hidden = visibleCount === 0;
      const counter = divider.querySelector("span:last-child");
      if (counter) counter.textContent = String(visibleCount).padStart(3, "0");
    });
  }

  function applyFilters() {
    const type = typeSelect?.value || "all";
    const location = locationSelect?.value || "all";

    items.forEach((item) => {
      const types = (item.dataset.type || "").split(/\s+/);
      const matchesType = type === "all" || item.dataset.tone === type || types.includes(type);
      const matchesLocation = location === "all" || item.dataset.location === location;
      item.hidden = !(matchesType && matchesLocation);
    });

    updateGroupLabels();
  }

  function applyScale() {
    if (!scaleInput) return;

    const rawValue = Number(scaleInput.value || 10);
    const normalized = Math.min(1, Math.max(0.1, rawValue / 100));
    const widthScale = 0.72 + normalized * 1.78;
    const isFocus = normalized >= 0.98;

    if (scaleValue) scaleValue.textContent = normalized.toFixed(2);
    archive.classList.toggle("is-focus", isFocus);

    items.forEach((item) => {
      if (archive.classList.contains("is-focus") || archive.classList.contains("is-list")) {
        item.style.removeProperty("width");
        return;
      }

      const base = Number(item.dataset.baseWidth || 240);
      item.style.width = `${Math.round(base * widthScale)}px`;
    });
  }

  scaleInput?.addEventListener("input", applyScale);
  typeSelect?.addEventListener("change", applyFilters);
  locationSelect?.addEventListener("change", applyFilters);

  listButton?.addEventListener("click", () => {
    const isList = archive.classList.toggle("is-list");
    listButton.textContent = isList ? "grid" : "list";
    listButton.setAttribute("aria-pressed", String(isList));
    applyScale();
  });

  applyFilters();
  applyScale();
}

document.addEventListener("DOMContentLoaded", () => {
  startSound();
  updateLocalTime();
  setupPhotoArchive();
  window.setInterval(updateLocalTime, 30000);

  const soundButton = document.querySelector(".sound-toggle");
  soundButton?.addEventListener("click", async () => {
    if (isSoundOn) {
      stopSound();
    } else {
      await startSound();
    }
  });

  function handleFirstPointerdown(event) {
    if (event.target.closest?.(".sound-toggle")) return;
    if (!isSoundOn) startSound();
    document.removeEventListener("pointerdown", handleFirstPointerdown);
  }

  document.addEventListener("pointerdown", handleFirstPointerdown);

  document.querySelector(".call-accept")?.addEventListener("click", async () => {
    await startSound();
    setIntroVisible(true);
  });

  document.querySelector(".call-decline")?.addEventListener("click", () => {
    setIntroVisible(false);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (!isSoundOn) startSound();
    });
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest?.(".copy-contact, .copy-email");
    if (!button) return;
    event.preventDefault();
    copyContact(button);
  });

  document.addEventListener("click", (event) => {
    const menu = document.querySelector(".resume-menu");
    if (!menu || menu.contains(event.target)) return;
    menu.removeAttribute("open");
  });

  document.querySelectorAll(".resume-panel a").forEach((link) => {
    link.addEventListener("click", () => {
      link.closest(".resume-menu")?.removeAttribute("open");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll(".record").forEach((record) => observer.observe(record));
});
