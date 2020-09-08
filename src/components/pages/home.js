import React, { Fragment, useContext } from "react"
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/GithubUserState'

const Home = () => {
  const { topFive, clickedUser } = useContext(GlobalContext)

  return(
    <Fragment>
      <h2>Top 5 GitHub users</h2>
      <p>Tap the username to see more information</p>
      {topFive.map(user => <Link to='/user'><button className='button' key={topFive.indexOf(user)} onClick={() => clickedUser(user)}>{user}</button></Link>)}
    </Fragment>
  )
}

export default Home
