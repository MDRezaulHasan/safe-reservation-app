import React, { Component } from "react";
import Form from "../view/Form";

import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";

class Forcast extends Component {
  state = {
    suggestions: [],
    term: [],
  };

  getForcast = async () => {
    const locationName = document.getElementById("locationName").value;
    // e.preventDefault();
    const data = await fetch(
      `https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${locationName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key":
            "",
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      suggestions: data.suggestions,
      term: data.term,
    });
    console.log(locationName);
  };

  // signout() {
  //   Fire.auth().signOut();
  // }

  render() {
    //JSX code will go here
    return (
      <div>
        <div>
          <Form getForcast={this.getForcast} />
          <h3>{this.state.term}</h3>
          <button>
            <Link to="/">Back to home</Link>
          </button>
          <p>You are logged in.</p>
        </div>

        {this.state.suggestions.map((suggestion) => {
          return (
            <div key={uuidv4()} className="row">
              <div className="col-4">
                <h6>{suggestion.group}</h6>
              </div>
              <div className="col-4">
                {suggestion.entities.map((entitie) => {
                  return (
                    entitie.type === "CITY" && (
                      <div className="row" key={uuidv4()}>
                        <div className="col-4">
                          <h6>{entitie.name}</h6>
                        </div>
                        <div className="col-4">
                          <Link
                            to={`/checkincheckout/${entitie.destinationId}`}
                          >
                            {entitie.type}
                          </Link>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Forcast;
