
import React from "react";

const WeatherCards = (props) => {
    return (
        <>
            <div className="weather-cards">
                {
                    props.searchcity ? <h3>{props.searchcity}</h3> : <h3>London</h3>
                }
                <div className="degree">{props.weatheralldata.data.current.temp_c}<sup>0 C</sup></div>
                <img src={props.weatheralldata.data.current.condition.icon} alt="icon" />
                <p>{props.weatheralldata.data.current.condition.text}</p>
            </div>
        </>
    )
}

export default WeatherCards;