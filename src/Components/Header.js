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
                    <div className="header__city" onClick={()=>{setShowSelector(!showSelector)}}>{cityName?"Сменить город":"Выбрать город"} </div>
                    <div  className="header__links">
                        <NavLink className="header__link" to={"/week"+props.location.search}>Погода на неделю</NavLink>
                        <NavLink className="header__link" to={"/day"+props.location.search}>Погода на день</NavLink>
                    </div>
                </div>
                {showSelector&&<Selector close={()=>{setShowSelector(false)}}></Selector>}
        </header>
    )
}

export default withRouter(Header)
