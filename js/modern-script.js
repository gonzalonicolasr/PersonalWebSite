// ===========================
// Modern Portfolio JavaScript
// ===========================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // Navigation Functionality
    // ===========================

    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Navbar background on scroll
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', () => {
        highlightNavLink();
        handleNavbarScroll();
    });

    // ===========================
    // Theme Toggle
    // ===========================

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        if (body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // ===========================
    // Smooth Scrolling
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Height of fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Back to Top Button
    // ===========================

    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===========================
    // Typing Animation
    // ===========================

    const typeWriter = (element, text, speed = 50) => {
        let index = 0;
        element.textContent = '';

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    };

    // Apply typing animation to hero greeting
    const heroGreeting = document.querySelector('.hero-greeting');
    if (heroGreeting) {
        const originalText = heroGreeting.textContent;
        setTimeout(() => {
            typeWriter(heroGreeting, originalText, 30);
        }, 500);
    }

    // ===========================
    // Number Counter Animation
    // ===========================

    const animateValue = (element, start, end, duration) => {
        const startTimestamp = Date.now();
        const step = () => {
            const timestamp = Date.now();
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (!stat.classList.contains('animated')) {
                        animateValue(stat, 0, target, 2000);
                        stat.classList.add('animated');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        statsObserver.observe(aboutStats);
    }

    // ===========================
    // Skills Progress Animation
    // ===========================

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    if (!bar.classList.contains('animated')) {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                            bar.classList.add('animated');
                        }, 200);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsObserver.observe(skillsGrid);
    }

    // ===========================
    // Timeline Animation
    // ===========================

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });

    // ===========================
    // Parallax Effect for Hero Section
    // ===========================

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const gradientSpheres = document.querySelectorAll('.gradient-sphere');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }

        // Parallax for gradient spheres
        gradientSpheres.forEach((sphere, index) => {
            const speed = 0.5 + (index * 0.1);
            sphere.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.2}px)`;
        });
    });

    // ===========================
    // Magnetic Buttons Effect
    // ===========================

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });

    // ===========================
    // Contact Cards Tilt Effect
    // ===========================

    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ===========================
    // Smooth Reveal on Scroll
    // ===========================

    const revealElements = document.querySelectorAll('.section-container > *');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        revealObserver.observe(element);
    });

    // ===========================
    // Custom Cursor (Desktop Only)
    // ===========================

    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursorDot);

        // Add styles for custom cursor
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                width: 30px;
                height: 30px;
                border: 2px solid var(--accent-primary);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.2s ease;
                mix-blend-mode: difference;
            }

            .cursor-dot {
                width: 6px;
                height: 6px;
                background: var(--accent-primary);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            }

            a:hover ~ .custom-cursor,
            button:hover ~ .custom-cursor {
                transform: scale(1.5);
            }
        `;
        document.head.appendChild(style);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 15 + 'px';
            cursor.style.top = e.clientY - 15 + 'px';

            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(0.8)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });
    }

    // ===========================
    // Preloader (Optional)
    // ===========================

    window.addEventListener('load', () => {
        // Remove any loading classes if you add a preloader
        document.body.classList.add('loaded');
    });

    // ===========================
    // Console Easter Egg
    // ===========================

    console.log(
        '%c Welcome to my portfolio! ',
        'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 10px;'
    );
    console.log(
        '%c Feel free to explore the code! If you have any questions, reach out at gonzalonicolas.dev@gmail.com',
        'color: #64ffda; font-size: 14px;'
    );
});

// ===========================
// Utility Functions
// ===========================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}