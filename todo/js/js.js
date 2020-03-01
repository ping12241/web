document.onkeydown=key;

function key(){
    var n = event.keyCode;
    var text = document.getElementById("todos_input").value;
    var all_list = document.getElementById("list").children; //所有元素
    if(n == 13 && text != "") { 
        var li = document.createElement("li"); //新增元素
        var left = document.createElement("div");
        var right = document.createElement("div");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var content = document.createElement("div");
        var button = document.createElement("button");
        li.setAttribute("class", "list_item"); //設定屬性
        left.setAttribute("class", "list_left");
        right.setAttribute("class", "list_right");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "list_box");
        label.setAttribute("class", "list_check");
        content.setAttribute("class", "list_content");
        button.setAttribute("class", "list_delete");
        button.setAttribute("onclick","delete_todos(this)");
        left.appendChild(checkbox); //添加內容
        left.appendChild(label);
        content.innerHTML = text;
        left.appendChild(content);
        right.appendChild(button);
        li.appendChild(left);
        li.appendChild(right);
        list.appendChild(li);
        for(var i=0; i<all_list.length; i++){
            checkbox.setAttribute("id","box"+i);
            label.setAttribute("for","box"+i);
        }
        document.getElementById("todos_input").value = "";
    }
}
function delete_todos(obj) {
    var li = obj.parentNode.parentNode; 
    document.getElementById("list").removeChild(li);
}