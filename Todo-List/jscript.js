

let tasks = [];

// Check if there is any data in local storage
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

// Function to add a task to the array and update the display
function addTask(task) {
  tasks.push(task);
  updateDisplay();
  saveTasks();
}

// Function to update the display
function updateDisplay() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editTask(index);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Function to save the tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to edit a task
function editTask(index) {
  const task = tasks[index];
  const newTask = prompt('Edit task', task);
  if (newTask !== null) {
    tasks[index] = newTask;
    updateDisplay();
    saveTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateDisplay();
  saveTasks();
}

// Event listener for the add task button
const addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener('click', () => {
  event.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value;
  if (task !== '') {
    addTask(task);
   taskInput.value = '';
  }
});

// Initial display of tasks
updateDisplay();
