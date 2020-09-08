export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        userInfo: action.payload
      }
    case 'SET_ACTIVE_USER':
      return {
        ...state,
        userInfo: { ...state.userInfo, ...{ activeUser: action.payload } }
      }
    default:
      return state
  }
}
