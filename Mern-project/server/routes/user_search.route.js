// Import required modules
const express = require('express');
const router = express.Router();
const User = require('../Database/models/user');

// Define route for user search
router.get('/searchUser', async (req, res) => {
    try {
        const searchQuery = req.query.search;
        // Search for users by user id, name, email
        const searchResults = await User.find({
            $or: [
                { userId: { $regex: searchQuery, $options: 'i' } }, 
                { name: { $regex: searchQuery, $options: 'i' } },
                { email: { $regex: searchQuery, $options: 'i' } } 
               
            ]
        });
        res.status(200).json(searchResults);
    } catch (error) {
        console.error('Error searching users:', error);
        res.status(500).json({ message: 'An error occurred while searching for users.' });
    }
});

// Export the router
module.exports = router;
