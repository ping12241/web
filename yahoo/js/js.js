document.onclick=open;
function open(e) {
    var target = e.target.id; //獲得觸發事件元素
    if (target == "language") { 
        
        document.getElementById("langbg").style.display="block";
        document.getElementById("lang").style.display="block";
        document.getElementById("top_nav").style.zIndex="5";
    } 
    else {
        document.getElementById("langbg").style.display="none";
        document.getElementById("lang").style.display="none";
    }
}

function news1() {
    newsout();
    document.getElementById("news_content_1").style.display="flex";
    document.getElementById("news_tittle_1").style.display="block";
    
}
function news2() {
    newsout();
    document.getElementById("news_content_2").style.display="flex";
    document.getElementById("news_tittle_2").style.display="block";
    
}
function news3() {
    newsout();
    document.getElementById("news_content_3").style.display="flex";
    document.getElementById("news_tittle_3").style.display="block";
    
}
function news4() {
    newsout();
    document.getElementById("news_content_4").style.display="flex";
    document.getElementById("news_tittle_4").style.display="block";
    
}
function news5() {
    newsout();
    document.getElementById("news_content_5").style.display="flex";
    document.getElementById("news_tittle_5").style.display="block";
    
}
function news6() {
    newsout();
    document.getElementById("news_content_6").style.display="flex";
    document.getElementById("news_tittle_6").style.display="block";
    
}
function newsout() {
    var i;
    for (i=1;i<=6;i++) {
        var t = "news_tittle_"+i;
        var c = "news_content_"+i;
        document.getElementById(t).style.display="none";
        document.getElementById(c).style.display="none";
    }
}

function sale1() {
    document.getElementById("sale_contents_img_1").style.display="block";
    document.getElementById("sale_1").style.display="block";
    document.getElementById("sale_contents_img_2").style.display="none";
    document.getElementById("sale_2").style.display="none";
}
function sale2() {
    document.getElementById("sale_contents_img_1").style.display="none";
    document.getElementById("sale_1").style.display="none";
    document.getElementById("sale_contents_img_2").style.display="block";
    document.getElementById("sale_2").style.display="block";
}



