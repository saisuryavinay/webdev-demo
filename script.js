// Page Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000); // Loader shows for 1 second
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Section and Grid Item Animations
const sections = document.querySelectorAll('.section');
const gridItems = document.querySelectorAll('.team-item, .stat, .income-item, .portfolio-item, .insurance-item, .investment-item, .hazard-item');
const listItems = document.querySelectorAll('ol li');

const revealElements = () => {
    const triggerBottom = window.innerHeight * 0.8;

    // Section Reveal
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // Grid Items Staggered Animation
    gridItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100); // Stagger by 100ms per item
        } else {
            item.classList.remove('visible');
        }
    });

    // List Items Animation
    listItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150); // Stagger by 150ms per item
        } else {
            item.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
