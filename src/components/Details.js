import React, { useState } from "react";
import "./Details.css";
import Detail from "./Detail";

const Details = ({ data }) => {
  const [show, setShow] = useState(false);
  const { name, thumbnailUrl, starRating, address, ratePlan } = data;
  return (
    <div className="recipe">
      <h4>{name}</h4>
      <img src={thumbnailUrl} alt={name} />
      <h6>Rating: {starRating}</h6>
      <p>
        <h6>Price: {ratePlan.price.current}</h6>
      </p>
      <button onClick={() => setShow(!show)}>Address</button>
      {show && <Detail address={address} />}
    </div>
  );
};

export default Details;
