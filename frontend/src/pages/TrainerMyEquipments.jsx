import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cardimage from './images/i2.jpg';
import EquipmentService from '../services/EquipmentService';
import UserService from '../services/UserService';
import FaceIcon from '@mui/icons-material/Face';

function TrainerMyEquipments(){
    const [trainer,setTrainer] = useState("");
    const [eq , setEq] = useState([]);
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

            EquipmentService.assigned().then((r)=>{
                setEq(r.data);
                console.log(eq);
            });
        }

    },[]);




    return(
            <div className='bg-dark text-light'>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/trainer-home" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/trainer-my-courses" className='text-white mx-3 text-decoration-none' underline='none'>My Courses</a>
                    <a href="/trainer-my-students" className='text-white mx-3 text-decoration-none' underline='none'>My Students</a>
                    <a href="/trainer-my-equipments" className='text-info mx-3 text-decoration-none' underline='none'>My Equipments</a>
                    
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {trainer?trainer.first_name:"Trainer"}!</span>
                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
                </Toolbar>

                

                <span className="d-inline-block py-3 display-4 mx-5 mt-5 border-bottom border-light">
                    My Equipments
                </span>
            
                
                <div className="my-equipments py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                {eq.map((e)=>
                <Card className='mx-5' sx={{ maxWidth: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography className='text-uppercase' gutterBottom variant="h5" component="div">{e.name}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary">{e.description}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary"><b>Brand:</b> {e.brand}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary"><b>Course:</b> {e.course.name}</Typography>
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


export default TrainerMyEquipments;