import { Request, Response } from "express";
import * as todoimpl from "../modelimpl/todoimpl";


export const getAllTodosMiddleware = async (req: Request, res: Response) => {
  try {
    const todos = await todoimpl.getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};


export const createTodoMiddleware = async (req: Request, res: Response) => {
  try {
    console.log("Request body:", req.body);
    const { title, completed } = req.body as { title: string; completed: boolean };

    const newTodo = await todoimpl.createTodo({ title, completed });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};


export const updateTodoMiddleware = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, completed } = req.body as { title: string; completed: boolean };

    const updated = await todoimpl.updateTodo(id, { title, completed });
    res.json(updated);
  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).json({ error: "Failed to update todo" });
  }
};


export const deleteTodoMiddleware = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleted = await todoimpl.deleteTodo(id);
    res.json(deleted);
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
