function check() {
    var En=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var num=['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..',
             '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', 
             '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    var id=document.getElementById("num").value;
    var a=id.split(" ");
    var ans="";
    var i;
    for (i=0;i<a.length;i++) {
        if (num.indexOf(a[i])==-1) {
            ans="非摩斯電碼，請輸入.或-組合";
        }
        else {
            ans+=En[num.indexOf(a[i])];
        }
    } 
    document.getElementById("ans").innerHTML = ans;
}