import React,{useState,useEffect} from 'react'
import {withRouter} from "react-router-dom"
import cities from "../Assets/cities"
function Selector(props) {
    const [searchCities, setSearchCities] = useState(null)
    const [showList, setShowList] = useState(null)

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
        props.history.replace("/weather?city="+city)
        setShowList(false)
        props.close()
    }


    let inputRef=React.createRef()
    return (
        <div className="selector">
            <input placeholder="Enter the name of the city (more than 2 letters)" className="selector__search" onFocus={()=>{setShowList(true)}} onChange={selectCities}></input>    
            {searchCities?.length>0&&showList&&<ul className="selector__cities-list">
                {searchCities.map(city=>{
                    return <li className="selector__cities-item" onClick={()=>{selectCity(city)}}>{city}</li>
                })}
            </ul>}


        </div>
    )
}
export default withRouter(Selector)