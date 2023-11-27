import React from 'react';
import './Home.css';
import LoginIcon from '@mui/icons-material/Login';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import EquipmentService from '../services/EquipmentService';
import { useEffect } from 'react';
function Home(){





    return (

        <div>
            <div className="home-background-video"></div>

            
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/services" className='text-white mx-3 text-decoration-none' underline='none'>Services</a>
                    <a href="/contact" className='text-white mx-3 text-decoration-none' underline='none'>Contact</a>
                    </Box>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Sign in<LoginIcon /></Button>
                </Toolbar>
         

            <div className="home-middle-content text-white d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>

                <div className="display-1 py-1" style={{letterSpacing:"5px"}}>FITNESS AWAITS</div>
                <h4 className='mt-3'>What are you waiting for?</h4>
                <div className="home-middle-content-buttons d-flex flex-row my-5 justify-content-between">
                    <Button href='/join' variant='outlined' className='text-white mx-3 border border-white'>Join Us</Button>
                    <Button href='#home-cards' variant='outlined' className='text-white mx-3 border border-white'>Know More</Button>
                </div>

            </div>

    <div className='mt-1 py-3' id='home-cards' style={{height:"100vh"}}>
      <Typography variant="h4" className='text-center display-3 mt-5'>
        Know us
      </Typography>
      <Grid container spacing={7} className='mt-1 py-3'>
        {/* First Row */}
        <Grid item xs={4}>
        <Card className='mx-3 py-5 box-shadow'>
            <CardContent>
              <Typography variant="h5" component="div">
              Opportunity
              </Typography>
              <Typography variant="body2" >
              Explore exciting opportunities to enhance your skills and
                passion for sports.
              </Typography>
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className='mx-3 py-5'>
            <CardContent>
              <Typography variant="h5" component="div">
                Teamwork
              </Typography>
              <Typography variant="body2" >
                Discover the power of teamwork and collaboration in achieving
                success on and off the field.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className='mx-3 py-5'>
            <CardContent>
              <Typography variant="h5" component="div">
              Courses
              </Typography>
              <Typography variant="body2" >
              Enroll in courses designed to improve your performance and
                knowledge in various sports disciplines.
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>

        {/* Second Row */}
        <Grid item xs={4}>
        <Card className='mx-3 py-5'>
            <CardContent>
              <Typography variant="h5" component="div">
              Trainers
              </Typography>
              <Typography variant="body2" >
              Meet our experienced and skilled trainers who are dedicated to
                helping you achieve your fitness goals.
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className='mx-3 py-5'>
            <CardContent>
              <Typography variant="h5" component="div">
              Discipline
              </Typography>
              <Typography variant="body2" >
              Learn the importance of discipline in sports and how it can
                positively impact your performance.
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className='mx-3 py-5'>
            <CardContent>
              <Typography variant="h5" component="div">
              Events
              </Typography>
              <Typography variant="body2" >
              Stay updated on upcoming events and competitions.
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>
      </Grid>
    </div>
            

        </div>
    );
}

export default Home;