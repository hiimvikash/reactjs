import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect, useState } from 'react';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
    return ()=>{
      setMounted(false);
    }
  }, [])

  if(mounted){
  return <>
    <Todo id={1}/>
    <Todo id={2} />
  </>
  }
  else return <></>;
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App