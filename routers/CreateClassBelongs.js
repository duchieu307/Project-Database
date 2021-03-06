const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createclassbelongs", (req, res) => {
    res.render("CreateClassBelongs")
})

Router.post("/createclassbelongs", (req, res) => {
    let ClaName = req.body.ClaName;
    let EduID = req.body.EduID;
    FileController.findClass(ClaName, (err, docs) => {
        let ClaObjectID = docs[0]._id
        FileController.pushClasstoEdu(EduID, ClaObjectID)
        res.send("Updated")
    })
})

module.exports = Router