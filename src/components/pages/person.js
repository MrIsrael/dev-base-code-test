import React, { Fragment, useContext, useEffect } from "react"
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/GithubUserState'

const Person = () => {
  const { userInfo, getUser } = useContext(GlobalContext)

  useEffect(() => {
    getUser(userInfo.activeUser)
    // eslint-disable-next-line
  }, [])

  return(
    <Fragment>
      {userInfo.userLoaded && <div>
                                <p>Username: {userInfo.activeUser}</p>
                                <img src={userInfo.avatarUrl} alt='avatar' />
                                <p>Name: {userInfo.name}</p>
                                <p>Location: {userInfo.location}</p>
                              </div>}
      <Link to='/'>Back</Link>
    </Fragment>
  )
}

export default Person
