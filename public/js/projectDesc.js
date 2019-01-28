const bottomDecoContainer = document.querySelector('.bottomDecoContainer');
const projectDescription = document.querySelector('#projectDescription');

projectDescription.addEventListener('mouseenter', change);
projectDescription.addEventListener('mouseleave', reverse);

function change() {
    bottomDecoContainer.style.transform = 'rotate(0deg)';
    bottomDecoContainer.style.borderRadius = '50%';
}

function reverse() {
    bottomDecoContainer.style.transform = 'rotate(45deg)';
    bottomDecoContainer.style.borderRadius = '0%';
}
