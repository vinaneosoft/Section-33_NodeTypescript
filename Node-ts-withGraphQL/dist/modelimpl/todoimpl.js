"use strict";
// CRUD
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = createTodo;
exports.getAllTodos = getAllTodos;
exports.updateTodo = updateTodo;
exports.getTodoById = getTodoById;
exports.deleteTodo = deleteTodo;
let todos = [];
function createTodo(todo) {
    const oldLength = todos.length;
    todos.push(todo);
    if (todos.length > oldLength) // use mongoose built in function
        return true;
    return false;
}
function getAllTodos() {
    return todos;
}
function updateTodo(id, todo) {
    const foundIndex = getTodoById(id);
    console.log(foundIndex);
    if (foundIndex < 0)
        return false;
    todos[foundIndex] = todo; // exsiting id, and updated text
    return true;
}
function getTodoById(id) {
    return todos.findIndex((todo) => todo.id == id);
}
function deleteTodo(id) {
    const foundIndex = getTodoById(id);
    if (foundIndex < 0)
        return false;
    todos.splice(foundIndex, 1);
    return true;
}
exports.default = {
    createTodo,
    getAllTodos,
    updateTodo,
    getTodoById,
    deleteTodo
};
