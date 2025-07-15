"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userschema = void 0;
require("graphql-import-node");
const schema_1 = require("@graphql-tools/schema");
const resolvers_1 = require("./resolvers");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typeDefs = fs_1.default.readFileSync(path_1.default.join(__dirname, 'schema.graphql'), 'utf8');
exports.userschema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers: resolvers_1.resolvers
});
