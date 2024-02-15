import React, { useState, useRef } from 'react'
import { useTodo } from '../contexts/TodoContext';


function Form() {
    const [text, setText] = useState("");
    const {addTodo} = useTodo();
    // const inr = useRef();

    function handleClick(e){
        console.log(e.target.value);
        if(text){
            addTodo({value : text, isComplete : false})
            setText("");
        }else alert("Input Box is Empty");
    }



  return (
    <>
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} style={{fontSize : "1.1em", padding : "0.5em", width : "30vw"}}/>
    <button onClick={handleClick} style={{marginLeft : "10px", fontSize : "1.1em", padding : "0.5em", width:"100px"}}>Add</button>
    </>
  )
}

export default Form;