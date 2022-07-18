import React, { useState } from 'react'
import Header from './layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { userContext } from './context/userContext'
// firebase stuffs
import { firebaseConfig } from './config/config';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const App = () => {

  const [user, setUser] = useState('user')

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)


  return (
    <Router>
      <userContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='*' element={<SignUp />} />
        </Routes>
      </userContext.Provider>

    </Router>
  )
}

export default App