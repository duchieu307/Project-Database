const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController")

Router.get("/createsubject", (req, res) => {
    res.render("CreateSubject")
})

Router.post("/createsubject", (req, res) => {
    try {
        let Room = req.body.Room;
        let StartTime = req.body.starttime;
        let EndTime = req.body.endtime;
        let SubID = req.body.SubID;
        let SubName = req.body.SubName;
        let SubCredits = req.body.SubCredits;
        let SubCreditsDetails = req.body.SubCreditsDetails
        let StudentsInClass = req.body.StudentsInClass
        FileController.createSub(Room, StartTime, EndTime, SubID, SubName, SubCredits, SubCreditsDetails, StudentsInClass)

    } catch (error) {
        console.log(error)
    }
})

module.exports = Router;