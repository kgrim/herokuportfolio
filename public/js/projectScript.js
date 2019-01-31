

// EVENT LISTENER FOR /PROJECTS
const projectSlide = document.querySelector('.smallProjContainter');
const backgroundImageSlash2 = document.querySelector('.backgroundImageSlash2')



let isDown = false
let startX;
let scrollLeft;


projectSlide.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    projectSlide.classList.add('active');
    startX = e.pageX - projectSlide.offsetLeft;
    scrollLeft = projectSlide.scrollLeft;
	backgroundImageSlash2.style.borderRadius = '50%';
})
projectSlide.addEventListener('mouseleave', () => {
    isDown = false;
    projectSlide.classList.remove('active');
	backgroundImageSlash2.style.borderRadius = '0%';

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


projectSlide.addEventListener('scroll', (e) => {
    projectSlide.classList.add('active');
})
projectSlide.addEventListener('touchstart', (e) => {
    projectSlide.classList.add('active');
	backgroundImageSlash2.style.borderRadius = '50%';
})
projectSlide.addEventListener('touchmove', (e) => {
    projectSlide.classList.remove('active');
})
projectSlide.addEventListener('touchend', (e) => {
    projectSlide.classList.remove('active');
	backgroundImageSlash2.style.borderRadius = '0%';
})
