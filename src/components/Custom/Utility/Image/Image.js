import React, { Fragment } from 'react'

// MUI
// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    text: {
        flexGrow: 1
    }
}))

const Image = props => {
    const classes = useStyles(props)
    const {mode, src, height, width, style, ...propz} = props

    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    }

    let size = modes[mode] || 'contain'

    let defaults = {
      height: height || 100,
      width: width || 100,
      backgroundColor: 'gray'
    }

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }

    return (
        <Fragment>
           <div {...propz} style={{...defaults, ...style, ...important}} />
        </Fragment>
    )
}

export default Image
