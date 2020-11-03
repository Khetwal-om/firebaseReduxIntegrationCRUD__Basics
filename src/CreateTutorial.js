import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createsingleTutorial } from './store/actions/projectActions'
import './CreateTutorial.css'

class CreateTutorial extends Component {
  state = {
    name: '',
    link: '',
    flashcards: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.props, 'props passsssesd')
    this.props.singletonTutorial(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className=" ">Create</h5>
          <div className="input-field">
            <label htmlFor="title">name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">lLink</label>
            <input
              name="link"
              type="text"
              id="link"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    singletonTutorial: (singletutorial) =>
      dispatch(createsingleTutorial(singletutorial))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTutorial)
