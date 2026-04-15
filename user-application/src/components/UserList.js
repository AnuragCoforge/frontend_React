import React from 'react'

function UserList({dispatcher}) {
    
  return (
    <div>
      <button onClick={()=>dispatcher({type:"select1"})}>select1</button>
      <button onClick={()=>dispatcher({type:"select2"})}>select2</button>
    </div>
  )
}

export default UserList
