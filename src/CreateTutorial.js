import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createsingleTutorial } from './store/actions/projectActions'
import './CreateTutorial.css'
import FlashcardForm from './FlashcardForm'

class CreateTutorial extends Component {
  state = {
    title: '',
    tutorialLink: '',
    video: '',
    icon: '',
    flashcards: [
      {
        question: '',
        meaningOne: '',
        meaningTwo: '',
        explanation: '',
        exampleOne: '',
        exampleTwo: ''
      },
      {
        question: '',
        meaningOne: '',
        meaningTwo: '',
        explanation: '',
        exampleOne: '',
        exampleTwo: ''
      },
      {
        question: '',
        meaningOne: '',
        meaningTwo: '',
        explanation: '',
        exampleOne: '',
        exampleTwo: ''
      },
      {
        question: '',
        meaningOne: '',
        meaningTwo: '',
        explanation: '',
        exampleOne: '',
        exampleTwo: ''
      },
      {
        question: '',
        meaningOne: '',
        meaningTwo: '',
        explanation: '',
        exampleOne: '',
        exampleTwo: ''
      },

      {
        question: '',
        meaningOne: '',
        meaningTwo: '',
        explanation: '',
        exampleOne: '',
        exampleTwo: ''
      }
    ]
  }
  questionUpdate = (e, index) => {
    const flashcards = this.state.flashcards
    flashcards[index].question = e.target.value
    this.setState({
      flashcards
    })
  }
  explanationUpdate = (e, index) => {
    const flashcards = this.state.flashcards
    flashcards[index].explanation = e.target.value
    this.setState({
      flashcards
    })
  }
  meaningOneUpdate = (e, index) => {
    const flashcards = this.state.flashcards
    flashcards[index].meaningOne = e.target.value
    this.setState({
      flashcards
    })
  }
  meaningTwoUpdate = (e, index) => {
    const flashcards = this.state.flashcards
    flashcards[index].meaningTwo = e.target.value
    this.setState({
      flashcards
    })
  }

  exampleOneUpdate = (e, index) => {
    const flashcards = this.state.flashcards
    flashcards[index].exampleOne = e.target.value
    this.setState({
      flashcards
    })
  }
  exampleTwoUpdate = (e, index) => {
    const flashcards = this.state.flashcards
    flashcards[index].exampleTwo = e.target.value
    this.setState({
      flashcards
    })
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
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="name"
              placeholder="title"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">link</label>
            <input
              name="link"
              type="text"
              placeholder="tutorialLink"
              id="tutorialLink"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">video</label>
            <input
              name="video"
              placeholder="video"
              type="text"
              id="video"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">icon</label>
            <input
              name="icon"
              placeholder="icon"
              type="text"
              id="icon"
              onChange={this.handleChange}
            />
          </div>

          <div className="App">
            {this.state.flashcards.map((phone, i) => {
              return (
                <FlashcardForm
                  questionUpdate={(e) => {
                    this.questionUpdate(e, i)
                  }}
                  question={this.state.flashcards[i].question}
                  meaningOneUpdate={(e) => {
                    this.meaningOneUpdate(e, i)
                  }}
                  meaningOne={this.state.flashcards[i].meaningOne}
                  meaningTwoUpdate={(e) => {
                    this.meaningTwoUpdate(e, i)
                  }}
                  meaningTwo={this.state.flashcards[i].meaningTwo}
                  explanationUpdate={(e) => {
                    this.explanationUpdate(e, i)
                  }}
                  explanation={this.state.flashcards[i].explanation}
                  exampleOneUpdate={(e) => {
                    this.exampleOneUpdate(e, i)
                  }}
                  exampleOne={this.state.flashcards[i].exampleOne}
                  exampleTwoUpdate={(e) => {
                    this.exampleTwoUpdate(e, i)
                  }}
                  exampleTwo={this.state.flashcards[i].exampleTwo}
                />
              )
            })}
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
