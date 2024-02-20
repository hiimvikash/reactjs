import React from 'react'
import { fetchUser } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

function UserView() {
    const userState = useSelector((state)=> state.use)
    const dispatch = useDispatch();
    console.log(fetchUser()()) // fun(dispatch, getState, ...)

    
  return (
    <>
    <br/>
    <br/>
    <div><button onClick={()=>{dispatch(fetchUser())}}>Fetch Users Emails froms API</button></div>
    {userState.loading && <h3>Loading...</h3>}
    {userState.error.length !== 0 && <h3>{userState.error}</h3>}
    {userState?.users && userState.users.map((user)=> <li key={user.id}>
        <h3>email : {user.email}</h3>
        <h3>name : {user.name}</h3>
    </li>)}
    </>
  )
}

export default UserView