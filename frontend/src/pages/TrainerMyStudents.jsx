import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import EquipmentService from '../services/EquipmentService';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cardimage from './images/i3.jpg';
import UserService from '../services/UserService';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
function TrainerMyStudents(){
    let [trainer,setTrainer] = useState("");
    let [students,setStudents] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{ 
        //authenticated check
        if(!AuthenticationService.isLoggedIn() && !AuthenticationService.isTrainer()){
            navigate("/");
        }
        else{
            UserService.details().then(response=>{
                setTrainer(response.data);
            });

            UserService.undertrainer().then((response)=>{
                    let resp = response.data;
                    console.log(response.data);
                    setStudents(response.data);
            });

          
        }

    },[]);

 



    return(
            <div className='bg-dark text-light'>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/trainer-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/trainer-my-courses" className='text-white mx-3 text-decoration-none' underline='none'>My Courses</a>
                    <a href="/trainer-my-students" className='text-info mx-3 text-decoration-none' underline='none'>My Students</a>
                    <a href="/trainer-my-equipments" className='text-white mx-3 text-decoration-none' underline='none'>My Equipments</a>
                    
                    </Box>
                    
                    <span className='text-light'>Welcome {trainer.first_name}!</span>
                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
                </Toolbar>

                <span className="d-inline-block py-3 display-4 mx-5 mt-5 border-bottom">
                    My Students
                </span>











                <div className="my-students py-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                {students.map((c)=>
                <Card className=' mx-5 my-3' sx={{width:"15%"}}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Student Image" />
                    <CardContent>
                    <Typography className='text-uppercase' gutterBottom variant="h5" component="div">{c.first_name + " " + c.last_name}</Typography>
                    <Typography className='my-1' variant="body2"><MailOutlineIcon/><br/> {c.email}</Typography>
                    <Typography className='my-1' variant="body2"><PhoneIcon/><br/>{c.phone}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">More Info</Button>
                    </CardActions>
                </Card>
)}
                </div>




            </div>
    );

}


export default TrainerMyStudents;