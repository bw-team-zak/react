import React, { useState } from "react";
import { locations } from "./assets/locations";
import { conditions1, conditions2, conditions3 } from "./assets/conditions";
import { connect } from "react-redux";
import { postNewUser } from "../actions/registerAction";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

// const initForm = {  // going to keep all state for forms in 1
//   username: "",
//   password: "",
//   location: "",
//   med_condition: null,
//   age: "",
//   experienced: null,
// };

const Registration = (props) => {
  // const [form, setForm] = useState(initForm); // going to keep all state for forms in 1
  const {
    values,
    postNewUser,
    onInputChange,
    errors,
    disabled,
    submitHandle,
    onCheckboxChange,
  } = props;

  // const changeHandle = (e) => {    //going to pass down the event handler
  //   const name = e.target.name;    // that was in app.js
  //   const value = e.target.value;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const submitHandle = (e) => { // going to move to app.js and pass down through props
  //   e.preventDefault();        //
  //   postNewUser(form);
  // };

  return (
    <Container className="registration">
      <h2>Register New User</h2>
      <div className="errors">
        <div>{errors.username}</div>
        <div>{errors.password}</div>
        <div>{errors.location}</div>
        <div>{errors.age}</div>
        <div>{errors.experienced}</div>
        <div>{errors.tos}</div>
      </div>
      <div>
        <Form className="registrationForm" onSubmit={submitHandle}>
          <Col>
            <FormGroup>
              <Label>
                <span style={{ color: "red" }}>*</span>
                Username:
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Choose a username"
                  // value={values.username}
                  onChange={onInputChange}
                />
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>
                <span style={{ color: "red" }}>*</span>
                Password:
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Choose a password"
                  // value={values.password}
                  onChange={onInputChange}
                />
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>
                <span style={{ color: "red" }}>*</span>
                Location (US Only)
                <br />
                <select onChange={onInputChange} name="location">
                  {locations.map((location, index) => {
                    return index === 0 ? (
                      <option disabled selected value>
                        {location}
                      </option>
                    ) : (
                      <option
                      // value={values.location}
                      >
                        {location}
                      </option>
                    );
                  })}
                </select>
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="age">
                <span style={{ color: "red" }}>*</span>
                Age: (18+)
                <Input
                  min="18"
                  max="150"
                  type="number"
                  name="age"
                  // value={values.age}
                  onChange={onInputChange}
                />
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>
                <span style={{ color: "red" }}>*</span>
                Have you experienced the effects of cannabis before?
                <br />
                <select onChange={onInputChange} name="experienced">
                  <option disabled selected value>
                    Select
                  </option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>
                Do you accept the TOS?
                <br />
                <Input
                  type="checkbox"
                  name="tos"
                  // checked={values.tos}
                  onChange={onCheckboxChange}
                />
              </Label>
            </FormGroup>
          </Col>
          <Button disabled={disabled}>Submit</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Registration;
