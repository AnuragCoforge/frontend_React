import React from 'react'
import { useState, useEffect  } from 'react';
// import { } from 'react';

function CounterWithUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=>{ //whenever we want to store previous dom status
        console.log("count modified, count: ", count)
    },[count])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterWithUseEffect
