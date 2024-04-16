import { useRecoilState, useRecoilValue } from "recoil"
import { counterAtom, jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"
import { useMemo } from "react";

function App() {
  console.log("parents are rendering");
  const [count,setCount] = useRecoilState(counterAtom);

  function addcount(){
    setCount(count+1);
  }
  return (
    <>
      {/* this is to prove that if parents renders then all of It's children will also re-render but vice versa is not true */}
      <button onClick={addcount}>PARENT My Count is {count}</button> 
      <br />
      <br />
      <Btns/>
    </>
  )
}

function Btns(){
  console.log("children are rendering")
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const NotificationCount = useRecoilValue(notificationAtom);
  const [msgCount, setMsgCount] = useRecoilState(messagingAtom);

  // const totalNotificationCount = useMemo(() => {
  //   return networkCount + jobsCount + NotificationCount + msgCount;
  // }, [networkCount, jobsCount, NotificationCount, msgCount])

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  function addmsg(){
    setMsgCount(msg => msg+1);
  }
  return (
    <>
      <button>Network🌐 ({(networkCount > 100)? "99+" : {networkCount}})</button>
      <button>Jobs👜 ({jobsCount})</button>
      <button>Notification🔔 ({NotificationCount})</button>
      <button onClick={addmsg}>Messages📩 ({msgCount})</button>

      {/* give the total notification count here */}
      <button>Me ({totalNotificationCount})</button> 
    </>
  )
}
export default App
