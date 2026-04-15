import React from 'react'

function UserProfile({user, dispatcher}) {


  return (
    <div>
      <button onClick={()=>dispatcher({type:"changeName", payload:'Anju'})}>changeName</button>
      <button onClick={()=>dispatcher({type:"changeRole", payload:'Developer'})}>changeRole</button>
    </div>
  )
}

export default UserProfile
