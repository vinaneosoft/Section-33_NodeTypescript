import express from 'express';
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

// make mongoose connection with ur database then connect to express server
app.listen(3000);
