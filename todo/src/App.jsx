import React, { useState } from 'react'
import "./App.css"
import Todolist from './components/todolist';
const App = () => {
  const [list, setList] = useState([])
  const [valued, setValued] = useState("")
  const handleAdd = () => {
    if(valued.trim() === "") return;
    setList([...list, valued])
    setValued("")
  }

  const handleDelete = (indexToDelete) => {
    setList(list.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1 className="gh">Todo List</h1>
        <div className="input-box">
          <input type="text" value={valued} onChange={
            (e) => {
              setValued(e.target.value);
            }
          } />
          <button 
            onClick={handleAdd} 
            onKeyDown={(e)=>{
              if(e.key==="Enter"){
                handleAdd()
              }
            }}
          >
            Add
          </button>
        </div>
        <div className="todo-list-wrapper">
          <Todolist list={list} deletetodo={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default App
////hello