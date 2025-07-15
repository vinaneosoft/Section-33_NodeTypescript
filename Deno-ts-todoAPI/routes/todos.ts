import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import todocontroller from '../controllers/todocontroller.ts'
const router = new Router();
router.post('/todo', todocontroller.createTodoMiddleware);
router.get('/', todocontroller.getAllTodosMiddleware);

/*
router.get('/todo/:id', todocontroller.getTodoByIdMiddleware);
router.put('/todo/:id', todocontroller.updateTodoMiddleware);
router.delete('/todo/:id', todocontroller.deleteTodoMiddleware) */


export default router;
