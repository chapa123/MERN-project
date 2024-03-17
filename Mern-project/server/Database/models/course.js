const mongoose = require('mongoose');

// Define course schema
const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true // Ensures courseId is unique
    },
    courseName: {
        type: String,
        required: true
    }
});

// Create a model from the schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
