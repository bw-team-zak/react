import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom"
import './App.css';
import * as yup from "yup"
import Login from "./components/Login"
import Header from "./components/Header"
import formSchema from "./components/formSchema";
import { Button, Navbar } from 'reactstrap';


const initialLoginData = {
  email: "",
  password: "",
  }
  
  const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  // role: "",
  // tos: "",
  }
  
  const initialDisabled = true;


function App() {


  const [loginData, setloginData] = useState(initialLoginData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);



  useEffect(() => {
    formSchema.isValid(loginData)
      .then(valid => {
        setDisabled(!valid)
        console.log(valid)
      })
  }, [loginData])


  const onInputChange = event => {
    const { name } = event.target
    const { value } = event.target

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""})
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setloginData({
      ...loginData,
      [name]: value})
  }

  const loginSubmit = event => {
    event.preventDefault()

    // const newUser = {
      // email: formData.email,
      // phone: formData.phone,
      // form to update state
    // }

    // setcurrentUser({...newUser})
    // state update
  }


  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Switch>
          <Route exact path={`/`}>
            {/* HOME PAGE*/}
          </Route>
          <Route path={"/Login"}>
            <Login 
              loginSubmit={loginSubmit}
              onInputChange={onInputChange}
              errors={formErrors}
              disabled={disabled}></Login>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
