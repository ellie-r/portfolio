const root: HTMLElement = document.documentElement;
const imageOfMe: SVGElement = document.querySelector('svg #XMLID_3_');
const toggle: Element = document.querySelector('.toggle');
let navCollapse: NodeListOf<Element> = document.querySelectorAll('.nav-link');
let browserImages: NodeListOf<Element> = document.querySelectorAll('.browser img');


toggle.addEventListener('change', (e) => {
    if((e.target as HTMLInputElement).checked) {
        root.style.setProperty('--background', '#FFFFFF')
        root.style.setProperty('--text', '#767D7A')
        browserImages.forEach( (browser) => {
            (browser as HTMLElement).style.border = '1px solid #e8eaed';
        })
        imageOfMe.style.fill = 'var(--background)';
    }  else {
        root.style.setProperty('--background', '#767D7A')
        root.style.setProperty('--text', '#FFFFFF')
        imageOfMe.style.fill = 'var(--background)';
        browserImages.forEach( (browser) => {
            (browser as HTMLElement).style.border = '';
        })
    }
})

navCollapse.forEach( (link) => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    })
})