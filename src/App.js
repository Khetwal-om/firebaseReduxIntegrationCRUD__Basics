import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import CreateProject from './CreateProject'
import { removeProject } from './store/actions/projectActions'
import './styles.css'

const App = ({ projects, removeTask }) => {
  const handleRemove = (tutorial) => {
    removeTask(tutorial)
  }

  console.log(projects)
  return (
    <div className="App">
      <CreateProject />

      {projects &&
        projects.map((project) => (
          <div className="firebase" key={project.id}>
            <div>
              {project.Image} " " {project.id} " "{project.Instructor}
              <span
                role="img"
                aria-label=""
                onClick={() => handleRemove(project)}
              >
                🎃
              </span>
            </div>
            <div>
              {project.tutorials.map((tutorial) => (
                <div key={tutorial.id}>
                  <div className="tutorial">
                    {tutorial.name} {tutorial.link}
                    {tutorial.id}
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
  console.log('ty')
  console.log(state.firestore.data.projects)
  console.log('imho')
  return {
    projects: state.firestore.ordered.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (tutorial) => dispatch(removeProject(tutorial))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'projects' }])
)(App)
