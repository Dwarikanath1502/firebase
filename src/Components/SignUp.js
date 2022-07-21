import React, { useState, useContext } from 'react'
import { Input, Form, Card, Row, Container, Col, CardHeader, CardBody, FormGroup, Label, Button } from 'reactstrap'
import { userContext } from '../context/userContext';
import { Navigate } from 'react-router-dom'
// firebase
import auth from '../config/config'
import { createUserWithEmailAndPassword } from "firebase/auth";
// toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const context = useContext(userContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = () => {
    // TODO: create firebase stuffs here
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

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
  }

  // IF USER FOUND NAVIGATE TO HOME 
  if (context.user && context.user.uid) {
    return <Navigate to="/" />
  } return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col lg={6}>
          <img src={require('../Images/login.jpg')} alt='logo' height="80%" />
        </Col>
        <Col lg={6}>
          <Card className='mt-5'>
            <Form onSubmit={handleSubmit}>
              <CardHeader className='text-center'>Sign Up Here!</CardHeader>
              <CardBody>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <Label>Password</Label>
                <Col sm={9}>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value) }}
                  />
                </Col>
                <Button size='lg' color='success' className='mt-2 btn btn-block'>Sign Up</Button>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp