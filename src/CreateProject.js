import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createProject } from './store/actions/projectActions'

class CreateProject extends Component {
  state = {
    name: '',
    youtubeChannel: '',
    youtubeChannelName: '',
    imageOne: '',
    imageTwo: '',
    twitterAccount: '',
    website: '',
    quote: '',
    starkLine: ''
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
              placeholder="name"
              id="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">website</label>
            <input
              name="website"
              placeholder="website"
              id="website"
              onChange={this.handleChange}
              className="materialize"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">youtubeChannel</label>
            <input
              name="youtubeChannel"
              placeholder="youtubeChannel"
              id="youtubeChannel"
              onChange={this.handleChange}
              className="materialize"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">youtubeChannelName</label>
            <input
              name="youtubeChannelName"
              placeholder="youtubeChannelName"
              id="youtubeChannelName"
              onChange={this.handleChange}
              className="materialize"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">twitterAccount</label>
            <input
              name="youtubeChannel"
              placeholder="twitterAccount"
              id="twitterAccount"
              onChange={this.handleChange}
              className="materialize"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">imageOne</label>
            <input
              name="imageOne"
              placeholder="imageOne"
              id="imageOne"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">imageTwo</label>
            <input
              name="imageTwo"
              placeholder="imageTwo"
              id="imageTwo"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">quote</label>
            <input
              name="quote"
              placeholder="quote"
              id="quote"
              onChange={this.handleChange}
              className="materialize"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">starkLine</label>
            <input
              name="starkLine"
              placeholder="starkLine"
              id="starkLine"
              onChange={this.handleChange}
              className="materialize"
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
