import React, { useState } from "react";
import "./CheckInCheckOut.css";
import Details from "./Details";

function CheckInCheckOut({ match }) {
  const [datas, setDatas] = useState([]);

  const getCheckInCheckOut = async () => {
    const checkInId = document.getElementById("checkInId").value;
    const checkOutId = document.getElementById("checkOutId").value;
    const adultsId = document.getElementById("adultsId").value;
    console.log(checkInId, checkOutId, adultsId);

    const dataForCheckInCheckOut = await fetch(
      `https://hotels4.p.rapidapi.com/properties/list?currency=USD&locale=en_US&sortOrder=PRICE&destinationId=${match.params.id}&pageNumber=1&checkIn=${checkInId}&checkOut=${checkOutId}&pageSize=25&adults1=${adultsId}`,
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
    setDatas(dataForCheckInCheckOut.data.body.searchResults.results);
    console.log(dataForCheckInCheckOut.data.body.searchResults.results);
  };
  const bookReservation = (e) => {
    e.preventDefault();
    getCheckInCheckOut();
  };

  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
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
                      />
                      <span className="form-label">Check out</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="text" id="rooms" className="form-control" />
                      <span className="select-arrow"></span>
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
                      />
                      <span className="select-arrow"></span>
                      <span className="form-label">Adults</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter your Email"
                      />
                      <span className="form-label">Email</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Enter you Phone"
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
