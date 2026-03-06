document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Update active nav link
                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Toggle project and about sections
    const showProjectsBtn = document.getElementById('showProjects');
    const showAboutBtn = document.getElementById('showAbout');
    const projectsSection = document.getElementById('projects');
    const aboutSection = document.getElementById('about');

    showProjectsBtn.addEventListener('click', function() {
        projectsSection.style.display = 'block';
        aboutSection.style.display = 'none';
        this.classList.add('active');
        showAboutBtn.classList.remove('active');
    });

    showAboutBtn.addEventListener('click', function() {
        aboutSection.style.display = 'block';
        projectsSection.style.display = 'none';
        this.classList.add('active');
        showProjectsBtn.classList.remove('active');
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // In a real application, you would send this data to a server
            alert(`Thank you, ${name}! Your message has been received.`);
            this.reset();
        });
    }

    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add animation for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > heroSection.offsetTop - 100) {
                heroSection.style.opacity = '1';
                heroSection.style.transform = 'translateY(0)';
            }
        });

        // Initial animation
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }

    // Add fade-in effect for project cards
    const projectCardsFade = document.querySelectorAll('.project-card');
    projectCardsFade.forEach((card, index) => {
        const delay = index * 0.2;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity ${0.6 + delay}s ease, transform ${0.6 + delay}s ease`;

        window.addEventListener('scroll', function() {
            if (window.scrollY > card.offsetTop - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
});