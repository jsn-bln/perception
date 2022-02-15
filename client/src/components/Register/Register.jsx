import React, {useState} from 'react';
import {Card,CardContent,TextField, Button} from '@mui/material'
import '../Register/register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = (props) => {

    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            username : username,
            firstname : firstname,
            lastname : lastname,
            password : password,
            confirmedPassword : confirmedPassword
        }

        axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload,
            withCredentials: true,
            url: '/user/register'
        }).then((res) => {
            props.userdata(res.data)
            props.userlogin(true)
            localStorage.setItem('isLoggedIn', "true")
            navigate('/')
        }).catch((err) => {
            setErrorMsg(err.response.data.message)
        })



    }

  return (
    <div className='register-container'>
        <form onSubmit={handleSubmit}>
            <Card className='main-card'>
                <CardContent className='input-fields'>
                    <h2>Register</h2>
                    <TextField onChange={(e) => setUsername(e.target.value)} 
                                    className='input-field' 
                                    label="Username" 
                                    variant="outlined" 
                                    error={errorMsg==='username'}
                                    helperText={errorMsg === "username" ? "Username is already taken":""}
                                    required
                                    />
                    <TextField onChange={(e) => setFirstname(e.target.value)} 
                                    className='input-field' 
                                    label="First name" 
                                    variant="outlined" 
                                    required
                                    />
                    <TextField onChange={(e) => setLastname(e.target.value)} 
                                    className='input-field' 
                                    label="Last name" 
                                    variant="outlined" 
                                    required
                                    />
                    <TextField onChange={(e) => setPassword(e.target.value)} 
                                    className='input-field' 
                                    label="Password" 
                                    type='password'
                                    variant="outlined" 
                                    error={errorMsg==='password'}
                                    helperText={errorMsg === "password" ? "Password did not match":""}
                                    />
                    <TextField onChange={(e) => setConfirmedPassword(e.target.value)} 
                                    className='input-field' 
                                    label="Confirm Password" 
                                    type='password'
                                    variant="outlined" 
                                    error={errorMsg==='password'}
                                    helperText={errorMsg === "password" ? "Password did not match":""}
                                    />
                    <Button type="submit" className='input-field login-button' variant="contained">Submit</Button>
                </CardContent>

            </Card>
        </form>
    </div>
  )
}

export default Register;