// =====================================================
// ELITE MOTORS - JavaScript Profissional
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    // ==================== NAVBAR ====================
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            
            // Animação do hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // ==================== SMOOTH SCROLL ====================
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function () {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });

        // Esconder indicador após scroll
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'all';
            }
        });
    }

    // ==================== GALERIA ====================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';

                setTimeout(() => {
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar itens da galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Observar estatísticas
    const stats = document.querySelectorAll('.stat-item');
    stats.forEach((stat, index) => {
        stat.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(stat);
    });

    // ==================== PARALLAX EFFECT ====================
    let ticking = false;
    
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.hero-parallax, .parallax-section-2');

                parallaxElements.forEach(element => {
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            const speed = 0.5;
                            const yPos = -(scrolled * speed);
                            element.style.backgroundPosition = `center ${yPos}px`;
                        }
                    }
                });

                ticking = false;
            });

            ticking = true;
        }
    });

    // ==================== CONTADOR DE ESTATÍSTICAS ====================
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const isPercentage = element.textContent.includes('%');
        const hasPlus = element.textContent.includes('+');

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + (hasPlus ? '+' : '') + (isPercentage ? '%' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + (hasPlus ? '+' : '') + (isPercentage ? '%' : '');
            }
        }, 16);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target.querySelector('h3');
                if (statValue && !statValue.classList.contains('counted')) {
                    statValue.classList.add('counted');
                    const text = statValue.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    statValue.textContent = '0';
                    animateCounter(statValue, number);
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ==================== FORMULÁRIO DE CONTATO ====================
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const button = this.querySelector('.btn-submit');
            const originalText = button.textContent;

            // Animação de loading
            button.textContent = 'Enviando...';
            button.style.opacity = '0.7';
            button.disabled = true;

            // Simular envio (substitua com sua lógica real)
            setTimeout(() => {
                button.textContent = '✓ Mensagem Enviada!';
                button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';

                // Resetar formulário
                this.reset();

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.opacity = '1';
                    button.disabled = false;
                    button.style.background = 'var(--gradient)';
                }, 3000);
            }, 2000);
        });
    }

    // ==================== LOADING DE IMAGENS ====================
    const images = document.querySelectorAll('.image-wrapper img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function () {
                this.style.opacity = '0';
                setTimeout(() => {
                    this.style.transition = 'opacity 0.6s ease';
                    this.style.opacity = '1';
                }, 100);
            });
        }
    });

    // ==================== CURSOR CUSTOMIZADO (OPCIONAL) ====================
    const createCursor = () => {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #c9a050;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease, opacity 0.15s ease;
            display: none;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.display = 'block';
        });

        // Aumentar cursor em hover
        const hoverElements = document.querySelectorAll('a, button, .gallery-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.opacity = '0.5';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.opacity = '1';
            });
        });
    };

    // Ativar cursor customizado apenas em desktop
    if (window.innerWidth > 1024) {
        // createCursor(); // Descomente para ativar
    }

    // ==================== PREVENÇÃO DE CLIQUE DIREITO NAS IMAGENS ====================
    images.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
    });

    // ==================== PERFORMANCE MONITORING ====================
    let interactionCount = 0;
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            interactionCount++;
        });
    });

    // Log de performance a cada 10 interações
    window.addEventListener('beforeunload', () => {
        if (interactionCount > 0) {
            console.log(`%c🚗 Elite Motors - Estatísticas da Sessão`, 'color: #c9a050; font-size: 14px; font-weight: bold;');
            console.log(`Interações com a galeria: ${interactionCount}`);
            console.log(`Tempo na página: ${Math.round(performance.now() / 1000)}s`);
        }
    });

    // ==================== SCROLL PROGRESS BAR ====================
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #c9a050, #8b7355);
            z-index: 9999;
            transition: width 0.1s ease;
            width: 0;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createProgressBar();

    // ==================== CONSOLE STYLING ====================
    console.log(`
    %c
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║       👑  ELITE MOTORS  👑           ║
    ║                                       ║
    ║   Excelência em Automóveis de Luxo   ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    `,
        'color: #c9a050; font-size: 12px; font-family: monospace;'
    );

    console.log('%cPágina carregada com sucesso! ✨', 'color: #c9a050; font-size: 14px; font-weight: bold;');
});

// ==================== DETECÇÃO DE DISPOSITIVO ====================
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

if (isMobile()) {
    console.log('%c📱 Dispositivo móvel detectado', 'color: #8b7355;');
    // Desabilitar parallax para melhor performance
    document.querySelectorAll('.hero-parallax, .parallax-section-2').forEach(el => {
        el.style.backgroundAttachment = 'scroll';
    });
}

