const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/:id/info/update", (req, res) => {
    let StudentID = req.params.id;

    FileController.findStudentByID(StudentID, (err, docs) => {
        if (err) console.log(err);
        else {
            let Data = docs
            let LastName = Data[0]
            // console.log(LastName)
            // res.send(FirstName)
            res.render("UpdateStudentInfo", {
                FirstName: Data[0].StuFirstName,
                LastName: Data[0].StuLastName,
                UserName: Data[0].StuUserName,
                DoB: Data[0].StuDoB,
                StudentID: Data[0].StuStudentID,
                Class: Data[0].StuClass,
                Level: Data[0].StuLevel,
                Email: Data[0].StuEmail,
                Password: Data[0].StuPassword,
                District: Data[0].StuDistrict,
                City: Data[0].StuCity,
                Province: Data[0].StuProvince,
                Address: Data[0].StuAddress

            })
        }
    })
    // res.render("UpdateStudentInfo")
})

Router.post("/:id/info/update", (req, res) => {
    let StudentID = req.params.id;
    let FirstName = req.body.StuFirstName;
    let LastName = req.body.StuLastName;
    let UserName = req.body.StuUserName;
    let DoB = req.body.StuDoB
    let newStudentID = req.body.StuID;
    let Class = req.body.StuClass;
    let Email = req.body.StuEmail;
    let Password = req.body.StuPassword;
    let District = req.body.StuDistrict
    let City = req.body.StuCity;
    let Province = req.body.StuProvince;
    let Address = req.body.StuAddress;
    FileController.findStudentByIDandUpdate(FirstName, LastName, UserName, DoB, StudentID, newStudentID, Class, Email, District, City, Province, Address)
    res.send("Updated")
})

module.exports = Router