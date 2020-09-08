import React, { Fragment, useContext } from "react"
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../context/GithubUserState'

const Person = () => {
  const { userInfo, getUser } = useContext(GlobalContext)

  return(
    <Fragment>
      <p>El nombre es: {userInfo.activeUser}</p>
      <Link to='/'>Back</Link>
    </Fragment>
  )
}

export default Person
