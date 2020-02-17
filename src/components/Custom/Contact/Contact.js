import React, { Fragment } from 'react'
import { useMediaPredicate } from "react-media-hook"

// MUI
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Link } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        display: 'flex',
        alignItems: 'center',
        // width: '97%',
        // margin: '16px 3% 16px 3%',
    },
    header: {
        color: '#555'
    },
    gridCenter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        opacity: .6,
        '&:hover': {
            opacity: .75
        }
    }
}))

const Contact = props => {
    const classes = useStyles(props)
    const smallerThan1000 = useMediaPredicate("(max-width: 1000px)")
    const smallerThan500 = useMediaPredicate("(max-width: 500px)")

    const openMail = () => {
        window.location.href = 'mailto:ramseyjohnjoseph@gmail.com'
    }

    return (
        <div className={classes.root}>
            {smallerThan1000 && !smallerThan500 ? <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={4} />
                <Grid item xs={4} className={classes.gridCenter}>
                    <MailOutlineIcon className={classes.icon} style={{ fontSize: 32 }} onClick={openMail} />
                    <Link href="https://github.com/johnsephr" target="_blank" style={{ all: 'unset', cursor: 'pointer' }}>
                        <GitHubIcon className={classes.icon} style={{ fontSize: 29 }} />
                    </Link>
                    <Link href="https://linkedin.com/in/john-ramsey-dev-design" target="_blank" style={{ all: 'unset', cursor: 'pointer' }}>
                        <LinkedInIcon className={classes.icon} style={{ fontSize: 33 }} />
                    </Link>
                </Grid>
                <Grid item xs={4} />

            </Grid> : smallerThan500 ? <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={3} />
                <Grid item xs={6} className={classes.gridCenter}>
                    <MailOutlineIcon className={classes.icon} style={{ fontSize: 32 }} onClick={openMail} />
                    <Link href="https://github.com/johnsephr" target="_blank" style={{ all: 'unset', cursor: 'pointer' }}>
                        <GitHubIcon className={classes.icon} style={{ fontSize: 29 }} />
                    </Link>
                    <Link href="https://linkedin.com/in/john-ramsey-dev-design" target="_blank" style={{ all: 'unset', cursor: 'pointer' }}>
                        <LinkedInIcon className={classes.icon} style={{ fontSize: 33 }} />
                    </Link>
                </Grid>
                <Grid item xs={3} />

            </Grid> : <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={5} />
                <Grid item xs={2} className={classes.gridCenter}>
                    <MailOutlineIcon className={classes.icon} style={{ fontSize: 32 }} onClick={openMail} />
                    <Link href="https://github.com/johnsephr" target="_blank" style={{ all: 'unset', cursor: 'pointer' }}>
                        <GitHubIcon className={classes.icon} style={{ fontSize: 29 }} />
                    </Link>
                    <Link href="https://linkedin.com/in/john-ramsey-dev-design" target="_blank" style={{ all: 'unset', cursor: 'pointer' }}>
                        <LinkedInIcon className={classes.icon} style={{ fontSize: 33 }} />
                    </Link>
                </Grid>
                <Grid item xs={5} />

            </Grid>}
        </div>
    )
}

export default Contact
