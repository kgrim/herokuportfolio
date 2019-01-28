

// EVENT LISTENER FOR /PROJECTS
const projectSlide = document.querySelector('.smallProjContainter');
const imgList = document.querySelectorAll('.bigProjIndividual > img');
const imgArray = Array.from(imgList);
const className = 'is--visible';
const backgroundImageSlash2 = document.querySelector('.backgroundImageSlash2')



let isDown = false
let startX;
let scrollLeft;

window.addEventListener('scroll', parallex);






function parallex() {
	ypos = window.pageYOffset;
    backgroundImageSlash2.style.borderRadius = ypos * .7 + '%';
}

const toggle = node => () => {
  let desc = node.nextElementSibling;
  if (desc) {
    desc.classList.toggle(className);
  }
}

imgArray.forEach(img => {
  img.addEventListener('click', toggle(img));
});







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


projectSlide.addEventListener('scroll', (e) => {
    projectSlide.classList.add('active');
})
projectSlide.addEventListener('touchstart', (e) => {
    projectSlide.classList.add('active');
})
projectSlide.addEventListener('touchmove', (e) => {
    projectSlide.classList.remove('active');
})







// EVENT LISTENER ON SCROLL
