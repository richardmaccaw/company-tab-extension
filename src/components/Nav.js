import React from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Avatar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import firebase from 'firebase'

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 20,
        width: 50,
        height: 50
    }
};

class Nav extends React.Component {

    uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        signInSuccessWithAuthResult: () => false
        }
    }
    
    render () {
        const { classes, user, signOut } = this.props
        return (
            <div>
                <div className='nav'>
                    {user ? 
                        <div className='navLinks'>
                            <Avatar src={user.photoURL} className={classes.bigAvatar}/>
                            <Button href='https://companytab.herokuapp.com'>admin</Button>
                            <Button className='signOutBtn' onClick={signOut}>sign out</Button>
                        </div>
                    : 
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />}
                </div>
            </div>
        ) 
    }
}

export default withStyles(styles)(Nav)