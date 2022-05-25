import React, {useState} from "react";
const WeatherSearch = () => {
    const[searchcity, setSearchCity] = useState("Peris");
    const handleSearch = (e) =>{
        setSearchCity(e.target.value)
        console.log(searchcity);
    }
    return (
        <>
            <div className="weather-search-wrap">
                <input type="text" id="search" onChange={handleSearch} placeholder="Search for City" />
                <button className="btn btn-danger" type="button">Submit</button>
            </div>
        </>
    )
}

export default WeatherSearch;