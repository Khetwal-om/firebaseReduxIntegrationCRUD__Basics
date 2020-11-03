import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createProject } from './store/actions/projectActions'

class CreateProject extends Component {
  state = {
    name: '',
    youtubeChannel: '',
    imageOne: '',
    imageTwo: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.createProject(this.state)
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
            <label htmlFor="content">youtubeChannel</label>
            <input
              name="youtubeChannel"
              id="youtubeChannel"
              onChange={this.handleChange}
              className="materialize"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">imageOne</label>
            <input
              name="imageOne"
              id="imageOne"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">imageTwo</label>
            <input
              name="imageTwo"
              id="imageTwo"
              onChange={this.handleChange}
              className="materialize-textarea"
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
  console.log(state, 'from createproject 🚀💋')
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (instructor) => dispatch(createProject(instructor))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
