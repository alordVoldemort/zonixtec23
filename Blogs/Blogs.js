// ========================================
// BLOGS PAGE JAVASCRIPT - Zonixtec
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector(".newsletter-input").value;
      if (email) {
        alert("Thank you for subscribing to our newsletter!");
        this.reset();
      }
    });
  }

  // Smooth scroll to blog articles with header offset
  document.querySelectorAll('a[href^="#blog"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
