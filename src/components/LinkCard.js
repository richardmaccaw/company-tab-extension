import React from 'react'

const LinkCard = (props) => {

    return (
        <div >
            {props.link.url &&
                <div className='linkItem'>
                    <img src={
                        "https://logo.clearbit.com/" + 
                        props.link.url.split('/')[0] + 
                        "?size=40&greyscale=true"}/>
                    <a href={`https://${props.link.url}`}>{props.link.name}</a>
                </div>
            }
        </div>
    )
}

export default LinkCard
