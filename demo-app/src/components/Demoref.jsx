import React from 'react'
import { useRef, useState } from 'react'

function Demoref() {
    const [myname, setMyname] = useState('');
    const nameRef = useRef();
    const focusName=()=> {
        nameRef.current.focus();
        // setMyname(nameRef.current.value);
    }
  return (
    <div>
      <h1>Demo On UseRef</h1>
      <input type="text" ref={nameRef} placeholder="Enter name" />
      <button onClick={focusName}>Focus Name</button>
      <button onClick={()=>setMyname(nameRef.current.value)}>Get Name</button>

      <h1>name: {myname}</h1>
    </div>
    
  )
}

export default Demoref
