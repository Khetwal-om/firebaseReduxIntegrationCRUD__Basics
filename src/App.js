import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './styles.css'

function App(props) {
  const { projects } = props
  console.log(projects)
  console.log(props)
  return (
    <div className="App">
      lugi
      {projects &&
        projects.map((project) => (
          <div className="firebase" key={project.id}>
            <div>
              {project.Image} {project.Instructor}
            </div>
            <div>
              {project.tutorials.map((tutorial) => (
                <div key={tutorial.id}>
                  <div className="tutorial">
                    {tutorial.name}
                    {tutorial.link}
                  </div>
                  <div className="flashcards">
                    {tutorial.flashcards &&
                      tutorial.flashcards.map((flashcard) => (
                        <div className="flashcard">
                          {flashcard.question}
                          {flashcard.explanation}
                          {flashcard.exampleOne}
                          {flashcard.exampleTwo}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.firestore.ordered.projects
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(App)
