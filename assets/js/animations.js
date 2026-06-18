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
