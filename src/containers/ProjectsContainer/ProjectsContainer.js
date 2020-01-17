import React, { Fragment } from 'react'

// Components
import Project from '../../components/Custom/Project/Project'

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
    return (
        <div>
            <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={5} />
                <Grid item xs={2}>
                    <Typography variant="h4" className={classes.header}>
                        Projects
                    </Typography>
                </Grid>
                <Grid item xs={5} />
            </Grid>
            {projects.map((project, index, array) => {
                return <Project project={project} key={index} index={index} />
            })}
        </div>
    )
}

export default ProjectsContainer