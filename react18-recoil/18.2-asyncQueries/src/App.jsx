import { useRecoilState, useRecoilValue } from "recoil"
import { notificationsAtom, totalNotificationSelector } from "./atoms"
import { useEffect, useState } from "react";

function App() {
  const[mounted, setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true);
  }, [])

  if(!mounted){
    return <div>Loading...</div>
  }
  else{
  return (
    <>
      <Btns/>
    </>
  )}
}

function Btns(){
  console.log("children are rendering")
  


  // PROBLEM : this is updating the state of react before the component has fully mounted
  const notificationValues = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Network🌐 ({(notificationValues.network > 100)? "99+" : notificationValues.network})</button>
      <button>Jobs👜 ({notificationValues.jobs})</button>
      <button>Notification🔔 ({notificationValues.notifications})</button>
      <button>Messages📩 ({notificationValues.messaging})</button>

      {/* give the total notification count here */}
      <button>Me ({totalNotificationCount})</button> 
    </>
  )
}
export default App
