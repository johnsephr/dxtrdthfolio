import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './app.scss'

// Components / Containers
import HomePage from './containers/HomePage/HomePage'
import Header from './components/Custom/Header/Header'
import ContactContainer from './containers/ContactContainer/ContactContainer'

//MUI
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
  root: {}
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
            <ContactContainer className={classes.contactContainer} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
