
import React from 'react'
import TodoList from "./TodoList"
export default function Todos(props) {
  let myStyle = {
    minHeight: "50vh",
    margin: "25px auto "

  }
  return (<div className='container ' style={myStyle}>
      <h3 className='text-center my-2'>Todos list </h3>
      {props.todos.lenght === 0 ? "No todos to display" :
        props.todos.map((todo) => {
          return <TodoList todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }

    </div>
  )
}
