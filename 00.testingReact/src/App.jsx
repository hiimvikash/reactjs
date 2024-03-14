import { useState, useEffect, useRef } from "react";

export default function App() {
    let [msg, setmsg] = useState("hi");
    let prevmsg = useRef(msg);
  
    useEffect(() => {
      prevmsg.current = msg;
    }, [msg]);
    return (
      <>
        <input
          
          type="text"
          value={msg}
          onChange={(e) => {
            setmsg(e.target.value);
          }}
        />
        <h3>
          The message is : "{msg}" and the message was "{prevmsg.current}"
        </h3>
      </>
    );
  }