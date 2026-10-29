import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>ADITYA</h1>
    <Counter/>
    <Todo/>
    </>
  )
}

export default App
