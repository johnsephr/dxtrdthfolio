import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

// MUI
import { AppBar, Toolbar, Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {
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
                    <Typography variant="h3" className={classes.name}>
                        John Ramsey
                    </Typography>


                {/* <Toolbar>
                    <Link to="/" className={classes.link}>
                        <Typography variant="h6">
                            Home
                        </Typography>
                    </Link>
                    <Link to="/about" className={classes.link}>
                        <Typography variant="h6">
                            About
                        </Typography>
                    </Link>
                    <Link to="/login" className={classes.link}>
                        <Typography variant="h6">
                            Login
                        </Typography>
                    </Link>
                </Toolbar> */}
            </AppBar>
        </Fragment>
    )
}

export default Header
