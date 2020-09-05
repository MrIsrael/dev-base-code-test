import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import GithubUserReducer from './GithubUserReducer'

// Initial state
const initialState = {
  topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"],
  userInfo: {}
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GithubUserReducer, initialState)

  // Action / Get User
  const getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}`)

    dispatch({
      type: 'GET_USER',
      payload: res.data
    })
  }

  return (
    <GlobalContext.Provider 
      value={{
        topFive: state.topFive,
        userInfo: state.userInfo,
        getUser,
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}
