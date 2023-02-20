import axios from "axios";

export const getWeather = async (input) => {
    let result = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_APP}&q=${input}`
  ).then(res=>res.data).catch(err=>err.data)

  return result
};
