import React, { useState, useEffect } from 'react'

// Components
import Bio from '../../components/Custom/Bio/Bio'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '50px'
    }
}))

const BioContainer = props => {
    const classes = useStyles(props)
    const [removeArrow, setRemoveArrow] = useState(false)

    const handleScroll = () => {
        if(window.pageYOffset > 20) {
            setRemoveArrow(true)
        } else {
            setRemoveArrow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div className={classes.root}>
            <Bio removeArrow={removeArrow} />
        </div>
    )
}

export default BioContainer