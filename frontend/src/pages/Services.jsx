import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';

import { Box,Toolbar,TextField,Container,Input} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function Services() {
  return (
    
    <div>
        <div className="home-background-video"></div>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/services" className='text-primary mx-3 text-decoration-none' underline='none'>Services</a>
                    <a href="/contact" className='text-light mx-3 text-decoration-none' underline='none'>Contact</a>
                    </Box>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Sign in<LoginIcon /></Button>
                </Toolbar>
   
                <div className='' id='home-cards' style={{height:"70%"}}>
      <Typography variant="h4" className='text-center display-3 mt-5 text-light'>
        Services
      </Typography>
      <Grid container spacing={7} className=' py-3'>
        {/* First Row */}
        <Grid item xs={4}>
        <Card className='mx-3 py-5 bg-dark text-light box-shadow'>
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
        <Card className='mx-3 py-5 bg-dark text-light'>
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
        <Card className='mx-3 py-5 bg-dark text-light'>
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
        <Card className='mx-3 py-5 bg-dark text-light'>
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
        <Card className='mx-3 py-5 bg-dark text-light'>
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
        <Card className='mx-3 py-5 bg-dark text-light'>
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
};

export default Services;
