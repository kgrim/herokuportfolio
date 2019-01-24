

// EVENT LISTENER FOR /PROJECTS
const projectSlide = document.querySelector('.projectsContainer');

let isDown = false
let startX;
let scrollLeft;

projectSlide.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    projectSlide.classList.add('active');
    startX = e.pageX - projectSlide.offsetLeft;
    scrollLeft = projectSlide.scrollLeft;
})
projectSlide.addEventListener('mouseleave', () => {
    isDown = false;
    projectSlide.classList.remove('active');

})
projectSlide.addEventListener('mouseup', () => {
    isDown = false;
    projectSlide.classList.remove('active');
})
projectSlide.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!isDown) return;
    const x = e.pageX - projectSlide.offsetLeft;
    const walk= (x - startX) * 3;
    projectSlide.scrollLeft = scrollLeft - walk;

})
