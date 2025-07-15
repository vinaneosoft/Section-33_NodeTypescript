"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoById = exports.deleteTodo = exports.updateTodo = exports.getAllTodos = exports.createTodo = void 0;
const todoschema_1 = __importDefault(require("../models/todoschema")); // schema import
const createTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = new todoschema_1.default(todo);
    return yield newTodo.save();
});
exports.createTodo = createTodo;
const getAllTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield todoschema_1.default.find(); // returns array of docs
});
exports.getAllTodos = getAllTodos;
const updateTodo = (id, todoData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todoschema_1.default.findByIdAndUpdate(id, todoData, { new: true });
});
exports.updateTodo = updateTodo;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todoschema_1.default.findByIdAndDelete(id);
});
exports.deleteTodo = deleteTodo;
const getTodoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todoschema_1.default.findById(id);
});
exports.getTodoById = getTodoById;
exports.default = {
    createTodo: exports.createTodo,
    getAllTodos: exports.getAllTodos,
    updateTodo: exports.updateTodo,
    deleteTodo: exports.deleteTodo,
    getTodoById: exports.getTodoById
};
