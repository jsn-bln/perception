import React from 'react';
import {Card,CardContent,TextField, Button} from '@mui/material'
import '../Login/login.css'

const Login = () => {
  return (
    <div className='card-container'>
        <Card className='main-card'>
            <CardContent className='input-fields'>
                <TextField className='input-field' label="Username" variant="outlined" />
                <TextField className='input-field' label="Password" variant="outlined" type='password'/>
                <Button className='input-field login-button' variant="contained">Login</Button>
            </CardContent>
        </Card>
    </div>
    )
};
export default Login;