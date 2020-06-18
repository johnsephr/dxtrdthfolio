import React, { useState } from 'react'

// MUI
import { Modal, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {
        height: 'auto'
    },
    modal: {
        position: 'absolute',
        margin: 'auto',
        height: 200,
        width: 300,
        backgroundColor: theme.palette.modal.background,
        color: theme.palette.modal.text,
        padding: 10,
        borderRadius: 5
    }
  }))

const ButtonModal = props => {
    const classes = useStyles(props)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div onClick={handleOpen}>
            <Modal
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                {props.children}
            </Modal>
        </div>
    )
}

export default ButtonModal