import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const Todo =()=>{
    
    const [Task,setTask]=React.useState("");
    const [Todo,setTodo]=React.useState([]);  

    const onDelete=(id)=>{
       let newtodos = Todo.filter(todo=>todo.id!==id);
       setTodo(newtodos);  
    }

    return (
        <>
            <input onChange={(e)=>setTask(e.target.value)} value={Task}/>
            <button onClick={()=>{
                setTodo([...Todo, {id:Date.now(),value:Task,isCompleted:false}])}} >Add</button>
            <TodoList data={Todo} onDelete={onDelete}/>
        </>
    )
}
export default Todo