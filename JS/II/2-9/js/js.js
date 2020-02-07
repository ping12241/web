document.onkeydown=key;
function key(){
    var n;
    n=event.keyCode;
    if(n == 27) {
        alert("Esc");
    }
    if(n == 9) {
        alert("Tab");
    }
    if(n == 8) {
        alert("Backspace");
    }
    if(n == 71) {
        document.location="http://www.google.com";
    }
}