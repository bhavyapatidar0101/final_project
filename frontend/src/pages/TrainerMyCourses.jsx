import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cardimage from './images/i1.jpg';
import CourseService from '../services/CourseService';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
function TrainerMyCourses(){
    let [trainer,setTrainer] = useState("");
    let [course , setCourse] = useState([]);
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

            CourseService.assigned().then(response=>{
                setCourse(response.data);
            });
        }

    },[]);




    return(
            <div className='bg-dark text-light'>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/trainer-home" className='text-light mx-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/trainer-my-courses" className='text-info mx-3 text-decoration-none' underline='none'>My Courses</a>
                    <a href="/trainer-my-students" className='text-light mx-3 text-decoration-none' underline='none'>My Students</a>
                    <a href="/trainer-my-equipments" className='text-white mx-3 text-decoration-none' underline='none'>My Equipments</a>
                    
                    </Box>
                    <span className='text-light'>Welcome {trainer.first_name}!</span>
                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
                </Toolbar>

                <span className="d-inline-block py-3 display-4 mx-5 mt-5 border-bottom border-light">
                    My Courses
                </span>











                <div className="my-students my-5 py-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%" height="100%">
                
                {course.map((c)=>
                <Card className='mx-5' sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography className='text-uppercase font-weight-bold' gutterBottom variant="h5" component="div">{c.name}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary">{c.description}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary">Duration: {c.duration}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary">Price: {c.price}Rs</Typography>
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


export default TrainerMyCourses;