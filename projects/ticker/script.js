(function scroll() {
    var box = document.getElementById("box");
    var links = document.getElementsByTagName("A");
    console.log(box.offsetLeft);
    var boxLeft = box.offsetLeft;
    var reqId;
    function move() {
        boxLeft--;

        if (boxLeft < -links[0].offsetWidth) {
            boxLeft += links[0].offsetWidth;
            box.appendChild(links[0]);
        }
        box.style.left = boxLeft + "px";
        reqId = requestAnimationFrame(move);
    }
    move();

    box.addEventListener("mouseenter", function(e) {
        cancelAnimationFrame(reqId);
        console.log(e.target);
    });

    box.addEventListener("mouseleave", function(e) {
        move();
        console.log("mouseleave of the ticker");
    });

    box.addEventListener("mouseover", function(e) {
        e.target.style.color = "white";
        // e.target.style.textDecoration = "underline";
        cancelAnimationFrame(reqId);
    });

    box.addEventListener("mouseout", function(e) {
        e.target.style.color = "rgb(250, 128, 114)";
        // e.target.style.textDecoration = "underline";
        cancelAnimationFrame(reqId);
    });
})();
