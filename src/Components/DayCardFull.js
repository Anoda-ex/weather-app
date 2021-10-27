import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { getDayDate } from '../Scripts/date'
import {getParams} from "../Scripts/weatherAPI"
function Day(props) {
    let dayWeather=props.dayWeather
    console.log(dayWeather);
    let dateString=getDayDate(dayWeather.dt)
    let cityName= getParams(props.location.search).city
    return (
        <div className="day__container">
            <div className="day">
                <div className="container">
                    <div className="day__city-name">{cityName}</div>
                    <div className="day__main-wrapper">
                        <img className="day__image" src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}.png`} alt=""></img>
                        <div className="day__temp">{Math.round(dayWeather.temp.day)}°C</div>
                    </div>
                    <div className="day__sub-wrapper">
                        <div className="day__sub-info">humidity {dayWeather.humidity}%</div>
                        <div className="day__sub-info">feels like {Math.round(dayWeather.feels_like.day)}°C</div>
                    </div>
                    <div className="day__maxmin-wrapper">
                        <span>max {dayWeather.temp.max}°C</span>
                        <span>min {dayWeather.temp.min}°C</span>
                    
                    </div>
                    <div className="day__date">{dateString}</div>

                    <div className="day__description">{dayWeather.weather[0].description}</div>
                </div>

            </div>
        </div>
    )
}
export default withRouter(Day)