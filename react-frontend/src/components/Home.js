import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';

export default function Home() {
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

        </>
    );
}
