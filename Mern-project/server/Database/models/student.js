const mongoose = require('mongoose');

// Define the schema for the student
const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNo: {
    type: Number,
    required: true
  }
});

// Create a model using the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
