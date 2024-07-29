// This is for scrolling up faster
window.onload = function scrollUp() {
    var scroll = document.getElementById("up")
    scroll.addEventListener("click", e => {
        location.href=".";

        console.log("scrolled");
    });
}

// window.scroll(0, 0);