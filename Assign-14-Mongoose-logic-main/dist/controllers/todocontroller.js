"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoMiddleware = exports.updateTodoMiddleware = exports.createTodoMiddleware = exports.getAllTodosMiddleware = void 0;
const todoimpl = __importStar(require("../modelimpl/todoimpl"));
// ✅ GET all todos
const getAllTodosMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoimpl.getAllTodos();
        res.status(200).json(todos);
    }
    catch (err) {
        console.error("Error fetching todos:", err);
        res.status(500).json({ error: "Failed to fetch todos" });
    }
});
exports.getAllTodosMiddleware = getAllTodosMiddleware;
// ✅ POST create new todo
const createTodoMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Request body:", req.body);
        const { title, completed } = req.body;
        const newTodo = yield todoimpl.createTodo({ title, completed });
        res.status(201).json(newTodo);
    }
    catch (err) {
        console.error("Error creating todo:", err);
        res.status(500).json({ error: "Something went wrong" });
    }
});
exports.createTodoMiddleware = createTodoMiddleware;
// ✅ PUT update todo
const updateTodoMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { title, completed } = req.body;
        const updated = yield todoimpl.updateTodo(id, { title, completed });
        res.json(updated);
    }
    catch (err) {
        console.error("Error updating todo:", err);
        res.status(500).json({ error: "Failed to update todo" });
    }
});
exports.updateTodoMiddleware = updateTodoMiddleware;
// ✅ DELETE todo
const deleteTodoMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleted = yield todoimpl.deleteTodo(id);
        res.json(deleted);
    }
    catch (err) {
        console.error("Error deleting todo:", err);
        res.status(500).json({ error: "Failed to delete todo" });
    }
});
exports.deleteTodoMiddleware = deleteTodoMiddleware;
