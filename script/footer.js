/**
 * Footer Functionality
 * Handles newsletter subscription and dropdown toggles
 */

document.addEventListener('DOMContentLoaded', function() {
    // Newsletter functionality
    const btn = document.getElementById('newsletter-btn');
    const emailInput = document.getElementById('newsletter-email');
    const thankyou = document.getElementById('newsletter-thankyou');
    
    if(btn && emailInput && thankyou) {
        btn.addEventListener('click', function() {
            if(emailInput.value && /\S+@\S+\.\S+/.test(emailInput.value)) {
                thankyou.style.display = 'block';
                setTimeout(() => { 
                    thankyou.style.display = 'none'; 
                }, 3000);
                emailInput.value = '';
            } else {
                emailInput.focus();
                emailInput.style.borderColor = '#e74c3c';
                setTimeout(() => { 
                    emailInput.style.borderColor = ''; 
                }, 1500);
            }
        });
    }
    
     document.querySelectorAll('.footer-dropdown-header').forEach(header => {
            header.addEventListener('click', () => {
                const parent = header.parentElement;
                parent.classList.toggle('open');
            });
        });
    
    console.log('✅ Footer initialized successfully');
});
