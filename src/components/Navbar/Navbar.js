import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar } from 'react-bootstrap';






function NavbarHeader() {

    return (
        <>
        <Navbar fixed="top" bg="dark" variant="dark">
<Container>
<Navbar.Brand >Netflix</Navbar.Brand>
<Nav className="me-auto">
<Link to={"/"} style={{marginRight :"15px" ,textDecoration:"none" , color:"white"}}>Home</Link>
<Link to={"/favList"} style={{marginRight :"15px" ,textDecoration:"none" , color:"white"}}>Favorit List</Link>
  
</Nav>
</Container>
</Navbar>

        </>
    );

}

export default NavbarHeader



{/* <nav className='navbar'>
<Link to={"/"}>Home</Link>
<Link to={"/favList"}>Favorit List</Link>
</nav> */}