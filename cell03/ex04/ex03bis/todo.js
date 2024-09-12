function get_todo() {
    let todos = [];
    try {
        todo_list = JSON.parse(document.cookie);
        if(document.cookie != "") todos = todo_list;
    } catch (error) {
        console.log("No todo!");
    }
    return todos;
}

function set_todo(todos) {
    document.cookie = JSON.stringify(todos);
}

function createTodo(){
    let todo_name = prompt("Name your task!");
    let todos = get_todo();
    if(todo_name !== "") {
        todos.push(todo_name);
        set_todo(todos);
        showTodo();
    } else {
        alert("Task could not be empty!");
    }
}

function showTodo(){
    let todo_list_html = $("#ft-list");
    let todo_list_children = [];
    let todos = get_todo();
    todo_list_html.html('');
    todos.forEach((todo, i) => {
        let todo_item_html = $("<div></div>");
        todo_item_html.html(todo);
        todo_item_html.addClass("todo");
        todo_item_html.on("mousedown", ()=>remove(i));
        todo_list_children.push(todo_item_html);
    });
    todo_list_children.reverse().forEach((todo)=>{
        todo_list_html.append(todo);
    });
}

function remove(index){
    let remove_now = confirm("Delete ?");
    console.log(remove_now);
    if(remove_now) {
        let new_todo = get_todo();
        new_todo.splice(index, 1);
        set_todo(new_todo);
        showTodo();
    }
}

showTodo();
