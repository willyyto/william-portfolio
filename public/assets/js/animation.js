const sections = document.querySelectorAll('.hidden-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
        } else {
            entry.target.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.add('opacity-0', 'translate-y-10', 'scale-95');
        }
    });
}, {
    threshold: [0, 0.5, 1]  // More granular threshold checks
});

sections.forEach(section => observer.observe(section));