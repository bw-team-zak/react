import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom"
import * as yup from "yup"
import formSchema from "./components/formSchema";
import Login from "./components/Login";
import './App.css';


function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
