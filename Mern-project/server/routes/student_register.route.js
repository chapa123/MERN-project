const express = require('express');
const Student = require('../Database/models/student');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { studentId, name, age, address, email, contactNo } = req.body;

        // Input validation can be added here before saving to the database

        const student = new Student({ studentId, name, age, address, email, contactNo });
        await student.save();

        // Send a success response
        res.status(200).json({
            status: 'success',
            data: {
                student
            }
        });
    } catch (err) {
        let errorMessage;

        // Handle specific error types
        if (err.name === 'ValidationError') {
            errorMessage = 'Validation error. Please check your input.';
        } else {
            errorMessage = err.message || 'Internal server error';
        }

        // Log the error for debugging
        console.error('Error occurred:', err);

        // Send a failed response
        res.status(500).json({
            status: 'failed',
            message: errorMessage
        });
    }
});

module.exports = router;
