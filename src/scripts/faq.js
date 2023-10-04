document.addEventListener('DOMContentLoaded', function () {
    const faqContainers = document.querySelectorAll('.faq-container');
    faqContainers.forEach(function (container) {
        const answer = container.querySelector('.faq-answer');
        
        container.addEventListener('click', function () {
            answer.classList.toggle('expanded');
        });
    });
});