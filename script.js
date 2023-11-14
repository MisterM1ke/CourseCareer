const taskList = [];

function addTask(){
    let inputTask = document.getElementById("task");
    if(inputTask.value.length == 0) return;
    taskList.push(inputTask.value);
    makeHtmlTaskList(inputTask.value,taskList.length);
    inputTask.value = "";
}

function removeTask(e){
    e.parentElement.remove();
    taskList.splice(e.value,1);
}

function makeHtmlTaskList(task,index){
    const ul = document.getElementById("resultList");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    li.className = "row";

    btn.textContent = 'X';
    btn.onclick = function() {
        removeTask(this);
    }
    btn.value = index;

    span.textContent = task;
    span.className = "strikethrough";

    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
}
