import React, { Fragment } from 'react'
import { useMediaPredicate } from "react-media-hook"

// MUI
import { AppBar, Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        background: 'transparent',
        boxShadow: 'none'
    },
    name: {
        color: '#555',
        padding: '30px 0',
        margin: '0 5%',
    },
    nameCenter: {
        color: '#555',
        padding: '30px 0',
        margin: '0 5%',
        textAlign: 'center'
    },
}))

const Header = props => {
    const classes = useStyles(props)
    const smallerThan1450 = useMediaPredicate("(max-width: 1450px)")
    const smallerThan450 = useMediaPredicate("(max-width: 450px)")
    return (
        <Fragment>
            <AppBar
                position='static'
                color='primary'
                className={classes.root}
            >
                {smallerThan450 ? <Typography className={classes.nameCenter} style={{ fontSize: '1.75rem' }}>
                    John Ramsey
                </Typography> : smallerThan1450 ? <Typography variant="h4" className={classes.nameCenter}>
                    John Ramsey
                </Typography> : <Typography variant="h4" className={classes.name}>
                    John Ramsey
                </Typography>}
            </AppBar>
        </Fragment>
    )
}

export default Header
