const todoList = [{
    name: 'mohan',
    dueDate: '2024-12-21',
}, {
    name: 'rohan',
    dueDate: '2024-12-21',
}];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach((todoObj, index) => {
        /**
         * Taking name and date out of the object
         * const name = todoObj.name;
         * const dueDate = todoObj.dueDate;
        */

        /**
         * we can do above by a shortcut, also known as Destructuring.
         * 
         * const {name} = todoObj; //takes name property out of the todoObj and puts it into the also called name variable.
         * const {dueDate} = todoObj;
         * 
         * OR : const {name, dueDate} = todoObj; //multiple properties at once.
         */

        const {name, dueDate} = todoObj;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>  
        <button onclick="
            todoList.splice(${index}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHtml += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-dueDate-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate,

        /**
         * we can use shorthand property
         * i.e; todoList.push({ name, dueDate});
         */
    });
    inputElement.value = ''; //for resetting the text box.

    renderTodoList();
}
