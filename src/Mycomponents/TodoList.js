import React from 'react'

export default function TodoList({ todo, onDelete }) {
  let mystyle = {
    padding:"2px",
    borderBottom: "2px dashed rgba(0, 0, 0, 0.2)"



  }
  return (
    <div style={mystyle}>
      <h5>{todo.title}</h5>
      <p>{todo.decs}</p>
      <button className=" btn  btn-sm btn-outline-danger my-2" onClick={() => { onDelete(todo) }}>Delete</button>
    </div>
  )
}
