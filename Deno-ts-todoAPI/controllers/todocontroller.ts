
import todoimpl from "../modelimpl/todoimpl.ts"

import {Todo} from '../models/todo.ts';

export const createTodoMiddleware=async (ctx)=>{
    console.log("create todo middleware....");
    
    let data=await ctx.request.body()
    let todo= {...data, id:new Date().toISOString()} as Todo;
    const createdtodo=todoimpl.createTodo(todo);
    ctx.response.body=createdtodo
  //  ctx.response.body = { message: 'Created todo!', todo: newTodo };
}

/* 
export const getAllTodosMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const todos=todoimpl.getAllTodos();
    res.status(200).send(todos)
}


export const updateTodoMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const id=req.params.id;
    const todo=req.body as Todo;
    const updatedtodo=todoimpl.updateTodo(id,todo);
    res.send(updatedtodo)
}

export const getTodoByIdMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const foundtodo=todoimpl.getTodoById(req.params.id);
    res.send(foundtodo);
}

export const deleteTodoMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const deletedtodo=todoimpl.deleteTodo(req.params.id);
    res.send(deletedtodo);
}
 */

export default 
{
    createTodoMiddleware
  /*   getAllTodosMiddleware, 
    updateTodoMiddleware,
    getTodoByIdMiddleware,
    deleteTodoMiddleware */
}