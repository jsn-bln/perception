import React, {useState} from 'react';
import {Card,CardContent,TextField, Button} from '@mui/material'
import '../Login/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            username: username,
            password: password
        }

        axios({
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            data:payload,
            withCredentials: true,
            url: "/user/login"
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
    <div className='card-container'>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <Card className='main-card'>
                <CardContent className='input-fields'>
                    <TextField onChange={(e) => setUsername(e.target.value)} 
                            className='input-field' 
                            label="Username" 
                            variant="outlined" 
                            error={errorMsg==='username'}
                            helperText={errorMsg === "username" ? "Username not found":""}
                            />
                    <TextField onChange={(e) => setPassword(e.target.value)} 
                        className='input-field' 
                        label="Password" 
                        variant="outlined" 
                        type='password'
                        error={errorMsg==='password'}
                        helperText={errorMsg === "password" ? "Password incorrect":""}
                        />
                    <Button type="submit" className='input-field login-button' variant="contained">Login</Button>
                </CardContent>
            </Card>
        </form>
    </div>
    )
};
export default Login;