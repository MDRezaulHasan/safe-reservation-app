import React, { useState, useEffect } from "react";

import * as firebase from "firebase";
import firebaseDb from "../../config/Fire";

const Confirm = ({ getData }) => {
  console.log("C: " + getData.address);
  // const initialValues = {
  //   address: " ",
  //   locality: " ",
  //   countryName: " ",
  //   countryCode: " ",
  //   price: "",
  // };
  // const [values, setValues] = useState(initialValues);

  const [dataArray, setDataArray] = useState([]);
  const [currenId, setCurrentId] = useState("");

  useEffect(() => {
       addData();
  
    firebase
      .database()
      .ref("data")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDataArray({
            ...snapshot.val(),
          });
        } else {
          setDataArray({});
        }
      });
  }, []);

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebase.database().ref(`data/${key}`).remove(setCurrentId(""));
    }
  };
  const addData = () => {
    firebase.database().ref().child("data").push({
      address: getData.address,
      locality: getData.locality,
      countryName: getData.countryName,
      countryCode: getData.countryCode,
      price: getData.price,
    });
  };

  return (
    <div>
      <h4>Here you can see your booking. After the confirmation we can send you a email.Thank you</h4>
      <table className="table table-borderless table-stripped">
        <thead className="thead-light">
          <tr>
            <th>Address</th>
            <th>Locality</th>
            <th>Country Name</th>
            <th>Country Code</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(dataArray).map((id) => {
            return (
              <tr key={id}>
                <td>{dataArray[id].address}</td>
                <td>{dataArray[id].locality}</td>
                <td>{dataArray[id].countryName}</td>
                <td>{dataArray[id].countryCode}</td>
                <td>{dataArray[id].price}</td>
                <td>
                  <a
                    className="btn test-danger"
                    onClick={() => {
                      onDelete(id);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Confirm;
