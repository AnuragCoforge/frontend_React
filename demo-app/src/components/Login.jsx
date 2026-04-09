import React from "react";
import { useState } from "react";

function Login() {
    const [user, setUser]= useState(
        {
            uname:"",
            pwd:""
        })

        const handleChange=(event)=> {
            const{name, value}=event.target
            setUser({
                ...user, [name]:value
            })
            console.log(user)
        }

        const handleSubmit=()=> {
            if(user.uname === "Anurag" && user.pwd === "anurag123") {
                alert("login successful")
            }
            else{
                alert("invalid credentials")
            }
        }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="uname">Username</label>
        <input type="text" 
        name="uname" 
        value={user.uname} 
        onChange={handleChange}
        />

        <label for="pwd">Password</label>
        <input type="text" 
        name="pwd"
        value={user.pwd}
        onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Login;
