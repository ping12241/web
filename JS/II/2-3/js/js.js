function array() {
    var array=[
            [3,1,2], 
            [8,5,4],
        ];
    var arr=Array(2);
    var i,j,ans="";
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
