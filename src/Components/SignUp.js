import React, { useState, useContext } from 'react'
import { Input, Form, Card, Row, Container, Col, CardHeader, CardBody, FormGroup, Label, Button } from 'reactstrap'
import { userContext } from '../context/userContext';
import { Navigate } from 'react-router-dom'
// firebase
import auth from '../config/config'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { provider } from '../config/config';
// toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const context = useContext(userContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // SIGNUP METHODS
  // Signup with Email and Password
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid })
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  }
  // Signup with GOOGLE
  const handleSignupWithGoogle = () => {
    getRedirectResult(auth)
    signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      context.setUser({user, token})
    })
    .catch((error) => {
      console.log(error);
      toast(error.message, {
        type: "error",
      });
    });
  }

// HANDLE SUBMIT
// Handle submit with google
  const handleGoogle = (e) => {
    e.preventDefault()
    handleSignupWithGoogle()
  }
// Handle submit with email & password
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
  }

  // IF USER FOUND NAVIGATE TO HOME 
  if (context.user && context.user.uid) {
    return <Navigate to="/" />
  } 
  if (context.user?.token) {
    return<Navigate to ="/"/>
  }
  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col lg={6} className="text-center">
          <img src={require('../Images/login.jpg')} alt='logo' height="80%" />
        </Col>
        <Col lg={6}>
          <Card className='mt-5'>
            <Form onSubmit={handleSubmit}>
              <CardHeader className='text-center'>Sign Up Here!</CardHeader>
              <CardBody>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Col sm={12}>
                    <Input
                      type="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                  <Label>Password</Label>
                  <Col sm={12}>
                    <Input
                      type="password"
                      placeholder="password"
                      value={password}
                      width="auto"
                      onChange={e => { setPassword(e.target.value) }}
                    />
                  </Col>
                  <Button color="success" size="lg" className='mt-3' block>Sign up</Button>
                  <Button color="danger" size="lg" className='mt-3' block onClick={handleGoogle}>Sign up with Google</Button>
                </FormGroup>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp