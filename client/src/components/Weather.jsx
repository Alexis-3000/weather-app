import React, { useState } from 'react'

function Weather() {
    const [ input, setInput ] = useState("");
    const [ weatherRequest, setWeatherRequest] = useState(null);

    function handleChange(e) {
        e.preventDefault();

        setInput(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        /* const settings = {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json"
            }
        }; */
        /* GET request in this case! getting data from an external url! */

        try {
            const response = await fetch(`${import.meta.env.VITE_API}/weather/${input}`);

            if (response.ok) {
                const data = await response.json();

                setWeatherRequest(data);
                setInput("");
            } else {
                throw new Error("Could not find your city")
            }

        } catch(err) {
            alert(err.message)
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" value={input} onChange={handleChange}/>
        <button type="submit">search</button>
    </form>
    { weatherRequest && 
        <>
        <h2>{weatherRequest.name}</h2>
        <img src={`http://openweathermap.org/img/w/${weatherRequest.weather.map(condition => condition.icon)}.png`} alt="" />
        <div>Temperature: {Math.round(weatherRequest.main.temp)}°C</div>
        <div>Feels like: {Math.round(weatherRequest.main.feels_like)}°C</div>
        <div>Today's max: {Math.round(weatherRequest.main.temp_max)}°C, min: {Math.round(weatherRequest.main.temp_min)}°C</div>
        <div>Weather: {weatherRequest.weather.map(condition => condition.description)}</div>
        <div>Clouds: {weatherRequest.clouds.all}%</div>
        
        </>
    }
    </>
  )
}

/* 
const weatherIcon = weatherRequest.weather.map(condition => condition.icon);
        const weatherIconURL = `http://openweathermap.org/img/w/${weatherIcon}.png`; 
*/

export default Weather;