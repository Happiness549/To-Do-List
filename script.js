const todoList = ['make dinner','Wash dishes'];

const todoListHTML = ""
for(let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoListHTML += html;

}
console.log(todoListHTML);

function addTodo() {
inputElement = document.querySelector("#js-name-input");
const name = inputElement.value;
inputElement.value = '';
};

