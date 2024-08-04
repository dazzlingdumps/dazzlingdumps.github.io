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
