import React from "react";
import { useState } from "react";
import './Counter.css'
const Counter = ()=> {

    const [count,setCount] = useState(true);

    function change() {
        setCount(!count)
        console.log(count)
    }

    
    return(
        <center>         
        <div className="counter">
            <h1>{count ? "true" : "false"}</h1>
            <div className={count ? "box-white" : "box-dark"}>
            
            </div>
            
            <button className="btn-str" onClick={change}>Dark/white</button>
            
        </div>
        </center>
    );
 
}


export default Counter;