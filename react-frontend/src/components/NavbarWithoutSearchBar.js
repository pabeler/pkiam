import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export default function NavbarWithoutSearchBar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img src="images\logo.png" alt="logo" width="300" height="50"/></Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
