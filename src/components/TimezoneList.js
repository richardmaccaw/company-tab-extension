import React, { Component } from 'react';
import TimezoneCard from './TimezoneCard'

const TimezoneList = (props) => {

    return (
        <div className=''>
            {props.timezones
                .map(timezone => <TimezoneCard key={timezone.id} timezone={timezone}></TimezoneCard>)}
        </div>
   
    )
}

export default TimezoneList