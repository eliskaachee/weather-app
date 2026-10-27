import { useEffect, useState } from "react";
import { WeatherDataForm } from "./components/WeatherDataForm";
import { WeatherDataDisplay } from "./components/WeatherDataDisplay";
import "./App.css";

const App = () => {
  const [zipCode, setZipCode] = useState("97224"); // Default zip code

  useEffect(() => {
    console.log("zipCode in App: ", zipCode);
  }, [zipCode]);

  return (
    <div>
      <h1>My Weather App</h1>
      <div className="app-body">
        <WeatherDataForm zipCode={zipCode} setZipCode={setZipCode} />
        <WeatherDataDisplay zipCode={zipCode} />
      </div>
    </div>
  );
};

export default App;
