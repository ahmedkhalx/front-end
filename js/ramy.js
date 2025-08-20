document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            document.querySelector('.form-status').innerHTML = "thanks for the sub!"
        });
    }
});