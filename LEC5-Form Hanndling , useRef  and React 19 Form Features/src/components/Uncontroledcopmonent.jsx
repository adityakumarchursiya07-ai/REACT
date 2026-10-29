
import { useState } from 'react'



function Uncontroledcopmonenet() {
   
    function signup (e){
      e.preventDefault()
     const formData = new FormData(e.target);
     console.log(Object.fromEntries(formData));
    }

  return (
    <>
      <h1>jai shree Ram </h1>
      <h2>Uncontroled copmonenet</h2>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name"  />
        <br />

        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" />
        <br />

        <label htmlFor="password">Password : </label>
        <input type="text" name="password" id="password"  />
        <br />
        <button>Sumbit</button>
      </form>
    </>
  );
}

export default Uncontroledcopmonenet;