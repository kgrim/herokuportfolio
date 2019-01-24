var hammenu = document.getElementById("hammenu");
console.log(hammenu);
hammenu.addEventListener("click", function(e) {
    e.stopPropagation();
    document.body.classList.add("menu-on");
});

var exit = document.getElementById("exit");
exit.addEventListener("click", function(e) {
    e.stopPropagation();
    document.body.classList.remove("menu-on");
});

var exitLayer = document.getElementById("layer");
exitLayer.addEventListener("click", function(e) {
    e.stopPropagation();
    document.body.classList.remove("menu-on");
});

var bar = document.querySelector(".menu");
bar.addEventListener("click", function(e) {
    e.stopPropagation();
});

setTimeout(function() {
    $(document.body).addClass("welcome-on");
}, 1000);

var off = $(".exit2");
off.on("click", function(e) {
    e.stopPropagation();
    $(document.body).removeClass("welcome-on");
});
