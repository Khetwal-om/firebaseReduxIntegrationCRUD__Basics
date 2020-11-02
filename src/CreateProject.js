import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createProject } from './store/actions/projectActions'

class CreateProject extends Component {
  state = {
    Image: '',
    Instructor: ''
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
            <label htmlFor="title">Image</label>
            <input
              type="text"
              name="image"
              id="Image"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Instrucotr</label>
            <input
              name="instructor"
              id="Instructor"
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
