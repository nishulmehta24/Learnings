const todos = [];

function addTodo() {
    const input = document.querySelector("input");
    const task = input.value.trim();
    if (!task) return;

    const div = document.createElement("div");
    const val = document.createElement("span");
    const del = document.createElement("button");

    val.innerText = (todos.length + 1) + ". " + task;
    del.innerText = "Delete";
    del.className = "del";

    // Assign delete behavior
    del.onclick = function () {
        deleteTodo(div);
    };

    div.className = "tasksdiv";
    div.appendChild(val);
    div.appendChild(del);

    todos.push(div);
    input.value = "";
    render();
}

function deleteTodo(taskDiv) {
    const index = todos.indexOf(taskDiv);
    if (index !== -1) {
        todos.splice(index, 1);
        render();
    }
}

function render() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    todos.forEach(todo => list.appendChild(todo));
}