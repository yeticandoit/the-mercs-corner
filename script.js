
// THE MERC'S CORNER
// Chaos engine: ENABLED.

document.addEventListener("DOMContentLoaded", () => {
  const sarcasmToggle = document.getElementById("sarcasmToggle");
  const gagBox = document.getElementById("gagBox");
  const unicorn = document.getElementById("unicorn");
  const breakWallBtn = document.getElementById("breakWall");
  const notification = document.getElementById("notification");

  // --------------------------------
  // SARCASM TOGGLE
  // --------------------------------

  if (sarcasmToggle) {
    sarcasmToggle.addEventListener("click", () => {
      sarcasmToggle.checked = true;

      showNotification(
        "ERROR: Sarcasm cannot be disabled. Nice try, genius."
      );
    });
  }

  // --------------------------------
  // RED GAG BOX
  // --------------------------------

  if (gagBox) {
    gagBox.addEventListener("click", () => {
      gagBox.classList.add("shake");

      setTimeout(() => {
        gagBox.classList.remove("shake");
      }, 500);

      if (unicorn) {
        unicorn.classList.add("show-unicorn");
      }

      showNotification(
        "YOU CLICKED IT. I TOLD YOU NOT TO."
      );
    });
  }

  // --------------------------------
  // FOURTH WALL BREAK
  // --------------------------------

  if (breakWallBtn) {
    breakWallBtn.addEventListener("click", () => {
      document.body.classList.add("wall-broken");

      showNotification(
        "FOURTH WALL STATUS: Absolutely demolished."
      );

      setTimeout(() => {
        document.body.classList.remove("wall-broken");
      }, 1200);
    });
  }

  // --------------------------------
  // RANDOM CHAOS
  // --------------------------------

  const chaosMessages = [
    "WHY ARE YOU STILL HERE?",
    "THE WEBSITE IS WATCHING YOU.",
    "CHIMICHANGA ACQUIRED.",
    "THIS WAS NOT IN THE BLUEPRINT.",
    "ERROR: COMMON SENSE NOT FOUND.",
    "STOP CLICKING THINGS.",
    "THE UNICORN KNOWS.",
    "YOUR INTERNET PROVIDER DID THIS.",
    "NICE CLICK. NERD.",
    "SARCASM LEVEL: STRUCTURAL."
  ];

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      showNotification(
        chaosMessages[Math.floor(Math.random() * chaosMessages.length)]
      );
    }
  });

  // --------------------------------
  // NOTIFICATION SYSTEM
  // --------------------------------

  function showNotification(message) {
    if (!notification) return;

    notification.textContent = message;
    notification.classList.add("show");

    clearTimeout(window.mercNotificationTimer);

    window.mercNotificationTimer = setTimeout(() => {
      notification.classList.remove("show");
    }, 2500);
  }

  // --------------------------------
  // CHAOS METER
  // --------------------------------

  const chaosMeter = document.querySelector(".chaos-meter");

  if (chaosMeter) {
    let chaos = 17;

    setInterval(() => {
      chaos += Math.floor(Math.random() * 8) - 2;

      chaos = Math.max(5, Math.min(100, chaos));

      chaosMeter.style.width = `${chaos}%`;
    }, 1800);
  }

  // --------------------------------
  // UNICORN HYPE METER
  // --------------------------------

  const unicornMeter = document.querySelector(".unicorn-meter");

  if (unicornMeter) {
    let hype = 42;

    setInterval(() => {
      hype += Math.floor(Math.random() * 11) - 5;

      hype = Math.max(10, Math.min(100, hype));

      unicornMeter.style.width = `${hype}%`;
    }, 2200);
  }

  // --------------------------------
  // CONSOLE MESSAGE
  // --------------------------------

  console.log(
    "%c THE MERC'S CORNER ",
    "background:#A71E22;color:#F5F5F5;font-size:20px;font-weight:bold;padding:8px;"
  );

  console.log(
    "%cYou opened DevTools. Congratulations. Now you're part of the problem.",
    "color:#A71E22;font-size:14px;font-weight:bold;"
  );
});
