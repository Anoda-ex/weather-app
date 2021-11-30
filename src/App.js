import './App.scss';
import React, { useState,useEffect } from "react"
import Week from "./Components/Week"
import Header from './Components/Header'
import ErrorMessage from "./Components/ErrorMessage"

import {Route, Switch, withRouter,Redirect } from 'react-router'
import * as routes from "./routes"
import {getWeather,getParams} from "./Scripts/weatherAPI"
function App(props) {
	const [loading,setLoading]=useState(false)
	const [weekWeather, setWeekWeather] = useState(null)
	const [error,setError]=useState(null)
	useEffect(() => {
        setLoading(true)
		setWeekWeather(null)
		setError(null)
        getWeather(props.location.search).
			then(weather=>{setWeekWeather(weather)},error=>{setError(error)}).
			finally(()=>{setLoading(false)}) 
    }, [props.location.search])

	
	return (
		<div className="app">	
			<Header></Header>
		
			<Switch>
				<Route path={routes.WEATHER} render={()=>{
					return (
						<React.Fragment>
							{weekWeather&&<Week weather={weekWeather}></Week>}
							{loading&& <div className="page-message">Loading...</div>}
							{error&&<ErrorMessage>{error}</ErrorMessage>}
						</React.Fragment>
					)
				}}></Route>

				<Redirect exact to="/weather"></Redirect>
			</Switch>
		</div>
	);
}

export default withRouter(App);
