var pics = document.querySelectorAll("#car img");
var dot = document.getElementsByClassName("dot");
var current = 0;
var timer;
var isTransitioning;

function move(next) {
    pics[current].classList.remove("onscreen");
    pics[current].classList.add("exit");
    dot[current].classList.remove("active");
    current += 1;

    if (typeof next !== "undefined") {
        current = next;
    }
    if (current >= pics.length) {
        current = 0;
    }
    dot[current].classList.add("active");
    pics[current].classList.add("onscreen");
}

document.addEventListener("transitionend", function(e) {
    if (e.target.classList.contains("exit")) {
        e.target.classList.remove("exit");
        isTransitioning = false;
        timer = setTimeout(move, 5000);
    }
});

timer = setTimeout(move, 5000);

document.getElementById("dots").addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.target);
    if (!e.target.classList.contains("dot")) {
        return;
    }
    if (e.target == dot[current]) {
        return;
    }
    if (isTransitioning) {
        return;
    }

    var dotIndex = +e.target.id.replace("d", "");
    console.log(dotIndex);
    clearTimeout(timer);
    move(dotIndex);
});
