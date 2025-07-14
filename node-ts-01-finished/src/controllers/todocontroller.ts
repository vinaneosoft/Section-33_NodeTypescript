
import todoimpl from "../modelimpl/todoimpl"

import {Todo} from '../models/todo';

export const createTodoMiddleware=(req:any,res:any,next:any)=>{
    let todo= {...req.body, id:new Date().toISOString()} as Todo;
    const b=todoimpl.createTodo(todo);
    res.status(201).send(b)
}


export const getAllTodosMiddleware=(req:any,res:any,next:any)=>{
    const todos=todoimpl.getAllTodos();
    res.status(200).send(todos)
}


export const updateTodoMiddleware=(req:any,res:any,next:any)=>{
 const id=req.params.id;
    const updatedtodo=req.body as Todo;
    const b=todoimpl.updateTodo(id,updatedtodo);
    res.status(201).send(b)
}

export const getTodoByIdMiddleware=(req:any,res:any,next:any)=>{
   
}

export const deleteTodoMiddleware=(req:any,res:any,next:any)=>{

}


export default 
{
    createTodoMiddleware,
    getAllTodosMiddleware, 
    updateTodoMiddleware,
    getTodoByIdMiddleware,
    deleteTodoMiddleware
}