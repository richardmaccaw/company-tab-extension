import React from 'react'
import moment from 'moment-timezone';


const TimezoneCard = (props) => {
    return (
        <div className="timezoneContainer">
            {props.timezone && 
                <div className="timezoneItem"> {props.timezone.name + " - "} {moment().tz(props.timezone.zone).format('h:mma')} </div>
            }
        </div>
    )
}

export default TimezoneCard
