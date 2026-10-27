import { useEffect, useState } from "react";

export const getWeatherData = (zip: string) => {
  const [weatherData, setWeatherData] = useState();
  const [weatherDataLoaded, setWeatherDataLoaded] = useState(false);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const getWeatherData = useEffect(() => {
    console.log("key: ", apiKey);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setWeatherData(json);
        setWeatherDataLoaded(true);
        console.log("weatherData: ", json);
      });
  }, [zip]);

  return { weatherData, weatherDataLoaded };
};

//https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}
//https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${apiKey}
