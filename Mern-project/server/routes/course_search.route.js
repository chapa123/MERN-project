// Import required modules
const express = require('express');
const router = express.Router();
const Course = require('../Database/models/course');

// Define route for course search
router.get('/searchCourse', async (req, res) => {
    try {
        const searchQuery = req.query.search;
        // Search for courses by course name or any other relevant field
        const searchResults = await Course.find({
            $or: [
                { courseName: { $regex: searchQuery, $options: 'i' } }, 
                { courseId: { $regex: searchQuery, $options: 'i' } }
            ]
        });
        res.status(200).json(searchResults);
    } catch (error) {
        console.error('Error searching courses:', error);
        res.status(500).json({ message: 'An error occurred while searching for courses.' });
    }
});

// Export the router
module.exports = router;
