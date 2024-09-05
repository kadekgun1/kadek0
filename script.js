document.addEventListener('DOMContentLoaded', () => {
    // Animasi scroll halus
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            window.scroll({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
