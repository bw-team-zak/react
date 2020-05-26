import React from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

export default function Login(props) {
    const {loginSubmit, onInputChange, errors} = props;
    return (
        <Container className="login">
        <h2>Sign In</h2>
        <div className="errors">
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
        <Form className="loginForm" onSubmit={loginSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@email.com"
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
        </Container>
    )
}
