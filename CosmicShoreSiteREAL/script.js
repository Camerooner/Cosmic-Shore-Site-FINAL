document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const fadeElements = document.querySelectorAll('.hero, .about, .sign-up');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});