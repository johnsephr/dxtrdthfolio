import React from 'react'
import { useMediaPredicate } from "react-media-hook"

// Components
import BioContainer from '../BioContainer/BioContainer'
import WorkContainer from '../WorkContainer/WorkContainer'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'

// MUI
// import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        height: '100%',
        width: '100%',
        // maxWidth: 1980
    },
    container: {
        height: '100%',
    }
}))

const HomePage = props => {
    const classes = useStyles(props)
    const biggerThan2200 = useMediaPredicate("(min-width: 2200px)")
    const biggerThan1450 = useMediaPredicate("(min-width: 1450px)")
    const biggerThan1250 = useMediaPredicate("(min-width: 1250px)")
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)")
    return (
        <div className={classes.root} style={biggerThan2200 ? { display: 'flex', justifyContent: 'center' } : {}}>
            <div className={classes.container} style={biggerThan2200 ? { maxWidth: 1980 } : biggerThan1450 ? { margin: '0 5%' } : biggerThan1250 ? { margin: '0 20%' } : biggerThan1000 ? { margin: '0 15%' } : { margin: '0 10%' }}>
                <BioContainer />
                <WorkContainer />
                <ProjectsContainer />
            </div>
        </div>
    )
}

export default HomePage