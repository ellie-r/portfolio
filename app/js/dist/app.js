var root = document.documentElement;
var imageOfMe = document.querySelector('svg #XMLID_3_');
var toggle = document.querySelector('.toggle');
toggle.addEventListener('change', function (e) {
    if (e.target.checked) {
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--text', '#767D7A');
        imageOfMe.style.fill = 'var(--background)';
    }
    else {
        root.style.setProperty('--background', '#767D7A');
        root.style.setProperty('--text', '#FFFFFF');
        imageOfMe.style.fill = 'var(--background)';
    }
});
