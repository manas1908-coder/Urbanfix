document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.sdg-card');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        revealOnScroll.observe(card);
    });
});