import React, { useEffect, useState } from 'react';
import WeatherCards from './WeatherCards';
// import WeatherSearch from './WeatherSearch';
import axios from 'axios';

const WeatherApp = () => {
    const [weatherdata, setWeatherData] = useState(null);
    const [searchcity, setSearchCity] = useState("London");
    const [lattitude, setLattitude] = useState(51.52);
    const [longitude, setLongitude] = useState(0.12);

    const handleSearch = (e) => {
        setSearchCity(e.target.value);
        console.log("searchcity", searchcity);
      
        console.log("setLattitude", lattitude);
        console.log("setLongitude", longitude);
        if(e.target.value === ""){
            setLattitude(lattitude => 51.52);
            setLongitude(longitude => 0.12);
            setSearchCity("London");
            console.log("if")
        }
        else{
            setLattitude(lattitude => weatherdata.data.location.lat);
            setLongitude(longitude => weatherdata.data.location.lon);
            console.log("else")
        }
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: searchcity, days: '1', lattitude, lon: longitude },
            headers: {
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                'X-RapidAPI-Key': '5a1042ca4cmsh594219d84e8fabap111938jsn2079b1264b60'
            }
        };
        console.log(lattitude, longitude)
        axios.request(options)
            .then((response) => {
                console.log(response)
                console.log(response.data.location.name)
                setWeatherData(weatherdata => response);
            }).catch(function (error) {
                console.error(error);
            });

    }, [searchcity, lattitude, longitude]);

    return (
        <>
            <div className='weather-wrap'>
                <h2>Simple Weather App</h2>
                <div className='row'>
                    <div className="weather-search-wrap">
                        <input type="text" id="search" className='search' onChange={handleSearch} placeholder="Search for a City" />
                        {/* <button className="btn btn-danger" type="button" onChange={handleSearch}>Submit</button> */}
                    </div>
                </div>
                <div className='row' style={{ justifyContent: 'center' }}>
                    <div className='col-md-10'>
                        {weatherdata && <WeatherCards searchcity={searchcity} weatheralldata={weatherdata} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;
