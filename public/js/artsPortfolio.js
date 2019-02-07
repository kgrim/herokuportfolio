const titleArts = document.querySelectorAll(".titleArts");
const imgArts = document.querySelectorAll(".imageCollage");
const bigModal = document.querySelector('#bigModal');
const divArray = Array.from(titleArts);
const imgArray = Array.from(imgArts);
const classNameVisibility = "isVisible";
const classNameClick = "bigModal";

let content;
let test;


for (i = 0; i < imgArts.length; i++) {
    test = Array.from(imgArts[i].children);
    test.forEach(img => {
        img.addEventListener("mouseup", e => {
            enlarge(e);
        })
    })
}

const enlarge = (imgClicked) => {
    content = `<div id="innerModal"><div id="close"> &times;</div> ${imgClicked.target.outerHTML}</div>`
    let count = imgClicked.pageY - imgClicked.y;
    let height = document.body.scrollHeight * 1.2;
    let width = window.innerWidth;
    document.getElementById('bigModal').innerHTML = content;
    document.getElementById('innerModal').style.top = `${count}px`
    document.getElementById('bigModal').style.height = `${height}px`
    document.getElementById('bigModal').style.width = `${width}px`
    document.querySelector('#bigModal').style.display = 'flex';
    close();
}



const close = () => {
    document.querySelector('#close').addEventListener('click', ()=> {
        document.querySelector('#bigModal').style.display = 'none';
    })
}




const toggle = node => () => {
  let desc = node.nextElementSibling;
  if (desc) {
    desc.classList.toggle(classNameVisibility);
  }
};

divArray.forEach(div => {
    div.addEventListener("click", toggle(div));
});
