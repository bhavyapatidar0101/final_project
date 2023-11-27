import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {Input,CardMedia,CardActions,Modal,AppBar,Toolbar,Typography,Link,Button,Box,Grid,Paper,Card,CardContent} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';
import UserService from '../services/UserService';
import CourseService from '../services/CourseService';
import './Home.css';
import FaceIcon from '@mui/icons-material/Face';
import { Face } from '@mui/icons-material';
import cardimage from './images/trainer-student.jpg';
function AdminCourses(){
    const [admin,setAdmin] = useState({});
    const [data,setData] = useState([]);
    const [id,setId] = useState();
    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [duration,setDuration] = useState();
    const [price,setPrice] = useState();
    const [trainer_id,setTrainer_id] = useState();
    const [editId,setEditId] = useState(-1);
    let navigate = useNavigate();

    const handleAdd = (event) => {
        event.preventDefault();
        console.log("adding");
        const DATA = {
            "name":name,
            "description":description,
            "duration":duration,
            "price":price,
            "trainer_id":trainer_id,

        }
        CourseService.add(DATA).then((resp)=>{
            console.log(resp);
            window.location.reload();
        }).catch((e)=>{
            console.log(e);
        });
    }

    const handleEdit = (id,course) => {
        setEditId(course.id);
        setName(course.name);
        setDescription(course.description);
        setDuration(course.duration);
        setPrice(course.price);
        setTrainer_id(course.trainer.id);
        setId(id);
    }

    const handleUpdate = () => {
        const DATA = {
            "id":editId,
            "name":name,
            "description":description,
            "duration":duration,
            "price":price,
            "trainer_id":trainer_id,
        }
        CourseService.update(DATA).then((resp)=>{
            console.log(resp);
            setEditId(-1);
            window.location.reload();
        }).catch(e=>console.log(e));
    }

    const handleDelete = (user_id) => {
            CourseService.delete(user_id).then(resp=>{
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

        CourseService.getAll().then((response)=>{
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

                <a href="/admin-courses" className='text-info mx-3 text-decoration-none' underline='none'>Courses</a>
                <a href="/admin-equipments" className='text-white mx-3 text-decoration-none' underline='none'>Equipments</a>
                <a href="/admin-users" className='text-white mx-3 text-decoration-none' underline='none'>Users</a>
                <a href="/admin-payments" className='text-white mx-3 text-decoration-none' underline='none'>Payments</a>
                </Box>
                <span className='text-light'><FaceIcon/> Welcome {admin?admin.first_name:"Admin"}!</span>
                <Button size='small' href="/logout" className="text-white" underline='none'><LogoutIcon /></Button>
        </Toolbar>

        <span className="d-inline-block py-3 text-dark display-4 mx-5 my-2 border-bottom border-dark">
                Welcome {admin?admin.first_name:"Admin"}!
            </span>
            <div className='add-form d-flex flex-column justify-content-between align-items-center'>
                <form className=' d-flex flex-row justify-content-between align-items-center flex-wrap' onSubmit={handleAdd}>
                    <Input sx={input_style} onChange={e=>setName(e.target.value)} type="text" name='first_name' placeholder='Name'/>
                    <Input sx={input_style} onChange={e=>setDescription(e.target.value)} type="text" name='last_name' placeholder='Description' />
                    <Input sx={input_style} onChange={e=>setDuration(e.target.value)} type="text" name="email" id="" placeholder='Duration' />
                    <Input sx={input_style} onChange={e=>setPrice(e.target.value)} type="number" name='phone' placeholder='Price'/>
                    <Input sx={input_style} onChange={e=>setTrainer_id(e.target.value)} type="number" name="password" id="" placeholder='Trainer ID'/>
                    <Button type='submit'>Add</Button>
                </form>
            </div>
        <div className='container py-5'>
            
            <table className='table table-dark' width={"100%"}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Trainer ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((course,index)=>(
                        course.id === editId ?
                        <tr>
                           <td> <Input sx={input_style} defaultValue={course.id} onChange={e=>setId(e.target.value)} type="number" name="id" id="" placeholder='Id'/></td>
                           <td>  <Input sx={input_style} defaultValue={course.name} onChange={e=>setName(e.target.value)} type="text" name='first_name' placeholder='First Name'/></td>
                           <td> <Input sx={input_style} defaultValue={course.description} onChange={e=>setDescription(e.target.value)} type="text" name='last_name' placeholder='Last Name' /></td>
                           <td><Input sx={input_style} defaultValue={course.duration} onChange={e=>setDuration(e.target.value)} type="text" name="email" id="" placeholder='E-mail' /></td>
                           <td><Input sx={input_style} defaultValue={course.price} onChange={e=>setPrice(e.target.value)} type="number" name='phone' placeholder='Phone'/></td>
                           <td><Input sx={input_style} defaultValue={course.trainer.id} onChange={e=>setTrainer_id(e.target.value)} type="number" name='role' placeholder='Role'/></td>
                           <td>
                            <Button onClick={handleUpdate}>Update</Button>
                            <Button onClick={e=>setEditId(-1)}>Cancel</Button>
                        </td>

                        </tr>


                        :
                        <tr key={index} > 
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td>{course.duration}</td>
                            <td>{course.price}</td>
                            <td>{course.trainer.id}</td>
                            <td>
                                <Button onClick={()=>handleEdit(course.id,course)}>Edit</Button>
                                <Button onClick={()=>handleDelete(course.id)}>Delete</Button>
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


export default AdminCourses;