"use client"
import React, { useState } from 'react'
import './globals.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) =>{
    if(inputText !== '')
    setListTodo([...listTodo,inputText])
  }
  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList = {addList}/>
        <h2 style={{color:'#ffffff'}}>ToDo's Here</h2>
        <hr />
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} item={listItem} index={i} deleteListItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App;