import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Course_Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        setError(''); // Reset error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/searchCourse?search=${searchQuery}`);
            setSearchResults(response.data);
        } catch (err) {
            console.error('Search failed', err.response.data);
            setError(err.response.data.message);
            setSearchResults([]); // Reset search results on error
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">Course Search</Typography>
            <form onSubmit={handleSubmit} style={{ width: '800px', marginTop: '20px' }}>
                <TextField
                    label="Search by Course ID or Course Name"
                    value={searchQuery}
                    onChange={handleChange}
                    fullWidth
                />
                <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Search
                </Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
            {searchResults.length > 0 ? (
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <Typography variant="h5">Search Results:</Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Course ID</TableCell>
                                    <TableCell>Course Name</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {searchResults.map((course) => (
                                    <TableRow key={course.courseId}>
                                        <TableCell>{course.courseId}</TableCell>
                                        <TableCell>{course.courseName}</TableCell>
                                        <TableCell>
                                            <Button variant="contained">View</Button>
                                            <Button variant="contained">Update</Button>
                                            <Button variant="contained">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ) : (
                <Typography>No results found</Typography>
            )}
        </div>
    );
};

export default Course_Search;
