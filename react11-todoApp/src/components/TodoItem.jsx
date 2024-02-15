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
        updateTodo(todo.id, {...todo, value : todomsg});
        setIsEdit(false);
    }

    const styleList ={
        listStyle: "none", padding: "0.5em", margin : "10px 0", 
        fontSize : "1.2em", width : "30vw",
        border: "1px solid black", display : "flex", 
        alignItems : "center", justifyContent:"space-between"
    }


  return (
    <div>
        <input type="checkbox" onChange={toggleChecked} checked = {todo.isComplete}/>
        <input type="text" value={todomsg} onChange = {(e)=>setTodomsg(e.target.value)} readOnly = {!isEdit} />
        <button onClick={()=>{
            if(isEdit){
                editTodo();
            }
            else setIsEdit(true)
        }} disabled = {todo.isComplete} >{isEdit ? "📁" : "📝"}</button>
        <button onClick={()=>{deleteTodo(todo.id)}}>🗑️</button>
    </div>
  )
}

export default TodoItem