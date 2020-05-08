import React, { useState } from "react";
import Confirm from "./Confirm";
import "./Details.css";

const Detail = ({ address, price }) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="row">
      <div className="col-md-5">
        <h4>Address:</h4>
        <h6>Street:{address.address.streetAddress},</h6>

        <h6>Locality:{address.address.locality},</h6>

        <h6>Country Name:{address.address.countryName},</h6>

        <h6>Country Code:{address.address.countryCode}</h6>
        <button
          onClick={() => {
            setConfirm(!confirm);
          }}
        >
          Confirm
        </button>
        {confirm && (
          <Confirm
            getData={{
              address: address.address.streetAddress,
              locality: address.address.locality,
              countryName: address.address.countryName,
              countryCode: address.address.countryCode,
              price: address.price,
            }}
          />
        )}
      </div>
       
     
    </div>
  );
};

export default Detail;
