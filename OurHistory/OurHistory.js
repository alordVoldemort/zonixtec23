// ==========================================
// OUR HISTORY PAGE - OPTIMIZED JAVASCRIPT
// ==========================================

(function() {
  'use strict';

  // Initialize Circle Progress Animations
  function initCircleProgress() {
    const circles = document.querySelectorAll(".circle-wrapper");
    
    circles.forEach((circle) => {
      const value = parseFloat(circle.getAttribute("data-value"));
      const progress = circle.querySelector(".circle-progress");
      
      if (progress && !isNaN(value)) {
        const radius = 60;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (value / 100) * circumference;
        progress.style.strokeDashoffset = offset;
      }
    });
  }

  // Header Scroll Effect
  function initHeaderScroll() {
    const header = document.getElementById("header");
    
    if (header) {
      window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    }
  }

  // ==========================================
  // SCROLL ANIMATION SYSTEM
  // ==========================================
  
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Add animated class
          element.classList.add('animated');
          
          // Determine animation type based on element
          if (element.classList.contains('history-text')) {
            element.classList.add('fade-in-left');
          } else if (element.classList.contains('history-image')) {
            element.classList.add('fade-in-right');
          } else if (element.classList.contains('timeline-row')) {
            if (element.classList.contains('left')) {
              element.classList.add('fade-in-left');
            } else {
              element.classList.add('fade-in-right');
            }
          } else if (element.id === 'settu' || element.id === 'workspace') {
            element.classList.add('fade-in-left');
          } else if (element.classList.contains('journey-title') || 
                     element.classList.contains('journey-subtitle') ||
                     element.classList.contains('story-heading')) {
            element.classList.add('fade-in-up');
          } else if (element.classList.contains('founder-note') ||
                     element.classList.contains('cta-section')) {
            element.classList.add('scale-in');
          } else if (element.tagName === 'P' && element.parentElement.classList.contains('story-section')) {
            element.classList.add('fade-in-up');
          } else {
            element.classList.add('fade-in-up');
          }
          
          // Stop observing after animation
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all elements
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Add glow animation to timeline icons
    const timelineIcons = document.querySelectorAll('.timeline-icon');
    const iconObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'bounceIn 0.8s ease-out forwards, glow 2s ease-in-out infinite 1s';
          iconObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    timelineIcons.forEach(icon => {
      iconObserver.observe(icon);
    });
  }

  // Footer Dropdown Toggle
  function initFooterDropdowns() {
    const dropdownHeaders = document.querySelectorAll(".footer-dropdown-header");
    
    dropdownHeaders.forEach((header) => {
      header.addEventListener("click", function() {
        const parent = this.parentElement;
        parent.classList.toggle("open");
      });
    });
  }



  // Initialize all functions when DOM is ready
  document.addEventListener("DOMContentLoaded", function() {
    initScrollAnimations();
    initCircleProgress();
    initHeaderScroll();
    initFooterDropdowns();
  });

})();