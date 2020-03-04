document.onkeydown=key;
var add = 0;

function key(){
    var keyCode = event.keyCode;
    var text = document.getElementById("todos_input").value;
    var all_list = document.getElementById("list").children; //所有元素
    if(keyCode == 13 && text != "") { 
        document.getElementById("todos_content").style.display="block";
        var li = document.createElement("li"); //新增元素
        var left = document.createElement("div");
        var right = document.createElement("div");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var content = document.createElement("div");
        var button = document.createElement("button");
        li.classList.add("list_item"); //設定屬性
        left.classList.add("list_left");
        right.classList.add("list_right");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("list_box");
        label.classList.add("list_check");
        content.classList.add("list_content");
        button.classList.add("list_delete");
        left.appendChild(checkbox); //添加內容
        left.appendChild(label);
        content.innerHTML = text;
        left.appendChild(content);
        right.appendChild(button);
        li.appendChild(left);
        li.appendChild(right);
        list.appendChild(li);
        document.getElementById("todos_input").value = "";
        for(var i =  0; i < all_list.length + add; i++){
            checkbox.setAttribute("id","box"+i);
            label.setAttribute("for","box"+i);
            button.setAttribute("id","list_del"+i);
            var del = document.getElementById("list_del"+i);
        }
        del.addEventListener('click', function(){
            var li = del.parentNode.parentNode;
            list.removeChild(li);
            add+=1;
        });
    }
}



