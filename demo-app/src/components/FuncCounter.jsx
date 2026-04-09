import React from 'react'
import { useState } from 'react';

function FuncCounter() {
    const[count, setCount] = useState(0);

    function increment() {
        setCount(count+1);
    }

    function decrement() {
        if(count<=0) {
            setCount(0);
        }
        else{
            setCount(count-1);
        }
    }
  return (
    <div>
        <h1>Count: {count}</h1> 
        <button class="btn btn-primary" onClick={increment}>Increment</button>
        <button class="btn btn-danger" onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default FuncCounter
