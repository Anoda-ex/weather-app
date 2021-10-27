import React from 'react'
import { withRouter } from 'react-router'

function SelectCityMessage(props) {
    if(props.children.match("Page not found")){
        setTimeout(()=>{
            props.history.push("/weather")
        },3000)
    }
    return (
        <div className="page-message">
            {props.children}
            
        </div>
    )
}

export default withRouter(SelectCityMessage)