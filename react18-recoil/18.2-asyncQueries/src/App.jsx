import { useRecoilState, useRecoilValue } from "recoil"
import { notificationsAtom, totalNotificationSelector } from "./atoms"
import { useEffect, useState } from "react";

function App() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      // Set isMounted to true when the component mounts
      setIsMounted(true);
      // Clean up by setting isMounted to false when the component unmounts
      return () => {
        setIsMounted(false);
      };
    }, []);
  return (
    <>
      {/* <Btns/> */}
      {isMounted && <Btns/>}
    </>
  )
}

function Btns(){
  console.log("children are rendering")
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
