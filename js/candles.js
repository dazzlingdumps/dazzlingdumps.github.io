// This is for scrolling up faster
window.onload = function scrollUp() {
    var scroll = document.getElementById("up");
    scroll.addEventListener("click", e => {
        location.href = "./candles";
        console.log("scrolled");
    });
}