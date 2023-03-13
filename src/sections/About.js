import React from 'react';
import '../styles/About.css';
import { Box, Container } from '@mui/system';
import { Grid } from '@mui/material';
import profile from '../images/picture.jpg';

const About = () => {
    return(
        <Box sx={{width: '100vw'}}>
            <Container>
                <h1>About Me</h1>
                <Grid container>
                    <Grid item container xs={12} md={6}>
                        <Grid item xs={12}>
                            <p>Who am I</p>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={profile} className='profilePicture'/>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Hi</p>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={6}>
                        <Grid item xs={12}>
                            <p>Some of the main technologies I've worked with</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-html5-plain colored iconStyle"></i>
                            <p>HTML5</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-css3-plain colored iconStyle"></i>
                            <p>CSS3</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-bootstrap-plain colored iconStyle"></i>
                            <p>Bootstrap</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-javascript-plain colored iconStyle"></i>
                            <p>Javascript</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-react-original colored iconStyle"></i>
                            <p>React.JS</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-redux-original colored iconStyle"></i>
                            <p>Redux</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-express-original colored iconStyle"></i>
                            <p>Express.JS</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-firebase-plain colored iconStyle"></i>
                            <p>Firebase</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <i class="devicon-mysql-plain colored iconStyle"></i>
                            <p>MySQL</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


export default About;