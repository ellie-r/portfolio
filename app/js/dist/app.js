var project = document.querySelector('.project');
var imageOfMe = document.querySelector('svg #XMLID_3_');
var toggle = document.querySelector('.toggle');
var root = document.documentElement;
toggle.addEventListener('change', function (e) {
    if (e.target.checked) {
        root.style.setProperty('--background', 'white');
        root.style.setProperty('--text', 'rgb(103,112,108)');
        imageOfMe.style.fill = 'var(--background)';
    }
    else {
        root.style.setProperty('--background', 'rgb(118,125,122)');
        root.style.setProperty('--text', 'white');
        imageOfMe.style.fill = 'var(--background)';
    }
});
