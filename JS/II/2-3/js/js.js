window.onload=array;

var i,j,topic="";
var array=[[0,0,0],
           [0,0,0]
];
for (i = 0; i <= 1; i++) {
    topic += "[";
    for (j = 0; j <= 2; j++) {
        array[i][j] = Math.floor(Math.random() * 100) + 1;
        topic += array[i][j] + " , ";
    }
    topic += "]<br>";
}

function array () {
    document.getElementById("array").innerHTML = topic;
}


function flip() {
    var arr=Array(2);
    var ans="";
    for (i=0;i<=2;i++) {
        arr[i]=Array(1);
    }
    for (i=0;i<=1;i++) {
        for (j=0;j<=2;j++) {
            arr[j][i]=array[i][j];
        }
    }
    for (i=0;i<=2;i++) {
        ans+="["
        for (j=0;j<=1;j++) {
            ans+=+arr[i][j]+",";
        }
        ans+="]"+"<br>";
    }
    document.getElementById("newarray").innerHTML = ans;
} 
