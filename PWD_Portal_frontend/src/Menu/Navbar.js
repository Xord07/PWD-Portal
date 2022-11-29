import { NavLink, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark mar-d">
        <div className="container-fluid">
          <img
            src="https://i.pinimg.com/736x/57/2e/a5/572ea5597b4cf5d1a0891b8298f694f0.jpg"
            width="75px"
            height="65px"
          />
          <form className="d-flex">
            <NavLink to="/">
              <button className="btn btn-outline-success btn-style">
                Home
              </button>
            </NavLink>
            <NavLink to="/about">
              <button className="btn btn-outline-success btn-style">
                About
              </button>{" "}
            </NavLink>
            <br></br>
            {!localStorage.getItem("token") ? (
              <NavLink to="/register">
                <button className="btn btn-outline-success btn-style">
                  Sign Up
                </button>
              </NavLink>
            ) : (
              <button onClick={handleLogout}>Logout</button>
            )}
          </form>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
