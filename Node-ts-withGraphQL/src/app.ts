import express from 'express';
import bodyParser from 'body-parser';
import  {createHandler}  from "graphql-http/lib/use/express"
var { ruruHTML } = require("ruru/server")
import todosRoutes from './routes/todos';
import { userschema } from "./schema/Index";
const app = express();
app.all(
    "/graphql",
    createHandler({
      schema:userschema
    })
  );
app.use(express.urlencoded({ extended: true }));
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })  
app.use(bodyParser.json());

app.use(todosRoutes);



// make mongoose connection with ur database then connect to express server
app.listen(3000, ()=>console.log("server started on port 3000")
);
