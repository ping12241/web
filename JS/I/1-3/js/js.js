function one() {
    var one="";
    var i,j;
    for (i=1;i<=5;i++) {
        for (j=1;j<=5;j++){
            one+= "*&nbsp;&nbsp;";
        }
        one+= "<br>";
    }
    document.getElementById("one").innerHTML = one;
}

function two() {
    var two="";
    var i,j;
    for (i=1;i<=5;i++) {
        for (j=1;j<=i;j++){
            two+= "*&nbsp;&nbsp;";
        }
        two+= "<br>";
    }
    document.getElementById("two").innerHTML = two;
}

function three() {
    var three="";
    var i,j,s;
    for (i=1;i<=5;i++) {
        for (s=1;s<=5-i;s++){
            three+= "&nbsp;&nbsp;";
        }
        for (j=1;j<=i;j++){
            three+= "*&nbsp;&nbsp;";
        }
        three+= "<br>";
    }
    document.getElementById("three").innerHTML = three;
}

function four() {
    var four="";
    var i,j;
    for (i=1;i<=5;i++) {
        if (i==1 || i==5){
            for (j=1;j<=5;j++){
                four+= "*&nbsp;&nbsp;";
            }
        }
        else {
            for (j=1;j<=5;j++){
                if (j==1 || j==5){
                    four+= "* ";
                }
                four+= "&nbsp;&nbsp;&nbsp;";
            }
        }
        four+= "<br>";
    }
    document.getElementById("four").innerHTML = four;
}

function five() {
    var five="";
    var i,j;
    for (i=1;i<=5;i++) {
        if (i==3 || i==4){
            five+= "*&nbsp;&nbsp;";
                for (j=3;j<=i;j++){
                    five+= "&nbsp;&nbsp;&nbsp;&nbsp;";
                }
            five+= "*&nbsp;&nbsp;";        
        }
        else {
            for (j=1;j<=i;j++){
                five+= "*&nbsp;&nbsp;";
            }
        }
        five+= "<br>";
    }
    document.getElementById("five").innerHTML = five;
}
