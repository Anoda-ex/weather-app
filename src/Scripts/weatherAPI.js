export const getParams=(searchParams)=>{
    let params = new URLSearchParams(searchParams);
    let lat = params.get("lat"); 
    let lon = params.get("lon");
    let city=params.get("city");
    return {lat,lon,city}
}
export const getCityName=(searchParams)=>{
    return new Promise((resolve,reject)=>{
        // const coords=getCoords(searchParams)
        // if(coords){
        //     fetch(
        //         `https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.lon}&appid=b4f88a6f724b0b945af35f393ab4d22a`
        //     ).then(response=>{
        //         return response.json()
        //     }).then(cityData=>{
        //         resolve(cityData[0].name)
        //     })
        // }else(
        //     reject("ошибка")
        // )
    })
}



export const getWeather=(searchParams)=>{
    return new Promise((resolve,reject)=>{
        let {city}= getParams(searchParams)

        fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b4f88a6f724b0b945af35f393ab4d22a`
        )
        .then(response=>response.json())
        .then(coord=>{
            if(coord[0]){
                fetch(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0].lat}&lon=${coord[0].lon}&units=metric&exclude=minutely,alerts,hourly&appid=b4f88a6f724b0b945af35f393ab4d22a`
                ).then(response => {
                    return response.json()
                }).then(weather => {
                        let weekWeather=[...weather.daily]
                        weekWeather.splice(0,1)
                        console.log(weather);
                        resolve(weekWeather)
                })
            }else{
                reject("Выбраный город не найден")
            }

        }).catch(error=>{return null})
    })
    
}