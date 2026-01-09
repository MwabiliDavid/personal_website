// Minimal JavaScript for Personal Website

// Update copyright year
const yearElement = document.getElementById('currentYear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Handle contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (name && email) {
            alert(`Thank you ${name}! I'll get back to you soon.`);
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}