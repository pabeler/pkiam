import {useState} from "react";
import axios from "axios";
import NavbarWithoutSearchBar from "./NavbarWithoutSearchBar";
import {Button, Card, Form} from "react-bootstrap";
import Swal from "sweetalert2";

export default function HistoryForm() {
    const [cityName, setCityName] = useState('');

    const handleHistoryFormSubmit = (event) => {
        event.preventDefault();
        const url = "http://localhost:8080/api/v1/findByCityName/" + cityName.toUpperCase();
        axios.get(url).then((response) => {
            console.log(response.data);
            if (response.data.length === 0) {
                Swal.fire('Error', 'City not found', 'error')
            } else {
                window.location.href = "/history/" + cityName;
            }
        } ).catch((error) => {
            console.log(error);
            Swal.fire('Error', 'City not found', 'error')
        });
    }

    return (
        <>
            <NavbarWithoutSearchBar/>
            <div className="row justify-content-center" style={{margin: "10%"}}>
                <div className="col-lg-6">
                    <Card>
                        <Card.Header>
                            Select city
                        </Card.Header>
                        <Card.Body>
                            <Form className="d-flex" onSubmit={handleHistoryFormSubmit}>
                                <Form.Control
                                    type="search"
                                    placeholder="Type city name here"
                                    className="me-2"
                                    required = {true}
                                    onChange={(e) => setCityName(e.target.value)}
                                />
                                <Button variant="outline-success" type="submit">Search</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}