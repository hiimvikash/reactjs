import React from 'react'
import { useTodo } from '../contexts/TodoContext';
import { useState } from 'react';

function TodoItem({todo}) {
    const {toggleComplete, updateTodo, deleteTodo} = useTodo();

    const [todomsg, setTodomsg] = useState(todo.value);
    const [isEdit, setIsEdit] = useState(false);

    function toggleChecked(){
        toggleComplete(todo.id);
    }

    function editTodo(){
        if(todomsg === ""){
            deleteTodo(todo.id);
            return;
        }
        updateTodo(todo.id, {...todo, value : todomsg});
        setIsEdit(false);
    }

    const styleList ={
        listStyle: "none", margin : "10px 0", 
        fontSize : "1.2em", width : "30vw",
         display : "flex", 
        alignItems : "center", justifyContent:"space-between",
        
    }
    const styleInput = {
        fontSize : "1.2em", padding: "0.5em",
        height : "100%", marginLeft : "10px",
        border : "none",
        backgroundColor : todo.isComplete ? "#0000000f" : ""
    }



  return (
    <div style={{}}>
    <div style={styleList}>
        <input type="checkbox" onChange={toggleChecked} checked = {todo.isComplete}/>
        <input style={styleInput} type="text" value={todomsg} onChange = {(e)=>setTodomsg(e.target.value)} readOnly = {!isEdit} />
        <button onClick={()=>{
            if(isEdit){
                editTodo();
            }
            else setIsEdit(true)
        }} disabled = {todo.isComplete} >{isEdit ? "📁" : "📝"}</button>
        <button onClick={()=>{deleteTodo(todo.id)}}>🗑️</button>
    </div>
    </div>
  )
}

export default TodoItem