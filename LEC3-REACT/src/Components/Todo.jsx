import React from 'react'

function Todo() {

    let value =  "";
    let todos = [ "todo 1 " , "todo 2 " , "todo 3"]
        function printValue(e){
           
            value = e.target.value;
        }
        function addTodo(e){
            e.preventDefault();
            todos.push(value)
        }
  return (
    <>
    <h1>Todo</h1>
    <form onSubmit={addTodo} >
        <input type="text" onInput={printValue} />
        <button>add</button>
    </form>
    <ul> 
        {todos.map((todo)=>{
            <li>{todo}</li>
        })}
    </ul>
    </>
  )
}

export default Todo