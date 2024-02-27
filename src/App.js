
import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import About from './Mycomponents/About';
import React, { useState, useEffect } from 'react';
import AddTodo from './Mycomponents/AddTodo';
import {
  BrowserRouter as Main,
  Route,
  Routes
} from "react-router-dom";




function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = []
  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))

  }
  const addTodo = (title, decs) => {
    console.log("addingthe todo ", title, decs)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }

    const myTodo = {
      sno: sno,
      title: title,
      decs: decs,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState([initTodos])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Main>
        <Header title="my todo list " />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
        <Footer />
      </Main>

    </>
  );
}

export default App;
