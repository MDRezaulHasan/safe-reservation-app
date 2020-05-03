import React, { Component } from "react";
import Form from "./Form";
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
            "ffd30b4aecmshebc72ac36f6a2b1p16ee13jsn2c5864f12f9a",
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

  render() {
    //JSX code will go here
    return (
      <div>
        <Form getForcast={this.getForcast} />
        <h3>{this.state.term}</h3>
        <h4>Please select a City type.</h4>
        {this.state.suggestions.map((suggestion) => {
          return (
            <div key={uuidv4()} className="row">
              <div className="col-4">
                <h6>{suggestion.group}</h6>
              </div>
              <div className="col-4">
                {suggestion.entities.map((entitie) => {
                  return (
                    <div className="row">
                      <div className="col-4">
                        <h6>{entitie.name}</h6>
                      </div>
                      <div className="col-4">
                        <Link to={`/checkincheckout/${entitie.destinationId}`}>
                          {entitie.type}
                        </Link>
                      </div>
                    </div>
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
