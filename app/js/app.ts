let project: HTMLElement = document.querySelector('.project');

let imageOfMe: SVGElement = document.querySelector('svg #XMLID_3_');

const toggle: Element = document.querySelector('.toggle');
let root: HTMLElement = document.documentElement;

toggle.addEventListener('change', (e) => {
    if((e.target as HTMLInputElement).checked) {
        root.style.setProperty('--background', 'white')
        root.style.setProperty('--text', 'rgb(103,112,108)')
        imageOfMe.style.fill = 'var(--background)';
    }  else {
        root.style.setProperty('--background', 'rgb(118,125,122)')
        root.style.setProperty('--text', 'white')
        imageOfMe.style.fill = 'var(--background)';
    }
})

// let projects: NodeList = document.querySelectorAll('.project');
// projects.forEach( (project: HTMLElement) => {
//     project.querySelector('.browser').addEventListener('mouseenter', (e) => {
//         e.stopPropagation();
//         (project.querySelector('.projectInfo') as HTMLElement).style.display = 'block';
//     })
//
// })