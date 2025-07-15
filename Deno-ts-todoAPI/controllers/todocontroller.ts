import type { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import todoimpl from "../modelimpl/todoimpl.ts"
import { Todo } from '../models/todo.ts';

export const createTodoMiddleware = async (ctx: Context) => {
    const body = ctx.request.body();
    const data = await body.value; // await the parsed value
    //  console.log("Received data:", data);
    let todo = { ...data, id: new Date().toISOString() } as Todo;
    const createdtodo = todoimpl.createTodo(todo);
    ctx.response.body = createdtodo
}
export const getAllTodosMiddleware = async (ctx: Context) => {
    const todos = todoimpl.getAllTodos();
    ctx.response.body = todos
}

export const updateTodoMiddleware = async (ctx: Context) => {
    const id = ctx.params.id;
    const body = ctx.request.body();
    const data = await body.value;
    const todo = data as Todo;
    const updatedtodo = todoimpl.updateTodo(id, todo);
    ctx.response.body = updatedtodo
}

export const getTodoByIdMiddleware= async (ctx: Context) => {
    const foundtodo=todoimpl.getTodoById(ctx.params.id);
     ctx.response.body=foundtodo;
}

export const deleteTodoMiddleware=async (ctx: Context) => {
    const deletedtodo=todoimpl.deleteTodo(ctx.params.id);
    ctx.response.body=deletedtodo;
}

export default
    {
        createTodoMiddleware,
        getAllTodosMiddleware,
        updateTodoMiddleware,
       getTodoByIdMiddleware,
       deleteTodoMiddleware 
    }