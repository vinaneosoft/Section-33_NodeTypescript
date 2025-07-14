import {Request,Response,NextFunction} from 'express';

import todoimpl from "../modelimpl/todoimpl"

import {Todo} from '../models/todo';

export const createTodoMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    let todo= {...req.body, id:new Date().toISOString()} as Todo;
    const b=todoimpl.createTodo(todo);
    res.status(201).send(b)
}


export const getAllTodosMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const todos=todoimpl.getAllTodos();
    res.status(200).send(todos)
}


export const updateTodoMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const id=req.params.id;
    const updatedtodo=req.body as Todo;
    const b=todoimpl.updateTodo(id,updatedtodo);
    res.send(b)
}

export const getTodoByIdMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const foundIndex=todoimpl.getTodoById(req.params.id);
    res.send(foundIndex);
}

export const deleteTodoMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const b=todoimpl.deleteTodo(req.params.id);
    res.send(b);
}


export default 
{
    createTodoMiddleware,
    getAllTodosMiddleware, 
    updateTodoMiddleware,
    getTodoByIdMiddleware,
    deleteTodoMiddleware
}