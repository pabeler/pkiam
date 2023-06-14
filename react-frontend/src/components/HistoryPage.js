import {useParams} from "react-router-dom";
import HistoryPageNavbar from "./HistoryPageNavbar";
import {useEffect, useState} from "react";
import axios from "axios";
import {
    convertKelvinToCelsius,
    metersPerSecondToKilometersPerHour,
    splitDate,
    windDegreeToDirection
} from "./FunctionsForConvertingData";
import {Card} from "react-bootstrap";

function HistoryPage() {
    const {city} = useParams();
    const [data, setData] = useState([]);
    const [shouldFetchData, setShouldFetchData] = useState(true);

    useEffect(() => {
        if (shouldFetchData) {
            const fetchData = async () => {
                try {
                    const url = "http://localhost:8080/api/v1/findByCityName/" + city.toUpperCase();
                    const response = await axios.get(url);
                    setData(response.data);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
            console.log(data);
        }
        if (data.length > 0) {
            setShouldFetchData(false);
        }
    }, [data, city, shouldFetchData]);

    return (
        <div>
            <HistoryPageNavbar/>
            <Card className="text-center">
                <Card.Header><h1>History for {city}</h1></Card.Header>
                <Card.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Temperature</th>
                                        <th>Feels like</th>
                                        <th>Pressure</th>
                                        <th>Humidity</th>
                                        <th>Wind speed</th>
                                        <th>Wind direction</th>
                                        <th>Cloudiness</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{splitDate(item.date)}</td>
                                            <td>{item.description}</td>
                                            <td>{convertKelvinToCelsius(item.temp)}°C</td>
                                            <td>{convertKelvinToCelsius(item.feelsLike)}°C</td>
                                            <td>{item.pressure} hPa</td>
                                            <td>{item.humidity} %</td>
                                            <td>{metersPerSecondToKilometersPerHour(item.windSpeed)} km/h</td>
                                            <td>{windDegreeToDirection(item.windDeg)}</td>
                                            <td>{item.cloudiness}%</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HistoryPage;
