import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Menu/Homepage";
import About from "./Menu/About";
import Register from "./Menu/Register";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Menu/Navbar";
import Loginform from "./beneficiarylogin/Loginform";
import AfterLogin from "./beneficiarydetails/ShowBeneficiaryDetails";
import AdminLogin from "./adminlogin/AdminLogin";
import Rform from "./Menu/RegistrationForm/Rform";
import UDID from "./Menu/RegistrationForm/UDID";
import AadharCard from "./Menu/RegistrationForm/AadharCard";
import IncomeCft from "./Menu/RegistrationForm/Incomecft";
import ShowBeneficiaryDetails from "./beneficiarydetails/ShowBeneficiaryDetails";

function App() {
  return (
    <>
      {/* <nav/> */}
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      {/* routes */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/register/registrationform" element={<Rform />} />
        <Route
          path="/register/registrationform/udidupload"
          element={<UDID />}
        />
        <Route
          path="/register/registrationform/aadharcardupload"
          element={<AadharCard />}
        />
        <Route
          path="/register/registrationform/incomecftupload"
          element={<IncomeCft />}
        />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adip/details" element={<ShowBeneficiaryDetails />} />
      </Routes>
    </>
  );
}
export default App;
