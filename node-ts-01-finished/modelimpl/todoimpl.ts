
// CRUD

import { Todo } from "../src/models/todo";

let todos: Todo[] = [];

function createTodo(todo:Todo){
    const oldLength=todos.length;
    todos.push(todo);
    if(todos.length>oldLength)
        return true;
    return false;
}

function getAllTodos(){
    return todos;
}

function updateTodo(id:string, todo:Todo){
    const foundIndex=getTodoById(id);
    if(foundIndex<0)
        return false;
    todos[foundIndex]= todo;  // exsiting id, and updated text
    return true;
}


function getTodoById(id:string){
    return todos.findIndex((todo:Todo)=>todo.id==id)
}
function deleteTodo(id:string){
    const foundIndex=getTodoById(id);
    if(foundIndex<0)
        return false;
    todos.splice(foundIndex,1)
    return true;
}

