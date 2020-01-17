import React, { Fragment } from 'react'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//data
import bio from '../../../data/bio'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    text: {
        padding: '650px',
        textAlign: 'center',
    }
}))

const Bio = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <Typography variant="h6" className={classes.text}>
                {bio}
            </Typography>
        </Fragment>
    )
}

export default Bio
