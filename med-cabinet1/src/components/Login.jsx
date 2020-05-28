import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default function Login(props) {
  const { 
    loginSubmit, 
    onInputChange, 
    errors, 
    disabled } = props;
  return (
    <Container className="login">
      <h2>Sign In</h2>
      <div className="errors">
        <div>{errors.username}</div>
        <div>{errors.password}</div>
      </div>
      <Form className="loginForm" onSubmit={loginSubmit}>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="usernameLogin"
              id="usernameLogin"
              placeholder="Username"
              onChange={onInputChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="passwordLogin"
              id="passwordLogin"
              placeholder="********"
              onChange={onInputChange}
            />
          </FormGroup>
        </Col>
        <Button disabled={disabled}>Submit</Button>
      </Form>
    </Container>
  );
}
