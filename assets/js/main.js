// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const progress = document.getElementById("progress");

  function updateNavbarBackground() {
    // If you've scrolled any amount (progress.value > 0), make navbar solid
    if (progress && progress.value > 0) {
      navbar.classList.add("solid");
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.add("transparent");
      navbar.classList.remove("solid");
    }
  }

  // On scroll, the progress bar listener inside your existing code should update progress.value
  // So we just listen to scroll and re‑evaluate
  window.addEventListener("scroll", updateNavbarBackground);

  // Run once on load
  updateNavbarBackground();
});
