import Navibar from "./Navibar.css";
import { Navbar, NavDropdown, Nav, Button, Form, FormControl } from "react-bootstrap";


export default function NaviBar() {
    return (
        <>
            <Navbar className="navbar navbar-dark bg--dark" bg="#000">
                <Navbar.Brand>IT Cow</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse"/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link>Выбрать врача</Nav.Link>
                        <Nav.Link>Выбрать симптомы</Nav.Link>
                        <Nav.Link>Бот консультант</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link>Войти</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}