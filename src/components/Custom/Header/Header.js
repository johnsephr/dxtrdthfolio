import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

// MUI
import { AppBar, Toolbar, Typography } from '@material-ui/core'
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
        padding: '30px',
        paddingLeft: '80px'
    }
}))

const Header = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <AppBar
                position='static'
                color='primary'
                className={classes.root}
            >
                <Typography variant="h4" className={classes.name}>
                    John Ramsey
                </Typography>
            </AppBar>
        </Fragment>
    )
}

export default Header
