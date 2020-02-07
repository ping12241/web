document.onkeydown=key;
function key(){
    var n;
    n=event.keyCode;
    if(event.shiftKey && n!=16) {
        alert("Shift + "+String.fromCharCode(n));
    }
    if(event.ctrlKey && n!=17) {
        alert("Ctrl + "+String.fromCharCode(n));
    }
    if(event.altKey && n!=18) {
        alert("Alt + "+String.fromCharCode(n));
    }
    
}
