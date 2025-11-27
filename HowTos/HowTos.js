// ========================================
// HOWTOS PAGE JAVASCRIPT - Zonixtec
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // Guide Content Toggle
  // Guide content display functionality
  document
    .querySelectorAll(".read-guide-btn, .preview-btn")
    .forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const guideId = this.getAttribute("data-guide");

        if (guideId && document.getElementById(guideId)) {
          // Hide all guide content
          document.querySelectorAll(".guide-content").forEach((content) => {
            content.classList.remove("active");
          });

          // Hide all cards
          const cardsContainer = document.querySelector(".howto-cards");
          if (cardsContainer) {
            cardsContainer.style.display = "none";
          }

          // Show selected guide content
          const guideContent = document.getElementById(guideId);
          guideContent.classList.add("active");

          // Scroll to guide content with offset for fixed header
          setTimeout(() => {
            const headerOffset = 100;
            const elementPosition = guideContent.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      });
    });

  // Back to list functionality
  document.querySelectorAll(".back-to-list").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Hide all guide content
      document.querySelectorAll(".guide-content").forEach((content) => {
        content.classList.remove("active");
      });

      // Show all cards
      const cardsContainer = document.querySelector(".howto-cards");
      if (cardsContainer) {
        cardsContainer.style.display = "grid";
      }

      // Scroll to top of section
      setTimeout(() => {
        if (cardsContainer) {
          const headerOffset = 100;
          const elementPosition = cardsContainer.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    });
  });
});

