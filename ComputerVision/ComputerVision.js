       
// Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = mobileMenuBtn.querySelector('i');
        
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle menu icon between bars and times
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside of it
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
            
            if (navLinks.classList.contains('active') && !isClickInsideNav && !isClickOnMenuBtn) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
        
        // FAQ toggle functionality
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                
                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
        
       