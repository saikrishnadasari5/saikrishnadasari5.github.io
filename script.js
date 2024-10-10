// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Automatic scrolling
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    function autoScroll() {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        scrollToSection(currentSectionIndex);
    }

    // Auto scroll every 7 seconds
    setInterval(autoScroll, 7000);

    // Manual navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const targetIndex = Array.from(sections).indexOf(targetSection);
            currentSectionIndex = targetIndex;
            scrollToSection(currentSectionIndex);
        });
    });

    // Innovative skills formatting
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.backgroundColor = '#e74c3c'; // Change color on hover
        });

        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#3498db'; // Revert to original color
        });
    });

    // Animate skill items on page load
    function animateSkills() {
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    animateSkills();
});