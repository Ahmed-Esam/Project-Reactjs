import React, { Component } from 'react';

import Form from './Form';
import WeatherDate from './WeatherDate';

const API_KEY = "84a85d48e94647dbb4b122654182811";

class Weather extends Component {
    state = { 

     }

    
    
    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const deta = await api_call.json();
        console.log(deta)
    } 

    render() { 
        return ( 
            <div>
                <h1>Weather App</h1>
                <Form getWeather={this.getWeather}/>
                <WeatherDate/>
            </div>
         );
    }
}
 
export default Weather;
