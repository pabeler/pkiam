import React, {useContext} from 'react';
import {Card, Table} from "react-bootstrap";
import {formContext} from "../App";
import NavbarWithSearchBar from "./NavbarWithSearchBar";
import CustomImage from "./CustomImage";
import {
    convertKelvinToCelsius,
    metersPerSecondToKilometersPerHour,
    windDegreeToDirection
} from "./FunctionsForConvertingData";

export default function Home() {
    const {formOutput} = useContext(formContext);
    const {response} = useContext(formContext);

    return (
        <>
            <NavbarWithSearchBar/>
            {formOutput !== '' && (
                <div className="row justify-content-center" style={{margin: "10%"}}>
                    <div className="col-lg-6">
                        <Card>
                            <Card.Title className="mt-3 text-center">Current weather for {formOutput}</Card.Title>
                            <Card.Body>
                                <CustomImage src={response.weather[0].icon} alt="Weather icon"/>
                                <Table striped bordered hover>
                                    {/*<tr>
                                        <td>Date</td>
                                        <td>{convertUnixTimeToDate(response.dt)}</td>
                                    </tr>*/}
                                    <tr>
                                        <td>Description</td>
                                        <td>{response.weather[0].description}</td>
                                    </tr>
                                    <tr>
                                        <td>Temperature</td>
                                        <td>{convertKelvinToCelsius(response.main.temp)} °C</td>
                                    </tr>
                                    <tr>
                                        <td>Feels like</td>
                                        <td>{convertKelvinToCelsius(response.main.feels_like)} °C</td>
                                    </tr>
                                    <tr>
                                        <td>Pressure</td>
                                        <td>{response.main.pressure} hPa</td>
                                    </tr>
                                    <tr>
                                        <td>Humidity</td>
                                        <td>{response.main.humidity} %</td>
                                    </tr>
                                    <tr>
                                        <td>Wind speed</td>
                                        <td>{metersPerSecondToKilometersPerHour(response.wind.speed)} km/h</td>
                                    </tr>
                                    <tr>
                                        <td>Wind direction</td>
                                        <td>{windDegreeToDirection(response.wind.deg)}</td>
                                    </tr>
                                    <tr>
                                        <td>Cloudiness</td>
                                        <td>{response.clouds.all} %</td>
                                    </tr>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )}
        </>
    );
}
