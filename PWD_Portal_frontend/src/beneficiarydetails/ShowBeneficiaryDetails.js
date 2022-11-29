import React, { useState, useEffect } from "react";
const AfterLogin = () => {
  const host = "http://localhost:3300/api";
  const [data, setData] = useState();

  const fetchDetails = async () => {
    const url = `${host}/registration/info`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      }
    });
    const json = await response.json();
    if (response.status == 200) {
      setData(json);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="container">
      <p>
        <b>Name:</b> {data && data.name}{" "}
      </p>
      <p>
        <b>Disability Type:</b> {data && data.disability_type}{" "}
      </p>
      <p>
        <b>Percentage of Disability:</b> {data && data.percentage_of_disability}{" "}
      </p>
      <p>
        <b>UDID Number:</b> {data && data.udid}{" "}
      </p>
      <p>
        <b>Aadhar Number:</b> {data && data.aadhar_number}{" "}
      </p>
      <p>
        <b>Address:</b> {data && data.address}{" "}
      </p>
      <p>
        <b>District:</b> {data && data.zone}{" "}
      </p>
      <p>
        <b>Annual Income:</b> {data && data.annual_Income}{" "}
      </p>
      <p>
        <b>Status:</b> {data && data.status}{" "}
      </p>
      <div>
        <h3>UDID</h3>
        <img
          src={data && `http://localhost:3300/${data.udid_url}`}
          alt=""
          height={100}
        />
      </div>
      <div>
        <h3>AADHAR</h3>
        <img
          src={data && `http://localhost:3300/${data.aadhar_card_url}`}
          alt=""
          height={100}
        />
      </div>
      <div>
        <h3>INCOME CIRTIFICATE</h3>
        <img
          src={data && `http://localhost:3300/${data.income_certificate_url}`}
          alt=""
          height={100}
        />
      </div>
    </div>
  );
};
export default AfterLogin;
