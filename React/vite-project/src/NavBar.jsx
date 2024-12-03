import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <div>
            <nav>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/signup"><li>Signup</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/cart"><li>Cart</li></Link>

            </nav>
        </div>
    )
}
export default NavBar