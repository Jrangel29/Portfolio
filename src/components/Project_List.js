import React from 'react';
import '../styles/Projects.css';
import { Box, Container } from '@mui/system';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import img_asomar from '../images/projects/project1_2.jpg'

const Project_List = () => {
    return(
        <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12} sm={6} md={4} lg={3} className='gridCard'>
                <Card className='cardAlignment'>
                    <CardMedia
                        component='img'
                        alt='project1'
                        height='150'
                        image={img_asomar}
                    />
                    <CardContent className='cardContentAlignment'>
                        <Typography gutterBottom variant='h5' component='div'>
                            A somar
                        </Typography>
                        <Typography gutterBottom variant='body2' color='text.secondary'>
                            This project was developed with the goal of promoting sustainability by allowing users to share rides to nature-friendly related events.
                        </Typography>
                    </CardContent>
                    <CardActions className='buttonBottom'>
                        <Button size='small'>See more</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className='gridCard'>
                <Card className='cardAlignment'>
                    <CardMedia
                        component='img'
                        alt='project1'
                        height='150'
                        image={img_asomar}
                    />
                    <CardContent className='cardContentAlignment'>
                        <Typography gutterBottom variant='h5' component='div'>
                            Hinamic
                        </Typography>
                        <Typography gutterBottom variant='body2' color='text.secondary'>
                            This was a platform created to give creative individuals a place to share their projects and availability to work, as well as allow companies to share jobs offers.
                        </Typography>
                    </CardContent>
                    <CardActions className='buttonBottom'>
                        <Button size='small'>See more</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className='gridCard'>
                <Card className='cardAlignment'>
                    <CardMedia
                        component='img'
                        alt='project1'
                        height='150'
                        image={img_asomar}
                    />
                    <CardContent className='cardContentAlignment'>
                        <Typography gutterBottom variant='h5' component='div'>
                            Remap
                        </Typography>
                        <Typography gutterBottom variant='body2' color='text.secondary'>
                            This app was created to allow users to map abandonned buildings and share ideas on how they could be rehabilitated.
                        </Typography>
                    </CardContent>
                    <CardActions className='buttonBottom'>
                        <Button size='small'>See more</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} className='gridCard'>
                <Card className='cardAlignment'>
                    <CardMedia
                        component='img'
                        alt='project1'
                        height='150'
                        image={img_asomar}
                    />
                    <CardContent className='cardContentAlignment'>
                        <Typography gutterBottom variant='h5' component='div'>
                            OverTV
                        </Typography>
                        <Typography gutterBottom variant='body2' color='text.secondary'>
                            A back-office platform focused on the creation and schedule of notifications to be sent to the TV ecosystem.
                        </Typography>
                    </CardContent>
                    <CardActions className='buttonBottom'>
                        <Button size='small'>See more</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}


export default Project_List;