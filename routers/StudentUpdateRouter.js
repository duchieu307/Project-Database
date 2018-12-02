const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController")

Router.get("/createstudent", (req, res) => {
    res.render("CreateStudent");
});

Router.post("/createstudent", (req, res) => {
    try {
        let FirstName = req.body.StuFirstName;
        let LastName = req.body.StuLastName;
        let UserName = req.body.StuUserName;
        let DoB = req.body.StuDoB;
        let StudentID = req.body.StuID;
        let Class = req.body.StuClass;
        let Level = req.body.StuLevel;
        let Avatar = "https://via.placeholder.com/200x200";
        let Email = req.body.StuEmail;
        let Password = req.body.StuPassword;
        let District = req.body.StuDistrict;
        let City = req.body.StuCity;
        let Province = req.body.StuProvince;
        let Address = req.body.StuAddress;
        let NewStudentInfo = {
            FirstName,
            LastName,
            UserName,
            DoB,
            StudentID,
            Class,
            Level,
            Avatar,
            Email,
            Password,
            District,
            City,
            Province,
            Address
        }
        FileController.createStu(FirstName,
            LastName,
            UserName,
            DoB,
            StudentID,
            Class,
            Level,
            Avatar,
            Email,
            Password,
            District,
            City,
            Province,
            Address)
        console.log(NewStudentInfo)
    } catch (error) {
        console.log(error)
    }

})

module.exports = Router;


//update thong tin hoc sinh