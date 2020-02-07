function check() {
    var num=Number(document.getElementById("num").value);
    document.getElementById("Binary").innerHTML=num.toString(2);
    document.getElementById("Octal").innerHTML=num.toString(8);
    document.getElementById("Hex").innerHTML=num.toString(16);
}

function note() {
    setTimeout (function() {
        alert('資料已清除');
    },50)
}

function clear(callback) {
    document.getElementById("num").value="";
    document.getElementById("Binary").innerHTML="";
    document.getElementById("Octal").innerHTML="";
    document.getElementById("Hex").innerHTML="";
    callback(); 
}
function onclear() {
    clear(note);  
}
