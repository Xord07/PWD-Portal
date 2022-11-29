import react, { useState } from "react";
import "./home.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const host = "http://localhost:3300/api";
  const navigate = useNavigate();
  const [val, setVal] = useState({
    name: "",
    password: "",
    mob: "",
    cpassword: "",
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
    const url = `${host}/auth/register/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: val.name,
        mob: val.mob,
        password: val.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 200) {
      await localStorage.setItem("token", json.authToken);
      //Redirect
      navigate("/register/registrationform");
    }
  };

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
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={calling}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={val.name}
                              name="name"
                              onChange={change}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c">
                              Your Phone Number
                            </label>
                            <input
                              type="phone"
                              id="form3Example3c"
                              className="form-control"
                              value={val.mob}
                              name="mob"
                              onChange={change}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={val.password}
                              name="password"
                              onChange={change}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4cd">
                              Confirm password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={val.cpassword}
                              name="cpassword"
                              onChange={change}
                              required
                            />
                          </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div> */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
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
export default Register;
