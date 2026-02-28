import React from "react";
import './Login.css'

const Login = ()=>{
    return(
        <center>
        <div className="log">
            <h2>Join us in a Snap</h2>
            <form>
            <div> <input type="name" placeholder="Full Name"/></div>
             <div> <input type="email" placeholder="Email Address"/> </div>
              <div> <input type="password" placeholder="Password"/> </div>
              <div> <input type="password" placeholder="Confirm Password"/> </div>
              <h4>Terms & Conditions</h4>
                Accept our<a href ="#" className="forgot"> Terms of Service </a>and <a href ="#" className="forgot"> Privacy Policy </a>
                <div><button type="submit"> Begin Your Journey</button></div>
                
            </form>
        </div>
        </center>
    );
}

export default Login