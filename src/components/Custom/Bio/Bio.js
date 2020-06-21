import React, { Fragment } from 'react'
import { useMediaPredicate } from "react-media-hook"

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

//data
import bio from '../../../data/bio'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    text: {
        textAlign: 'center',
        margin: 'auto 0',
        transform: 'translateY(40px)'
    },
    removeArrow: {
        opacity: 0
    }
}))

const Bio = props => {
    const classes = useStyles(props)
    const { removeArrow } = props
    const biggerThan500 = useMediaPredicate("(min-width: 500px)")

    return (
        <Fragment>
            <Typography variant="h6" className={classes.text}>
                {bio}
            </Typography>
            <div className="animated infinite bounce slow" style={biggerThan500 ? { margin: '0 auto 30px auto' } : { margin: '0 auto 120px auto' }}>
                <ExpandMoreIcon className={removeArrow ? classes.removeArrow : null} style={{
                    color: '#888',
                    fontSize: 40,
                    transition: '150ms ease-in-out'
                }} />
            </div>
        </Fragment>
    )
}

export default Bio
