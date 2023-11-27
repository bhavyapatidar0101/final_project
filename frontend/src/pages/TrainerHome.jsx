import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import FaceIcon from '@mui/icons-material/Face';
import cardimage from './images/trainer-student.jpg';
import CourseService from '../services/CourseService';
import EquipmentService from '../services/EquipmentService';

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ManIcon from '@mui/icons-material/Man';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function TrainerHome(){
    let navigate = useNavigate();
    let [trainer,setTrainer] = useState();
    let [mystudents,setMystudents]= useState(0);
    let [myequipments,setMyequipments] = useState(0);
    let [mycourses,setMycourses] = useState(0);
    useEffect(()=>{ 
        //authenticated check
        if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isTrainer()){
            navigate("/login");
        }
        else{
            UserService.details().then((response)=>{
                setTrainer(response.data);
            });
        }

        UserService.undertrainer().then(resp=>{
          setMystudents(resp.data.length);
        }).catch(e=>console.log(e));


        CourseService.assigned().then((resp)=>{
          setMycourses(resp.data.length);
        }).catch(e=>console.log(e));


        EquipmentService.assigned().then(resp=>{
          setMyequipments(resp.data.length);
        }).catch(e=>console.log(e));

    },[]);




    return(
            <div>

                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/trainer-home" className='text-info mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/trainer-my-courses" className='text-white mx-3 text-decoration-none' underline='none'>My Courses</a>
                    <a href="/trainer-my-students" className='text-white mx-3 text-decoration-none' underline='none'>My Students</a>
                    <a href="/trainer-my-equipments" className='text-white mx-3 text-decoration-none' underline='none'>My Equipments</a>
                    
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {trainer?trainer.first_name:"Trainer"}!</span>

                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
                </Toolbar>

               
                <Grid container spacing={3} className='justify-content-around text-center mt-5 py-5'>
        {/* Email Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <SupervisedUserCircleIcon fontSize='large' className='my-3'></SupervisedUserCircleIcon>
              <Typography variant="h6">STUDENTS</Typography>
              <h6>{mystudents}</h6>
            </CardContent>
            <h6>

            </h6>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <SportsGymnasticsIcon className='my-3' fontSize="large" />
              <Typography variant="h6">COURSES</Typography>
            <h6>{mycourses}</h6>
            </CardContent>
            <h6>
             
            </h6>
          </Card>
        </Grid> <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <ManIcon className='my-3' fontSize="large" />
              <Typography variant="h6">EQUIPMENTS</Typography>
              {myequipments}
            </CardContent>
            <h6>
                
            </h6>
          </Card>
        </Grid>
      </Grid>
      



            </div>
    );

}


export default TrainerHome;