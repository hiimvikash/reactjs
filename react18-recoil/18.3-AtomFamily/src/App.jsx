
import './App.css'
import { useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {

// updation of todo : see it @ last
const updateTodo = useSetRecoilState(todosAtomFamily(2));
useEffect (() => {
  setTimeout(() => {
    updateTodo ({
    id: "2",
    title: "new todo",
    description: "new todo"
    })
  }, 5000)
}, [])
// updation of todo : see it @ last

  return (
    <>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    </>
  )
}

function Todo({id}) {
  const todo = useRecoilValue(todosAtomFamily(id)); // todosAtomFamily(id) = this returns a atom

 return (
   <>
     {todo.title}
     {todo.description}
     <br />
   </>
 )
}

export default App
