
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar (){
        const [input, setInput]=useState("");
        const navigator=useNavigate();
    const changeHandler=(e)=>{
        // setInput(e.target.value)
        setInput(e.target.value)
      
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        navigator("/search/"+input)
    }
return(
    
            <nav>
            <Link to="/" ><h1>JHOOM</h1>
                <h3>Suno dil ki</h3></Link> 

                <center>
                <div className="search">
                    <form onSubmit={submitHandler}>
                        <input  type="text" onChange={changeHandler}/>
                    </form>
                </div>
                </center>
                
            </nav>
           
   
    
)

}
