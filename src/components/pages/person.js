import React, { Fragment, useContext, useEffect } from 'react'

import { GlobalContext } from '../../context/GithubUserState'

const Person = () => {
  const { userInfo, getUser } = useContext(GlobalContext)

  useEffect(() => {
    getUser(userInfo.activeUser)
    // eslint-disable-next-line
  }, [])

  return(
    <Fragment>
      {userInfo.userLoaded && <div className='relative soft-color'>
                                {/* <p>Username: {userInfo.activeUser}</p> */}
                                <img src={userInfo.avatarUrl} alt='avatar' className='avatar' />
                                <div className='absolute'>
                                  <p className='black-text'>{userInfo.name === null ? 'No name' : userInfo.name}</p>
                                  <p>{userInfo.location === null ? 'No location' : userInfo.location}</p>
                                </div>
                              </div>}
                              
      <div className='soft-color'>
        <hr />
      </div>
    </Fragment>
  )
}

export default Person
