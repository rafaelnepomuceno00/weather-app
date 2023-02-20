import React from "react";

function WeatherIcon({ condition, image }) {
  return (
    <>
      <img src={image} alt='noload'></img>
      <p>{condition}</p>
    </>
  );
}

export default WeatherIcon;
