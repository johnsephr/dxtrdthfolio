import React, { Fragment } from 'react'

// Components

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    grid: {
        padding: 15
    },
    text: {
        flexGrow: 1,
        padding: 15
    }
}))

const ProjectsContainer = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <div>yello issa projects container</div>

            {/* <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={6}>
                </Grid>

                <Grid item xs={12}>
                </Grid>

                <Grid item xs={12}>
                </Grid>

            </Grid> */}
        </Fragment>
    )
}

export default ProjectsContainer