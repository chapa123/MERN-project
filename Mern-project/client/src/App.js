import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Post_Without_JWT from "./Components/CRUD/Post_Without_JWT";
// import Get_Without_JWT from "./Components/CRUD/Get_Without_JWT.jsx";
// import Login_Without_JWT from "./Components/Login_Without_JWT.jsx";
import CrudPost from "./Components/CRUD/Post.jsx";
import CrudGet from "./Components/CRUD/Get.jsx";
// import CrudUpdate from "./Components/CRUD/Update.jsx";
// import CrudSpecific from "./Components/CRUD/GetSpecific.jsx";
// import CrudDelete from "./Components/CRUD/Delete.jsx";
// import Registration from "./Components/Student_Registration.jsx";
import LoginNew from "./Components/Login_new";
import GetSpecificUserMsg from "./Components/CRUD/GetSpecificUserMsgs";
import ProtectedRoutesJWT from "./Components/ProtectedRoutesJWT.jsx";
import Student_Registration from "./Components/Student_Registration";
import Course_Registration from "./Components/Course_Registration";
import Exam_Registration from "./Components/Exam_Registration";
import StudentSearch from "./Components/Student_Search";
import Exam_Search from "./Components/Exam_Search";
import Course_Search from "./Components/Course_Search";
import User_Search from "./Components/User_Search";
import User_Registration from "./Components/User_Registration";

function App() {
  return (
    <div className="App">
      {/* Without JWT Tokens */}
      {/* <Post_Without_JWT />
      <Get_Without_JWT />
      <CrudSpecific />
      <CrudUpdate />
      <CrudDelete />
      <Login_Without_JWT /> */}

      {/* With JWT Tokens */}
      <Router>
        <Routes>
        <Route path="/" element={<User_Registration/>} />
        <Route path="/" element={<User_Search/>} />
        <Route path="/" element={<Course_Search/>} />
        <Route path="/" element={<Exam_Search/>} />
        <Route path="/" element={<StudentSearch/>} />
          <Route path="/" element={<LoginNew/>} />
          <Route path="/" element={<Exam_Registration/>} />
          <Route path="/" element={<Student_Registration/>} />
          <Route path="/" element={<Course_Registration/>} />
          <Route path="/createPost" element={<CrudPost />} />

          {/* Protected Routes with JWT */}
          <Route element={<ProtectedRoutesJWT />}>
            <Route path="getSpecificUserMsg" element={<GetSpecificUserMsg />} />
            <Route path="getAll" element={<CrudGet />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
