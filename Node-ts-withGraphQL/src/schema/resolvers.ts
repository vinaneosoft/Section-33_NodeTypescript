import { Todo } from "../models/todo";
import todoimpl from '../modelimpl/todoimpl';
export const resolvers ={
   Query:{
      fetchTodos :  () =>{
          const todos= todoimpl.getAllTodos();
         console.log(todos);
         return todos;
        /*  const res= await getAllUsers();
         return res; */
      },
      getTodo : (parent:any, args:any, context:any)=>{
        
         
        /*  const res=await getUserById(args._id);
         if(res==null)
               throw new UserNotFoundException(`User with id ${args._id} Not Found`)
         return res; */
      }
   },
    Mutation:{
      addTodo : (parent:any, args:any, context:any)=>{
         //console.log(args.todo);
         const data=args.todo as Todo;
          let todo= {...data, id:new Date().toISOString()} as Todo;
         console.log(todo);
         return todoimpl.createTodo(todo);
        /*  console.log(args);
         const res=await addUser(args.user);
         return res; */
      },
      deleteTodo : async(parent:any, args:any, context:any)=>{
         /*  const res=await deleteUserById(args._id);
          if(res==null)
            throw new UserNotFoundException(`User with id ${args._id} Not Found`)
          return res; */
      },
      updateTodo : (parent:any, args:any, context:any)=>{
         /*  const res=await updateUser(args.user);
          if(res==null)
            throw new UserNotFoundException(`User with id ${args.user._id} Not Found`)
         else if(res.address==null)
            throw new GraphQLError("Address Not Found for Updating");
          return res; */
       } 
   } 
}

   
