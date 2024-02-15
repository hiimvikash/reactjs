import { useTodo } from './contexts/TodoContext'
import './App.css'
import Form from './components/Form'
import TodoItem from './components/TodoItem';


function App() {
  const {todos} = useTodo();

  return (
    <>
      <Form />
      {todos.map(todo => <div key={todo.id}><TodoItem todo = {todo} /> </div>)}
    </>
  )
}

export default App
