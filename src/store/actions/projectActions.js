export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    console.log('memezar 🎀')
    console.log(getState())
    console.log('eli5 ✨')
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

export const removeProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    console.log('memezar 🎀')
    const { tutorials } = project
    // tutorials.push(['eli5 ✨', 'eli5 ✨', 'eli5 ✨', 'eli5 ✨'])
    console.log('eli5 ✨')
    firestore
      .collection('projects')
      .doc(project.id)
      .set({
        ...project,
        tutorials: [...tutorials, { name: 'mango' }]
      })

      .then(() => {
        dispatch({ type: 'REMOVE_PROJECT_SUCCESS' })
      })
      .catch((err) => {
        dispatch({ type: 'REMOVE_PROJECT_ERROR' }, err)
      })
  }
}
