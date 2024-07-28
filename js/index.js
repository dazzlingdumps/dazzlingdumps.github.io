// This is for scrolling up faster

window.onload = function scrollUp() {
    var scroll = document.getElementById("up")
    scroll.addEventListener("click", e => {
        console.log("scrolled");
        window.scrollTo(0, 0);
    });
}
