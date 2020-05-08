import React, { Component } from "react";
import Forecast from "./components/Forecast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import LogIn from "./components/LogIn";
import Fire from "./config/Fire";
import CheckInCheckOut from "./components/CheckInCheckOut";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };

    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  signout() {
    Fire.auth().signOut();
  }

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
            <div className="col-4">
              {this.state.user ? (
                <button className="btnSignout" onClick={this.signout}>
                  Sign out
                </button>
              ) : null}
            </div>
          </div>
        </header>
        {this.state.user ? (
          <Router>
            <Switch>
              <Route path="/" component={Forecast} exact />
              <Route path="/checkincheckout/:id" component={CheckInCheckOut} />
              <Route path="/details" component={Details} />
            </Switch>
          </Router>
        ) : (
          <LogIn />
        )}
      </div>
    );
  }
}

export default App;
