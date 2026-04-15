import React from 'react'

function UserStatus({user, dispatcher}) {


  return (
    <div>
      <button onClick={()=>dispatcher({type:"turnOnline", paylod:'Online'})}>turnOnline</button>
      <button onClick={()=>dispatcher({type:"turnOffline", paylod:'Offline'})}>turnOffline</button>
    </div>
  )
}

export default UserStatus
