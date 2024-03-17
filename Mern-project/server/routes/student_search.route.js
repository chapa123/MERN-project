// Import required modules
const express = require('express');
const router = express.Router();
const Student = require('../Database/models/student');

// Define route for student search
router.get('/searchStudent', async (req, res) => {
    try {
        const searchQuery = req.query.search;
        // Search for students by student number or name
        const searchResults = await Student.find({
            $or: [
                { studentId: { $regex: searchQuery, $options: 'i' } }, // Case-insensitive regex match for studentId
                { name: { $regex: searchQuery, $options: 'i' } } // Case-insensitive regex match for name
            ]
        });
        res.status(200).json(searchResults);
    } catch (error) {
        console.error('Error searching students:', error);
        res.status(500).json({ message: 'An error occurred while searching for students.' });
    }
});

// Export the router
module.exports = router;
