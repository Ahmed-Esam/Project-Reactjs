import React from "react";

const WeatherDate = props => {
  return (
    <div className="Weather-container">
      Result
      <hr/>
      {props.city && props.country && (
        <p>
          City : {props.city}, Country : {props.country}
        </p>
      )}
      {props.temp && <p>Temperature : {props.temp}</p>}
      {props.humidity && <p>Humidity : {props.humidity}</p>}
      {props.description && <p>Description : {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default WeatherDate;
