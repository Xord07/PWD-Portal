import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Rform = () => {
  const host = "http://localhost:3300/api";
  const navigate = useNavigate();

  const [val, setVal] = useState({
    name: "",
    disability_type: "",
    percentage_of_disability: "",
    udid: "",
    aadhar_number: "",
    address: "",
    zone: "",
    annual_Income: "",
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
    console.log(val);
    const url = `${host}/registration/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name: val.name,
        disability_type: val.disability_type,
        percentage_of_disability: val.percentage_of_disability,
        udid: val.udid,
        aadhar_number: val.aadhar_number,
        address: val.address,
        zone: val.zone,
        annual_Income: val.annual_Income,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 200) {
      //Redirect
      navigate("/register/registrationform/udidupload");
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
    }
    // fetchProducts();
  }, []);

  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register for ADIP Scheme
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={calling}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={val.name}
                              onChange={change}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Disability Type
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              name="disability_type"
                              value={val.disability_type}
                              onChange={change}
                              required
                            >
                              <option defaultValue={""}>
                                -----Select your disability type------
                              </option>
                              <option value="Deaf">Deaf</option>
                              <option value="Blind">Blind</option>
                              <option value="Cerebral Palsy">
                                Cerebral Palsy
                              </option>
                              <option value="Leprosy cured person">
                                Leprosy cured person
                              </option>
                              <option value="Locomotor disability">
                                Locomotor disability
                              </option>
                              <option value="Mental illness">
                                Mental illness
                              </option>
                              <option value="Dyslexia">
                                Learning Disability
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Percentage of Disability
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="percentage_of_disability"
                              value={val.percentage_of_disability}
                              onChange={change}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              UDID Number
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="udid"
                              value={val.udid}
                              onChange={change}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Aadhar Number
                            </label>
                            <input
                              type="phone"
                              id="form3Example3c"
                              className="form-control"
                              name="aadhar_number"
                              value={val.aadhar_number}
                              onChange={change}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="address"
                              value={val.address}
                              onChange={change}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              District
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="zone"
                              value={val.zone}
                              onChange={change}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Annual Income
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="annual_Income"
                              value={val.annual_Income}
                              onChange={change}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://media.gettyimages.com/vectors/family-watching-fireworks-vector-id115049461?k=20&m=115049461&s=612x612&w=0&h=TlsxPoJxHT8W2RFhCBzLg05T9WHs4oLiaynH6ZIE5bE="
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Rform;
