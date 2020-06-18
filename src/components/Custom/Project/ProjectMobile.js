import React, { useState, useEffect } from 'react'
import { useMediaPredicate } from "react-media-hook"

// Components
import Image from '../Utility/Image/Image'

// MUI
import { Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// images
import harmonyWeb from '../../../images/harmony-web.png'
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
    rootLast: {
        marginTop: '200px',
        marginBottom: '100px'
    },
    grid: {
        display: 'flex',
    },
    imagesContainer: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    image: {
        borderRadius: '3px',
        boxShadow: '0 0 10px 4px rgba(0, 0, 0, .18)',
        transform: 'translateX(7.5px)'
    },
    text: {
        margin: '10px 0',
        textAlign: 'center',
        flexGrow: 1,
    },
    textShrink: {
        flexGrow: 1,
        margin: '5px 0',
        textAlign: 'center',
    },
    buttons: {
        width: '100%',
        paddingTop: 40,
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.6)',
            backgroundColor: 'transparent',
        }
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.8)',
        fontSize: '1rem',
    },
}))

const Project = props => {
    const classes = useStyles(props)
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)")
    const smallerThan1450 = useMediaPredicate("(max-width: 1450px)")
    const biggerThan700 = useMediaPredicate("(min-width: 700px)")
    const { project, index, array } = props
    const { title, roles, summary, image } = project
    const [webImage, setWebImage] = useState(null)
    const [mobileImage, setMobileImage] = useState(null)

    // Component Did Mount
    useEffect(() => {
        switch (image) {
            case 'harmony':
                setWebImage(harmonyWeb)
                setMobileImage(tnsMobile)
                break
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
        // <div className={array != undefined && index === (array.length - 1) ? classes.rootLast : classes.root}>
        <div className={classes.root}>
            <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={12} className={classes.grid} style={{ marginBottom: '20px' }}>
                    {project.image && <div className={classes.imagesContainer}>
                        <img src={webImage} width="100%" height="auto" className={classes.image} />
                        <img src={mobileImage} width="20%" height="auto" className={classes.image} style={{
                            position: 'absolute',
                            bottom: -10,
                            left: -15
                        }} />
                    </div>}
                </Grid>
                {biggerThan1000 && smallerThan1450 ? <Grid item xs={12} style={{ padding: '0 100px' }}>
                    <div>
                        <Typography variant="h4" className={classes.text}>
                            {title}
                        </Typography>
                        <Typography variant="h6" className={classes.text} style={{ opacity: .6 }}>
                            {roles}
                        </Typography>
                        <Typography variant="body1" className={classes.text} style={{ textAlign: 'justify' }}>
                            {summary}
                        </Typography>
                        <div className={classes.buttons}>
                            {project.website && <Button className={classes.button} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                            {/* {project.video && <Button variant="contained">View Demo</Button>} */}
                        </div>
                    </div>
                </Grid> : biggerThan700 ? <Grid item xs={12}>
                    <div>
                        <Typography variant="h4" className={classes.text}>
                            {title}
                        </Typography>
                        <Typography variant="h6" className={classes.text} style={{ opacity: .6 }}>
                            {roles}
                        </Typography>
                        <Typography variant="body1" className={classes.text} style={{ textAlign: 'justify' }}>
                            {summary}
                        </Typography>
                        <div className={classes.buttons}>
                            {project.website && <Button className={classes.button} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                            {/* {project.video && <Button variant="contained">View Demo</Button>} */}
                        </div>
                    </div>
                </Grid> : <Grid item xs={12}>
                            <div>
                                <Typography variant="h5" className={classes.textShrink}>
                                    {title}
                                </Typography>
                                <Typography variant="body1" className={classes.textShrink} style={{ opacity: .6 }}>
                                    {roles}
                                </Typography>
                                <Typography variant="body2" className={classes.textShrink} style={{ textAlign: 'justify' }}>
                                    {summary}
                                </Typography>
                                <div className={classes.buttons}>
                                    {project.website && <Button className={classes.button} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                                    {/* {project.video && <Button variant="contained">View Demo</Button>} */}
                                </div>
                            </div>
                        </Grid>}

            </Grid>
        </div>
    )
}

export default Project
