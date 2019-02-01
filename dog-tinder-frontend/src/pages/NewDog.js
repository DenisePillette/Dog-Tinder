import React, {Component} from 'react'
import {
  Grid, Row, Col, FormControl, Form
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import '../styles/newdog.css'

class NewDog extends Component {
  constructor(props){
    super(props);
    this.state = {
      form:{
        name: "",
        age: "",
        enjoys: "",
      }
    }
  }

  handleChange(event){
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit(event){
    this.props.handleNew(this.state.form)
    event.preventDefault()
  }

  render() {
    return(
    <div className="center1">
        <Grid>
        <br />
        <h1>Create Your Profile!</h1>
           <Row>
             <Form>
              <Col className="new-user">

                <label id="name">
                  Name
                </label>
                <FormControl
                  type="text"
                  name="name"
                  placeholder=""
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.name}
                />

                <label id="age">
                  Age
                </label>
                <FormControl
                  type="integer"
                  name="age"
                  placeholder="#"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.age}
                />

                <label id="enjoys">
                  Enjoys
                </label>
                <FormControl
                  type="text"
                  name="enjoys"
                  placeholder="ex: Long walks"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.enjoys}
                />

                <label id="image">
                  Picture (paste in URL)
                </label>
                <FormControl
                  type="text"
                  name="image"
                  placeholder="www.example.com"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.image}
                />

                <br/>

                <FormControl
                  type="submit"
                  id="submit"
                  className="submit"
                  value="Create Dog Profile"
                  onClick={this.handleSubmit.bind(this)}
                />

                {this.props.success &&
                    <Redirect to="/" />
                }

              </Col>
            </Form>
          </Row>
        </Grid>
        <br />
      </div>
    )
  }
}

export default NewDog
