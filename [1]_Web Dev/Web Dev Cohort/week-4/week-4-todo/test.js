let todos = [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (!task) return;

  todos.push(task);
  input.value = "";
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${todo}
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}