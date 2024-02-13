import { useEffect, useState, useRef } from 'react'
import './App.css'
function App() {
  let[pwd, setPwd] = useState();
  let[incNum, setIncNum] = useState(false);
  let[incSpc, setIncSpc] = useState(false);
  let[length, setLength] = useState(20);
  let pwdref = useRef(null);

  useEffect(()=>{
    setPwd(generatePassword(length, incNum, incSpc));
  },[incNum, incSpc, length])

  function handleCopy(){
    window.navigator.clipboard.writeText(pwd);
    pwdref.current.select()
  }


  return (
    <>
      <div className='upper'>
        <input type="text" value = {pwd} ref={pwdref}/>
        <button onClick={handleCopy}>Copy</button>
      </div>
      <div>
      <label htmlFor="">length :{length}</label>
      <input type="range" min={10} max={30} defaultValue={20} onChange={(e)=>setLength(e.target.value)} />
      <label htmlFor="">Numbers</label>
      <input type="checkbox" onChange={(e)=>setIncNum(!incNum)}/>
      <label htmlFor="">Special Character</label>
      <input type="checkbox" onChange={(e)=>setIncSpc(!incSpc)}/>
      </div>
    </>
  )
}

function generatePassword(length, incNum, incSpc){
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let password = "";
  if(!incNum && !incSpc){
    for(let i = 0; i<length; i++){
      let randomIndex = Math.floor(Math.random()*chars.length);
      password+=chars.charAt(randomIndex);
    }
  }
  else if(!incSpc){
    chars+="1234567890";
    for(let i = 0; i<length; i++){
      let randomIndex = Math.floor(Math.random()*chars.length);
      password+=chars.charAt(randomIndex);
    }
  }else if(!incNum){
    chars+="{)(&*^%$#@}!";
    for(let i = 0; i<length; i++){
      let randomIndex = Math.floor(Math.random()*chars.length);
      password+=chars.charAt(randomIndex);
    }
  }
  else{
    chars+="1234567890{)(&*^%$#@}!";
    for(let i = 0; i<length; i++){
      let randomIndex = Math.floor(Math.random()*chars.length);
      password+=chars.charAt(randomIndex);
    }
  }
  return password;
}

export default App
