import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import THC from "./THC";
import logo from "./photos/logo.png";

export default function Header() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt=""/>
        <h1>MED CABINET 1</h1>
      </div>
      <Navbar>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/Login">
          <Button>Login</Button>
        </Link>
        <Link to="/NotherOne">
          <Button>Another1</Button>
        </Link>
        <Link to="/Registration">
          <Button>Registration</Button>
        </Link>
        <Link to="/Login">
          <Button>Login</Button>
        </Link>
      </Navbar>
      <THC></THC>
    </div>
  );
}
