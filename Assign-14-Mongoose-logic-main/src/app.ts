import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import todosRoutes from './routes/todos';

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use('/todos', todosRoutes);

// make mongoose connection with ur database then connect to express server
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("Server running at 3000");
    });
  })
  .catch((err) => {
    console.log(" MongoDB connection error:", err);
  });