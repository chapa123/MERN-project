const express = require('express');
const Exam = require('../Database/models/exam');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { studentId, courseId, marks, examDate } = req.body;

        // Input validation can be added here before saving to the database

        const exam = new Exam({ studentId, courseId, marks, examDate });
        await exam.save();

        // Send a success response
        res.status(200).json({
            status: 'success',
            data: {
                exam
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
