export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    console.log(getState(), 'create instructor')
    firestore
      .collection('projects')
      .add({
        ...project,
        tutorials: []
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' })
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err)
      })
  }
}

export const removeProject = (project, singletutorial) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    const { tutorials } = project

    firestore
      .collection('projects')
      .doc(project.id)
      .set({
        ...project,
        tutorials: tutorials ? [...tutorials, singletutorial] : [singletutorial]
      })

      .then(() => {
        dispatch({ type: 'REMOVE_PROJECT_SUCCESS' })
      })
      .catch((err) => {
        dispatch({ type: 'REMOVE_PROJECT_ERROR' }, err)
      })
  }
}

export const createsingleTutorial = (singletutorial) => {
  return (dispatch, getState) => {
    console.log(getState().singletutorial, 'getstate 🚀 from createsingle')
    dispatch({ type: 'POPULATE_TUTORIAL', payload: singletutorial })
  }
}
