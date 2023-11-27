import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import CourseService from '../services/CourseService';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cardimage from './images/i2.jpg';
import EquipmentService from '../services/EquipmentService';
import FaceIcon from '@mui/icons-material/Face';


function MemberEquipments(){
    let navigate = useNavigate();
    const [member,setMember] = useState();
    const [memberEquipments,setMemberEquipments] = useState([]);
    const [notMemberEquipments,setNotMemberEquipments] = useState([]);
    useEffect(()=>{
        if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isMember()){
            navigate("/");
        }
        UserService.details().then((response)=>{
            let resp = response;
            console.log(resp)
            setMember(resp.data);
        });

        EquipmentService.purchased().then((response)=>{
            let resp = response;
            console.log(response);
            setMemberEquipments(resp.data);
        });
        EquipmentService.notpurchased().then((response)=>{
            let resp = response;
            console.log(response);
            setNotMemberEquipments(resp.data);
        });


    },[]);
    return (<div className='bg-dark text-light'>


                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/member-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/member-courses" className='text-white mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/member-equipments" className='text-info mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/member-trainers" className='text-white mx-3 text-decoration-none' underline='none'>Trainers</a>
                    
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {member?member.first_name:"Member"}!</span>

                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
                 </Toolbar>
                 

                <span className="d-inline-block py-3  display-4 mx-5 mt-5 border-bottom border-light">
                    My Equipments
                </span>

                <div className="my-students py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                
                {memberEquipments.map((c)=>
                <Card className='mx-5 text-dark' sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography className='text-uppercase' gutterBottom variant="h5" component="div">{c.name}</Typography>
                    <Typography className='my-1' variant="body2">{c.description}Rs</Typography>
                    <Typography className='my-1' variant="body2">BRAND : {c.brand}</Typography>
                    <Typography className='my-1' variant="body2">STATUS : {c.status}</Typography>
                    
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
                )}
                </div>








                <span className="d-inline-block py-3 display-4 mx-5 mt-5 border-bottom border-light">
                    Explore
                </span>


                <div className="my-students py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                
                {notMemberEquipments.map((c)=>
                <Card className="mx-5" sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography className='text-uppercase' gutterBottom variant="h5" component="div">{c.name}</Typography>
                    <Typography className='my-1' variant="body2">{c.description}Rs</Typography>
                    <Typography className='my-1' variant="body2">BRAND : {c.brand}</Typography>
                    <Typography className='my-1' variant="body2">STATUS : {c.status}</Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
                )}
                </div>



    </div>);
}
export default MemberEquipments;