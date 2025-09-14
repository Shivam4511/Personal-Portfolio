// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
if (currentTheme === 'dark') {
    themeIcon.className = 'fas fa-moon';
} else {
    themeIcon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    if (newTheme === 'dark') {
        themeIcon.className = 'fas fa-moon';
    } else {
        themeIcon.className = 'fas fa-sun';
    }
    
    // Add transition effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (window.scrollY > 100) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.6)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Handle timeline and achievement card animations
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
            if (entry.target.classList.contains('achievement-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.about-content, .skills-grid, .timeline, .projects-grid, .achievements-grid, .contact-content');
    
    animateElements.forEach((element, index) => {
        if (index % 2 === 0) {
            element.classList.add('slide-in-left');
        } else {
            element.classList.add('slide-in-right');
        }
        observer.observe(element);
    });

    // Animate skill progress bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        observer.observe(bar);
    });

    // Animate stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.classList.add('scale-in');
        observer.observe(stat);
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        item.style.transition = 'all 0.8s ease';
        observer.observe(item);
    });

    // Animate achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Animate skill progress bars when visible
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width + '%';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// Animate stats numbers
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const target = parseInt(statNumber.getAttribute('data-target'));
            animateNumber(statNumber, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        typeWriter(nameElement, originalText, 150);
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        icon.style.transform = `translateY(${yPos}px)`;
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    revealObserver.observe(section);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add particle background effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
    `;
    
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear'
    });
    
    animation.onfinish = () => {
        particle.remove();
    };
}

// Create particles periodically
setInterval(createParticle, 300);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Project Modal Functionality
const modal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

// Project data
const projectData = {
    learnify: {
        title: 'Learnify.ai',
        category: 'Learning Platform',
        icon: 'fas fa-brain',
        description: 'Learnify.ai revolutionizes education through intelligent flashcard generation using advanced Large Language Models. The platform features adaptive learning algorithms that create personalized study materials based on individual learning patterns.',
        features: [
            'Intelligent flashcard generation using LLMs',
            'Adaptive learning algorithms for personalized study',
            'Spaced repetition algorithms for optimal retention',
            'Topic-wise organization and categorization',
            'Real-time progress tracking and analytics',
            'Interactive explanations and learning insights',
            'Multi-subject support and cross-platform compatibility',
            'Real Life usecase: helps students learn and revise concepts efficiently, instant summary of long pdfs.'
        ],
        tech: ['Python, ', 'Flask, ', 'NLP, ', 'LLM, ', 'MongoDB, ', 'OpenAI API, ','Streamlit'],
        achievements: 'Successfully implemented advanced NLP algorithms for content generation and user personalization.',
        


        github: 'https://github.com/Shivam4511/Learnify.ai',
        demo: null
    },
    yoca: {
        title: 'YOCA',
        category: 'Healthcare App',
        icon: 'fas fa-heartbeat',
        description: 'YOCA is a comprehensive healthcare solution designed to empower patients with chronic conditions through intelligent health monitoring and management. The platform integrates advanced machine learning algorithms to analyze lab reports and predict potential health complications.',
        features: [
            'ML-powered health trend analysis',
            'Medication adherence tracking',
            'Lab report analysis and insights',
            'Doctor recommendations based on location',
            'Personalized health insights and alerts',
            'Mobile-first design for accessibility',
            'Real-time health monitoring dashboard',
            'Real_life_use: Real life use of the project is to help patients manage their chronic conditions and get personalized health insights and doctor recommendations.',
        ],
        tech: ['Sci-kit Learn, ', 'Flask, ', 'React-Native, ', 'Python, ', 'OCR & Tesseract, ', 'Supabase,','GeoLocation API'],
        achievements: 'Top 5 finalist in International Hackathon, demonstrating innovation in healthcare technology.',
        
        github: 'https://github.com/Shivam4511/Yoca',
        demo: null
    },
    trackmylane: {
        title: 'Track My Lane',
        category: 'Computer Vision',
        icon: 'fas fa-car',
        description: 'TrackMyLane is an advanced computer vision application that provides real-time lane detection and analysis for autonomous and assisted driving systems. The system processes live dashcam footage using sophisticated image processing algorithms.',
        features: [
            'Real-time lane boundary detection',
            'Lane departure warning system',
            'Curve detection and analysis',
            'Adaptive speed recommendations',
            'Multi-condition weather support',
            'Audio and visual feedback alerts',
            'High accuracy across various road conditions',
            'Real_life_use: Real life use of the project is to help in automatic cars detecting Lanes.',
        ],
        tech: ['OpenCV, ', 'Python, ', 'Flask, ', 'NumPy, ', 'Computer Vision, ', 'Machine Learning,'],
        achievements: 'Achieved high accuracy in lane detection across various lighting and weather conditions.',
        
        github: 'https://github.com/Shivam4511/TrackMyLane',
        demo: null
    },
    billbot: {
        title: 'BillBot',
        category: 'Computer Vision and Deep Learning',
        icon: 'fas fa-camera',
        description: 'BillBot is a deep learning based billboard detection system used for automatic billboard detection, flagging and classification.',
        features: [
            'Flags problematic billboards in the area taking size reference according to goverment regulations',
            'Checks Content, Size, Traffic issues, near any School or Hospital',
            'Tells the exact issue after detection',
            'Real_life_use: Help to flag the problematic billboards in the area and tag to government systems. Checks Problem Related to content, sizes, traffic.',
            
        ],
        tech: ['Deep Learning, ', 'FastAPI, ', 'NSFW, ', 'YOLO, ', 'Python '],
        achievements: 'Successfully implemented deep learning based billboard detection system.',
        
        github: 'https://github.com/Shivam4511/BillBot',
        demo: null
    },
    cinesage: {
        title: 'CineSage',
        category: 'Recommendation System',
        icon: 'fas fa-film',
        description: 'CineSage is a recommendation system for movies using content and collaborative filtering, powered by LLMs for explainable AI.',
        features: [
            'Content-based and Collaborative filtering recommendation system',
            'Collaborative filtering recommendation system',
            'LLM-powered query solver',
            'Explainable AI',
            'Real_life_use: Helps to summarize movies according to user choice, explaining the context and has been trained on data for predicting the movie based on past use case so can be integrateed into any platform easily like Netflix.',
            

        ],
        tech: ['Machine Learning, ', 'FastAPI, ', 'HTML5 & CSS3, ', 'LLMs, ', 'Content and Collaborative Filtering '],
        achievements: 'Successfully implemented recommendation system for movies using content and collaborative filtering, powered by LLMs.',
        
        github: 'https://github.com/Shivam4511/CineSage',
        demo: null
    }
};

// Open modal function
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Populate modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-icon').className = project.icon;
    document.getElementById('modal-description').textContent = project.description;
    
    // Populate features
    const featuresList = document.getElementById('modal-features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Populate tech stack
    const techStack = document.getElementById('modal-tech-stack');
    techStack.innerHTML = '';
    project.tech.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
    });
    
    // Populate achievements
    document.getElementById('modal-achievements').textContent = project.achievements;
    
    // Set links
    document.getElementById('modal-github-link').href = project.github;
    const demoLink = document.getElementById('modal-demo-link');
    if (project.demo) {
        demoLink.href = project.demo;
        demoLink.style.display = 'inline-block';
    } else {
        demoLink.style.display = 'none';
    }
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Event listeners
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectCard = btn.closest('.project-card');
        const projectId = projectCard.getAttribute('data-project');
        openModal(projectId);
    });
});

closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModalFunc();
    }
});


// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
} 