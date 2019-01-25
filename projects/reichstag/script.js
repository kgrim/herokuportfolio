var hammenu = document.getElementById("hammenu");
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


var welcome = $(document.body).addClass("welcome-on");


var off = $(".exit2");
off.on("click", function(e) {
    e.preventDefault();
    $(document.body).removeClass("welcome-on");
});
