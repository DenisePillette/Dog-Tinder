import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dogs from './pages/Dogs'
import NewDog from './pages/NewDog'
import About from './pages/About'

import Header from './components/Header'
import { getDogs, createDog } from './api'






class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        dogs: [],
        newDogSuccess: false
      }
    }


    componentWillMount() {
           getDogs()
           .then(APIdogs => {
               this.setState({
                   dogs: APIdogs
                 })
               }
             )
          }

        handleNewDog(data){
        createDog(data).then( successDog => {
          console.log("SUCCESS! New Dog:", successDog)
          getDogs().then( APIdogs => {
              this.setState({dogs:APIdogs, newDogSuccess: true})
            })
        })
      }





  render() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <Dogs dogs={this.state.dogs}/>} />
                    <Route exact path="/new_dog" render={(props) => <NewDog handleNew={this.handleNewDog.bind(this)} success={this.state.newDogSuccess} />} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
