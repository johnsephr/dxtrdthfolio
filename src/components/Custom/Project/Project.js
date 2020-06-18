import React, { Fragment, useState, useEffect } from 'react'

// MUI
import { Typography, Grid, Button, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// React Modal
import ReactModal from 'react-modal'

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

// videos
import harmonyWebVideo from '../../../videos/harmony-web.mov'
import providerWebVideo from '../../../videos/provider-web.mp4'
import tnsCreateVideo from '../../../videos/tns-create.mp4'
import workMachinesVideo from '../../../videos/work-machines.mp4'


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
        // transform: 'translateY(7.5px)',
        width: '100%',
        height: '100%'
    },
    // webImage: {
    //     display: 'inline-block',
    //     height: '100%',
    //     width: '100%',
    //     borderRadius: '3px',
    //     boxShadow: '0 0 10px 4px rgba(0, 0, 0, .18)',
    //     background: 'transparent',
    //     overflow: 'hidden',
    //     transform: 'translateY(-5px)'
    // },
    // mobileImage: {
    //     position: 'absolute',
    //     height: 'auto',
    //     left: '-20px',
    //     bottom: '-10px',
    //     width: '20%',
    //     borderRadius: '3px',
    //     overflow: 'hidden',
    //     boxShadow: '0 0 10px 4px rgba(0, 0, 0, .18)',
    //     background: 'transparent'
    // },
    image: {
        borderRadius: '3px',
        boxShadow: '0 0 10px 4px rgba(0, 0, 0, .18)',
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
    },
    buttons: {
        width: '100%',
        paddingTop: 40,
    },
    buttonR: {
        marginRight: 20,
        '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.6)',
            backgroundColor: 'transparent',
        }
    },
    buttonL: {
        float: 'right',
        marginLeft: 20,
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
    modal: {
        position: 'absolute',
        margin: 'auto',
        height: 200,
        width: 500,
        backgroundColor: theme.palette.modal.background,
        color: theme.palette.modal.text,
        padding: 10,
        borderRadius: 5
    },
    video: {
        height: 180,
        width: 280
    }
}))

const Project = props => {
    const classes = useStyles(props)
    const { project, index } = props
    const { title, roles, summary, image } = project

    // media state
    const [video, setVideo] = useState(null)
    const [webImage, setWebImage] = useState(null)
    const [mobileImage, setMobileImage] = useState(null)

    // functional state
    const [modalOpen, setModalOpen] = useState(false)

    // Component Did Mount
    useEffect(() => {
        switch (image) {
            case 'harmony':
                setWebImage(harmonyWeb)
                setMobileImage(tnsMobile)
                setVideo(harmonyWebVideo)
                // setMobileImage(harmonyMobile)
                break
            case 'tns':
                setVideo(tnsCreateVideo)
                setWebImage(tnsWeb)
                setMobileImage(tnsMobile)
                break
            case 'work-machines':
                setVideo(workMachinesVideo)
                setWebImage(workMachinesWeb)
                setMobileImage(workMachinesMobile)
                break
            case 'press-customer-app':
                setWebImage(pressCustomerWeb)
                setMobileImage(pressCustomerMobile)
                break
            case 'press-provider-app':
                setVideo(providerWebVideo)
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

    // Open Modal
    const handleModalOpen = () => {
        setModalOpen(true)
    }

    // Close Modal
    const handleModalClose = () => {
        setModalOpen(false)
    }

    return (
        <div className={classes.root}>

            <ReactModal
                isOpen={modalOpen}
                shouldCloseOnEsc='true'
                shouldCloseOnOverlayClick='true'
                onRequestClose={() => setModalOpen(false)}
                style={{
                    overlay: {

                    }, content: {
                        display: 'flex'
                    }
                }}
            >
                <video autoplay>
                    <source
                        controls
                        src={video}
                        playsinline='true'
                        preload='auto'
                    />
                </video>
            </ReactModal>

            {index === 0 || index % 2 === 0 ?
                <Grid
                    container
                    direction='row'
                    alignContent='center'
                    spacing={1}
                    className={classes.grid}
                >

                    <Grid item xs={5} className={classes.grid} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {project.image && <div className={classes.imagesContainer} style={{ transform: 'translateX(15px)' }}>
                            {/* <div className={classes.webImage}> */}
                            {/* <Image src={webImage} height="100%" width="100%" /> */}
                            <img src={webImage} width="100%" height="auto" className={classes.image} />
                            {/* </div> */}
                            {/* <div className={classes.mobileImage}> */}
                            {/* <Image src={mobileImage} height="101%" width="30%" /> */}
                            <img src={mobileImage} width="20%" height="auto" className={classes.image} style={{
                                position: 'absolute',
                                bottom: -10,
                                left: -15
                            }} />
                            {/* </div> */}
                        </div>}
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <div style={{ maxWidth: '75%', marginleft: 'auto', transform: 'translateX(-15px)' }}>
                            <Typography variant="h4" className={classes.title}>
                                {title}
                            </Typography>
                            <Typography variant="h6" className={classes.roles}>
                                {roles}
                            </Typography>
                            <Typography variant="body1" className={classes.summary}>
                                {summary}
                            </Typography>
                            <div className={classes.buttons}>
                                {project.website && <Button className={classes.buttonR} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                                {project.video && <Button onClick={handleModalOpen} className={classes.buttonR} variant="outlined"><span className={classes.link}>View Demo</span></Button>}
                            </div>
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
                        <div style={{ maxWidth: '75%', transform: 'translateX(15px)' }}>
                            <Typography variant="h4" className={classes.title} style={{ textAlign: 'right' }}>
                                {title}
                            </Typography>
                            <Typography variant="h6" className={classes.roles} style={{ textAlign: 'right' }}>
                                {roles}
                            </Typography>
                            <Typography variant="body1" className={classes.summary} style={{ textAlign: 'right' }}>
                                {summary}
                            </Typography>
                            <div className={classes.buttons}>
                                {project.video && <Button onClick={handleModalOpen} className={classes.buttonL} variant="outlined"><span className={classes.link}>View Demo</span></Button>}
                                {project.website && <Button className={classes.buttonL} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={5} className={classes.grid} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        {project.image && <div className={classes.imagesContainer}>
                            {/* <div className={classes.webImage}> */}
                            {/* <Image src={webImage} height="auto" width="100%" /> */}
                            <img src={webImage} width="100%" height="auto" className={classes.image} />
                            {/* </div> */}
                            {/* <div className={classes.mobileImage}> */}
                            {/* <Image src={mobileImage} height="auto" width="30%" /> */}
                            <img src={mobileImage} width="20%" height="auto" className={classes.image} style={{
                                position: 'absolute',
                                bottom: -10,
                                left: -15
                            }} />
                            {/* </div> */}
                        </div>}
                    </Grid>
                </Grid>}
        </div>
    )
}

export default Project
