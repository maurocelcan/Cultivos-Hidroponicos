document.addEventListener('DOMContentLoaded', function () {
    const faqContainers = document.querySelectorAll('.faq-container');
    faqContainers.forEach(function (container) {
    container.addEventListener('click', function () {
        this.querySelector('.faq-answer').classList.toggle('expanded');
    });
    });
});