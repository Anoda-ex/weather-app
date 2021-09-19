import React,{useState,useEffect} from 'react'
import {withRouter} from "react-router-dom"
function Selector(props) {
    const [cities, setCities] = useState(null)
    const [searchCities, setSearchCities] = useState(null)
    const [showList, setShowList] = useState(null)
    useEffect(() => {
        fetch("/cities.json").then(response=>(response.json())).then(cities=>{setCities(cities)})
    }, [])
    let selectCities=(event)=>{
        let param=event.target.value
        let searchCitiesArray=[]
        if(param.length>2 && cities){
            cities.forEach(city=>{
                if(city.toLowerCase().match(param.toLowerCase())){
                    searchCitiesArray.push(city)
                }
            })
        }
        setSearchCities(searchCitiesArray)
    }
    let selectCity=(city)=>{
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b4f88a6f724b0b945af35f393ab4d22a`
        )
        .then(response=>response.json())
        .then(coord=>{
            props.history.push(props.location.pathname+"?lon="+coord[0].lon+"&lat="+coord[0].lat)
        })
        setShowList(false)
        props.close()
    }


    let inputRef=React.createRef()
    return (
        <div className="selector">
            <input placeholder="Введите название города(больше 2 букв)" className="selector__search" onFocus={()=>{setShowList(true)}} onChange={selectCities}></input>    
            {searchCities?.length>0&&showList&&<ul className="selector__cities-list">
                {searchCities.map(city=>{
                    return <li className="selector__cities-item" onClick={()=>{selectCity(city)}}>{city}</li>
                })}
            </ul>}


        </div>
    )
}
export default withRouter(Selector)