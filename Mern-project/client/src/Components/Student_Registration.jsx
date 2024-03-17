import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';


const Student_Registration = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        name: '',
        age: '',
        address: '',
        email: '',
        contactNo: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); // Reset error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/student_register', formData);
            console.log('Insert successfully');
            setError(''); // Reset error on success
            navigate('/login'); // Redirect to login page
        } catch (err) {
            console.error('Registration failed', err.response.data);
            setError(err.response.data.message); // Set error message
        }
    };

    return (
        <Box maxWidth="500px" mx="auto" mt={4}>
            <Typography variant="h4" mb={2}>Student Registration</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Student ID"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Contact No"
                    name="contactNo"
                    type="number"
                    value={formData.contactNo}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <Button variant="contained" type="submit" fullWidth mt={2}>Insert</Button>
            </form>
            {error && <Typography variant="body1" color="error" mt={2}>{error}</Typography>}
        </Box>
    );
};

export default Student_Registration;
