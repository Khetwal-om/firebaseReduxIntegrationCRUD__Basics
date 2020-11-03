import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import CreateProject from './CreateProject'
import CreateTutorial from './CreateTutorial'
import { removeProject } from './store/actions/projectActions'
import './styles.css'

const App = ({ projects, singletutorial, removeTask }) => {
  const handleRemove = (tutorial, singletutorial) => {
    removeTask(tutorial, singletutorial)
  }
  return (
    <div className="App">
      <CreateProject />

      {projects &&
        projects.map((project) => (
          <div className="firebase" key={project.id}>
            <div>
              {project.name} " " {project.id} " "{project.youtubeChannel}
              <CreateTutorial />
              <span
                role="img"
                aria-label=""
                onClick={() => handleRemove(project, singletutorial)}
              >
                🎃
              </span>
            </div>
            <div>
              {project.tutorials &&
                project.tutorials.map((tutorial) => (
                  <div key={tutorial.id}>
                    <div className="tutorial">
                      {tutorial.title} {tutorial.tutorialLink}
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

const mapStateToProps = (state, ownProps) => {
  console.log(state.singletutorial, 'here it is 🤣')
  return {
    projects: state.firestore.ordered.projects,
    singletutorial: state.singletutorial
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (tutorial, singletutorial) =>
      dispatch(removeProject(tutorial, singletutorial))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'projects' }])
)(App)
