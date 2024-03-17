const mongoose = require('mongoose');

// Define exam schema
const examSchema = new mongoose.Schema({
    studentNo: {
        type: String,
        required: true
    },
    courseId: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    examDate: {
        type: Date,
        required: true
    }
});

// Create a model from the schema
const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
