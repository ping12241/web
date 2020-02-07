function max() {
    var A=[12,34,50,47,23,59,1];
    var arrayMax;
    arrayMax=Math.max(...A);
    document.getElementById("max").innerHTML = "=["+arrayMax+"]";
}
        
function min() {
    var A=[12,34,50,47,23,59,1];
    var arrayMin;
    arrayMin=Math.min(...A);
    document.getElementById("min").innerHTML = "=["+arrayMin+"]";
}

function sort() {
    var A=[12,34,50,47,23,59,1];
    A.sort();
    document.getElementById("sort").innerHTML = "=["+A+"]";
}

function search() {
    var A=[12,34,50,47,23,59,1];
    document.getElementById("search").innerHTML = "=["+A.indexOf(34)+"]";
}

function reverse() {
    var A=[12,34,50,47,23,59,1];
    document.getElementById("reverse").innerHTML = "=["+A.reverse()+"]";
}

function push() {
    var A=[12,34,50,47,23,59,1];
    A.push("66");
    document.getElementById("push").innerHTML = "=["+A+"]";
}

function pop() {
    var A=[12,34,50,47,23,59,1];
    A.pop();
    document.getElementById("pop").innerHTML = "=["+A+"]";
}

function del() {
    var A=[12,34,50,47,23,59,1];
    delete A[3];
    document.getElementById("del").innerHTML = "=["+A+"]";
}