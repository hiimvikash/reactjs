import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export default function CakeView() {
    const [val, setVal] = useState(1);
    const dispatch = useDispatch();
    const cakeState = useSelector((state) => state.cak)
    console.log(cakeState)

  return (
    <>
    <h2>Number of Cakes in Shop : {cakeState.numOfcakes}</h2>
    <input type="number" value={val} onChange={(e)=> setVal(parseInt(e.target.value))} />
    <button onClick={()=>{dispatch(ordered(val))}}>Order Cake</button>
    <button onClick={()=>{dispatch(restocked(val))}}>Restock Cake</button>
    </>
  )
}