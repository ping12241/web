window.onload=array;

var i;
var arr=[];
for (i=0;i<=6;i++) {
    arr[i]=Math.floor((Math.random()*100))+1;
}

function array () {
    document.getElementById("array").innerHTML = arr;
}

function max() {
    var arrayMax;
    arrayMax=Math.max(...arr);
    document.getElementById("max").innerHTML = "=["+arrayMax+"]";
}
        
function min() {
    var arrayMin;
    arrayMin=Math.min(...arr);
    document.getElementById("min").innerHTML = "=["+arrayMin+"]";
}

function sort() {
    arr.sort(function(a, b){return a - b});
    document.getElementById("sort").innerHTML = "=["+arr+"]";
}

function search() {
    var s =arr.indexOf(34);
    if (s == -1) {
        document.getElementById("search").innerHTML = "=找不到34值"; 
    }
    else {
        document.getElementById("search").innerHTML = "=["+s+"]";
    }
    
    
}

function reverse() {
    document.getElementById("reverse").innerHTML = "=["+arr.reverse()+"]";
}

function push() {
    arr.push("66");
    document.getElementById("push").innerHTML = "=["+arr+"]";
}

function pop() {
    arr.pop();
    document.getElementById("pop").innerHTML = "=["+arr+"]";
}

function del() {
    delete arr[3];
    document.getElementById("del").innerHTML = "=["+arr+"]";
}