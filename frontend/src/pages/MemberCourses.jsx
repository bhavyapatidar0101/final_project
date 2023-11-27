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
import cardimage from './images/i1.jpg';
import FaceIcon from '@mui/icons-material/Face';
import PaymentService from '../services/PaymentService';
import StripeCheckout from 'react-stripe-checkout';
function MemberCourses(){

    let navigate = useNavigate();
    const [purchasedCourses,setPurchasedCourses] = useState([]);
    const [notPurchasedCourses,setNotPurchasedCourses] = useState([]);
    const [member,setMember] = useState();
    useEffect(()=>{
        if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isMember()){
            navigate("/");
        }
        UserService.details().then((response)=>{
            let resp = response;
            console.log(resp)
            setMember(resp.data);
        });

        CourseService.purchased().then((response)=>{
            setPurchasedCourses(response.data);
        }).catch(e=>console.log(e));
        CourseService.notpurchased().then((response)=>{
            setNotPurchasedCourses(response.data);
        }).catch(e=>console.log(e));

    },[]);

    let onPurchase = (token,c_id) => {
        const DATA = {
            'course_id':c_id,
            'member_id':member.id,
            'date':new Date().toISOString().slice(0, 10),
            'transaction':'xxxxxxxxxxx'
        }
        PaymentService.add(DATA).then((r)=>{
                navigate("/member-courses");
        }).catch((e)=>{
            alert(e);
        });
    }

        return (
            <div className='bg-dark text-light'>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/member-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                    <a href="/member-courses" className='text-info mx-3 text-decoration-none' underline='none'>Courses</a>
                    <a href="/member-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                    <a href="/member-trainers" className='text-white mx-3 text-decoration-none' underline='none'>Trainers</a>
                    
                    </Box>
                    <span className='text-light'><FaceIcon/> Welcome {member?member.first_name:"Member"}!</span>
                    <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
                 </Toolbar>
              
                 <span className="d-inline-block py-3  display-4 mx-5 mt-5 border-bottom border-light">
                    My Courses
                </span>

                <div className="my-students py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                
                {purchasedCourses.map((c)=>
                <Card className='mx-5 text-dark' sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography className='text-uppercase font-weight-bold' gutterBottom variant="h5" component="div">{c.name}</Typography>
                    <Typography className='my-1' variant="body2">{c.description}</Typography>
                    <Typography className='my-1' variant="body2">Duration: {c.duration}</Typography>
                    <Typography className="my-1" variant="body2">Price: {c.price}Rs</Typography>
                    </CardContent>
                    <CardActions>
                    <Typography className='px-1 text-success'>PURCHASED</Typography>
                    </CardActions>
                </Card>
                )}
                </div>








                <span className="d-inline-block py-3 display-4 mx-5 mt-5 border-bottom border-light">
                    Explore
                </span>


                <div className="my-students py-5 mt-5 my-5 d-flex flex-row align-items-center justify-content-start flex-wrap" width="100%">
                
                {notPurchasedCourses.map((c)=>
                <Card className="mx-5" sx={{ width: "15%" }}>
                    <CardMedia component="img" height="140" image={cardimage} alt="Course Image" />
                    <CardContent>
                    <Typography className='my-1 text-uppercase font-weight-bold' gutterBottom variant="h5" component="div">{c.name}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary">{c.description}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary">Duration: {c.duration}</Typography>
                    <Typography className='my-1' variant="body2" color="text.secondary">Price: {c.price}Rs</Typography>
                    </CardContent>
                    <CardActions>
                    <StripeCheckout
        token={(token)=>onPurchase(token,c.id)}
        stripeKey="pk_test_51MkrdQSB8pStGpyCIFVaYZpPCGue0YtRnt0HXXhEQxSpE6vCgvYCNsdi96B8SiieyUiwrra6Ww1bAf7AQgJH7qB600lqOQ4ZXT">
            <Button>Buy Now</Button>
        </StripeCheckout>
                    </CardActions>
                </Card>
                )}
                </div>




            </div>
        );
}

export default MemberCourses;