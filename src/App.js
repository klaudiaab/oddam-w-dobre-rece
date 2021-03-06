import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="//">
            <Home></Home>
          </Route>
          <Route path="/logowanie">
            <Login></Login>
          </Route>
          <Route path="/rejestracja">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
