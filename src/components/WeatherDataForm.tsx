import { useState } from "react";

export const WeatherDataForm = (props) => {
  const [localZip, setLocalZip] = useState(props.zipCode);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setZipCode(e.target.zip.value);
  };

  return (
    <form className="weather-data-form app-section" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="zip">Enter Zip Code:</label>
        <input
          name="zip"
          value={localZip}
          onChange={(e) => setLocalZip(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
