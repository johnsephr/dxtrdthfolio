import React, { Fragment } from 'react'

// Components
import Project from '../../components/Custom/Project/Project'

// data
import work from '../../data/work.js'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    grid: {
        padding: 15
    },
    text: {
        flexGrow: 1,
        padding: 15
    }
}))

const WorkContainer = props => {
    const classes = useStyles(props)
    return (
        <div>
           {work.map((job, index, array) => {
               return <Project job={job} key={index} index={index} />
           })}
        </div>
    )
}

export default WorkContainer