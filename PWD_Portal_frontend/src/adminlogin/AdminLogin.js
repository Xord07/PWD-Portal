import './login_form.css';
import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () =>{
    const [val,setVal] = useState({
        password: '',
        username:'',
      });
    
      const change = (event) =>{
        // console.log(event.target.value)
        // console.log(event.target.name)
        const value = event.target.value;
        const nameq = event.target.name;
    
        setVal((preVal) =>{
          return {
            ...preVal,
            [nameq]: value,
          }        
        })
      }
  
      const calling = (event) =>{
    
        
        event.preventDefault();
      }
    

    return(
        <>
            <h1>Login Form</h1>
            <br></br>

            <form className="form_main" onSubmit={calling}>
                    
                    <input type="text" placeholder="Username" onChange={change} value={val.phone} name="username" />
                    <br></br>
                    <input type="Password" placeholder="Password" onChange={change} value={val.password} name="password" />
                    <br></br>
                    <NavLink exact activeClassName="active_class" to='/afterlogin'><button type="submit" className="btn btn-primary">LOGIN</button></NavLink>
            </form>

        
        </>
    )
}
export default AdminLogin;