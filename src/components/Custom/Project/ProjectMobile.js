import React, { useState, useEffect } from 'react'
import { useMediaPredicate } from "react-media-hook"

// React Modal
import ReactModal from 'react-modal'

// MUI
import { Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// images
import harmonyMobile from '../../../images/harmony-mobile.png'
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
import harmonyWebVideo from '../../../videos/harmony-web.mp4'
import providerWebVideo from '../../../videos/provider-web.mp4'
import customerWebVideo from '../../../videos/customer-web.mp4'
import tnsCreateVideo from '../../../videos/tns-create.mp4'
import workMachinesVideo from '../../../videos/work-machines.mp4'

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
    buttonL: {
        '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.6)',
            backgroundColor: 'transparent',
        }
    },
    buttonR: {
        marginLeft: 10,
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

    // destructure
    const { project } = props
    const { title, roles, summary, image } = project

    // media queries
    // const biggerThan1500 = useMediaPredicate("(min-width: 1500px)")
    const smallerThan1450 = useMediaPredicate("(max-width: 1450px)")
    const biggerThan1300 = useMediaPredicate("(min-width: 1300px)")
    const biggerThan1200 = useMediaPredicate("(min-width: 1200px)")
    const biggerThan1050 = useMediaPredicate("(min-width: 1050px)")
    const biggerThan1000 = useMediaPredicate("(min-width: 1000px)")
    const biggerThan900 = useMediaPredicate("(min-width: 900px)")
    const biggerThan815 = useMediaPredicate("(min-width: 815px)")
    const biggerThan700 = useMediaPredicate("(min-width: 700px)")
    const biggerThan600 = useMediaPredicate("(min-width: 600px)")
    const biggerThan550 = useMediaPredicate("(min-width: 550px)")
    const biggerThan500 = useMediaPredicate("(min-width: 500px)")
    const biggerThan375 = useMediaPredicate("(min-width: 375px)")

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
                setMobileImage(harmonyMobile)
                setVideo(harmonyWebVideo)
                break
            case 'tns':
                setWebImage(tnsWeb)
                setMobileImage(tnsMobile)
                setVideo(tnsCreateVideo)
                break
            case 'work-machines':
                setWebImage(workMachinesWeb)
                setMobileImage(workMachinesMobile)
                setVideo(workMachinesVideo)
                break
            case 'press-customer-app':
                setWebImage(pressCustomerWeb)
                setMobileImage(pressCustomerMobile)
                setVideo(customerWebVideo)
                break
            case 'press-provider-app':
                setWebImage(pressProviderWeb)
                setMobileImage(pressProviderMobile)
                setVideo(providerWebVideo)
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
                break
            default:
                // console.log('couldn\'t find an image')
                break
        }
    }, [image])

    // Open Modal
    const handleModalOpen = () => {
        setModalOpen(true)
    }

    return (
        // <div className={array != undefined && index === (array.length - 1) ? classes.rootLast : classes.root}>
        <div className={classes.root}>

            <ReactModal
                isOpen={modalOpen}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setModalOpen(false)}
                style={{
                    overlay: {
                        display: 'flex',
                        justifyContent: 'center',
                    }, content: {
                        // maxWidth: 1000,
                        right: 'unset',
                        bottom: 'unset',
                        overflow: 'hidden',
                        maxHeight: 839,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >
                <video
                    autoPlay
                    height={biggerThan1300 ? '680px'
                        : biggerThan1200 ? '600px'
                            : biggerThan1050 ? '550px'
                                : biggerThan1000 ? '520px'
                                    : biggerThan900 ? '465px'
                                        : biggerThan815 ? '420px'
                                            : biggerThan700 ? '350px'
                                                : biggerThan600 ? '300px'
                                                    : biggerThan550 ? '270px'
                                                        : biggerThan500 ? '240px'
                                                            : biggerThan375 ? '180px' : '200px'
                    }
                >
                    <source
                        controls
                        src={video}
                        playsinline='true'
                        preload='auto'
                    />
                </video>
            </ReactModal>

            <Grid
                container
                direction='row'
                alignContent='center'
                spacing={1}
                className={classes.grid}
            >
                <Grid item xs={12} className={classes.grid} style={{ marginBottom: '20px' }}>
                    {project.image && <div className={classes.imagesContainer}>
                        <img src={webImage} width="100%" height="auto" alt="" className={classes.image} />
                        <img src={mobileImage} width="20%" height="auto" alt="" className={classes.image} style={{
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
                            {project.website && <Button className={classes.buttonL} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                            {project.video && <Button onClick={handleModalOpen} className={classes.buttonR} variant="outlined"><span className={classes.link}>View Demo</span></Button>}
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
                            {project.website && <Button className={classes.buttonL} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                            {project.video && <Button onClick={handleModalOpen} className={classes.buttonR} variant="outlined"><span className={classes.link}>View Demo</span></Button>}
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
                                    {project.website && <Button className={classes.buttonL} variant="outlined"><a className={classes.link} href={project.website}>View Website</a></Button>}
                                    {project.video && <Button onClick={handleModalOpen} className={classes.buttonR} variant="outlined"><span className={classes.link}>View Demo</span></Button>}
                                </div>
                            </div>
                        </Grid>}

            </Grid>
        </div>
    )
}

export default Project
