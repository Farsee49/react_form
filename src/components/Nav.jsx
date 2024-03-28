import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
          
                    <button><Link to="/forms">Forms</Link></button>
             
                    <button><Link to="/login">Login</Link></button>

                    <button><Link to="/reg">Register</Link></button>
        </nav>
    );
}

export default Nav;