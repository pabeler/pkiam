import {useEffect, useState} from "react";
import axios from "axios";
import NavbarWithoutSearchBar from "./NavbarWithoutSearchBar";

export default function History() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/findAll");
                setWeatherData(response.data)
                console.log(response.data)
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        };

        fetchWeather();
    }, []);

    return (
        <>
            <NavbarWithoutSearchBar/>
            <h1>History</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Feels like</th>
                    <th>Humidity</th>
                    <th>Pressure</th>
                    <th>Wind speed</th>
                    <th>Wind direction</th>
                    <th>Clouds</th>
                    <th>Weather</th>
                    <th>Weather description</th>
                    <th>Weather icon</th>
                    <th>Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {weatherData.map((weather) => (
                    <tr key={weather.id}>
                        <td>{weather.id}</td>
                        <td>{weather.city}</td>
                        <td>{weather.temperature}</td>
                        <td>{weather.feelsLike}</td>
                        <td>{weather.humidity}</td>
                        <td>{weather.pressure}</td>
                        <td>{weather.windSpeed}</td>
                        <td>{weather.windDirection}</td>
                        <td>{weather.clouds}</td>
                        <td>{weather.weather}</td>
                        <td>{weather.weatherDescription}</td>
                        <td>{weather.weatherIcon}</td>
                        <td>{weather.timestamp}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}