// ===========================
// Language Switcher Module
// ===========================

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            contact: "Contact"
        },

        // Hero Section
        hero: {
            greeting: "Hi, my name is",
            name: "Gonzalo Rocca.",
            title: "I build things for the web.",
            description: "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm working as a Senior Backend Engineer at a ",
            company: "leading tech company",
            descriptionEnd: " building scalable solutions and enterprise systems.",
            getInTouch: "Get In Touch",
            downloadCV: "Download CV",
            scrollDown: "Scroll Down"
        },

        // About Section
        about: {
            title: "About Me",
            paragraph1: "Hello! I'm Gonzalo, a passionate software engineer who lives in San Luis, Argentina. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.",
            paragraph2: "My journey in technology began with curiosity about how things work. This passion led me to specialize in cybersecurity, earning my CEH (Certified Ethical Hacker) certification from EC-Council, which allows me to build more robust and secure systems for the companies I work with.",
            paragraph3: "Fast-forward to today, and I've had the privilege of working at leading technology companies in Latin America, from innovative startups to large corporations. My main focus these days is building robust backend systems and scalable architectures that impact millions of users daily.",
            stats: {
                yearsExp: "Years Experience",
                projects: "Projects Completed",
                companies: "Companies"
            }
        },

        // Experience Section
        experience: {
            title: "Where I've Worked",
            current: {
                position: "Senior Backend Engineer @ Telecom Argentina",
                location: "Buenos Aires, Argentina",
                date: "2023 - Present",
                description: [
                    "Design and develop scalable backend systems for Personal mobile services and Personal Pay digital wallet platform",
                    "Lead technical initiatives for digital transformation of mobile services and payment solutions",
                    "Architect microservices solutions using Java Spring Boot and Node.js for Personal mobile phone services and Personal Pay transactions",
                    "Collaborate with cross-functional teams to deliver enterprise-level solutions for mobile carrier operations and digital payment processing",
                    "Optimize system performance and reliability for critical mobile network services and secure payment infrastructure"
                ],
                companyInfo: "At Telecom Argentina, I work on backend solutions for Personal, one of Argentina's leading mobile phone companies, and Personal Pay, a virtual wallet and digital payment platform serving millions of users."
            },
            mercadoLibre: {
                position: "Software Engineer @ Mercado Libre",
                location: "San Luis, Argentina",
                date: "2020 - 2023",
                description: [
                    "Developed and maintained fraud prevention systems handling millions of transactions daily",
                    "Collaborated with cross-functional teams to implement security measures",
                    "Optimized algorithms that reduced fraud incidents by 35%",
                    "Worked with modern tech stack including Java, Node.js, and cloud services"
                ]
            },
            beclever: {
                position: "Software Engineer @ Beclever",
                location: "San Luis, Argentina",
                date: "2018 - 2020",
                description: [
                    "Built scalable web applications for various clients",
                    "Led development of e-commerce platform serving 10k+ users",
                    "Implemented CI/CD pipelines improving deployment efficiency by 50%"
                ]
            },
            pixart: {
                position: "Software Engineer @ Pixart SRL",
                location: "Buenos Aires, Argentina",
                date: "2016 - 2018",
                description: [
                    "Developed and maintained Mobile Device Management (MDM) systems for government clients in Ecuador, Guatemala, and Bolivia managing 20,000+ devices",
                    "Led implementation of MDM solution in San Luis, Argentina for control and management of 120,000 tablets",
                    "Built content filtering platform (SAFEWEB) to protect minors from inappropriate internet content",
                    "Developed IURIX judicial management system for electronic case files and digital document processing",
                    "Created educational content distribution system (EDURXART) for digital learning management"
                ]
            }
        },

        // Skills Section
        skills: {
            title: "Skills & Technologies",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools & Others",
            education: {
                title: "Education & Certifications",
                degree: "Computer Engineering",
                university: "Universidad Nacional de San Luis",
                fullstack: "Full Stack Web Development",
                digitalhouse: "DigitalHouse",
                ceh: "CEH - Ethical Hacking",
                eccouncil: "EC-Council"
            }
        },

        // Contact Section
        contact: {
            title: "Get In Touch",
            description: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            email: "Email",
            whatsapp: "WhatsApp",
            location: "Location",
            locationValue: "San Luis, Argentina",
            sayHello: "Say Hello"
        },

        // Footer
        footer: {
            designedBy: "Designed & Built by Gonzalo Rocca",
            allRights: "All rights reserved"
        },

        // Code Window
        codeWindow: {
            role: "Senior Backend Engineer",
            experience: 9,
            location: "Argentina",
            passions: ["coding", "problem-solving", "innovation"]
        }
    },

    es: {
        // Navigation
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            experience: "Experiencia",
            skills: "Habilidades",
            contact: "Contacto"
        },

        // Hero Section
        hero: {
            greeting: "Hola, mi nombre es",
            name: "Gonzalo Rocca.",
            title: "Construyo cosas para la web.",
            description: "Soy un ingeniero de software especializado en crear experiencias digitales excepcionales. Actualmente, trabajo como Ingeniero Backend Senior en una ",
            company: "empresa líder en tecnología",
            descriptionEnd: " construyendo soluciones escalables y sistemas empresariales.",
            getInTouch: "Contactar",
            downloadCV: "Descargar CV",
            scrollDown: "Desplázate hacia abajo"
        },

        // About Section
        about: {
            title: "Sobre Mí",
            paragraph1: "Hola! Soy Gonzalo, un apasionado ingeniero de software que vive en San Luis, Argentina. Disfruto creando cosas que viven en internet, ya sean sitios web, aplicaciones o cualquier cosa intermedia.",
            paragraph2: "Mi viaje en la tecnología comenzó con la curiosidad por entender cómo funcionan las cosas. Esta pasión me llevó a especializarme en seguridad informática, obteniendo mi certificación CEH (Certified Ethical Hacker) de EC-Council, lo que me permite construir sistemas más robustos y seguros para las empresas con las que trabajo.",
            paragraph3: "Avanzando hasta hoy, he tenido el privilegio de trabajar en empresas líderes del sector tecnológico en América Latina, desde startups innovadoras hasta grandes corporaciones. Mi enfoque principal estos días es construir sistemas backend robustos y arquitecturas escalables que impactan millones de usuarios diariamente.",
            stats: {
                yearsExp: "Años de Experiencia",
                projects: "Proyectos Completados",
                companies: "Empresas"
            }
        },

        // Experience Section
        experience: {
            title: "Dónde He Trabajado",
            current: {
                position: "Ingeniero Backend Senior @ Telecom Argentina",
                location: "Buenos Aires, Argentina",
                date: "2023 - Presente",
                description: [
                    "Diseño y desarrollo de sistemas backend escalables para los servicios móviles de Personal y la plataforma de billetera digital Personal Pay",
                    "Lidero iniciativas técnicas para la transformación digital de servicios móviles y soluciones de pago",
                    "Arquitecto de soluciones de microservicios usando Java Spring Boot y Node.js para servicios de telefonía móvil Personal y transacciones de Personal Pay",
                    "Colaboro con equipos multifuncionales para entregar soluciones empresariales para operaciones de telefonía móvil y procesamiento de pagos digitales",
                    "Optimizo el rendimiento y confiabilidad del sistema para servicios críticos de red móvil e infraestructura segura de pagos"
                ],
                companyInfo: "En Telecom Argentina, trabajo en soluciones backend para Personal, una de las principales empresas de telefonía móvil de Argentina, y Personal Pay, una billetera virtual y plataforma de pagos digitales que sirve a millones de usuarios."
            },
            mercadoLibre: {
                position: "Ingeniero de Software @ Mercado Libre",
                location: "San Luis, Argentina",
                date: "2020 - 2023",
                description: [
                    "Desarrollé y mantuve sistemas de prevención de fraude manejando millones de transacciones diarias",
                    "Colaboré con equipos multifuncionales para implementar medidas de seguridad",
                    "Optimicé algoritmos que redujeron los incidentes de fraude en un 35%",
                    "Trabajé con stack tecnológico moderno incluyendo Java, Node.js y servicios cloud"
                ]
            },
            beclever: {
                position: "Ingeniero de Software @ Beclever",
                location: "San Luis, Argentina",
                date: "2018 - 2020",
                description: [
                    "Construí aplicaciones web escalables para varios clientes",
                    "Lideré el desarrollo de plataforma e-commerce sirviendo a más de 10k usuarios",
                    "Implementé pipelines CI/CD mejorando la eficiencia de despliegue en un 50%"
                ]
            },
            pixart: {
                position: "Ingeniero de Software @ Pixart SRL",
                location: "Buenos Aires, Argentina",
                date: "2016 - 2018",
                description: [
                    "Desarrollé soluciones de software personalizadas para la comunidad gaming",
                    "Creé plataforma de gestión de servidores de juegos usada por más de 5k usuarios",
                    "Construí infraestructura de streaming para eventos de esports"
                ]
            }
        },

        // Skills Section
        skills: {
            title: "Habilidades y Tecnologías",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Herramientas y Otros",
            education: {
                title: "Educación y Certificaciones",
                degree: "Ingeniería en Computación",
                university: "Universidad Nacional de San Luis",
                fullstack: "Desarrollo Web Full Stack",
                digitalhouse: "DigitalHouse",
                ceh: "CEH - Ethical Hacking",
                eccouncil: "EC-Council"
            }
        },

        // Contact Section
        contact: {
            title: "Ponte en Contacto",
            description: "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré lo posible por responderte!",
            email: "Correo",
            whatsapp: "WhatsApp",
            location: "Ubicación",
            locationValue: "San Luis, Argentina",
            sayHello: "Saludar"
        },

        // Footer
        footer: {
            designedBy: "Diseñado y Construido por Gonzalo Rocca",
            allRights: "Todos los derechos reservados"
        },

        // Code Window
        codeWindow: {
            role: "Ingeniero Backend Senior",
            experience: 9,
            location: "Argentina",
            passions: ["programación", "resolución de problemas", "innovación"]
        }
    }
};

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'es';
        this.init();
    }

    init() {
        this.createLanguageToggle();
        this.applyTranslations();
        this.bindEvents();
    }

    createLanguageToggle() {
        // Add language toggle to navigation
        const navActions = document.querySelector('.nav-actions');
        if (navActions) {
            const languageToggle = document.createElement('div');
            languageToggle.className = 'language-toggle';
            languageToggle.innerHTML = `
                <button class="lang-btn ${this.currentLanguage === 'es' ? 'active' : ''}" data-lang="es">ES</button>
                <button class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            `;

            // Insert before theme toggle
            const themeToggle = navActions.querySelector('.theme-toggle');
            navActions.insertBefore(languageToggle, themeToggle);
        }
    }

    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Apply translations
        this.applyTranslations();

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    applyTranslations() {
        const t = translations[this.currentLanguage];

        // Update page title and meta description
        document.title = this.currentLanguage === 'en'
            ? 'Gonzalo Rocca - Senior Backend Engineer'
            : 'Gonzalo Rocca - Ingeniero Backend Senior';

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.currentLanguage === 'en'
                ? 'Senior Backend Engineer at Telecom Argentina with 9+ years of experience specializing in backend systems for Personal mobile services and Personal Pay digital wallet platform'
                : 'Ingeniero Backend Senior en Telecom Argentina con más de 9 años de experiencia especializado en sistemas backend para servicios móviles Personal y la plataforma de billetera digital Personal Pay';
        }

        // Update navigation
        this.updateNavigation(t.nav);

        // Update hero section
        this.updateHeroSection(t.hero);

        // Update about section
        this.updateAboutSection(t.about);

        // Update experience section
        this.updateExperienceSection(t.experience);

        // Update skills section
        this.updateSkillsSection(t.skills);

        // Update contact section
        this.updateContactSection(t.contact);

        // Update footer
        this.updateFooter(t.footer);

        // Update code window
        this.updateCodeWindow(t.codeWindow);
    }

    updateNavigation(navTranslations) {
        const navItems = [
            { selector: 'a[href="#home"]', text: navTranslations.home },
            { selector: 'a[href="#about"]', text: navTranslations.about },
            { selector: 'a[href="#experience"]', text: navTranslations.experience },
            { selector: 'a[href="#skills"]', text: navTranslations.skills },
            { selector: 'a[href="#contact"]', text: navTranslations.contact }
        ];

        navItems.forEach(item => {
            const element = document.querySelector(`.nav-link${item.selector}`);
            if (element) {
                const number = element.querySelector('.nav-number');
                element.innerHTML = `${number ? number.outerHTML : ''} ${item.text}`;
            }
        });
    }

    updateHeroSection(heroTranslations) {
        const greeting = document.querySelector('.hero-greeting');
        if (greeting) {
            // Disable typing animation when changing language
            greeting.style.animation = 'none';
            greeting.textContent = heroTranslations.greeting;
        }

        const name = document.querySelector('.hero-name');
        if (name) name.textContent = heroTranslations.name;

        const title = document.querySelector('.hero-title');
        if (title) title.textContent = heroTranslations.title;

        const description = document.querySelector('.hero-description');
        if (description) {
            description.innerHTML = `
                ${heroTranslations.description}
                <span class="highlight">${heroTranslations.company}</span>
                ${heroTranslations.descriptionEnd}
            `;
        }

        const getInTouch = document.querySelector('.hero-cta .btn-primary span');
        if (getInTouch) getInTouch.textContent = heroTranslations.getInTouch;

        const downloadCV = document.querySelector('.hero-cta .btn-outline span');
        if (downloadCV) downloadCV.textContent = heroTranslations.downloadCV;

        const scrollText = document.querySelector('.scroll-text');
        if (scrollText) scrollText.textContent = heroTranslations.scrollDown;
    }

    updateAboutSection(aboutTranslations) {
        const sectionTitle = document.querySelector('#about .section-title');
        if (sectionTitle) {
            const number = sectionTitle.querySelector('.section-number');
            sectionTitle.innerHTML = `${number ? number.outerHTML : ''} ${aboutTranslations.title}`;
        }

        const paragraphs = document.querySelectorAll('.about-text p');
        if (paragraphs.length >= 3) {
            paragraphs[0].textContent = aboutTranslations.paragraph1;
            paragraphs[1].textContent = aboutTranslations.paragraph2;
            paragraphs[2].textContent = aboutTranslations.paragraph3;
        }

        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].textContent = aboutTranslations.stats.yearsExp;
            statLabels[1].textContent = aboutTranslations.stats.projects;
            statLabels[2].textContent = aboutTranslations.stats.companies;
        }
    }

    updateExperienceSection(expTranslations) {
        const sectionTitle = document.querySelector('#experience .section-title');
        if (sectionTitle) {
            const number = sectionTitle.querySelector('.section-number');
            sectionTitle.innerHTML = `${number ? number.outerHTML : ''} ${expTranslations.title}`;
        }

        // Update timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');

        // Update current position (Telecom Argentina)
        if (timelineItems[0]) {
            this.updateTimelineItem(timelineItems[0], expTranslations.current, '2023 - ' + (this.currentLanguage === 'en' ? 'Present' : 'Presente'));
        }

        // Update Mercado Libre
        if (timelineItems[1]) {
            this.updateTimelineItem(timelineItems[1], expTranslations.mercadoLibre, expTranslations.mercadoLibre.date);
        }

        // Update Beclever
        if (timelineItems[2]) {
            this.updateTimelineItem(timelineItems[2], expTranslations.beclever, expTranslations.beclever.date);
        }

        // Update Pixart
        if (timelineItems[3]) {
            this.updateTimelineItem(timelineItems[3], expTranslations.pixart, expTranslations.pixart.date);
        }
    }

    updateTimelineItem(item, data, date) {
        const dateElement = item.querySelector('.timeline-date');
        if (dateElement) dateElement.textContent = date;

        const titleElement = item.querySelector('.timeline-title');
        if (titleElement) titleElement.textContent = data.position;

        const locationElement = item.querySelector('.timeline-location');
        if (locationElement) locationElement.textContent = data.location;

        const descriptionList = item.querySelector('.timeline-description');
        if (descriptionList && data.description) {
            descriptionList.innerHTML = data.description.map(desc => `<li>${desc}</li>`).join('');
        }
    }

    updateSkillsSection(skillsTranslations) {
        const sectionTitle = document.querySelector('#skills .section-title');
        if (sectionTitle) {
            const number = sectionTitle.querySelector('.section-number');
            sectionTitle.innerHTML = `${number ? number.outerHTML : ''} ${skillsTranslations.title}`;
        }

        // Update category titles
        const categoryTitles = document.querySelectorAll('.category-title');
        if (categoryTitles.length >= 3) {
            categoryTitles[0].innerHTML = `<i class="fas fa-code"></i> ${skillsTranslations.frontend}`;
            categoryTitles[1].innerHTML = `<i class="fas fa-server"></i> ${skillsTranslations.backend}`;
            categoryTitles[2].innerHTML = `<i class="fas fa-tools"></i> ${skillsTranslations.tools}`;
        }

        // Update education section
        const educationTitle = document.querySelector('.subsection-title');
        if (educationTitle) educationTitle.textContent = skillsTranslations.education.title;

        const educationCards = document.querySelectorAll('.education-card');
        if (educationCards.length >= 3) {
            educationCards[0].querySelector('h4').textContent = skillsTranslations.education.degree;
            educationCards[0].querySelector('p').textContent = skillsTranslations.education.university;

            educationCards[1].querySelector('h4').textContent = skillsTranslations.education.fullstack;
            educationCards[1].querySelector('p').textContent = skillsTranslations.education.digitalhouse;

            educationCards[2].querySelector('h4').textContent = skillsTranslations.education.ceh;
            educationCards[2].querySelector('p').textContent = skillsTranslations.education.eccouncil;
        }
    }

    updateContactSection(contactTranslations) {
        const sectionTitle = document.querySelector('#contact .section-title');
        if (sectionTitle) {
            const number = sectionTitle.querySelector('.section-number');
            sectionTitle.innerHTML = `${number ? number.outerHTML : ''} ${contactTranslations.title}`;
        }

        const description = document.querySelector('.contact-description');
        if (description) description.textContent = contactTranslations.description;

        const contactCards = document.querySelectorAll('.contact-card h3');
        if (contactCards.length >= 3) {
            contactCards[0].textContent = contactTranslations.email;
            contactCards[1].textContent = contactTranslations.whatsapp;
            contactCards[2].textContent = contactTranslations.location;
        }

        const locationValue = document.querySelector('.contact-card:nth-child(3) p');
        if (locationValue) locationValue.textContent = contactTranslations.locationValue;

        const sayHelloBtn = document.querySelector('.contact-cta .btn span');
        if (sayHelloBtn) sayHelloBtn.textContent = contactTranslations.sayHello;
    }

    updateFooter(footerTranslations) {
        const footerText = document.querySelector('.footer-text');
        if (footerText) footerText.textContent = footerTranslations.designedBy;

        const footerCopyright = document.querySelector('.footer-copyright');
        if (footerCopyright) {
            const year = new Date().getFullYear();
            footerCopyright.textContent = `© ${year} ${footerTranslations.allRights}`;
        }
    }

    updateCodeWindow(codeTranslations) {
        const codeContent = document.querySelector('.code-content');
        if (codeContent) {
            codeContent.innerHTML = `
<span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">'Gonzalo Rocca'</span>,
  <span class="code-property">role</span>: <span class="code-string">'${codeTranslations.role}'</span>,
  <span class="code-property">experience</span>: <span class="code-number">${codeTranslations.experience}</span>,
  <span class="code-property">location</span>: <span class="code-string">'${codeTranslations.location}'</span>,
  <span class="code-property">passions</span>: [
    <span class="code-string">'${codeTranslations.passions[0]}'</span>,
    <span class="code-string">'${codeTranslations.passions[1]}'</span>,
    <span class="code-string">'${codeTranslations.passions[2]}'</span>
  ]
};
            `;
        }
    }
}

// Initialize language switcher when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LanguageSwitcher();
    });
} else {
    new LanguageSwitcher();
}