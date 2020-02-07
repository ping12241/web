var id=0;
var user=[];

function save() {
    id++;
    var name=document.getElementById("name").value;
    var content=document.getElementById("content").value;
    var data={"name":name ,"content":content};
    add(id,name,content);
    user[id]=data;  
}

function add(id,name,content) {
    var table =document.getElementById("list").getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(); //新增tr
    var cell1=newrow.insertCell(0); //新增td
    cell1.innerHTML=id; //td內容
    var cell2=newrow.insertCell(1);
    cell2.innerHTML=name;
    var cell3=newrow.insertCell(2);
    cell3.innerHTML=content;
    var cell4=newrow.insertCell(3);
    cell4.innerHTML='<button class="edit" onclick="edit(this)">編輯</button><button onclick="del(this)">刪除</button>';
}

function del(td) {
    var row = td.parentElement.parentElement; //父元件
    document.getElementById("list").deleteRow(row.rowIndex);
}

function search() {
    var n=document.getElementById("search").value;
    var text="ID： "+n+" 名稱： "+user[n].name+" 內容： "+user[n].content;
    alert(text);   
}

function edit(obj) {
    var row = obj.parentNode.parentNode;
    row.cells[2].innerHTML='<input class="edit_content" id="edit_content" type="text"/>';
    row.cells[3].innerHTML='<button class="check" onclick="check(this)">確認</button><button onclick="del(this)">刪除</button>';
}

function check(obj){
    var row = obj.parentNode.parentNode;
    var edit_text = document.getElementById("edit_content").value;
    user[id].content = edit_text;
    row.cells[2].innerHTML=user[id].content;
    row.cells[3].innerHTML='<button class="edit" onclick="edit(this)">編輯</button><button onclick="del(this)">刪除</button>';
}