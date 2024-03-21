import { useEffect, useState } from 'react'

import './App.css'
import { useCreateUserMutation, useFetchUsersQuery } from '../redux/apiSlice'

function App() {
  const { data:fetchedData , refetch } = useFetchUsersQuery();
  const [createUser] = useCreateUserMutation();
  
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [clicked, setClicked] = useState(false);
  
  const [fn, setFn] = useState("");
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const userEntry = {
      id : Math.random()*1000,
      first_name : fn
    }
    createUser(userEntry);
    setFn("");
  }

  const handleClick = async ()=>{
    setClicked(true);
    setLoading(true);
    await refetch();
    setLoading(false);
    setClicked(false); // orelse fetching data would have not been updated and displayed.
  }


  useEffect(()=>{
    if(fetchedData) setUsers(fetchedData);
  }, [clicked])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={fn} onChange={(e)=>{setFn(e.target.value)}}  />

        <button type='submit'>ADD</button>
      </form>








      <button onClick={handleClick}>Feth Users</button>
      {loading && (<h2>Loading users...</h2>)}
      
      { users.length > 0 && (
        <ul>
        <h2>UserList</h2>
        {users.map((user) => (
          <li key={user.id}>{user.id} & {user.first_name}</li>
        ))}
      </ul>
      )}
    </>
  )
}

export default App;