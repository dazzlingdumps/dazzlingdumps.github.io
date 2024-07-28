function back() {
    history.back();
}
function forward() {
    history.forward();
}

function alert1() {
    var txt;
    if (confirm("Press a button to continue!")) {
        txt = "OK";
    } else {
        txt = "CANCELLED"
    }
    document.getElementById("result").innerHTML = txt;
}


