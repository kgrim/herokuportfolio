// EVENT LISTENER ON CONTACT FORM button

const atIcon = document.querySelector('.atIcon');
const contactFormDiv = document.querySelector('.wrapper');
const contactLinks = document.querySelector('.aboutMeLinks');
const backgroundFrame = document.querySelector('.backgroundFrame');
const backgroundFrame2 = document.querySelector('.backgroundFrame2');
const backgroundImageSlash = document.querySelector('.backgroundImageSlash');
const backgroundImageSlashb = document.querySelector('.backgroundImageSlashb');

let clientHeight = window.innerHeight;
let clientWidth = window.innerWidth;

let ypos, backgroundFrameCounter;



atIcon.addEventListener('click', (e) => {
    contactFormDiv.style.visibility = "visible";

})


document.addEventListener('scroll', parallex);
document.addEventListener('scroll', linksParallex);
document.addEventListener('scroll', backgroundFrameParallex);
document.addEventListener('scroll', backgroundFrame2Parallex);



function linksParallex() {
    if (contactLinks.offsetTop >= clientHeight) {
        contactLinks.style.top = clientHeight + 'px';
    } if (contactLinks.offsetTop < clientHeight || ypos < clientHeight) {
        contactLinks.style.top = ypos * 1.2 + 'px';
    }
}


function backgroundFrameParallex() {
    if (backgroundFrame.offsetTop >= clientHeight || backgroundFrame.offsetWidth >= clientWidth) {
        backgroundFrame.style.top = clientHeight + 'px';
        backgroundFrame.style.left = clientWidth + 'px';
    } if (backgroundFrame.offsetTop < clientHeight || ypos < clientHeight){
        backgroundFrame.style.top = ypos * 2.2 + 'px';
        backgroundFrame.style.left = ypos * 1.5 + 'px';
        backgroundFrame.style.borderRadius = ypos * .5 + 'px';
    }
}

function backgroundFrame2Parallex() {
    if (backgroundFrame2.offsetTop >= clientHeight) {
        backgroundFrame2.style.top = clientHeight + 'px';
    } if (backgroundFrame2.offsetTop < clientHeight || ypos < clientHeight) {
        backgroundFrame2.style.top = ypos * 1.28 + 'px';
        backgroundFrame2.style.left = ypos * .2 + 'px';
        backgroundFrame2.style.borderRadius = ypos * .5 + 'px';
    }
}
function parallex() {
ypos = window.pageYOffset;

        // console.log(window);
        backgroundImageSlash.style.top = ypos * 0.01 + '%';
        backgroundImageSlashb.style.top = -ypos * 0.01 + '%';
}
