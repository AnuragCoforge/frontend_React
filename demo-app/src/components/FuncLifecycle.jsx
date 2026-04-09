import React, { useEffect, useState } from 'react'

function FuncLifecycle() {
    const [name, setName]= useState("Anurag");


    useEffect(()=> {
        console.log("component mounted")

        return ()=>{
            console.log("Component Unmounted")
        }
    },[])

    useEffect(()=>{
        console.log("component updated")

        return ()=>{
            console.log("Component Unmounted")
        }

    },[name])

    const changeName=()=> {
        setName("Anurag Tiwari")
    }
  return (
    <>
      <h1>Using UseEffect, Life cycle methods</h1>
      <h1>{name}</h1>
      <button onClick={changeName}>Change</button>
    </>
  )
}

export default FuncLifecycle
