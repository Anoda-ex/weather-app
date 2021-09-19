import './App.scss';
import React, { useState } from "react"
import Selector from './Components/Selector';
import PageNotFound from './Components/PageNotFound';
import Day from "./Components/Day"
import Week from "./Components/Week"
import {Route, Switch, withRouter } from 'react-router';
import * as routes from "./routes"
import { NavLink } from 'react-router-dom';
import Header from './Components/Header';
import SelectCityMessage from './Components/SelectCityMessage';
function App(props) {
	// const [cityName, setCityName] = useState(1)
	// useEffect(() => {
	// }, [props])
	// let getWeather = (city) => {
	// 	fetch(
	// 		// "http://api.openweathermap.org/data/2.5/forecast?q=Kyiv&exclude=alerts&appid=b4f88a6f724b0b945af35f393ab4d22a"
	// 		// "http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=b4f88a6f724b0b945af35f393ab4d22a&lang=ua"
	// 		`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&appid=b4f88a6f724b0b945af35f393ab4d22a`
	// 	).then(response => {
	// 		return response.json()
	// 	}).then(weather => {
	// 		console.log(weather);
	// 	}).catch(error => {
	// 		console.log(error.text())
	// 	})
	// }
	// let selectCityHandler = (city) => {
	// 	setSelectCityState(city)
	// 	getWeather(city)
	// }
	return (
		<div className="app">	
			<Header></Header>
			<Switch>
				<Route path={routes.WEEK} component={Week}></Route>
				<Route path={routes.DAY}  component={Day}></Route>

				<Route path="" component={PageNotFound}></Route>
			</Switch>
		</div>
	);
}

export default withRouter(App);
