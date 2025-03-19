const todoList = [];

function addTodo() {
inputElement = document.querySelector("#js-name-input");
const name = inputElement.value;

todoList.push(name);
};