import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form} from "react-bootstrap";
import {useContext, useState} from "react";
import {formContext} from "../App";
import axios from "axios";
import Swal from "sweetalert2";
import {convertUnixTimeToDate} from "./FunctionsForConvertingData";
import {Link} from "react-router-dom";

export default function NavbarWithSearchBar() {
    const { setFormOutput } = useContext(formContext);
    const { setResponse } = useContext(formContext);
    const [cityName, setCityName] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +
            "&appid=8169e266ba742ce4e86029d3417af558";
        console.log(cityName);
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setResponse(response.data);
                setFormOutput(cityName);
                console.log(response.data.timezone);
                console.log(convertUnixTimeToDate(response.data.dt, response.data.timezone));
                axios.post("http://localhost:8080/api/v1/add", {
                    "date": convertUnixTimeToDate(response.data.dt, response.data.timezone),
                    "cityName": cityName.toUpperCase(),
                    "description": response.data.weather[0].description,
                    "icon": response.data.weather[0].icon,
                    "temp": response.data.main.temp,
                    "feelsLike": response.data.main.feels_like,
                    "pressure": response.data.main.pressure,
                    "humidity": response.data.main.humidity,
                    "windSpeed": response.data.wind.speed,
                    "windDeg": response.data.wind.deg,
                    "cloudiness": response.data.clouds.all,
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
            console.log(error);
            Swal.fire('Error', 'City not found', 'error')
        });
    }

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link onClick={reloadPage} to=""><img src="images\logo.png" alt="logo" width="300" height="50" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="border rounded border-primary" href="/history">Historical weather data</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleFormSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Type city name here"
                            className="me-2"
                            required = {true}
                            onChange={(e) => setCityName(e.target.value)}
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
