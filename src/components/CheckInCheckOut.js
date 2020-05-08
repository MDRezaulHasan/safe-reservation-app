import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CheckInCheckOut.css";
import Details from "./Details";
import * as firebase from "firebase";
import "../config/Fire";

function CheckInCheckOut({ match }) {
  const [datas, setDatas] = useState([]);

  const getCheckInCheckOut = async () => {
    const checkInId = document.getElementById("checkInId").value;
    const checkOutId = document.getElementById("checkOutId").value;
    const adultsId = document.getElementById("adultsId").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const rooms = document.getElementById("rooms").value;
    console.log(checkInId, checkOutId, adultsId);

    const dataForCheckInCheckOut = await fetch(
      `https://hotels4.p.rapidapi.com/properties/list?currency=USD&locale=en_US&sortOrder=PRICE&destinationId=${match.params.id}&pageNumber=1&checkIn=${checkInId}&checkOut=${checkOutId}&pageSize=25&adults1=${adultsId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key":
            "3f70a06836msh9d83d8dd7bfeeb8p14ddefjsna687fd42dced",
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    setDatas(dataForCheckInCheckOut.data.body.searchResults.results);
    console.log(dataForCheckInCheckOut.data.body.searchResults.results);

    //saving data into firebase
    firebase.database().ref("booking").push({
      checkIn: checkInId,
      checkOut: checkOutId,
      adult: adultsId,
      phoneNumber: phoneNumber,
      rooms: rooms,
    });
  };
  const bookReservation = (e) => {
    e.preventDefault();
    getCheckInCheckOut();
  };

  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <button>
            <Link to="/">Back to home</Link>
          </button>
          <div className="row">
            <div className="booking-form">
              <div className="form-header">
                <h1>Make your reservation</h1>
              </div>
              <form onSubmit={bookReservation}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="checkInId"
                        className="form-control"
                        type="date"
                        required
                      />
                      <span className="form-label">Check In</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="checkOutId"
                        className="form-control"
                        type="date"
                        required
                      />
                      <span className="form-label">Check out</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="rooms"
                        className="form-control"
                        placeholder="Room number"
                        required
                      />
                      <span className="form-label">Rooms</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        id="adultsId"
                        className="form-control"
                        type="text"
                        placeholder="Adults number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="phoneNumber"
                        className="form-control"
                        type="tel"
                        placeholder="Enter you Phone"
                        required
                      />
                      <span className="form-label">Phone</span>
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <input
                    className="submit-btn"
                    type="submit"
                    value="Book Now"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="recipes">
        {datas !== [] &&
          datas.map((data) => {
            return <Details key={data.id} data={data} />;
          })}
      </div>
    </div>
  );
}
export default CheckInCheckOut;
