export const getCoords=(searchParams)=>{
    let params = new URLSearchParams(searchParams);
    let lat = params.get("lat"); 
    let lon = params.get("lon");
    if(lat&&lon){
        return {lat:lat,lon:lon}
    }else{
        return null
    }
}
export const getCityName=(searchParams)=>{
    return new Promise((resolve,reject)=>{
        const coords=getCoords(searchParams)
        if(coords){
            fetch(
                `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.lon}&appid=b4f88a6f724b0b945af35f393ab4d22a`
            ).then(response=>{
                return response.json()
            }).then(cityData=>{
                resolve(cityData[0].name)
            })
        }else(
            reject("ошибка")
        )
    })
}
export const getWeather=(searchParams,mode)=>{
    return new Promise((resolve,reject)=>{
        let coords = getCoords(searchParams)
        if(coords){
            fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=minutely,alerts,hourly&appid=b4f88a6f724b0b945af35f393ab4d22a`
            ).then(response => {
                return response.json()
            }).then(weather => {
                if(mode=="day"){
                    resolve(weather.current)
                }
                if(mode=="week"){
                    let weekWeather=[...weather.daily]
                    weekWeather.splice(0,1)
                    resolve(weekWeather)
                }
            })
        }
        else(
            reject("ошибка")
        )


    })
    
}