
import { useState } from 'react'



function ControlCoponenet() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [form , setForm] = useState({ name : "" , email : " " , password : ""})

    function signup (e){
      e.preventDefault()
      console.log("form submitted");
      console.log({form});
    }

    function handleInput(e){
      // let value = e.target.value ;
      //  let name = e.target.name;
      //  console.log(name ,value);
      const {name , value } = e.target
      setForm((prev)=> ({...prev , [name] :  value } ))
    }
  return (
    <>
      <h1>jai shree Ram </h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" onInput={handleInput} />
        <br />

        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" onInput={handleInput}/>
        <br />

        <label htmlFor="password">Password : </label>
        <input type="text" name="password" id="password"  onInput={handleInput}/>
        <br />
        <button>Sumbit</button>
      </form>
    </>
  )
}

export default ControlCoponenet;