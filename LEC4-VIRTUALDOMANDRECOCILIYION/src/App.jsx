
import { useState } from 'react';
import './App.css'
import Key from './Component/Key';



// function Counter (){
// const [count,setCount] = useState(0);

// return (
//   <div>
//     <h1>{count}</h1>
//           <button onClick={() => setCount((prev)=> prev +1)}> Increment</button>

//   </div>
// )
// }

function App() {

  return (
    <>
    <div>
      
      {/* <h2>hii</h2>
      <h3>hello</h3>
      <Counter/> */}
      <Key/>
      {/* <button onClick={() => setCount((prev)=> prev -1)}> decrement</button> */}
    </div>
    </>
  )
}
// console.log(<h1>Aditya</h1>);

export default App
