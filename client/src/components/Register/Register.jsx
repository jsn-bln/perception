import React, {useState} from 'react';
import {Card,CardContent,TextField, Button} from '@mui/material'
import '../Register/register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

  return (
    <div className='register-container'>
        <form>
            <Card className='main-card'>
                <CardContent className='input-fields'>
                    <TextField onChange={(e) => setUsername(e.target.value)} 
                                    className='input-field' 
                                    label="Username" 
                                    variant="outlined" 
                                    error={errorMsg==='username'}
                                    helperText={errorMsg === "username" ? "Username not found":""}
                                    />
                    <TextField onChange={(e) => setFirstname(e.target.value)} 
                                    className='input-field' 
                                    label="First name" 
                                    variant="outlined" 
                                    error={errorMsg==='username'}
                                    helperText={errorMsg === "username" ? "Username not found":""}
                                    />
                    <TextField onChange={(e) => setLastname(e.target.value)} 
                                    className='input-field' 
                                    label="Last name" 
                                    variant="outlined" 
                                    error={errorMsg==='username'}
                                    helperText={errorMsg === "username" ? "Username not found":""}
                                    />
                    <TextField onChange={(e) => setPassword(e.target.value)} 
                                    className='input-field' 
                                    label="Password" 
                                    variant="outlined" 
                                    error={errorMsg==='username'}
                                    helperText={errorMsg === "username" ? "Username not found":""}
                                    />
                    <TextField onChange={(e) => setConfirmedPassword(e.target.value)} 
                                    className='input-field' 
                                    label="Confirm Password" 
                                    variant="outlined" 
                                    error={errorMsg==='username'}
                                    helperText={errorMsg === "username" ? "Username not found":""}
                                    />
                    <Button type="submit" className='input-field login-button' variant="contained">Submit</Button>
                </CardContent>

            </Card>
        </form>
    </div>
  )
}

export default Register;