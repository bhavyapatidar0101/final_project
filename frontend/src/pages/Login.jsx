import React, { useEffect } from 'react';
import { Box,Typography,Toolbar,Button,TextField,Container,Input} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AuthenticationService from '../services/AuthenticationService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ValidationService from '../services/ValidationService';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const [error,setError] = useState("");
    

    function checkEmail(e){
        setEmail(e);
        if(!ValidationService.validateEmail(email)){
            setError(<span className='text-danger'><ClearIcon/> Invalid E-mail</span>);
        }
        else{
            setError(<span className='text-success'><DoneIcon/> Valid E-mail</span>);
        }

    }

 



    async function login(){
        if(!ValidationService.validateEmail(email)){
            setError("Invalid Email");
            return;
        }
     
        const DATA = {
            "email" : email,
            "password": password
        }

        let response = await AuthenticationService.login(DATA);
        console.log(response);
        if(AuthenticationService.isAdmin()){
            navigate("/admin-home");
        }
        else if(AuthenticationService.isTrainer()){
            navigate("/trainer-home");
        }
        else if(AuthenticationService.isMember()){
            navigate("/member-home");
        }
        else{
            navigate("/logout");
        }



    }

    useEffect(()=>{
        if (AuthenticationService.isLoggedIn()){
            console.log("Already logged In");
            if(AuthenticationService.isMember()){
                navigate("/member-home");
            }
            else if(AuthenticationService.isTrainer()){
                navigate("/trainer-home");
            }
            else if(AuthenticationService.isAdmin()){
                navigate("/admin-home");
            }
        }
        else{
            AuthenticationService.logout();
            
        }


    });








        return(
            <div>
                <div className="home-background-video"></div>
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/services" className='text-white mx-3 text-decoration-none' underline='none'>Services</a>
                    <a href="/contact" className='text-white mx-3 text-decoration-none' underline='none'>Contact</a>
                    </Box>
                </Toolbar>
           


            
                    <Container maxWidth="sm" className='d-flex flex-column justify-content-around py-5 border border-dark rounded' style={{marginTop:"5%",backgroundColor:"rgba(0,0,0,0.5)"}}>
                        
                        <h3 className='display-5 text-light my-3'>Login</h3>
                        <TextField onChange={(e)=>{checkEmail(e.target.value)}} className='my-3 text-light border-light' size='small' variant='filled' required label="email" type='email' name='email' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{setPassword(e.target.value)}} className='my-3 text-light' size='small' variant='filled' required label="password" type='password' name='password' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <span>{error}</span>
                        <Button onClick={login} className='my-3 text-light' variant='standard'>Sign In</Button>
                    </Container>
            </div>
        );
}

export default Login;