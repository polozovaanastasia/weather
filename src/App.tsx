import React, { useState } from "react";
import "./App.css";
import { Weather } from "./Weather";

function App() {
    const [city, setCity] = useState("");
    const [error, setError] = useState<null | string>(null);
    const [weather, setWeather] = useState<{
        temp: number;
        description: string;
    } | null>(null);
    const fetchWeather = () => {
        const apiKey = "bf866fe0b4e202457d0fd252b799a3b6";

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
            .then((response) => response.json())
            .then((json) => {
                if (json.cod === "404") {
                    setError("City not found");
                    setWeather(null);
                } else {
                    setWeather({
                        temp: json.main.temp,
                        description: json.weather[0].description,
                    });
                    setError(null);
                }
            })
            .catch((error) => {
                console.error("Ошибка:", error);
                setError("An error occurred");
                setWeather(null);
            });
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <div>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                />
                {error && <div style={{ color: "red" }}>{error}</div>}
                <button onClick={fetchWeather}>Get weather</button>
            </div>

            <div>
                {weather && (
                    <Weather
                        temp={weather?.temp}
                        description={weather?.description}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
