import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router'
import {getWeekDate} from "../Scripts/date"
import SelectCityMessage from './ErrorMessage'
import DayCardFull from "./DayCardFull"
function Week(props) {
    const [selectedCard, setSelectedCard] = useState(-1)
    if(!props.weather){
        return <SelectCityMessage></SelectCityMessage>
    }
    
    return (
        <div className="week">
            {props.weather.map((day,dayIndex)=>{
                let date=getWeekDate(day.dt)
                let dayWeatherFull=null 
                if(selectedCard>-1 && dayIndex==3){
                    dayWeatherFull=<DayCardFull dayWeather={props.weather[selectedCard]}></DayCardFull>
                }
                return <React.Fragment>
                    
                    <div className="week__card" onClick={()=>{setSelectedCard(dayIndex)}}>
                        <div className="week__date-wrapper">
                            <div className="week__day">{date[0]}</div>
                            <div className="week__date">{date[1]}</div>
                            <div className="week__month">{date[2]}</div>  
                        </div>
                        <img className="week__image" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt=""></img>
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
                {dayWeatherFull}
                </React.Fragment>
            })}
        </div>
    )
}
export default withRouter(Week)