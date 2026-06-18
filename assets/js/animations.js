// ===== Advanced Animations =====

document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero sections
    const hero = document.querySelector('.page-header, .hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            if (scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                hero.style.opacity = 1 - (scrolled / hero.offsetHeight);
            }
        });
    }
    
    // Card hover 3D effect
    const cards = document.querySelectorAll('.feature-card, .solution-card, .portfolio-item');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
    
    // Counter animation for stats
    const stats = document.querySelectorAll('.stats-grid h2');
    stats.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/[^0-9]/g, ''));
        
        if (number && !isNaN(number)) {
            const suffix = text.replace(/[0-9]/g, '');
            let current = 0;
            const increment = number / 50;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const interval = setInterval(() => {
                            current += increment;
                            if (current >= number) {
                                current = number;
                                clearInterval(interval);
                            }
                            stat.textContent = Math.floor(current) + suffix;
                        }, 30);
                        observer.unobserve(stat);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(stat);
        }
    });
});

// ===== Advanced Animations =====
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            if (scrolled < hero.offsetHeight) {
                const speed = 0.3;
                hero.style.backgroundPositionY = `${scrolled * speed}px`;
            }
        });
    }

    // 3D Tilt Effect on Cards
    const cards = document.querySelectorAll('.feature-card, .solution-card, .portfolio-item, .dashboard-mockup');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            this.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });

    // Typewriter effect (if any element with class 'typewriter')
    const typewriterElements = document.querySelectorAll('.typewriter');
    if (typewriterElements.length > 0) {
        typewriterElements.forEach(el => {
            const text = el.textContent;
            el.textContent = '';
            let index = 0;
            
            const type = () => {
                if (index < text.length) {
                    el.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 50);
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        type();
                        observer.unobserve(el);
                    }
                });
            });
            
            observer.observe(el);
        });
    }

    // Reveal on scroll with stagger
    const staggerElements = document.querySelectorAll('.stagger-item');
    if (staggerElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.stagger-child');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('revealed');
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        staggerElements.forEach(el => observer.observe(el));
    }

    // Floating animation for icons
    const floatElements = document.querySelectorAll('.float-animation');
    floatElements.forEach((el, index) => {
        const duration = 3 + (index % 2);
        const delay = index * 0.5;
        el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });

    // Add float keyframes if not exists
    if (!document.querySelector('#float-keyframes')) {
        const style = document.createElement('style');
        style.id = 'float-keyframes';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }

    // Glow effect on hover
    const glowElements = document.querySelectorAll('.glow-on-hover');
    glowElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(10, 132, 255, 0.3)';
        });
        el.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.dataset.progress || '0%';
                    bar.style.width = width;
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => observer.observe(bar));
    }

    // Ripple effect on buttons
    const rippleButtons = document.querySelectorAll('.ripple');
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple styles if not exists
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .ripple {
                position: relative;
                overflow: hidden;
            }
            .ripple-effect {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
            }
            @keyframes ripple-animation {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});
