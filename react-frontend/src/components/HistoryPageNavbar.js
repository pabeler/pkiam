import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function HistoryPageNavbar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img src="..\images\logo.png" alt="logo" width="300" height="50"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="border rounded border-primary" href="/history">Historical weather
                            data</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
