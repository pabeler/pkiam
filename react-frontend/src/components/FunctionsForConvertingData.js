const convertKelvinToCelsius = (kelvin) => {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        return (Math.round(kelvin - 273.15));
    }
}

const windDegreeToDirection = (windDeg) => {
    if (windDeg >= 0 && windDeg < 22.5) {
        return "N";
    } else if (windDeg >= 22.5 && windDeg < 67.5) {
        return "NE";
    } else if (windDeg >= 67.5 && windDeg < 112.5) {
        return "E";
    } else if (windDeg >= 112.5 && windDeg < 157.5) {
        return "SE";
    } else if (windDeg >= 157.5 && windDeg < 202.5) {
        return "S";
    } else if (windDeg >= 202.5 && windDeg < 247.5) {
        return "SW";
    } else if (windDeg >= 247.5 && windDeg < 292.5) {
        return "W";
    } else if (windDeg >= 292.5 && windDeg < 337.5) {
        return "NW";
    } else if (windDeg >= 337.5 && windDeg <= 360) {
        return "N";
    }
}

const metersPerSecondToKilometersPerHour = (metersPerSecond) => {
    return Math.round(metersPerSecond * 3.6);
}

/*const convertUnixTimeToDate = (unixTime) => {
        const dateObject = new Date(unixTime * 1000);
        const day = ("0" + dateObject.getDate()).slice(-2);
        const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
        const year = dateObject.getFullYear();
        const hours = ("0" + dateObject.getHours()).slice(-2);
        const minutes = ("0" + dateObject.getMinutes()).slice(-2);
        return day + "-" + month + "-" + year + " " + hours + ":" + minutes;
    }*/

const convertUnixTimeToDate = (unixTime, timezone) => {
    const dateObject = new Date(unixTime * 1000);
    dateObject.setUTCHours(dateObject.getUTCHours() + timezone / 3600);
    return dateObject;
}

export { convertKelvinToCelsius, windDegreeToDirection, metersPerSecondToKilometersPerHour, convertUnixTimeToDate };