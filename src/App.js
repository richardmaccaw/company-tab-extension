import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import API from './API/API'

import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "companytab-227916.firebaseapp.com",
  databaseURL: "https://companytab-227916.firebaseio.com",
  projectId: "companytab-227916",
  storageBucket: "companytab-227916.appspot.com",
  messagingSenderId: "1092020664287"
}

firebase.initializeApp(config);


class App extends Component {

  state = {
    announcements: [],
    serverUser: [],
    user: []
  }

  componentDidMount = () => {
    this.authUser()
  }

  authUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user)
    })
  }

  setUser = (user) => {
    this.setState({
      user
    }, () => firebase.auth().currentUser && this.findOrCreateUser())
  }

  findOrCreateUser = () => {
    const { displayName, uid, email } = firebase.auth().currentUser

    const user = {
      name: displayName,
      uid: uid,
      domain: email.replace(/.*@/, "")
    }
    API.findOrCreateUser(user)
      .then(serverUser => serverUser && 
        this.setState(
          {
            serverUser,
            announcements: serverUser.announcements.sort((a,b) => b.id - a.id)
          }
        )
      )
  }

  signOut = () => {
    this.setState({
      announcements: [],
      serverUser: [],
      user: []
    })
    firebase.auth().signOut()

  }


  render() {
    return (
      
      <div className="App">
        <>
          <Nav user={this.state.user} signOut={this.signOut}></Nav>
          <Home announcements={this.state.announcements}></Home>
        </>
        
      </div>
    );
  }
}

export default App;
