import React, { Component } from 'react';

import Form from './Form';
import WeatherDate from './WeatherDate';

const API_KEY = "58b6f7c78582bffab3936dac99c31b25";

class Weather extends Component {
    state = { 
        temp : '',
        city : '',
        country: '',
        humidity :  '',
        description : '',
        error : ''
     }

    
    
    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();
       if( city && country ) {
        console.log(data)
        this.setState({
            temp : data.main.temp,
            city : data.name,
            country: data.sys.country,
            humidity :  data.main.humidity,
            description : data.weather[0].description,
            error : ''
        })
       }else {
        this.setState({
            error : 'Please enter the value'
        })
       }
    } 

    render() { 
        return ( 
            <div>
                <h1>Weather App</h1>
                <Form getWeather={this.getWeather}/>
                <WeatherDate 
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
         );
    }
}
 
export default Weather;
