import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router'
import {getWeekDate} from "../Scripts/date"
import SelectCityMessage from './ErrorMessage'
function Week(props) {
    console.log("heh",props.weather);
    if(!props.weather){
        return <SelectCityMessage></SelectCityMessage>
    }
    return (
        <div className="week">
            {props.weather.map(day=>{
                let date=getWeekDate(day.dt)
                console.log("test",day);
                return <div className="week__card">
                        <div className="week__date-wrapper">
                            <div className="week__day">{date[0]}</div>
                            <div className="week__date">{date[1]}</div>
                            <div className="week__month">{date[2]}</div>  
                        </div>
                        <img className="day__image" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt=""></img>
                        <div className="week__temp-description">{day.weather[0].description}</div>
                        <div className="week__temp-wrapper">
                            <div className="week__temp-column">
                                <div className="week__temp-value">{Math.floor(day.temp.min)}</div>
                                <div className="week__temp-title">min</div>
                            </div>
                            <div className="week__temp-column">
                                <div className="week__temp-value">{Math.floor(day.temp.max)}</div>
                                <div className="week__temp-title">max</div>

                            </div>
                            
                        </div>
                </div>
            })}
        </div>
    )
}
export default withRouter(Week)