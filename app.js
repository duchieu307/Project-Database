const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/projectdatabase', (err) => {
    if (err) console.log(err);
    console.log("Database connected")
});

let app = express();
const homeRouter = require("./routers/homeRouter");
const TeacherRouter = require("./routers/TeacherRouter");
const CreateStudent = require("./routers/StudentUpdateRouter")
const CreateSubject = require("./routers/CreateSubject")
const CreateScore = require("./routers/CreateStuScore")
const CreateTeacher = require("./routers/CreateTeacher")
const CreateTeachStatus = require("./routers/CreateTeachStatus")
const CreateIntitution = require('./routers/CreateIntitution')
const CreateTeBelongs = require('./routers/CreateTeBelongs')
const CreateEduPrograms = require("./routers/CreateEduPrograms")
const CreateEduBelongs = require('./routers/CreateEduBelongs')
const CreateClass = require("./routers/CreateClass")
const CreateClassBelongs = require("./routers/CreateClassBelongs")
const CreateStuBelongs = require("./routers/CreateStuBelongs")
const AllStudent = require("./routers/AllStudent")
const AllTeacher = require("./routers/AllTeacher")
const StudentPage = require("./routers/StudentInfo")
const UpdateStudentInfo = require("./routers/UpdateStudentInfo")
const SubjectData = require("./routers/SubjectData")
const SubjectBelongs = require("./routers/CreateSubjectBelongs")
const AddStudent = require("./routers/AddStudent")

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", homeRouter);
app.use("/", TeacherRouter);
app.use("/", CreateStudent)
app.use("/", CreateSubject)
app.use("/", CreateScore);
app.use("/", CreateTeacher);
app.use('/', CreateTeachStatus)
app.use('/', CreateIntitution)
app.use("/", CreateTeBelongs)
app.use("/", CreateEduPrograms)
app.use("/", CreateEduBelongs)
app.use('/', CreateClass)
app.use('/', CreateClassBelongs)
app.use('/', CreateStuBelongs)
app.use("/", AllStudent)
app.use("/", AllTeacher)
app.use("/", StudentPage)
app.use("/", UpdateStudentInfo)
app.use('/', SubjectData)
app.use("/", SubjectBelongs)
app.use("/", AddStudent)

app.use(express.static("public"));



app.listen(5000, (err) => {
    if (err) { console.log(err) };
    console.log("App listen at 5000")
})

//TODO hien thi thong tin sinh vien theo ID, cap nhat theo ID, them lop hoc theo ID,
