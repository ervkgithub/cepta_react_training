import React, { useEffect, useState } from 'react';
import WeatherCards from './WeatherCards';
// import WeatherSearch from './WeatherSearch';
import axios from 'axios';

const WeatherApp = () => {
    const [weatherdata, setWeatherData] = useState(null);
    const[searchcity, setSearchCity] = useState("London");
    // const[lattitude, setLattitude] = useState(51.52);
    // const[longitude, setLongitude] = useState(0.12);

    const handleSearch = (e) =>{
        setSearchCity(e.target.value)
        console.log(searchcity);
    }
   
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: searchcity, days: '3', lat: 51.52, lon: 0.12 },
            headers: {
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                'X-RapidAPI-Key': '5a1042ca4cmsh594219d84e8fabap111938jsn2079b1264b60'
            }
        };
        axios.request(options)
            .then((response) => {
                console.log(response)
                console.log(response.data.location.name)
                setWeatherData(weatherdata => response);
            }).catch(function (error) {
                console.error(error);
            });

    },[searchcity]);

    return (
        <>
            <div className='weather-wrap'>
                <h2>Simple Weather App</h2>
                <div className='row'>
                    <div className="weather-search-wrap">
                        <input type="text" id="search" onChange={handleSearch} placeholder="Search for City" />
                        <button className="btn btn-danger" type="button" onChange={handleSearch}>Submit</button>
                    </div>
                </div>
                <div className='row' style={{ justifyContent: 'center' }}>
                    <div className='col-md-6'>
                        {weatherdata && <WeatherCards searchcity={searchcity} weatheralldata={weatherdata} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;
