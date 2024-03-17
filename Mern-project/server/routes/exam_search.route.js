// Import required modules
const express = require('express');
const router = express.Router();
const Exam = require('../Database/models/exam');

// Define route for exam search
router.get('/searchExam', async (req, res) => {
    try {
        const searchQuery = req.query.search;
        // Search for exams by subject, student number, or any other relevant field
        const searchResults = await Exam.find({
            $or: [
                { courseId: { $regex: searchQuery, $options: 'i' } }, 
                { studentId: { $regex: searchQuery, $options: 'i' } }, 
                // Add more fields as needed for the search
            ]
        });
        res.status(200).json(searchResults);
    } catch (error) {
        console.error('Error searching exams:', error);
        res.status(500).json({ message: 'An error occurred while searching for exams.' });
    }
});

// Export the router
module.exports = router;
