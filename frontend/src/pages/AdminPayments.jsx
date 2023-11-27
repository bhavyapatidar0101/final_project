import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {Input,CardMedia,CardActions,Modal,AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import PaymentService from '../services/PaymentService';
import './Home.css';
import FaceIcon from '@mui/icons-material/Face';
import { Face } from '@mui/icons-material';
import cardimage from './images/trainer-student.jpg';
function AdminPayments(){
    const [admin,setAdmin] = useState({});
    const [data,setData] = useState([]);
    const [id,setId] = useState();
    const [course_id,setCourse_id] = useState();
    const [member_id,setMember_id] = useState();
    const [date,setDate] = useState();
    const [trasaction_id,setTransaction] = useState();
    const [editId,setEditId] = useState(-1);
    let navigate = useNavigate();

    const handleAdd = (event) => {
        event.preventDefault();
        console.log("adding");
        const DATA = {
            "course_id":course_id,
            "member_id":member_id,
            "date":date,
            "transaction":trasaction_id,

        }
        PaymentService.add(DATA).then((resp)=>{
            console.log(resp);
            window.location.reload();
        }).catch((e)=>{
            console.log(e);
        });
    }

    const handleEdit = (id,eq) => {
        setEditId(eq.id);
        setCourse_id(eq.course.id);
        setMember_id(eq.member.id);
        setDate(eq.date);
        setTransaction(eq.transaction);
        setId(id);
    }

    const handleUpdate = () => {
        const DATA = {
            "id":editId,
            "course_id":course_id,
            "member_id":member_id,
            "date":date,
            "transaction":trasaction_id,
        }
        PaymentService.update(DATA).then((resp)=>{
            console.log(resp);
            setEditId(-1);
            window.location.reload();
        }).catch(e=>console.log(e));
    }

    const handleDelete = (user_id) => {
            PaymentService.delete(user_id).then(resp=>{
                console.log(resp);
                window.location.reload();
            }).catch(e=>console.log(e));
    }


    useEffect(()=>{
        if(!AuthenticationService.isLoggedIn() || !AuthenticationService.isAdmin()){
            navigate("/");
        }
        UserService.details().then((response)=>{
            let resp = response;
            console.log(resp)
            setAdmin(resp);
        });

        PaymentService.getAll().then((response)=>{
            setData(response.data);
            console.log(response);
        }).catch((e)=>console.log(e));




    },[]);




    const input_style = {
        'color':"white",
        'borderColor':'white',
    }









return (
    <div>
   
        <Toolbar className='bg-dark py-3 align-middle d-flex flex-row justify-content-between align-items-center'>
                <Box className="d-flex flex-row align-items-center">
                <Typography variant='body' className='text-light h3 mx-3' sx={{letterSpacing:3}}>SPORTSCLUB</Typography>
                <a href="/admin-home" className='text-white mx-3 text-decoration-none' underline='none'>Home</a>

                <a href="/admin-courses" className='text-light mx-3 text-decoration-none' underline='none'>Courses</a>
                <a href="/admin-equipments" className='text-light mx-3 text-decoration-none' underline='none'>Equipments</a>
                <a href="/admin-users" className='text-white mx-3 text-decoration-none' underline='none'>Users</a>
                <a href="/admin-payments" className='text-info mx-3 text-decoration-none' underline='none'>Payments</a>
                </Box>
                <span className='text-light'><FaceIcon/> Welcome {admin?admin.first_name:"Admin"}!</span>
                <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
        </Toolbar>

        <span className="d-inline-block py-3 text-dark display-4 mx-5 my-2 border-bottom border-dark">
                Welcome {admin?admin.first_name:"Admin"}!
            </span>
            <div className='add-form d-flex flex-column justify-content-between align-items-center'>
                <form className=' d-flex flex-row justify-content-between align-items-center flex-wrap' onSubmit={handleAdd}>
                    <Input sx={input_style} onChange={e=>setCourse_id(e.target.value)} type="number" name='first_name' placeholder='Course ID'/>
                    <Input sx={input_style} onChange={e=>setMember_id(e.target.value)} type="number" name='last_name' placeholder='Member ID' />
                    <Input sx={input_style} onChange={e=>setDate(e.target.value)} type="date" name="email" id="" placeholder='Date' />
                    <Input sx={input_style} onChange={e=>setTransaction(e.target.value)} type="text" name='phone' placeholder='Transaction ID'/>
                    <Button type='submit'>Add</Button>
                </form>
            </div>
        <div className='container py-5'>
            
            <table className='table table-dark' width={"100%"}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course ID</th>
                        <th>Member ID</th>
                        <th>Date</th>
                        <th>Transaction ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((p,index)=>(
                        p.id === editId ?
                        <tr>
                           <td> <Input sx={input_style} defaultValue={p.id} onChange={e=>setId(e.target.value)} type="number" name="id" id="" placeholder='Id'/></td>
                           <td>  <Input sx={input_style} defaultValue={p.course.id} onChange={e=>setCourse_id(e.target.value)} type="text" name='first_name' placeholder='First Name'/></td>
                           <td> <Input sx={input_style} defaultValue={p.member.id} onChange={e=>setMember_id(e.target.value)} type="text" name='last_name' placeholder='Last Name' /></td>
                           <td><Input sx={input_style} defaultValue={p.date} onChange={e=>setDate(e.target.value)} type="date" name="email" id="" placeholder='E-mail' /></td>
                           <td><Input sx={input_style} defaultValue={p.transaction} onChange={e=>setTransaction(e.target.value)} type="number" name='phone' placeholder='Phone'/></td>
                           <td>
                            <Button onClick={handleUpdate}>Update</Button>
                            <Button onClick={e=>setEditId(-1)}>Cancel</Button>
                        </td>

                        </tr>


                        :
                        <tr key={index} > 
                            <td>{p.id}</td>
                            <td>{p.course.id}</td>
                            <td>{p.member.id}</td>
                            <td>{p.date}</td>
                            <td>{p.transaction}</td>
                            <td>
                                <Button onClick={()=>handleEdit(p.id,p)}>Edit</Button>
                                <Button onClick={()=>handleDelete(p.id)}>Delete</Button>
                            </td>
                        </tr>

                    ))
                }
                </tbody>
            </table>
        </div>
    </div>
);
}


export default AdminPayments;