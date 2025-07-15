import mongoose from "mongoose";

export interface TodoType {
  title: string;
  completed: boolean;
  createdAt: Date;
}

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model<TodoType & mongoose.Document>("Todo", todoSchema);
export default Todo;
