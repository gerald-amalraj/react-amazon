import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Amazon
          </Link>
        </nav>

        <div className="container mt-3">
          <Switch>
           
            <Route exact path={["/", "/add"]} component={AddTutorial} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
