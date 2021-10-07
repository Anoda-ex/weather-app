import './App.scss';
import React, { useState,useEffect } from "react"
import PageNotFound from './Components/PageNotFound'
import Week from "./Components/Week"
import Header from './Components/Header'
import ErrorMessage from "./Components/ErrorMessage"

import {Route, Switch, withRouter } from 'react-router'
import * as routes from "./routes"
import {getWeather} from "./Scripts/weatherAPI"
function App(props) {
	const [weekWeather, setWeekWeather] = useState(null)
	const [loading,setLoading]=useState(false)
	const [error,setError]=useState(null)
	useEffect(() => {
        setLoading(true)
        getWeather(props.location.search).
			then(weather=>{setWeekWeather(weather)},error=>{setError(error)}).
			finally(()=>{setLoading(false)}) 
    }, [props.location.search])

	return (
		<div className="app">	
			<Header></Header>
			{loading&& <div className="page-message">Loading...</div>}
			{error&&<ErrorMessage>{error}</ErrorMessage>}
			{weekWeather&&<Switch>
				<Route path={routes.WEATHER} render={()=><Week weather={weekWeather}></Week>}></Route>
				<Route path="" component={PageNotFound}></Route>
			</Switch>}
		</div>
	);
}

export default withRouter(App);
