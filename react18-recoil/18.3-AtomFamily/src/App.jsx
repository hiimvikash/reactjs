
import './App.css'
import { useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {


  return (
    <>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    </>
  )
}

function Todo({id}) {
  const todo = useRecoilValue(todosAtomFamily(id));

 return (
   <>
     {todo.title}
     {todo.description}
     <br />
   </>
 )
}

export default App
