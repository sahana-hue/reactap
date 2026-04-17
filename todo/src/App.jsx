import React, { useState } from 'react'

const App = () => {
  const [list, setList] = useState([])
  const [valued, setValued] = useState("")
  const handleAdd = () => {
    setList([...list, valued])
    setValued("")
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={valued} onChange={
        (e) => {
          setValued(e.target.value);
        }
      } />
      <button onClick={handleAdd} onKeyDown={(e)=>{
        if(e.key==="Enter"){
          handleAdd()
        }
      }}
        >Add</button>
      <ul>
        {list.map((i) => (
          <li key={Math.random()}>{i}</li>
        ))}
      </ul>
    </div>
  )
}

export default App