import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';

import { Box,Toolbar,TextField,Container,Input} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function Contact() {
  return (
    
    <div>
        <div className="home-background-video"></div>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/services" className='text-white mx-3 text-decoration-none' underline='none'>Services</a>
                    <a href="/contact" className='text-primary mx-3 text-decoration-none' underline='none'>Contact</a>
                    </Box>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Sign in<LoginIcon /></Button>
                </Toolbar>
    <div className=' py-5 mt-5 text-center'>
      <h3 className='display-3 text-light'>
        Contact Us
      </h3>
      <Grid container spacing={3} className='justify-content-around mt-3'>
        {/* Email Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-5 px-3 bg-dark text-light'>
            <CardContent>
              <EmailIcon fontSize="large" />
              <Typography variant="h6">Email</Typography>
              <Typography className="text-light" variant="body2" color="text.secondary">
                Send us an email for inquiries and support.
              </Typography>
            </CardContent>
            <Button variant="standard" color="primary">
              Send Email
            </Button>
          </Card>
        </Grid>

        {/* Social Media Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-5 px-3 bg-dark text-light'>
            <CardContent>
              <FacebookIcon fontSize="large" />
              <Typography variant="h6">Social Media</Typography>
              <Typography className="text-light"variant="body2" color="text.secondary">
                Connect with us on social media platforms.
              </Typography>
            </CardContent>
            <Button variant="standard" color="primary">
              Follow Us
            </Button>
          </Card>
        </Grid>

        {/* Phone Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-5 px-3 bg-dark text-light'>
            <CardContent>
              <PhoneIcon fontSize="large" />
              <Typography variant="h6">Phone</Typography>
              <Typography className="text-light" variant="body2" color="text.secondary">
                Call us for immediate assistance and inquiries.
              </Typography>
            </CardContent>
            <Button variant="standard" color="primary">
              Call Us
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default Contact;
