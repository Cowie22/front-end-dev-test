import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { weatherType } from './WeatherConditions';
import { WiDaySunny, WiShowers, WiThunderstorm, WiCloudy, WiSnow, WiSprinkle, WiDayHaze, WiSleet } from 'weather-icons-react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // Extracts the write days of the week depending on UTC time from the api
    const { forecastData } = this.props;
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let calculatedDays = [];
    let calculatedWeather = [];
    forecastData.map((day, i) => {
      let index = Math.floor((day.dt / 86400) + 4) % 7
      calculatedDays.push(daysOfWeek[index]);
      calculatedWeather.push(day.weather[0].main);
    });

    const weatherDayInformation = this.props.forecastData.map((day, i) => {
      let cloudy = day.weather[0].main === 'Clouds';
      // Checks the percent clouds.  If less than 40 % uses sunny weather instead of cloudy
      let dynamicWeatherInfo = cloudy === true && day.clouds.all < 40 ? 'Clear' : day.weather[0].main;
      // Extracts the proper color depending on the days weather
      const weatherColor = weatherType[dynamicWeatherInfo].color;
      // Weather Icons
      let ClearIcon = <WiDaySunny size={40} color='#000' />
      let RainIcon = <WiShowers size={40} color='#000' />
      let ThunderstormIcon = <WiThunderstorm size={40} color='#000' />
      let CloudsIcon = <WiCloudy size={40} color='#000' />
      let SnowIcon = <WiSnow size={40} color='#000' />
      let DrizzleIcon = <WiSprinkle size={40} color='#000' />
      let HazeIcon = <WiDayHaze size={40} color='#000' />
      let MistIcon = <WiSleet size={40} color='#000' />

      // Extract the proper weather icon depending on the day's predicted weather
      let iconName = weatherType[dynamicWeatherInfo].icon
      const WeatherIcon = iconName === 'ClearIcon' ? ClearIcon :
      iconName === 'RainIcon' ? RainIcon :
      iconName === 'ThunderstormIcon' ? ThunderstormIcon :
      iconName === 'CloudsIcon' ? CloudsIcon :
      iconName === 'SnowIcon' ? SnowIcon :
      iconName === 'DrizzleIcon' ? DrizzleIcon :
      iconName === 'HazeIcon' ? HazeIcon :
      iconName === 'MistIcon' ? MistIcon :
      null;

      return (
        <div className="Weather-Container" style={{background: weatherColor}}>
          <div className="Weather-Inner-Container">
            <div className="Day">{calculatedDays[i]}</div>
            <div className="Weather-Type">{weatherType[dynamicWeatherInfo].title}</div>
            {WeatherIcon}
            <div className="Temp-Container">
              <p className="Weather-Header">Ave:</p>
              <p>{Math.round(day.main.temp)}˚F</p>
            </div>
            <div className="Humidity-Container">
              <p className="Weather-Header">Humidity</p>
              <p>{day.main.humidity}%</p>
            </div>
          </div>
      </div>
      )
    })
    return (
      <div className="Weather-Outer-Container">
        {weatherDayInformation}
      </div>
    )
  }
}

export default Weather