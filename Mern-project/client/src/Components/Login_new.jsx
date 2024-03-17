import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);  
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5001/loginJWT', formData);
            localStorage.setItem('jwtToken', res.data.token);

            const userRole = res.data.role;  

            console.log('Login successful');
            setError('');
            setSuccess(true);

            switch (userRole) {  
                case 'admin':
                    navigate('/getAll');
                    break;
                case 'user':
                    navigate('/createPost');
                    break;
                default:
                    console.error('Unknown role');
                    setError('Invalid role');
            }
        } catch (err) {
            console.error('Login failed', err.response.data);
            setError(err.response.data.message || 'Login failed');
            setSuccess(false);
        }
    };

    return (
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
                <Alert onClose={() => setError('')} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success">
                    Login successful!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Login;
