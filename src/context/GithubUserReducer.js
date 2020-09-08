export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        userInfo: { ...state.userInfo, ...{ avatarUrl: action.payload.avatar_url, name: action.payload.name,
                                            location: action.payload.location, userLoaded: true } }
      }
    case 'SET_ACTIVE_USER':
      return {
        ...state,
        userInfo: { ...state.userInfo, ...{ activeUser: action.payload, userLoaded: false } }
      }
    default:
      return state
  }
}
