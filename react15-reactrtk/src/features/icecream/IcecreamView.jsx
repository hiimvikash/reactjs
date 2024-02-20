import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export default function IcecreamView() {
    const [val, setVal] = useState(1);
    const dispatch = useDispatch();
    const icecreamState = useSelector((state) => state.ice)
    console.log(icecreamState)

  return (
    <>
    <h2>Number of Icecreams in Shop : {icecreamState.numOfIcecreams}</h2>
    <input type="number" value={val} onChange={(e)=> setVal(parseInt(e.target.value))} />
    <button onClick={()=>{dispatch(ordered(val))}}>Order Icecream</button>
    <button onClick={()=>{dispatch(restocked(val))}}>Restock Icecream</button>
    </>
  )
}