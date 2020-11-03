import React from 'react'

import './FlashcardForm.css'
class FlashcardForm extends React.Component {
  render() {
    return (
      <div className="Flashcardform">
        <input
          type="text"
          placeholder="question"
          onChange={this.props.questionUpdate}
          value={this.props.question}
        />
        <input
          type="text"
          placeholder="meaningOne"
          onChange={this.props.meaningOneUpdate}
          value={this.props.meaningOne}
        />
        <input
          type="text"
          placeholder="meaningTwo"
          onChange={this.props.meaningTwoUpdate}
          value={this.props.meaningTwo}
        />
        <input
          type="text"
          placeholder="explanation"
          onChange={this.props.explanationUpdate}
          value={this.props.explanation}
        />
        <input
          type="text"
          placeholder="exampleOne"
          onChange={this.props.exampleOneUpdate}
          value={this.props.exampleOne}
        />
        <input
          type="text"
          placeholder="exampleTwo"
          onChange={this.props.exampleTwoUpdate}
          value={this.props.exampleTwo}
        />
      </div>
    )
  }
}

export default FlashcardForm
