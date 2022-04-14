import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

//const { Navbar, Nav } = require("react-bootstrap");
<Navbar bg="light" expand="lg">
    <Navbar.Brand style={{margin: "5px p p 2-px"}} href="#home">
        <img src="[https://www.instacart.com/assets/activation/instacart_kitchen_general-0925e0a78b6d2db551e7f0863ef64f5d95b3cf286ddb4a8b8f327f1a5a2e8eaf.png]"/>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="succes">Sign Up</Button>{''}
        </Nav>
    </Navbar.Collapse>
</Navbar>

export default NavBar;