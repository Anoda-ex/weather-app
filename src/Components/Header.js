import React,{useState,useEffect} from 'react'
import { withRouter,NavLink } from 'react-router-dom'
import { getParams } from '../Scripts/weatherAPI'
import Selector from './Selector'

function Header(props) {
    const [showSelector,setShowSelector]=useState(false)
    let cityName= getParams(props.location.search).city
    console.log(cityName);
    return (
        <header className="header">
                <div className="header__wrapper">
                    <div className="header__city" onClick={()=>{setShowSelector(!showSelector)}}>{cityName?"Change city":"Select city"} </div>
                    {(showSelector||!cityName)&&<Selector close={()=>{setShowSelector(false)}}></Selector>}
                </div>
        </header>
    )
}

export default withRouter(Header)
