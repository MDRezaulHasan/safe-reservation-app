import React, { useState } from "react";
import Confirm from "./Confirm";
import "./Details.css";

const Detail = ({ address, type }) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="recipe">
      <h4>Address:</h4>
      <h6>Street:{address.streetAddress},</h6>

      <h6>Locality:{address.locality},</h6>

      <h6>Country Name:{address.countryName},</h6>

      <h6>Country Code:{address.countryCode}</h6>
      <button onClick={() => setConfirm(!confirm)}>Confirm</button>
      {confirm && <Confirm />}
    </div>
  );
};

export default Detail;
