import React, { Fragment } from 'react'
import { useMediaPredicate } from "react-media-hook"

// Components
import Project from '../../components/Custom/Project/Project'
import ProjectMobile from '../../components/Custom/Project/ProjectMobile'

// data
import projects from '../../data/projects.js'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    header: {
        width: '100%',
        textAlign: 'center',
        opacity: .6,
        padding: '20px 0'
    }
}))

const ProjectsContainer = props => {
    const classes = useStyles(props)
    const biggerThan1450 = useMediaPredicate("(min-width: 1450px)")
    const smallerThan450 = useMediaPredicate("(max-width: 450px)")

    return (
        <div>
            <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                {biggerThan1450 ? <Fragment>
                    <Grid item xs={5} />
                    <Grid item xs={2}>
                        <Typography variant="h4" className={classes.header}>
                            Projects
                    </Typography>
                    </Grid>
                    <Grid item xs={5} />
                </Fragment> : <Grid item xs={12}>
                        {smallerThan450 ? <Typography className={classes.header} style={{ fontSize: '1.75rem' }}>
                            Projects
                    </Typography> : <Typography variant="h4" className={classes.header}>
                                Projects
                    </Typography>}
                    </Grid>}
            </Grid>
            {biggerThan1450 ? <div>
                {projects.map((project, index, array) => {
                    return <Project project={project} key={index} index={index} />
                })}
            </div> : <div>
                    {projects.map((project, index, array) => {
                        return <ProjectMobile project={project} key={index} index={index} array={array} />
                    })}
                </div>}
        </div>
    )
}

export default ProjectsContainer