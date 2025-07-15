"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_2 = require("graphql-http/lib/use/express");
var { ruruHTML } = require("ruru/server");
const todos_1 = __importDefault(require("./routes/todos"));
const Index_1 = require("./schema/Index");
const app = (0, express_1.default)();
app.all("/graphql", (0, express_2.createHandler)({
    schema: Index_1.userschema
}));
app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});
app.use(body_parser_1.default.json());
app.use(todos_1.default);
// make mongoose connection with ur database then connect to express server
app.listen(3000, () => console.log("server started on port 3000"));
