document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    function activateSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            activateSection(targetId);
            window.location.hash = targetId;
        });
    });

    window.addEventListener('hashchange', function() {
        const targetId = window.location.hash.substring(1);
        activateSection(targetId);
    });

    const initialSection = window.location.hash.substring(1) || 'home';
    activateSection(initialSection);
});
