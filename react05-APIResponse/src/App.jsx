import { useState, useEffect } from 'react'


function App() {

  let [resourceType, setResourceType] = useState('posts');
  let [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(res=>res.json())
    .then(json=>setItems(json))

  }, [resourceType])

  return (
    <>
      <button onClick={()=> setResourceType('posts')}>posts</button>
      <button onClick={()=> setResourceType('users')}>users</button>
      <button onClick={()=> setResourceType('comments')}>comments</button>
      <h1>{resourceType}</h1>

      {
        items.map(item => <pre>{JSON.stringify(item)}</pre>)
      }
    </>
    
  )
}

export default App
