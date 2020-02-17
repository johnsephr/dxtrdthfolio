import React from 'react'
import { useMediaPredicate } from "react-media-hook"

// Components
import Contact from '../../components/Custom/Contact/Contact'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '200px',
        // width: '100vw',
        background: '#eee',

    },
    grid: {
        padding: 16,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        opacity: .6,
        paddingBottom: '30px'
    }
}))

const ContactContainer = props => {
    const classes = useStyles(props)
    const smallerThan800 = useMediaPredicate("(max-width: 800px)")
    return (
        <div className={classes.root}>
            {smallerThan800 ? <Grid
                container
                direction='row'
                alignContent='center'
                spacing={0}
                className={classes.grid}
            >
                <Grid item xs={12}>
                    <Typography variant='h5' className={classes.header}>
                        Contact Me
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Contact />
                </Grid>
            </Grid> : <Grid
                container
                direction='row'
                alignContent='center'
                spacing={0}
                className={classes.grid}
            >
                    <Grid item xs={5} />
                    <Grid item xs={2}>
                        <Typography variant='h5' className={classes.header}>
                            Contact Me
                    </Typography>
                    </Grid>
                    <Grid item xs={5} />
                    <Grid item xs={12}>
                        <Contact />
                    </Grid>
                </Grid>}
        </div>
    )
}

export default ContactContainer