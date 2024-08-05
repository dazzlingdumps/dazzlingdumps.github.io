// This is for scrolling up faster
function scrollUp() {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goToWebsite() {
    console.log("went");
    window.open(
        "https://facebook.com",
        '_blank'
    );
}


function closeNav() {
    var close = document.getElementById("mySidenav");
    close.style.width = "0px";
}
function openNav() {
    var open = document.getElementById("mySidenav");
    open.style.width = "250px";
}