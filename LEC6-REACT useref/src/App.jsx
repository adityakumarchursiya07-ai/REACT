import React from 'react'
import { useState } from 'react'

function App({ title = "aditya" }) {
  const [count, setCount] = useState(0);
  let productCount = 0;
  fetch("https://dummyjson.com/products?limit=0")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCount(data.total)
    })
  return (
    <div>product -{count} , {title}</div>
  )
}

export default App