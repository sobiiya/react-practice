import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todos:"todo messege",
        completed:false
    }],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})

export const TodoProvider= TodoContext.Provider

export default function UseTodo(){
    return useContext(TodoContext)
}