const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.querySelector('.add-btn');
const clearBtn = document.querySelector('.clear-btn');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
clearBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `
    <input type="checkbox" onclick="this.parentElement.classList.toggle('completed')">
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.style.animation = 'slideOut 0.5s ease forwards';
    setTimeout(() => li.remove(), 500);
  });
}