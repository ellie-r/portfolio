var root = document.documentElement;
var imageOfMe = document.querySelector('svg #XMLID_3_');
var toggle = document.querySelector('.toggle');
var navCollapse = document.querySelectorAll('.nav-link');
var browserImages = document.querySelectorAll('.browser img');
toggle.addEventListener('change', function (e) {
    if (e.target.checked) {
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--text', '#767D7A');
        browserImages.forEach(function (browser) {
            browser.style.border = '1px solid #e8eaed';
        });
        imageOfMe.style.fill = 'var(--background)';
    }
    else {
        root.style.setProperty('--background', '#767D7A');
        root.style.setProperty('--text', '#FFFFFF');
        imageOfMe.style.fill = 'var(--background)';
        browserImages.forEach(function (browser) {
            browser.style.border = '';
        });
    }
});
navCollapse.forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});
