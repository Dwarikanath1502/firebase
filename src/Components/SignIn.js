import React, {useState} from 'react'
import {  Input, Form, Card, Row,  Container, Col, CardHeader, CardBody, FormGroup, Label, Button } from 'reactstrap'

const SignIn = () => {

// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")

  return (
    <Container>
      <Row className='justify-content-center mt-5'>
      <Col lg={6}>
         <img src={require('../Images/login.jpg')} alt='logo' height="80%"/>
        </Col>
        <Col lg={6}>
          <Card className='mt-5'>
            <Form >
              <CardHeader className='text-center'>Login Here!</CardHeader>
              <CardBody>
                <Form  >
                  <FormGroup>
                    <Label>Email</Label>
                    <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email" 
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
                    />
                  </Col>
                  <Button size='lg' color='success'className='mt-2 btn btn-block'>Sign In</Button>
                </Form>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn