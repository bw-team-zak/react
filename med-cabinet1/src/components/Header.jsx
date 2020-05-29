import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import THC from "./THC";
import logo from "./photos/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>MED CABINET 1</h1>
      </div>
      <Navbar>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/Browse">
          <Button>Browse</Button>
        </Link>
        <Link to="/Questionnaire">
          <Button>Questionnaire</Button>
        </Link>
        {/* <Link to="/Registration">
          <Button>Registration</Button>
        </Link> */}
        <Link to="/LoginRegistration">
          <Button>Login/Register</Button>
        </Link>
      </Navbar>
      <THC></THC>
    </div>
  );
}
