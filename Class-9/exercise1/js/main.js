const button = document.querySelector('#buttonClick');
const inputField = document.querySelector('#inputField');
const inputForm = document.querySelector('#inputForm');
let taskArray = [];
let inputText = '';

inputField.addEventListener('input', function () {
     inputText = inputField.value;     
})

button.addEventListener('click', function (event) {
     event.preventDefault();
     taskArray.push(inputText);
     inputForm.reset();
     console.log(taskArray);
})
//
