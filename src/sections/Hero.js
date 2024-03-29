import axios from "axios";
import { useState } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import weather from "../assets/weather.jpeg"


function Hero() {
    const [data,setData] = useState({});
    const [location,setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&units=metric&appid=6b42ac7df85a4e3c6a182a15d6784e03`;
    const searchLocation = (event) => {
      if( event.key === 'Enter'){
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        setLocation('')
      }
    }

  return (
    <div className="app">
              {/* NAVBAR */}
      <div className="navbar">
        <div className="logo"><span><TiWeatherSunny/></span> Weather now</div>
        <div className="search">
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
        </div>
      </div>
              {/* HERO */}
      <div className="hero">
      <div>
          <img
          className="hero-image"
          alt="weather"
          src={weather}/>
        </div>

        <p>Welcome to <span className="name">weather app</span></p>
      </div>


              {/* CONTAINER */}
        <div className="container">
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}˚F</h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>

            {data.name !== undefined && 
            <div className="bottom">
              <div className="feels">
                {data.main ? <p>{data.main.feels_like.toFixed()}˚F</p> : null}
              <p>Feels Like |</p>
              </div>
              <div className="humidity">
                {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
                <p>Humidity |</p>
              </div>
              <div className="wind">
                {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed |</p>
              </div>
          </div>}
        </div>
      
    </div>
  );
}

export default Hero;