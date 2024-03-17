const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Database/connect');

const postMessageRoute = require('./routes/postmessage.route');
const postMessageAuthenticateRoute = require('./routes/postmessageauthenticate.route');
const getMessageRoute = require('./routes/getmessage.route');
const getMessageAuthenticateRoute = require('./routes/getmessageauthenticate.route');
const updateMessageRoute = require('./routes/updatemessage.route');
const deleteMessageRoute = require('./routes/deletemessage.route');
const getSpecificRoute = require('./routes/getmessagebyid.route');

// Registrations routes
const student_register = require('./routes/student_register.route');
const course_register = require('./routes/course_register.route');
const exam_register = require('./routes/exam_register.route');
const user_register = require('./routes/user_register.route');

// Search routes
const student_search = require('./routes/student_search.route');
const user_search = require('./routes/user_search.route');
const course_search = require('./routes/course_search.route');
const exam_search = require('./routes/exam_search.route');
const login = require('./routes/login.route');
const loginJWT = require('./routes/login.route.JWT');

const getUserMessageRoute = require('./routes/getmessagesofuser.route.js');

require('dotenv').config();
connectDB(process.env.MONGODB_URL);
const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/post-message',postMessageRoute);
app.use('/post-message-authenticate',postMessageAuthenticateRoute);
app.use('/get-message',getMessageRoute);
app.use('/get-message-authenticate',getMessageAuthenticateRoute);
app.use('/get-specific-message',getSpecificRoute);
app.use('/update-message',updateMessageRoute);
app.use('/delete-message',deleteMessageRoute);

//Registration
app.use('/student_register',student_register);
app.use('/course_register',course_register);
app.use('/exam_register',exam_register);
app.use('/user_register',user_register);

//Search
app.use('/student_search',student_search);
app.use('/user_search',user_search);
app.use('/course_search',course_search);
app.use('/exam_search',exam_search);

app.use('/login',login);
app.use('/loginJWT',loginJWT);

app.use('/user-message',getUserMessageRoute);
