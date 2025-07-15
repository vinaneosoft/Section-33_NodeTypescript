import TodoModel from '../models/todoschema'; // schema import

export const createTodo = async (todo: { title: string; completed: boolean }) => {
  const newTodo = new TodoModel(todo);
  return await newTodo.save();
};

export const getAllTodos = async () => {
  return await TodoModel.find(); // returns array of docs
};

export const updateTodo = async (id: string, todoData: any) => {
  return await TodoModel.findByIdAndUpdate(id, todoData, { new: true });
};

export const deleteTodo = async (id: string) => {
  return await TodoModel.findByIdAndDelete(id);
};

export const getTodoById = async (id: string) => {
  return await TodoModel.findById(id);
};

export default {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  getTodoById
};
