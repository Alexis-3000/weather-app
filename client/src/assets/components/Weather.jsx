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

        const settings = {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const response = await fetch("https://weather-app-8ukq.onrender.com/weather", settings);

            if (response.ok) {
                const data = await response.json();

                setWeatherRequest(data);
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
        <input type="text" value={input} onChange={handleChange}/>
        <button type="submit">search</button>
    </form>
    { weatherRequest && 
        <>
        <div>{input}: {weatherRequest.main.temp}</div>
        <div>Feels like: {weatherRequest.main.feels_like}</div>
        <div>Today's max: {weatherRequest.main.temp_max}°C, min: {weatherRequest.main.temp_min}°C</div>
        </>
    }
    </>
  )
}

export default Weather;