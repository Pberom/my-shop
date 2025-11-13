import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="py-0 w-100 fixed-top">
            <div className="w-100 d-flex align-items-center px-3">
                <Navbar.Brand as={NavLink} to="/">My React Shop</Navbar.Brand>
                <Navbar.Toggle aria-contolrs="main-nav" className="my-auto ms-auto"/>
                <Navbar.Collapse id="main-nav">
                    <Nav className="ms-3 me-auto">
                        <Nav.Link as={NavLink} to="/product">Product</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}