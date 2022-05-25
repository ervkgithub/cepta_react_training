import React, { useEffect, useState } from 'react';
import WeatherCards from './WeatherCards';
import WeatherSearch from './WeatherSearch';
import axios from 'axios';

const WeatherApp = () => {
    const[weatherdata, setWeatherData] = useState(null);
    // const[searchcity, setSearchCity] = useState("Peris");
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {q: 'London', days: '1', lat: 51.52, lon:-0.11},
            headers: {
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
              'X-RapidAPI-Key': '5a1042ca4cmsh594219d84e8fabap111938jsn2079b1264b60'
            }
          };
        axios.request(options)
        .then((response) => {
            console.log(response)
            console.log(response.data.location.name)
            setWeatherData(response);
        })
       
    },[])

    return (
        <>
            <div className='weather-wrap'>
                <h2>Simple Weather App</h2>
                <div className='row'>
                    <WeatherSearch />
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <WeatherCards weatheralldata={weatherdata} />
                    </div>
                    <div className='col-md-6'>
                        <WeatherCards weatheralldata={weatherdata} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;
