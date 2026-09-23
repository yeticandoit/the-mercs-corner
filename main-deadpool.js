const navItems = ["home","arsenal","comics","fourth-wall","gallery"];
let chimichangas = 8;
let retries = 0;
let toastTimer;

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({behavior:"smooth", block:"start"});
  const menu = document.querySelector("#mobile-nav");
  if (menu) menu.classList.remove("open");
  document.querySelector("#mobile-menu-button")?.setAttribute("aria-expanded","false");
}

document.addEventListener("click", e => {
  const target = e.target.closest("[data-scroll]");
  if (target) scrollToSection(target.dataset.scroll);

  if (e.target.closest("[data-wall-break]")) {
    document.querySelector("#wall-modal").hidden = false;
    document.querySelector("#site-shell").classList.add("wall-breaking");
  }

  const read = e.target.closest("[data-read]");
  if (read) {
    const messages = [
      "ISSUE #01 OPENED. YES, HE KNOWS YOU ARE READING.",
      "ISSUE #02 OPENED. CHIMICHANGA LEVELS ARE CRITICAL.",
      "ISSUE #03 OPENED. SOMEHOW HE HAS ALREADY HEALED."
    ];
    showToast(messages[Number(read.dataset.read)]);
  }
});

document.querySelector("#close-wall").addEventListener("click", () => {
  document.querySelector("#wall-modal").hidden = true;
  document.querySelector("#site-shell").classList.remove("wall-breaking");
});

document.querySelector("#mobile-menu-button").addEventListener("click", e => {
  const menu = document.querySelector("#mobile-nav");
  const open = menu.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", String(open));
});

function updateChimi() {
  document.querySelector("#chimi-count").textContent = String(chimichangas).padStart(2,"0");
  document.querySelector("#chimi-meter").style.width = `${Math.min(100,25 + chimichangas * 5)}%`;
}

document.querySelector("#chimi-minus").addEventListener("click", () => {
  chimichangas = Math.max(0, chimichangas - 1);
  updateChimi();
});

document.querySelector("#chimi-plus").addEventListener("click", () => {
  chimichangas = Math.min(24, chimichangas + 1);
  updateChimi();
  showToast("CHIMICHANGA ADDED. MAXIMUM EFFORT SNACKING.");
});

document.querySelector("#chimi-add").addEventListener("click", () => {
  chimichangas = Math.min(24, chimichangas + 1);
  updateChimi();
  showToast("SNACK RESERVE UPDATED. TACTICAL FOOD ACQUIRED.");
});

document.querySelector("#sarcasm-toggle").addEventListener("click", e => {
  e.currentTarget.classList.toggle("active");
  document.querySelector("#sarcasm-message").textContent =
    e.currentTarget.classList.contains("active")
      ? "WARNING: SARCASM LEVELS HAVE EXCEEDED THE OSHA RECOMMENDATION."
      : "ERROR: SARCASM CANNOT ACTUALLY BE TURNED OFF.";
});

document.querySelector("#gallery-retry").addEventListener("click", () => {
  retries++;
  document.querySelector("#retry-count").textContent = `(${retries})`;
  showToast(retries % 2
    ? "RECOVERY ATTEMPT LOGGED. STILL RED."
    : "RETRY COMPLETE. NOTHING BECAME LESS SUSPICIOUS.");
});

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(x => x.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  document.querySelectorAll("[data-nav]").forEach(button => {
    button.classList.toggle("active", button.dataset.nav === visible.target.id);
  });
}, {rootMargin:"-20% 0px -65% 0px", threshold:[.05,.2,.5]});

navItems.forEach(id => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

updateChimi();
