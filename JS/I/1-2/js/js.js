function check() {
    var En=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var num=[10, 11, 12, 13, 14, 15, 16, 17, 34, 
             18, 19, 20, 21, 22, 35, 23, 24, 25, 
             26, 27, 28, 29, 32, 30,31, 33];
    var num1=[8,7,6,5,4,3,2,1,1];
    var id,i,first,one,total=0,ans=0;
    id=document.getElementById("id").value;
    first=num[En.indexOf(id.charAt(0))];
    one=Number(first.toString().charAt(0))+(first.toString().charAt(1)*9);
    for(i=0;i<9;i++) {
        total+=(id.substr(i+1,1).valueOf() * num1[i].valueOf());
    }
    ans=one+total;
    if (ans%10==0) {
        id="身分正確";
    }
    else {
        id="查無此人";
    }
    document.getElementById("ans").innerHTML = id;
}