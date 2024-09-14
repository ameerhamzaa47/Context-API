import React from "react";
import {Navbar,Button} from 'react-bootstrap'
import './PFirstPageStyle.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <>
        <Navbar  expand="lg" className="bg-body-tertiary Simage">
        <Navbar ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLL8UuDaGZdNQKgougVf4oC2FJMipfhQCzA&s" alt="" /></Navbar>
            <Link style={{marginLeft:'25%'}} className="NavLink" to={'/menu'}>Menu</Link>
            <Link className="NavLink" to={'/location'}>Location</Link>
            <Link className="NavLink" to={'/about'}>About</Link>
            <Link className="NavLink" to={'/contact'}>Contact</Link>
            <Link className="loginBtn" to={'/login'}><Button className="btn-danger">Login</Button></Link>

    </Navbar>
        
        </>
    )
}
export default Header