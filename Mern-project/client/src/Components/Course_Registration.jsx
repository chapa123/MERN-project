import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';


const Course_Registration = () => {
    const [formData, setFormData] = useState({
        courseId: '',
        courseName: ''
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
            await axios.post('http://localhost:5001/course_register', formData);
            console.log('Insert successfully');
            setError(''); // Reset error on success
            navigate('/login'); // Redirect to login page
        } catch (err) {
            console.error('Course Registration failed', err.response.data);
            setError(err.response.data.message); // Set error message
        }
    };

    return (
        <Box maxWidth="500px" mx="auto" mt={4}>
            <Typography variant="h4" mb={2}>Course Registration</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Course ID"
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Course Name"
                    name="courseName"
                    value={formData.courseName}
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

export default Course_Registration;
