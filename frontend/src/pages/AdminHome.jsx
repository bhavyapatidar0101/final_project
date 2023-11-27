import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {CardMedia,CardActions,Modal,AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import CourseService from '../services/CourseService';
import EquipmentService from '../services/EquipmentService';
import PaymentService from '../services/PaymentService';
import './Home.css';
import FaceIcon from '@mui/icons-material/Face';
import { Face } from '@mui/icons-material';
import cardimage from './images/trainer-student.jpg';
import EmailIcon from '@mui/icons-material/Email';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ManIcon from '@mui/icons-material/Man';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function AdminHome(){
        const [admin,setAdmin] = useState({});
        const [totalUsers,setTotalUsers] = useState(0);
        const [totalMembers,setTotalMembers] = useState(0);
        const [totalTrainers,setTotalTrainers] = useState(0);
        const [totalCourses,setTotalCourses] = useState(0);
        const [totalEquipments,setTotalEquipments] = useState(0);
        const [totalPurchase,setTotalPurchase] = useState(0);
        let navigate = useNavigate();
        useEffect(()=>{
            if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isAdmin()){
                navigate("/");
            }
            UserService.details().then((response)=>{
                let resp = response;
                console.log(resp)
                setAdmin(resp);
            });

            UserService.getAll().then((resp)=>{
                    resp = resp.data;
                    setTotalUsers(resp.length);
                    let trainer = 0;
                    let member = 0;
                    resp.map((u)=>{
                        if (u.role == "TRAINER"){
                            trainer += 1;
                        }
                        if (u.role == "MEMBER"){
                            member += 1;
                        }
                    });

                    setTotalMembers(member);
                    setTotalTrainers(trainer);
            }).catch(e=>console.log(e));


            CourseService.getAll().then(resp=>{
                setTotalCourses(resp.data.length);
            }).catch(e=>console.log(e));


            EquipmentService.getAll().then(resp=>{
                setTotalEquipments(resp.data.length);
            }).catch(e=>console.log(e));

            PaymentService.getAll().then(resp=>{
                setTotalPurchase(resp.data.length);
            }).catch(e=>console.log(e));





        },[]);



   










    return (
        <div>
       
            <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/admin-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/admin-courses" className='text-white mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/admin-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/admin-users" className='text-white mx-3 text-decoration-none' underline='none'>Users</a>
                    <a href="/admin-payments" className='text-white mx-3 text-decoration-none' underline='none'>Payments</a>
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {admin?admin.first_name:"Admin"}!</span>
                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
            </Toolbar>




            <Grid container spacing={3} className='justify-content-around mt-3 text-center'>
        {/* Email Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <SupervisedUserCircleIcon fontSize='large' className='my-3'></SupervisedUserCircleIcon>
              <Typography variant="h6">USERS</Typography>
            
            </CardContent>
            <h6>{ totalUsers }</h6>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <SportsGymnasticsIcon className='my-3' fontSize="large" />
              <Typography variant="h6">TRAINERS</Typography>
      
            </CardContent>
            <h6>
              {totalTrainers}
            </h6>
          </Card>
        </Grid> <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <ManIcon className='my-3' fontSize="large" />
              <Typography variant="h6">MEMBERS</Typography>
      
            </CardContent>
            <h6>
                {totalMembers}
            </h6>
          </Card>
        </Grid>
      </Grid>
    

      <Grid container spacing={3} className='justify-content-around mt-3 text-center'>
        {/* Email Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <LibraryBooksIcon className='my-3' fontSize="large" />
              <Typography variant="h6">COURSES</Typography>
      
            </CardContent>
            <h6>
              {totalCourses}
            </h6>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <SportsCricketIcon className='my-3' fontSize="large" />
              <Typography variant="h6">EQUIPMENTS</Typography>
      
            </CardContent>
            <h6>
              {totalEquipments}
            </h6>
          </Card>
        </Grid> <Grid item xs={12} sm={6} md={3}>
          <Card className='py-3 px-3 bg-dark text-light'>
            <CardContent>
              <ShoppingCartCheckoutIcon className='my-3' fontSize="large" />
              <Typography variant="h6">PURCHASES</Typography>
      
            </CardContent>
            <h6>
                {totalPurchase}
            </h6>
          </Card>
        </Grid>
      </Grid>
    
        </div>
    );
}


export default AdminHome;