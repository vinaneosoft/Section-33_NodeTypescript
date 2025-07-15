import 'graphql-import-node';
import {makeExecutableSchema} from '@graphql-tools/schema'
import  { resolvers } from './resolvers';
import fs from 'fs';
import path from 'path';
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');


export const userschema=makeExecutableSchema({
        typeDefs,
        resolvers
    })