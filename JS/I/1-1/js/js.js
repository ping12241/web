function taxi() {
    var km,money,cost;
    km=Number(document.getElementById("km").value);
    if (km > 0) {
        if (km <= 1.5) {
            cost="70元"
        } 
        else if((km-1.5)%500==0) {
            money=70+((km-1.5)/0.5)*5;
            cost=money+"元";
        }
        else {
            money=70+Math.ceil((km-1.5)/0.5)*5;
            cost=money+"元";
        }
    }
    else {
        cost="里程數需大於0";
    }
    document.getElementById("cost").innerHTML = cost;
}