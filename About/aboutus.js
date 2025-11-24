
        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
            document.querySelector('.nav-links').classList.toggle('active');
            document.querySelector('body').classList.toggle('menu-open');
        });

        // Header scroll effect
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Story Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slider-slide');
        const indicators = document.querySelectorAll('.slider-indicator');

        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));

            // Show current slide
            slides[index].classList.add('active');
            indicators[index].classList.add('active');

            currentSlide = index;
        }

        // Auto-advance slides
        setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 5000);

        // Add click events to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });


        window.addEventListener('load', () => {
            // Check if the user came by clicking the link
            if (sessionStorage.getItem('scrollAfterLoad') === 'true') {
                window.scrollBy(0, 700); // scroll down 700px
                sessionStorage.removeItem('scrollAfterLoad'); // reset flag
            }
        });

        document.getElementById('aboutLink').addEventListener('click', () => {
            sessionStorage.setItem('scrollAfterLoad', 'true');
        });


        window.addEventListener('load', () => {
            // Check if the user came by clicking the link
            if (sessionStorage.getItem('scrollAfterLoad2') === 'true') {
                window.scrollBy(0, 2200); // scroll down 700px
                sessionStorage.removeItem('scrollAfterLoad2'); // reset flag
            }
        });

        document.getElementById('OurJou').addEventListener('click', () => {
            sessionStorage.setItem('scrollAfterLoad2', 'true');
        });


        window.addEventListener('load', () => {
            // Check if the user came by clicking the link
            if (sessionStorage.getItem('scrollAfterLoad3') === 'true') {
                window.scrollBy(0, 1200); // scroll down 700px
                sessionStorage.removeItem('scrollAfterLoad3'); // reset flag
            }
        });

        document.getElementById('OurCore').addEventListener('click', () => {
            sessionStorage.setItem('scrollAfterLoad3', 'true');
        });

        // Enhanced Animated Number Counter with Professional Effects
        function animateNumbers() {
            const numberElements = document.querySelectorAll('.impact-number');

            numberElements.forEach((element, index) => {
                const target = parseInt(element.getAttribute('data-target'));
                const duration = 2500; // 2.5 seconds for smoother animation
                const startDelay = index * 200; // Stagger animation for each card

                // Add initial animation class
                element.parentElement.classList.add('animating');

                setTimeout(() => {
                    let current = 0;
                    const increment = target / (duration / 16); // 60fps

                    const timer = setInterval(() => {
                        current += increment;

                        if (current >= target) {
                            current = target;
                            clearInterval(timer);

                            // Add final formatting with smooth transition
                            const cardIndex = Array.from(numberElements).indexOf(element);
                            setTimeout(() => {
                                if (cardIndex === 3) { // Last card (47%)
                                    element.textContent = Math.floor(current) + '%';
                                } else {
                                    element.textContent = Math.floor(current) + '+';
                                }

                                // Add completion effect
                                element.style.transform = 'scale(1.1)';
                                setTimeout(() => {
                                    element.style.transform = 'scale(1)';
                                    element.parentElement.classList.remove('animating');
                                    element.parentElement.classList.add('animation-complete');
                                }, 200);
                            }, 100);
                        } else {
                            // Smooth easing function for more professional feel
                            const easedCurrent = easeOutQuart(current / target) * target;
                            element.textContent = Math.floor(easedCurrent);
                        }
                    }, 16);
                }, startDelay);
            });
        }

        // Professional easing function
        function easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
        }

        // Enhanced Intersection Observer with better timing
        const impactSection = document.querySelector('#impact');
        let hasAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    // Add a slight delay for better visual impact
                    setTimeout(() => {
                        animateNumbers();
                        hasAnimated = true;
                    }, 300);
                }
            });
        }, {
            threshold: 0.3, // Trigger when 30% of section is visible for better timing
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before full visibility
        });

        if (impactSection) {
            observer.observe(impactSection);
        }
  