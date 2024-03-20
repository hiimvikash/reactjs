import { useEffect, useState } from 'react'

import './App.css'
import { useFetchUsersQuery } from '../redux/apiSlice'

function App() {
  const { data:fetchedData , refetch } = useFetchUsersQuery();

  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [clicked, setClicked] = useState(false);

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
      <button onClick={handleClick}>Feth Users</button>
      {loading && (<h2>Loading users...</h2>)}
      
      {users.length > 0 && (
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