import React from 'react'

// MUI
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        position: 'static',
        top: 0,
        left: 0,
        right: 0,
        bottom:0,
        background: 'rgba(0, 0, 0, .4)'
    },
    container: {
        background: '#FEFEFE',
        borderRadius: 5,
        width: '80%',
        height: '20px'
    }
}))

export default function VideoModal(props) {
    const classes = useStyles(props)
    const { url, handleModalClose } = props
    return (
        <div className={classes.root} onClick={handleModalClose}>
            <div className={classes.container}></div>
            <video autoplay>
                <source src={url} type="video/mp4" />
            </video>
        </div>
    )
}
