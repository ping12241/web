function display() {
    var data={ 
        "name" : "ping",  
        "phone" : "0912345678",        
        "age" : "20"
    };
    console.log(JSON.stringify(data));
    var text=['score1','score2','score3'];
    var i;
    for (i=0;i<=2;i++) {
        data[text[i]]=Math.floor((Math.random()*100))+1;
    }
    console.log(JSON.stringify(data));
    ans="以F12 console查看";
    document.getElementById("user").innerHTML=ans;
}
