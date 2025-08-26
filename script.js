// Enhanced animations and interactions for Ganesh Aagman website

document.addEventListener('DOMContentLoaded', function() {
    // Add sparkle effect on click
    document.addEventListener('click', createSparkle);
    
    // Auto-play celebration sounds (visual feedback)
    addCelebrationEffects();
    
    // Dynamic greeting based on time
    setDynamicGreeting();
    
    // Add floating elements
    createFloatingElements();
    
    // Initialize interactive elements
    initializeInteractiveElements();
});

function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, #ffd700, #ff6b35);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: sparkleAnimation 1s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation to CSS dynamically
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

function addCelebrationEffects() {
    // Add hover effects to celebration items
    const celebrationItems = document.querySelectorAll('.celebration-item');
    
    celebrationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 20px 40px rgba(255,107,53,0.3)';
            
            // Add temporary glow effect
            const icon = this.querySelector('.icon');
            icon.style.textShadow = '0 0 20px #ff6b35';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            
            const icon = this.querySelector('.icon');
            icon.style.textShadow = 'none';
        });
    });
}

function setDynamicGreeting() {
    const hour = new Date().getHours();
    const welcomeSection = document.querySelector('.welcome-section h3');
    
    if (hour < 12) {
        welcomeSection.innerHTML = '🌅 Good Morning! Welcome Lord Ganesha 🙏';
    } else if (hour < 17) {
        welcomeSection.innerHTML = '☀️ Good Afternoon! Welcome Lord Ganesha 🙏';
    } else {
        welcomeSection.innerHTML = '🪔 Good Evening! Welcome Lord Ganesha 🙏';
    }
}

function createFloatingElements() {
    // Create floating diyas
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingDiya();
        }, i * 2000);
    }
    
    // Create floating flowers
    setInterval(createFloatingFlower, 3000);
}

function createFloatingDiya() {
    const diya = document.createElement('div');
    diya.innerHTML = '🪔';
    diya.style.cssText = `
        position: fixed;
        font-size: 2rem;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        animation: floatUp 8s linear forwards;
    `;
    
    document.body.appendChild(diya);
    
    setTimeout(() => {
        diya.remove();
    }, 8000);
}

function createFloatingFlower() {
    const flowers = ['🌺', '🌸', '🌼', '🌻', '🪷'];
    const flower = document.createElement('div');
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.cssText = `
        position: fixed;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: -50px;
        animation: gentleFloat 12s linear forwards;
    `;
    
    document.body.appendChild(flower);
    
    setTimeout(() => {
        flower.remove();
    }, 12000);
}

// Add floating animations to CSS
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes gentleFloat {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.7;
        }
        25% {
            transform: translateY(25vh) translateX(20px) rotate(90deg);
        }
        50% {
            transform: translateY(50vh) translateX(-20px) rotate(180deg);
            opacity: 1;
        }
        75% {
            transform: translateY(75vh) translateX(15px) rotate(270deg);
        }
        100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingStyle);

function initializeInteractiveElements() {
    // Make Ganesh frame interactive
    const ganeshFrame = document.querySelector('.ganesh-frame');
    ganeshFrame.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'zoomIn 0.5s ease-out';
        }, 10);
        
        // Create blessing particles
        createBlessingParticles();
    });
    
    // Add pulse effect to Om symbol on hover
    const omSymbol = document.querySelector('.om-symbol');
    omSymbol.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
    });
    
    // Make blessing items interactive
    const blessingItems = document.querySelectorAll('.blessing-item');
    blessingItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.animation = 'glow 0.5s ease-in-out';
            createWishParticles(this);
        });
    });
}

function createBlessingParticles() {
    const particles = ['✨', '🌟', '💫', '⭐'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
            particle.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 1000;
                animation: blessingParticle 2s ease-out forwards;
                transform: translate(-50%, -50%);
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }, i * 100);
    }
}

function createWishParticles(element) {
    const rect = element.getBoundingClientRect();
    const particles = ['🙏', '✨', '🌺'];
    
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = particles[i];
        particle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
            font-size: 1.2rem;
            pointer-events: none;
            z-index: 1000;
            animation: wishParticle 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

// Add particle animations
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes blessingParticle {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(0) rotate(360deg) translateY(-100px);
            opacity: 0;
        }
    }
    
    @keyframes wishParticle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg) translateY(-20px);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg) translateY(-50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Add scroll-triggered animations
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.card, .celebration-item, .blessing-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Audio functionality
function initializeAudio() {
    const playBtn = document.getElementById('playBtn');
    const audio = document.getElementById('devotionalAudio');
    
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            this.innerHTML = '⏸️ Pause Song';
            this.classList.add('playing');
        } else {
            audio.pause();
            this.innerHTML = '🎵 Play Devotional Song';
            this.classList.remove('playing');
        }
    });
    
    audio.addEventListener('ended', function() {
        playBtn.innerHTML = '🎵 Play Devotional Song';
        playBtn.classList.remove('playing');
    });
}

// Initialize page with welcome animation
setTimeout(() => {
    document.body.style.opacity = '1';
    initializeAudio();
}, 100);