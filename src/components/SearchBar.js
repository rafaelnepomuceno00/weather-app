import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { getWeather } from "../utils/requests";
import WeatherIcon from "./WeatherIcon";

function SearchBar() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(undefined);
  const [hasResult, setHasResult] = useState(false);
  function search() {
    getWeather(inputText).then((res) => {
      if (res === undefined) {
        setResult({ error: true });
        setHasResult(true);
        return;
      }
      setResult({ error: false, ...res });
      setHasResult(true);
    });
  }
  return (
    <>
      <div>
        <div className="searchBox">
          <IoLocationSharp className="LocationIcon" />
          <input
            type="text"
            placeholder={"Location"}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <FaSearch
            className="SearchIcon"
            onClick={() => {
              search();
            }}
          />
        </div>
        {hasResult ? (
          result.error ? (
            <div className="NotFound">
              <p> Location or Weather not found</p>
            </div>
          ) : (
            <div className="ContainerResult">
                <WeatherIcon condition={result.current.condition.text} image={result.current.condition.icon}/>
              <p className="Temperature">{result.current.temp_c} °C</p>
              <br />
            </div>
          )
        ) : null}
      </div>
    </>
  );
}

export default SearchBar;
