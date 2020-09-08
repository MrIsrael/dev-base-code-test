import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Person from './components/pages/person'
import Navbar from './components/layout/navbar'

import { GlobalProvider } from './context/GithubUserState'

import './App.css'

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/user' component={Person} />
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  )
}

export default App
