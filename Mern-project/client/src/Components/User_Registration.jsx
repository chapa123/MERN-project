// user_registration.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');  // Reset error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/registerUser', formData);
            console.log('User registered successfully');
            setError('');  // Reset error on success
        } catch (err) {
            console.error('User registration failed', err.response.data);
            setError(err.response.data.message);  // Set error message
        }
    };

    return (
        <Box sx={{ width: 800, margin: 'auto', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>User Registration</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                /><br />
                <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br />
                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br />
                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
        </Box>
    );
};

export default UserRegistration;
