import "./login_form.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Loginform = () => {
  const navigate = useNavigate();
  const host = "http://localhost:3300/api";
  const [val, setVal] = useState({
    password: "",
    mob: "",
  });

  const change = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const value = event.target.value;
    const nameq = event.target.name;

    setVal((preVal) => {
      return {
        ...preVal,
        [nameq]: value,
      };
    });
  };

  const calling = async (event) => {
    event.preventDefault();
    const url = `${host}/auth/login/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mob: val.mob,
        password: val.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 200) {
      await localStorage.setItem("token", json.authToken);
      const uri = `${host}/registration/info`;
      const newResponse = await fetch(uri, {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      const newjson = await newResponse.json();
      //Redirect
      if (newjson) {
        navigate("/adip/details");
      } else {
        navigate("/register/registrationform");
      }
    }
  };

  return (
    <>
      <h1>Login Form</h1>
      <br></br>

      <form className="form_main" onSubmit={calling}>
        <input
          type="phone"
          placeholder="Phone Number"
          onChange={change}
          value={val.mob}
          name="mob"
        />
        <br></br>
        <input
          type="Password"
          placeholder="Password"
          onChange={change}
          value={val.password}
          name="password"
        />
        <br></br>
        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </>
  );
};
export default Loginform;
