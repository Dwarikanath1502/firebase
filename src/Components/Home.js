import React from 'react'
import InputForm from './InputForm'
import Notes from './Notes'

// // FIREBASE STUFF
// import { database } from '../config/config'
// import { ref, set } from "firebase/database"

const Home = () => {

  // const [title, setTitle] = useState("")
  // const [text, setText] = useState("")

  // const pushData = (userId ,title, text) => {
  //   set(ref(database,'users/' +userId ), {
  //     title: title,
  //     text : text
  //   })
  // }



  return (
    <div>
      <p>this is home page</p>
     {/* <InputForm/>
   <Notes/> */}
    </div>
  )
}

export default Home