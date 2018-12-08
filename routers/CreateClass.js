
const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createclass", (req, res) => {
    res.render("CreateClass")
})

Router.post("/createclass", (req, res) => {
    let ClaName = req.body.ClaName
    let StuID = req.body.StuID
    let MonitorID = req.body.MonitorID
    FileController.findStudentByID(MonitorID, (err, docs) => {
        let MonitorObjectID = docs[0]._id
        FileController.createClass(ClaName, MonitorObjectID)

    })
})

module.exports = Router