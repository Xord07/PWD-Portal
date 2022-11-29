import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const HomePage = () =>{
    return(
        <>
        {/* navbar */}
        
        {/* login cards */}
        <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="https://media.istockphoto.com/photos/print-working-directory-concept-picture-id1292660920?b=1&k=20&m=1292660920&s=170667a&w=0&h=fiLiYtFxhNLvaHeUocBNi8FHiVH7Z7VewJN5lu4LJ5o=" className="card-img-top" alt="Not Rendering" height="270px"/>
              <div className="card-body">
                <h5 className="card-title">Beneficiary Login</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's /content.</p>
                <NavLink exact={"true"}  to='/login'><button className="btn btn-primary">LOGIN</button></NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWRtaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height="270px"/>
              <div className="card-body">
                <h5 className="card-title">Admin Login</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink exact={"true"} to='/adminlogin'><button className="btn btn-primary">LOGIN</button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    )
}
export default HomePage;