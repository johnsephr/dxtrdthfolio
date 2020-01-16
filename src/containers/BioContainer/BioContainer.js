import React, { Fragment } from 'react'

// Components
import Bio from '../../components/Custom/Bio/Bio'

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

const BioContainer = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <Bio />
        </Fragment>
    )
}

export default BioContainer