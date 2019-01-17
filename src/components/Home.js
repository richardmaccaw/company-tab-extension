import React from 'react';
import AnnouncementList from './AnnouncementList'

import Grid from '@material-ui/core/Grid';
import firebase from 'firebase'


class Home extends React.Component {

    render () {
        const { announcements } = this.props
        return <>
            <Grid 
                container
                direction="row"
                justify="space-between"
            >
                <Grid item xs={8}>
                    <AnnouncementList announcements={announcements}></AnnouncementList>
                </Grid>
                <Grid item xs={2} >
                    <Grid spacing={32} container direction='column'>
                        <Grid item>
                            {/* <TimezoneList></TimezoneList> */}
                        </Grid>
                        <Grid item>
                            {/* <LinksList></LinksList> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    }
}
export default Home