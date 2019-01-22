import React from 'react'

const LinkCard = (props) => {

    const clearbitBase = 'https://logo.clearbit.com/'
    const clearbitOpt = '?size=30'

    return (
        <div className='linkContainer'>
            {props.link.url &&
                <div className='linkItem'>
                    <a href={`https://${props.link.url}`}>
                        <img alt='logo' src={clearbitBase + props.link.url.split('/')[0] + clearbitOpt}/>
                    </a>
                    <a href={`https://${props.link.url}`}>{props.link.name}</a>
                </div>
            }
        </div>
    )
}

export default LinkCard
