document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal, .expertise-card, .timeline-item, .portfolio-item');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });
    
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigation scroll effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'rgba(10, 14, 20, 0.95)';
        } else {
            nav.classList.remove('scrolled');
            nav.style.padding = '1rem 0';
            nav.style.background = 'rgba(10, 14, 20, 0.8)';
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(10, 14, 20, 0.95)';
            navLinks.style.padding = '2rem';
        });
    }
});

// Add these classes via JS to handle animation initial states
const style = document.createElement('style');
style.textContent = `
    .reveal, .expertise-card, .timeline-item, .portfolio-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .reveal.active, .expertise-card.active, .timeline-item.active, .portfolio-item.active {
        opacity: 1;
        transform: translateY(0);
    }
    .delay-1 { transition-delay: 0.2s; }
    .delay-2 { transition-delay: 0.4s; }
    .delay-3 { transition-delay: 0.6s; }
`;
document.head.appendChild(style);
