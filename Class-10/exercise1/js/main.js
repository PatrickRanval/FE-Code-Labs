var button = document.querySelector('#buttonClick');
var inputField = document.querySelector('#inputField');
var inputForm = document.querySelector('#inputForm');
var taskArray = JSON.parse(localStorage.getItem('task_list')) || [];
var inputText = '';
var taskDisplay = document.querySelector('#taskList');
populateTasks(taskArray);
button.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputField.value == '')
        return;
    inputText = inputField.value;
    taskArray.push(inputText);
    saveTaskListToLocalStorage(taskArray);
    var newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.innerText = inputText;
    var xButton = document.createElement('button');
    xButton.className = 'xButton';
    xButton.innerText = 'Remove';
    taskDisplay.appendChild(newTask);
    newTask.appendChild(xButton);
    populateTasks(taskArray);
    inputForm.reset();
});
// STORAGE \\
function saveTaskListToLocalStorage(tasks) {
    if (tasks === void 0) { tasks = []; }
    localStorage.setItem('task_list', JSON.stringify(tasks));
}
// DISPLAY \\
function populateTasks(tasks) {
    if (tasks === void 0) { tasks = []; }
    taskDisplay.innerHTML = tasks.map(function (tasks, idx) { return "<div data-index=\"".concat(idx, "\" class=\"task\">").concat(tasks, "<button class=\"xButton\">Remove</button></div>"); }).join("");
}
taskDisplay.addEventListener('click', removeTask);
function removeTask(event) {
    if (!event.target.matches('.xButton'))
        return;
    var idx = event.target.parentNode.dataset.index;
    console.log(taskArray);
    console.log('idx:', idx);
    taskArray.splice(idx, 1);
    console.log(taskArray);
    populateTasks(taskArray);
    saveTaskListToLocalStorage(taskArray);
}
;
