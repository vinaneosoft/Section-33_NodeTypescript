"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        fetchTodos: () => {
            /*  const res= await getAllUsers();
             return res; */
        },
        getTodo: (parent, args, context) => {
            /*  const res=await getUserById(args._id);
             if(res==null)
                   throw new UserNotFoundException(`User with id ${args._id} Not Found`)
             return res; */
        }
    },
    Mutation: {
        addTodo: (parent, args, context) => {
            /*  console.log(args);
             const res=await addUser(args.user);
             return res; */
        },
        deleteTodo: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            /*  const res=await deleteUserById(args._id);
             if(res==null)
               throw new UserNotFoundException(`User with id ${args._id} Not Found`)
             return res; */
        }),
        updateTodo: (parent, args, context) => {
            /*  const res=await updateUser(args.user);
             if(res==null)
               throw new UserNotFoundException(`User with id ${args.user._id} Not Found`)
            else if(res.address==null)
               throw new GraphQLError("Address Not Found for Updating");
             return res; */
        }
    }
};
