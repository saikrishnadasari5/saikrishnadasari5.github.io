document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    function handleScroll(event) {
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
        event.preventDefault();
    }

    window.addEventListener('wheel', handleScroll, { passive: false });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            currentSectionIndex = Array.from(sections).indexOf(targetSection);
            scrollToSection(currentSectionIndex);
        });
    });
});