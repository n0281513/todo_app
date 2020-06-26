function add() {

    var todos = new Array();

    var todosString = localStorage.getItem('todos');


        if (todosString !== null);
        {
            todos = JSON.parse(todosString);
        }
    
    var textBoxContent = document.getElementById('itemToAdd').value;

    todos.push(textBoxContent);

    localStorage.setItem("todos", JSON.stringify (todos));

    console.log('The number of items in the todos Array is: ' + todos.length);   
}


document.getElementById('addTodo').addEventListener('click', add);