import React, { Fragment } from 'react'

// Components
import BioContainer from '../BioContainer/BioContainer'
import WorkContainer from '../WorkContainer/WorkContainer'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import ContactContainer from '../ContactContainer/ContactContainer'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {}
}))

const HomePage = props => {
    const classes = useStyles(props)
    return (
        <div>
            <BioContainer />
            <WorkContainer />
            <ProjectsContainer />
            <ContactContainer />
        </div>
    )
}

export default HomePage