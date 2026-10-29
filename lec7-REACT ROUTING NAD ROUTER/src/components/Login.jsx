import React from 'react'
import {useNavigate} from "react-router"


function Login() {
  const navigate =  useNavigate()
  function handelogin (e){
    e.preventDefault()
    console.log("login");
    navigate("/dashboard")
}

  return (
    <div>
        <h1>Login form</h1>
        <form onSubmit={handelogin} >
            <input type="text" name="username" id=""/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login