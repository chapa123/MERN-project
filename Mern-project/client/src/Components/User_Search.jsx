// user_search.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const UserSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setError('');
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5001/searchUser?searchTerm=${searchTerm}`);
            setSearchResults(response.data);
            setError('');
        } catch (err) {
            console.error('User search failed', err.response.data);
            setSearchResults([]);
            setError(err.response.data.message);
        }
    };

    return (
        <Box sx={{ width: 800, margin: 'auto', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>User Search</Typography>
            <TextField
                label="Search Term"
                value={searchTerm}
                onChange={handleChange}
                required
            />
            <Button onClick={handleSearch} variant="contained" color="primary">Search</Button>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {searchResults.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default UserSearch;
