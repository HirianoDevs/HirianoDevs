// Efeito de scroll no Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '1rem 5%';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
    } else {
        header.style.padding = '1.5rem 5%';
        header.style.boxShadow = 'none';
    }
});

// Suave Scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
