// Footer dropdown functionality - Enhanced to work with footer.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".footer-dropdown").forEach((dropdown) => {
    const header = dropdown.querySelector(".footer-dropdown-header");
    const toggle = header?.querySelector(".dropdown-toggle");
    const link = header?.querySelector("a");

    // Handle click on toggle icon - always toggle dropdown and prevent navigation
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("open");
      });

      // Also handle clicks on the icon inside the toggle
      const toggleIcon = toggle.querySelector("i");
      if (toggleIcon) {
        toggleIcon.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropdown.classList.toggle("open");
        });
      }
    }

    // For headers without links (like "Core Development", "Design & Experience")
    // clicking anywhere on the header should toggle
    if (header && !link) {
      header.addEventListener("click", (e) => {
        // Don't toggle if clicking the toggle (already handled above)
        if (toggle && (e.target === toggle || toggle.contains(e.target))) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("open");
      });
    }
  });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      document.querySelector(".nav-links").classList.toggle("active");
      document.querySelector("body").classList.toggle("menu-open");
    });
  }
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".circle-wrapper").forEach((circle) => {
    let value = circle.getAttribute("data-value");
    let progress = circle.querySelector(".circle-progress");
    let radius = 60,
      circumference = 2 * Math.PI * radius;
    let offset = circumference - (value / 100) * circumference;
    progress.style.strokeDashoffset = offset;
  });
});
