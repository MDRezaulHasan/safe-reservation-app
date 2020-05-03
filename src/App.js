import React, { Component } from "react";
import Forecast from "./components/Forecast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import CheckInCheckOut from "./components/CheckInCheckOut";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-4">
              <i className="fas fa-hotel"></i>
            </div>
            <div className="col-4">
              <h1 className="App-title">Safe Reservation</h1>
            </div>
          </div>
        </header>
        <Router>
          <Switch>
            <Route path="/" component={Forecast} exact/>
            <Route path="/checkincheckout/:id" component={CheckInCheckOut} />
            <Route path="/details" component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
