import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { getDayDate } from '../Scripts/date'
import {getCityName,getWeather} from "../Scripts/weatherAPI"
import SelectCityMessage from './SelectCityMessage'
function Day(props) {
    const [dayWeather, setDayWeather] = useState(null)
    const [cityName, setCityName] = useState(null)
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        setLoading(true)
        getCityName(props.location.search).then(
            (name)=>{setCityName(name)}
        )
        getWeather(props.location.search,"day").then(weather=>{setDayWeather(weather);}).finally(()=>{setLoading(false)})
        
            
    }, [props.location.search])

    if(loading){
        return <div className="page-message">Загрузка...</div>
    }
    if(!dayWeather){
        return <SelectCityMessage></SelectCityMessage>
    }
    let dateString=getDayDate(dayWeather.dt)
    return (
        <div className="day">
            <div className="container">
                <div className="day__city-name">{cityName}</div>
                <div className="day__main-wrapper">
                    <img className="day__image" src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}.png`} alt=""></img>
                    <div className="day__temp">{Math.round(dayWeather.temp)}°C</div>
                </div>
                <div className="day__sub-wrapper">
                    <div className="day__sub-info">humidity {dayWeather.humidity}%</div>
                    <div className="day__sub-info">feels like {Math.round(dayWeather.feels_like)}°C</div>
                </div>
                <div className="day__date">{dateString}</div>

                <div className="day__description">{dayWeather.weather[0].description}</div>
            </div>

        </div>
    )
}
export default withRouter(Day)