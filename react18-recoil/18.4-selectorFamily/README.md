# Selector Family - 
## To do async call like hitting backend for defaultValue while using Atom family

# useRecoilStateLoadable & useRecoilValueLoadable

```js
function Todo({id}) {
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
    /**
     * todo = {
     *  contents,
     *  state
     *   }
     * 
     * 
     **/
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   else if (todo.state === "hasValue") {
        return (
        <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
        </>
        )
    }
    else if(todo.state === "hasError"){
        return <>
        <div>Error found<div>
        </> 
        
    }
}
```