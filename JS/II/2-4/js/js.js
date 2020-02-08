window.onload=array;

var i,j;
var topic1="";
var topic2="";

var array1=[[0,0,0], 
           [0,0,0],
           [0,0,0],
        ];
for (i = 0; i <= 2; i++) {
    topic1 += "[";
    for (j = 0; j <= 2; j++) {
        array1[i][j] = Math.floor(Math.random() * 100) + 1;
        topic1 += array1[i][j] + " , ";
        }
    topic1 += "]<br>";
}

var array2=[[0,0,0,0], 
           [0,0,0,0],
           [0,0,0,0],
        ];

for (i = 0; i <= 2; i++) {
    topic2 += "[";
    for (j = 0; j <= 3; j++) {
        array2[i][j] = Math.floor(Math.random() * 100) + 1;
        topic2 += array2[i][j] + " , ";
        }
    topic2 += "]<br>";
}


function array () {
    document.getElementById("topic1").innerHTML = topic1;
    document.getElementById("topic2").innerHTML = topic2;
}

function flip1() {
    var ans1=spiralarray(array1, 2, 2, 1, 0);
    document.getElementById("spiralarray1").innerHTML = ans1;
} 

function flip2() {
    var ans2=spiralarray(array2, 2, 3, 1, 0);
    document.getElementById("spiralarray2").innerHTML = ans2;
} 

function spiralarray(arr, imax, jmax, imin, jmin) {
    var i=0;
    var j=0;
    var ans="";
    while (imax != 0 && jmax != 0) {
        while (j <= jmax) {
            ans += arr[i][j] + " , ";
            j++;
        }
        jmax -= 1;
        j--;
        i++;
        while (i <= imax) {
            ans += arr[i][j] + " , ";
            i++;
        }
        imax -= 1;
        i--;
        j--;
        while (j >= jmin && jmin == 0) {
            ans += arr[i][j] + " , ";
            j--;
        }
        jmin += 1;
        j++;
        i--;
        while (i >= imin) {
            ans += arr[i][j] + " , ";
            i--;
        }
        imin += 1;
        i++;
        j++;
    }
    return "["+ans+"]";
}
