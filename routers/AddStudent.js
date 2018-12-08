const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/addstudenttoclass", (req, res) => {
    res.render("AddStudentToClass")
})

Router.post("/addstudenttoclass", (req, res) => {
    let ClaName = req.body.ClaName
    let StuID = req.body.StuID
    FileController.findStudentByID(StuID, (err, docs) => {
        let Stu_id = docs[0]._id
        FileController.pushStudentToClass(ClaName, Stu_id)
        res.send("Updated")
    })
})

module.exports = Router