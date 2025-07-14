"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoMiddleware = exports.getTodoByIdMiddleware = exports.updateTodoMiddleware = exports.getAllTodosMiddleware = exports.createTodoMiddleware = void 0;
const todoimpl_1 = __importDefault(require("../modelimpl/todoimpl"));
const createTodoMiddleware = (req, res, next) => {
    let todo = Object.assign(Object.assign({}, req.body), { id: new Date().toISOString() });
    const b = todoimpl_1.default.createTodo(todo);
    res.status(200).send(b);
};
exports.createTodoMiddleware = createTodoMiddleware;
const getAllTodosMiddleware = (req, res, next) => {
    const todos = todoimpl_1.default.getAllTodos();
    res.status(200).send(todos);
};
exports.getAllTodosMiddleware = getAllTodosMiddleware;
const updateTodoMiddleware = (req, res, next) => {
};
exports.updateTodoMiddleware = updateTodoMiddleware;
const getTodoByIdMiddleware = (req, res, next) => {
};
exports.getTodoByIdMiddleware = getTodoByIdMiddleware;
const deleteTodoMiddleware = (req, res, next) => {
};
exports.deleteTodoMiddleware = deleteTodoMiddleware;
exports.default = {
    createTodoMiddleware: exports.createTodoMiddleware,
    getAllTodosMiddleware: exports.getAllTodosMiddleware,
    updateTodoMiddleware: exports.updateTodoMiddleware,
    getTodoByIdMiddleware: exports.getTodoByIdMiddleware,
    deleteTodoMiddleware: exports.deleteTodoMiddleware
};
