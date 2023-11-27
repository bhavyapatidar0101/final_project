import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import CourseService from '../services/CourseService';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import cardimage from './images/trainer-student.jpg';
import StripeCheckout from 'react-stripe-checkout';
import PaymentService from '../services/PaymentService';
import FaceIcon from '@mui/icons-material/Face';

function MemberPurchase(){
    const [member,setMember] = useState();
    let navigate = useNavigate();
    let {course_id} = useParams();
    const [course,setCourse] = useState({});
    let onPurchase = (token) => {
        const DATA = {
            "course_id":{'id':course.id},
            "price":course.price,
            "purchase_date": Date.now(),
        }
        console.log(DATA);
        PaymentService.add(DATA).then((response)=>{
                console.log(response);
                navigate("/member-courses")
        });


    }
    useEffect(()=>{
        if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isMember()){
            navigate("/");
        }
        UserService.details().then((response)=>{
            let resp = response;
            console.log(resp)
            setMember(resp);
        });

        CourseService.getNotByMember().then((response)=>{
            response.forEach(element => {
                if(element.id == course_id){
                    setCourse(element);
                    
                }
            });
        });



    },[]);


    return(<div className='bg-dark text-light'>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/member-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/member-courses" className='text-primary mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/member-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/member-trainers" className='text-white mx-3 text-decoration-none' underline='none'>Trainers</a>
                    
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {member?member.first_name:"Member"}!</span>

                    <Button size='small' href="/login" className="text-white" underline='none'><LogoutIcon /></Button>
                 </Toolbar>

                 <span className="d-inline-block py-3 display-4 mx-5 mt-5 border-bottom border-light">
                    Buy Course
                </span>



                <div className="my-students mx-5 py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                
                
                <Card sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{course.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{course.description}</Typography>
                    <Typography variant="body2" color="text.secondary">Duration: {course.duration}</Typography>
                    <Typography variant="body2" color="text.secondary">Price: {course.price}Rs</Typography>
                    </CardContent>
                    <CardActions>
                    <StripeCheckout
        token={onPurchase}
        stripeKey="pk_test_51MkrdQSB8pStGpyCIFVaYZpPCGue0YtRnt0HXXhEQxSpE6vCgvYCNsdi96B8SiieyUiwrra6Ww1bAf7AQgJH7qB600lqOQ4ZXT">
            <Button>Pay now</Button>
        </StripeCheckout>
                    </CardActions>
                </Card>
          
                </div>
    </div>);
}


export default MemberPurchase;