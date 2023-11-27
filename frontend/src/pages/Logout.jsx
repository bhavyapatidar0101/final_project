import React, { useEffect } from 'react';
import AuthenticationService from '../services/AuthenticationService';
import { useNavigate } from 'react-router-dom';

function Logout(){
    let navigate = useNavigate();
    useEffect(()=>{

        AuthenticationService.logout();
        navigate("/")

        });
    
    return(
        <div>

        </div>
    )

}

export default Logout;