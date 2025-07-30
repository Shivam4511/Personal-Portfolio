# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, interactive elements, and a professional design.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Modern UI/UX**: Clean, professional design with gradient backgrounds
- **Interactive Elements**: Hover effects, scroll animations, and form validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Progress Indicators**: Animated skill bars and statistics counters
- **Contact Form**: Functional contact form with validation
- **Particle Effects**: Subtle background animations
- **Scroll Progress**: Visual progress indicator at the top of the page

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)
4. **Deploy** to your preferred hosting service

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<span class="name">Your Name</span>
<p class="hero-subtitle">Full Stack Developer & Creative Designer</p>
<p class="hero-description">
    I create beautiful, functional, and user-centered digital experiences. 
    Passionate about clean code and innovative solutions.
</p>
```

#### About Section
```html
<p>
    I'm a passionate developer with a love for creating meaningful digital experiences. 
    With expertise in modern web technologies, I bring ideas to life through clean code 
    and innovative design solutions.
</p>
```

#### Statistics
```html
<div class="stat">
    <span class="stat-number" data-target="3">0</span>
    <span class="stat-label">Years Experience</span>
</div>
```

#### Contact Information
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

### Skills Section

Update your skills in the skills section:

```html
<div class="skill-item">
    <i class="fab fa-html5"></i>
    <span>HTML5</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="95"></div>
    </div>
</div>
```

- Change the icon class (e.g., `fab fa-react` for React)
- Update the skill name
- Adjust the `data-width` percentage (0-100)

### Projects Section

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-laptop-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### Social Media Links

Update the social media links in the contact section:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/yourusername" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/yourusername" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/yourusername" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

## 🎯 Color Scheme

The current color scheme uses a purple gradient. To change colors, update these CSS variables in `styles.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Alternative color schemes you can try: */
/* Blue gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Green gradient */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* Orange gradient */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Dark theme */
background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
```

## 📱 Responsive Breakpoints

The website is responsive with these breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Advanced Customization

### Adding New Sections

To add a new section, follow this structure:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

### Custom Animations

Add custom CSS animations:

```css
@keyframes your-animation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.your-element {
    animation: your-animation 2s ease-in-out infinite;
}
```

### JavaScript Functionality

Add custom JavaScript functionality in `script.js`:

```javascript
// Your custom code here
document.addEventListener('DOMContentLoaded', () => {
    // Initialize your custom features
});
```

## 🚀 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Customize the URL in the site settings

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## 📞 Support

If you need help customizing your portfolio:

1. Check the comments in the code files
2. Review the customization guide above
3. Modify the CSS variables for quick style changes
4. Test on different devices to ensure responsiveness

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome
- **Design**: Custom design with modern web standards
- **Animations**: CSS3 and JavaScript

---

**Happy coding! 🎉** 