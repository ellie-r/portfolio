const root: HTMLElement = document.documentElement;
const imageOfMe: SVGElement = document.querySelector('svg #XMLID_3_');
const toggle: Element = document.querySelector('.toggle');


toggle.addEventListener('change', (e) => {
    if((e.target as HTMLInputElement).checked) {
        root.style.setProperty('--background', '#FFFFFF')
        root.style.setProperty('--text', '#767D7A')
        imageOfMe.style.fill = 'var(--background)';
    }  else {
        root.style.setProperty('--background', '#767D7A')
        root.style.setProperty('--text', '#FFFFFF')
        imageOfMe.style.fill = 'var(--background)';
    }
})
