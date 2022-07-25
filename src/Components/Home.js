
import React,{useState, useEffect} from 'react'
import { Container } from 'reactstrap'
import TodoForm from './TodoForm'
import Todos from './Todos'


const Home = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    console.log({localStorage});
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

    const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
   <Container>
      <TodoForm addTodos = {addTodos}/>
      <Todos todos = {todos} markComplete = {markComplete}/>
   </Container>
  )
}

export default Home



// import { async } from '@firebase/util'
// import React, { useState, useEffect } from 'react'
// import { Container } from 'reactstrap'
// import InputForm from './InputForm'
// import Notes from './Notes'

// const Home = () => {

//   const [input, setInput] = useState([])

//   useEffect(() => {
//     const localInput = localStorage.getItem("input")
//     console.log({localStorage});
//     if (localInput) {
//       setInput(JSON.parse(localInput))
//     }
//   }, [])

//   // ADD INPUT
//   const addInput = async input  => {
//     setInput([...input, input])
//   }

//   useEffect(()=> {
//     localStorage.setItem("input", JSON.stringify(input))
//   }, [input])

//   const markComplete = id => {
//     setInput(input.filter(input => input.id !== id))
//   }

  
//   return (
//     <Container>
//       <InputForm addInput={addInput} />
//       <Notes input={input} markComplete={markComplete} />
//     </Container>
//   )
// }

// export default Home