const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.querySelector('.add-btn');
const clearBtn = document.querySelector('.clear-btn');

// Add event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
clearBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// Function to add a new task
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

  // Add delete functionality with animation
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.style.animation = 'slideOut 0.5s ease forwards';
    setTimeout(() => li.remove(), 500);
  });
}

// Add footer with "JavaScript 1.0" at the bottom
const footer = document.createElement('div');
footer.textContent = "JavaScript 1.0";
footer.style.cssText = "text-align: center; padding: 10px; color: #fff; background: rgba(0, 0, 0, 0.5); position: fixed; bottom: 0; width: 100%;";
document.body.appendChild(footer);