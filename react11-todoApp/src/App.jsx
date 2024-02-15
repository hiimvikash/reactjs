// import { useState } from 'react'
import { TodoProvider, useTodo } from './contexts/TodoContext'
// import './App.css'
import Form from './components/Form'
import TodoItem from './components/TodoItem';
// import { useState, useEffect } from "react";

function App() {
  const {todos} = useTodo();
  console.log(todos);

  return (
    <TodoProvider>
      <Form />
      {todos.map(todo => <div key={todo.id}><TodoItem todo = {todo} /> </div>)}
    </TodoProvider>
  )
}

export default App
