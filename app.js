let list = [];

function getTask(){
    task = document.getElementById("task");
    let t = task.value;
    task.value = "";
    console.log(t)
    list.push(t);
    displayList(t);
}

function displayList(t){
    li = document.getElementById("list");
    var x = document.createElement("LI");
    var y = document.createElement("button");
    y.innerHTML = "Delete";
    y.setAttribute("onclick", "deleteTask(this)");
    y.setAttribute("id" , "delete");
    var t = document.createTextNode(t);
    x.appendChild(t);
    x.appendChild(y);
    li.appendChild(x);
}

function deleteTask(clicked_element){
    li = clicked_element.parentNode;
    li.remove();
}