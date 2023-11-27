import React, { useEffect } from 'react';
import './Home.css';
import LoginIcon from '@mui/icons-material/Login';
import {AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent,TextField,Container,FormControl,Radio,FormControlLabel,FormLabel,RadioGroup} from '@mui/material';
import AuthenticationService from '../services/AuthenticationService';
import { useState } from 'react';
import ValidationService from '../services/ValidationService';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
function Join(){

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [error,setError] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");

    function checkFirstname(v){
        setFirstname(v);
        if(v.length<1){
            setError(<span className='text-danger'><ClearIcon/> Invalid First Name</span>);
            return false;
        }
        else{
            setError(<span className='text-success'><DoneIcon/> Valid First name</span>);
            return true;
        }

    }

    function checkLastname(v){
        setLastname(v);
        if(v.length<1){
            setError(<span className='text-danger'><ClearIcon/> Invalid Last Name</span>);
            return false;

        }
        else{
            setError(<span className='text-success'><DoneIcon/> Valid Last name</span>)
            return true;
        }
    }
    function checkEmail(v){
        setEmail(v);
        if (!ValidationService.validateEmail(v)){
            setError(<span className='text-danger'><ClearIcon/> Invalid E-mail</span>);
            return false;

        }
        else{
            setError(<span className='text-success'><DoneIcon/> Valid E-mail</span>)
            return true;
        }
    }
    function checkPhone(v){
        setPhone(v);
        if (!ValidationService.validatePhone(v)){
            setError(<span className='text-danger'><ClearIcon/> Invalid Phone</span>);
            return false;
        }
        else{
            setError(<span className='text-success'><DoneIcon/> Valid Phone</span>);
            return true;
        }
    }
    function checkPassword(v){
        setPassword(v);
        if(!ValidationService.validatePassword(v)){
            setError(<span className='text-danger'><ClearIcon/> Invalid Password</span>);
            return false;
        }
        else{
            setError(<span className='text-success'><DoneIcon/> Valid Password</span>);
            return true;
        }
    }
    function checkconfirmPassword(v){
        setconfirmPassword(v);
        console.log(password,confirmPassword);

        if(confirmPassword.valueOf() === password.valueOf()){
            setError(<span className='text-success'><DoneIcon/> Passwords Matched</span>);
            return true;
           
        }
        else{
            setError(<span className='text-danger'><ClearIcon/> Passwords does not match</span>);
            return false;
        }
    }




    async function register(){
        setError("");
        if (checkFirstname(firstname) && checkLastname(lastname) && checkEmail(email) && checkPassword(password) && checkPhone(phone) && checkconfirmPassword(confirmPassword)){
       
        //Validation to be done
        const DATA = {
            "first_name":firstname,
            "last_name":lastname,
            "email":email,
            "phone":phone,
            "password":password,
        }
        console.log(DATA);
        AuthenticationService.register(DATA).then((resp)=>{
            if(resp.data === true){
                setError(<span className='text-success'>User has been registered.</span>);
            }
            else{
                setError("User has not been registered.");
            }
        }).catch((e)=>{
            console.log(e);
        });
        
    }
    }

    return (

        <div>
            <div className="home-background-video"></div>

            
                <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                    <Box className="d-flex flex-row align-items-center">
                    <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                    <a href="/" className='text-white ms-5 me-3 text-decoration-none' underline='none'>Home</a>
                    <a href="/services" className='text-white mx-3 text-decoration-none' underline='none'>Services</a>
                    <a href="/contact" className='text-white mx-3 text-decoration-none' underline='none'>Contact</a>
                    </Box>
                    <Button size='small' href="/login" className="text-white border border-white" underline='none'>Sign in<LoginIcon /></Button>
                </Toolbar>
         

                <Container maxWidth="sm" className='d-flex flex-column justify-content-around py-2 border border-dark rounded' style={{marginTop:"1%",backgroundColor:"rgba(0,0,0,0.5)"}}>
                        
                        <h3 className='display-5 text-light my-1'>Register</h3>
                        <TextField onChange={(e)=>{checkFirstname(e.target.value)}} className='my-2 text-light border-light' size='small' variant='filled' required label="First Name" type='text' name='first_name' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{checkLastname(e.target.value)}} className='my-2 text-light border-light' size='small' variant='filled' required label="Last Name" type='text' name='last_name' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{checkEmail(e.target.value)}} className='my-2 text-light border-light' size='small' variant='filled' required label="Email" type='text' name='email' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{checkPhone(e.target.value)}} className='my-2 text-light border-light' size='small' variant='filled' required label="Phone" type='text' name='phone' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{checkPassword(e.target.value)}} className='my-2 text-light' size='small' variant='filled' required label="Password" type='password' name='password' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>
                        <TextField onChange={(e)=>{checkconfirmPassword(e.target.value)}} className='my-2 text-light' size='small' variant='filled' required label="Confirm Password" type='password' name='password' sx={{input:{color:'white'},label:{color:'white'}}}></TextField>

                        <span>{error}</span>
                        <Button onClick={register} className='my-2 text-light' variant='standard'>Register</Button>
                    </Container>

        </div>
    );
}

export default Join;