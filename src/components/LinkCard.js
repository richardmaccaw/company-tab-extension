import React from 'react'
import Grid from '@material-ui/core/Grid';


const LinkCard = (props) => {

    const clearbitBase = 'https://logo.clearbit.com/'
    const clearbitOpt = '?size=35'

    return (
        <div className='linkContainer'>
            {props.link.url &&
                <Grid container className='linkItem'>
                    <Grid item>
                        <a href={`https://${props.link.url}`}>
                            <img alt='logo' src={clearbitBase + props.link.url.split('/')[0] + clearbitOpt}/>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={`https://${props.link.url}`}>{props.link.name}</a>
                    </Grid>
                </Grid>
            }
        </div>
    )
}

export default LinkCard
