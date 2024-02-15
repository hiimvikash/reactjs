import { useState, useEffect, createContext, useContext } from "react";


// 1. create Todocontext
const TodoContext = createContext();

// 2. Make a Provider Component
export function TodoProvider({children}){
    let [todos, setTodos] = useState([]);
    
    useEffect(()=>{
        const tody = JSON.parse(localStorage.getItem("todos"));
        if(tody && tody.length > 0) setTodos(tody);
    }, [])

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    const addTodo = (todo) =>{
        setTodos((prevTodos) => [{id : Date.now(), ...todo}, ...prevTodos])
    }

    const updateTodo = (id, todo)=>{
        setTodos((prevTodos) => prevTodos.map( prevTodo =>(prevTodo.id === id ? {id: Date.now(), ...todo} : prevTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos)=> prevTodos.filter(prevTodo => prevTodo.id !== id ))
    }

    const toggleComplete = (id) => {
        setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ? {...prevTodo, isComplete : !prevTodo.isComplete} : prevTodo))
    }




    return(
        <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            {children}
        </TodoContext.Provider>
    )

}



// 3. useContext
export function useTodo() {return useContext(TodoContext);}