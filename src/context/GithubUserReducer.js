export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        userInfo: action.payload
      }
    default:
      return state
  }
}
