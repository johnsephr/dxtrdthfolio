import React, { Fragment, useState, useEffect } from 'react'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// images
import tnsWeb from '../../../images/tns-web.png'
import tnsMobile from '../../../images/tns-mobile.png'
import workMachinesWeb from '../../../images/work-machines-web.png'
import workMachinesMobile from '../../../images/work-machines-mobile.png'
import pressCustomerWeb from '../../../images/press-customer-web.png'
import pressCustomerMobile from '../../../images/press-customer-mobile.png'
import pressProviderWeb from '../../../images/press-provider-web.png'
import pressProviderMobile from '../../../images/press-provider-mobile.png'
import rhcConsultingWeb from '../../../images/rhc-consulting-web.png'
import rhcConsultingMobile from '../../../images/rhc-consulting-mobile.png'
import calculatorWeb from '../../../images/calc-web.png'
import calculatorMobile from '../../../images/calc-mobile.png'
import awesomeJobsWeb from '../../../images/awesome-jobs-web.png'
import awesomeJobsMobile from '../../../images/awesome-jobs-mobile.png'
import ecommerceWeb from '../../../images/ecommerce-web.png'
import ecommerceMobile from '../../../images/ecommerce-mobile.png'


// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        margin: '200px 0'
    },
    text: {
        flexGrow: 1
    },
    grid: {
        display: 'flex',
        // justifyContent: 'center'
    },
    imagesContainer: {
        display: 'inline-block',
        position: 'relative',
        transform: 'translateY(7.5px)'
    },
    webImage: {
        display: 'inline-block',
        height: '375px',
        width: 'auto',
        borderRadius: '3px',
        boxShadow: '0 0 10px 4px rgba(0, 0, 0, .18)',
        background: 'transparent',
        overflow: 'hidden',
        transform: 'translateY(-5px)'
    },
    mobileImage: {
        position: 'absolute',
        height: '250px',
        left: '-20px',
        bottom: '-10px',
        width: 'auto',
        borderRadius: '3px',
        overflow: 'hidden',
        boxShadow: '0 0 10px 4px rgba(0, 0, 0, .18)',
        background: 'transparent'
    },
    // gradient: {
    //     position: 'absolute',
    //     zIndex: 999,
    //     height: 30,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     borderBottom: '1px solid #f9f9f9'
    //     background: 'radial-gradient(60% 25px at 50% bottom, rgba(0, 0, 0, .12), rgba(0, 0, 0, .08) 50%, rgba(0, 0, 0, .07) 60%, rgba(0, 0, 0, .06) 70%, rgba(0, 0, 0, .03) 75%, rgba(0, 0, 0, .01) 80%, rgba(0, 0, 0, .005) 85%, rgba(0, 0, 0, .0025) 90%, transparent)'
    // },
    title: {
        margin: '5px 0'
    },
    roles: {
        margin: '5px 0',
        opacity: .6
    },
    summary: {
        margin: '5px 0'
    }
}))

const Project = props => {
    const classes = useStyles(props)
    const { project, index } = props
    const { title, roles, summary, image } = project
    const [webImage, setWebImage] = useState(null)
    const [mobileImage, setMobileImage] = useState(null)

    // Component Did Mount
    useEffect(() => {
        switch (image) {
            // case 'harmony':
            //     setWebImage(harmonyWeb)
            //     setMobileImage(harmonyMobile)
            //     break
            case 'tns':
                setWebImage(tnsWeb)
                setMobileImage(tnsMobile)
                break
            case 'work-machines':
                setWebImage(workMachinesWeb)
                setMobileImage(workMachinesMobile)
                break
            case 'press-customer-app':
                setWebImage(pressCustomerWeb)
                setMobileImage(pressCustomerMobile)
                break
            case 'press-provider-app':
                setWebImage(pressProviderWeb)
                setMobileImage(pressProviderMobile)
                break
            case 'rhc-consulting':
                setWebImage(rhcConsultingWeb)
                setMobileImage(rhcConsultingMobile)
                break
            case 'calculator':
                setWebImage(calculatorWeb)
                setMobileImage(calculatorMobile)
                break
            case 'awesome-jobs':
                setWebImage(awesomeJobsWeb)
                setMobileImage(awesomeJobsMobile)
                break
            case 'ecommerce':
                setWebImage(ecommerceWeb)
                setMobileImage(ecommerceMobile)
            default:
                console.log('couldn\'t find an image')
        }
    }, [])

    return (
        <div className={classes.root}>
            {index === 0 || index % 2 === 0 ?
                <Grid
                    container
                    direction='row'
                    alignContent='center'
                    spacing={1}
                    className={classes.grid}
                >
                    <Grid item xs={5} className={classes.grid} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {project.image && <div className={classes.imagesContainer}>
                            <div className={classes.webImage}>
                                <img src={webImage} width="auto" height="375px" />
                            </div>
                            <div className={classes.mobileImage}>
                                <img src={mobileImage} width="auto" height="250px" />
                            </div>
                        </div>}
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <div style={{ maxWidth: '75%', marginleft: 'auto' }}>
                            <Typography variant="h4" className={classes.title}>
                                {title}
                            </Typography>
                            <Typography variant="h6" className={classes.roles}>
                                {roles}
                            </Typography>
                            <Typography variant="body1" className={classes.summary}>
                                {summary}
                            </Typography>
                        </div>
                    </Grid>
                </Grid> : <Grid
                    container
                    direction='row'
                    alignContent='center'
                    spacing={1}
                    className={classes.grid}
                >
                    <Grid item xs={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <div style={{ maxWidth: '75%' }}>
                            <Typography variant="h4" className={classes.title} style={{ textAlign: 'right' }}>
                                {title}
                            </Typography>
                            <Typography variant="h6" className={classes.roles} style={{ textAlign: 'right' }}>
                                {roles}
                            </Typography>
                            <Typography variant="body1" className={classes.summary} style={{ textAlign: 'right' }}>
                                {summary}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={5} className={classes.grid} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        {project.image && <div className={classes.imagesContainer}>
                            <div className={classes.webImage}>
                                <img src={webImage} width="auto" height="375px" />
                            </div>
                            <div className={classes.mobileImage}>
                                <img src={mobileImage} width="auto" height="250px" />
                            </div>
                        </div>}
                    </Grid>
                </Grid>}
        </div>
    )
}

export default Project
