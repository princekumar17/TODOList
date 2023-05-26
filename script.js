const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = todoInput.value;
  if (task.trim() !== '') {
    addTask(task);
    todoInput.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });
  const span = document.createElement('span');
  span.textContent = task;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    li.remove();
  });
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}
