import React,{useState,useEffect} from 'react'
import { withRouter,NavLink } from 'react-router-dom'
import { getCityName, getCoords } from '../Scripts/weatherAPI'
import Selector from './Selector'

function Header(props) {
    const [cityName, setCityName] = useState(null)
    const [showSelector,setShowSelector]=useState(true)
    useEffect(() => {
        getCityName(props.location.search)
        .then(
            (response)=>{setCityName(response)},
            (error)=>{console.log("error",error)}
        )


    }, [props.location.search])
    return (
        <header className="header">
                <div className="header__wrapper">
                    <div className="header__city" onClick={()=>{setShowSelector(!showSelector)}}>{cityName?"Change city":"Select city"} </div>
                    {showSelector&&<Selector close={()=>{setShowSelector(false)}}></Selector>}
                </div>
        </header>
    )
}

export default withRouter(Header)
