import React from 'react';
import { Route, Switch, Link } from "react-router-dom"
import './App.css';
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/*HEADER HERE*/}
        
        <Switch>
          <Route exact path={`/`}>
            {/* HOME PAGE*/}
          </Route>
          <Route path={"/Login"}>
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
