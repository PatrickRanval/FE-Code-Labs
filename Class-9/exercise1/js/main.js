const button = document.querySelector('#buttonClick');
const inputField = document.querySelector('#inputField');
const inputForm = document.querySelector('#inputForm');

let taskArray = JSON.parse(localStorage.getItem('task_list')) || [];
let inputText = '';


const taskDisplay = document.querySelector('#taskList')
  
populateTasks(taskArray);

button.addEventListener('click', function (event) {
     event.preventDefault();
     if (inputField.value == '') return;
     inputText = inputField.value;     
     taskArray.push(inputText);
     saveTaskListToLocalStorage(taskArray);
     
     const newTask = document.createElement('div');
     newTask.className = 'task';
     newTask.innerText = inputText
     const xButton = document.createElement('button');
     xButton.className = 'xButton';
     xButton.innerText = 'Remove'
     taskDisplay.appendChild(newTask);
     newTask.appendChild(xButton);
     populateTasks(taskArray);
     inputForm.reset();
})

// STORAGE \\

function saveTaskListToLocalStorage(tasks = []) {
	localStorage.setItem('task_list', JSON.stringify(tasks));
}

// DISPLAY \\

function populateTasks(tasks = []) {
     taskDisplay.innerHTML = tasks.map(
          (tasks, idx) => `<div data-index="${idx}" class="task">${tasks}<button class="xButton">Remove</button></div>`
     ).join("");
}

taskDisplay.addEventListener('click', removeTask); 

function removeTask(event) {
     if(!event.target.matches('.xButton')) return;
     const idx = event.target.parentNode.dataset.index;
     console.log(taskArray);
     console.log('idx:', idx);     
     taskArray.splice(idx, 1);     
     console.log(taskArray);
     populateTasks(taskArray);
     saveTaskListToLocalStorage(taskArray);

};






