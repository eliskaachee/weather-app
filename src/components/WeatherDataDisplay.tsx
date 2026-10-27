import { getWeatherData } from "../hooks/getWeatherData";

export const WeatherDataDisplay = (props) => {
  const { weatherData, weatherDataLoaded } = getWeatherData(props.zipCode); // Example coordinates for New York City

  if (!weatherData || !weatherDataLoaded) {
    return <p>Loading...</p>;
  }

  console.log("zip here: ", props.zipCode);
  return (
    <div className="weather-data-display app-section">
      <h2>Weather Data</h2>
      <div className="weather-data">
        <p>Temperature: {weatherData?.main.temp} F</p>
        <p>Weather: {weatherData?.weather[0].description}</p>
        <p>Humidity: {weatherData?.main.humidity}%</p>
        <p>Wind Speed: {weatherData?.wind.speed} m/s</p>
      </div>
    </div>
  );
};
