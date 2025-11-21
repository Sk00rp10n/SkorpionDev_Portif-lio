// script.js - Funcionalidades extras
document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação
    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(element => {
        const originalText = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                element.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Inicia digitação quando elemento entra na viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efeito glitch aleatório
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(element => {
            if (Math.random() > 0.7) {
                element.style.animation = 'glitch 0.3s';
                setTimeout(() => {
                    element.style.animation = '';
                }, 300);
            }
        });
    }, 3000);
});
// Adiciona isso no teu script.js - Efeito de clique na imagem
document.addEventListener('DOMContentLoaded', function() {
    const hackerImg = document.querySelector('.hacker-img');
    if (hackerImg) {
        hackerImg.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
            
            // Efeito de glitch na hora do clique
            this.style.filter = 'hue-rotate(90deg)';
            setTimeout(() => {
                this.style.filter = 'hue-rotate(0)';
            }, 300);
        });
    }
});
