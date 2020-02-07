function array1() {
    var array=[[1,2,3], 
                [4,5,6],
                [7,8,9],
            ];
    var ans;
    ans=spiralarray(array);
    document.getElementById("spiralarray1").innerHTML = ans;
} 

function array2() {
    var array=[[1,2,3,4], 
               [5,6,7,8],
               [9,10,11,12],
            ];
    var ans;
    ans=spiralarray(array);
    document.getElementById("spiralarray2").innerHTML = ans;
} 

function spiralarray(n) {
    var arr=[];
    var text=n.length*n[0].length;
    var seq=0;
    var x=0;
    var y=-1;
    while(arr.length<text) {
        changeIndex(1);
        var nowValue;
        try {
            nowValue = n[x][y];
        }
        catch(err) {
            nowValue = undefined;
        };

        if(arr.indexOf(nowValue) ===- 1 && nowValue !== undefined) {
            arr.push(nowValue);
        }
        else{
            changeIndex(-1);
            if(seq === 3) {
                seq = 0;
            }
            else {
                seq+=1;
            }
        }
    }
    
    function changeIndex (index){
        switch (seq) {
            case 0: 
                y+=index;
                break;

            case 1: 
                x+=index;
                break;
            
            case 2:
                y-=index;
                break;
            
            case 3:
                x-=index;
                break;
        }
    }

    return "["+arr+"]";
}