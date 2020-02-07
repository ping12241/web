function check() {
    var num=Number(document.getElementById("num").value);
    document.getElementById("Binary").innerHTML=num.toString(2);
    document.getElementById("Octal").innerHTML=num.toString(8);
    document.getElementById("Hex").innerHTML=num.toString(16);
}