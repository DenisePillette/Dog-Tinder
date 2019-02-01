import React, {Component} from 'react'
import {
  Grid
} from 'react-bootstrap'

import '../styles/about.css'



class About extends Component {
	render() {
		return (
      <div className="about-background">
        <Grid >
          <br />
          <h1 className="about">About Us</h1>
          <p className="about">Welcome to Dog Tinder! Our passion is finding your best friend, their best friend.</p>
        </Grid>
      </div>
    );
  }
}




export default About
