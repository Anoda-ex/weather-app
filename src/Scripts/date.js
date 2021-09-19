const DAYS = ["Sunday","Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const getDayDate=(time)=>{
    let date=new Date(time*1000)
    let dateString=[
        DAYS[date.getDay()],
        date.getDate(),
        MONTHS[date.getMonth()],
        date.getFullYear()
    ].join(" ")
    return dateString
}
export const getWeekDate=(time)=>{
    let date=new Date(time*1000)

    return [DAYS[date.getDay()],date.getDate(),MONTHS[date.getMonth()]]
}