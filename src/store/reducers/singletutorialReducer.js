const initState = {}

const singletutorialReducer = (state = initState, action) => {
  switch (action.type) {
    case 'POPULATE_TUTORIAL':
      console.log('here is the deal something is populated 😎', state)
      return action.payload
    default:
      return state
  }
}

export default singletutorialReducer
