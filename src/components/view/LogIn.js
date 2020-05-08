import React, { Component } from "react";
import Fire from "../../config/Fire";

class LogIn extends Component {
  signin(e) {
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1").value;
    const passward = document.querySelector("#exampleInputPassword1").value;
    Fire.auth()
      .signInWithEmailAndPassword(email, passward)
      .then((user) => {
        alert("Successfully Logged in");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  }
  signup(e) {
    e.preventDefault();

    const email = document.querySelector("#exampleInputEmail1").value;
    const passward = document.querySelector("#exampleInputPassword1").value;
    Fire.auth()
      .createUserWithEmailAndPassword(email, passward)
      .then((user) => {
        alert("Successfully Singed up");
      })
      .catch((err) => {
       //window.alert("Please enter 6 degit password!");
        window.alert("Error: " + err.toString());
      });
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.signin}
              >
                Sign in
              </button>
            </div>
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.signup}
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
