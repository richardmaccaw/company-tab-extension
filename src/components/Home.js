import React from 'react';
import AnnouncementList from './AnnouncementList'
import LinksList from './LinksList'
import TimezoneList from './TimezoneList'

import Grid from '@material-ui/core/Grid';


class Home extends React.Component {

    render () {
        const { announcements, links, timezones } = this.props
        return <>
            <Grid 
                container
                direction="row"
                justify="space-between"
            >
                <Grid item xs={12} sm={8}>
                    <AnnouncementList announcements={announcements}></AnnouncementList>
                </Grid>
                <Grid item xs={2} >
                    <Grid spacing={32} container direction='column'>
                        <Grid item>
                            <TimezoneList timezones={timezones}></TimezoneList>
                        </Grid>
                        <Grid item>
                            <LinksList links={links}></LinksList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    }
}
export default Home