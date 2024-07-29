// This is for scrolling up faster
/*window.onload = function scrollUp() {
    var scroll = document.getElementById("up")
    scroll.addEventListener("click", scroll1);

    if (scroll.click()) {
        function scroll1() {
            console.log("scrolled");
            scroll.removeEventListener("click", scroll1());
        }
    }
}*/

function goToWebsite() {
    var btn = document.getElementById("btn");
    console.log("went");
    btn.onclick = window.open(
        "https://facebook.com",
        '_blank'
    );
}
