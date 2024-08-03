
document.addEventListener("DOMContentLoaded", function () {
    const portfolioLink = document.querySelector('a[href="#portfolio"]');
    const portfolioContent = document.querySelector('.portfolio-content');

    portfolioLink.addEventListener('click', function (event) {
        event.preventDefault();
        portfolioContent.classList.add('active');
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    });
});