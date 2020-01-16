import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Components / Containers
import HomePage from './containers/HomePage/HomePage'
import Header from './components/Custom/Header/Header'

//MUI
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 5%'
  }
}))

const App = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
