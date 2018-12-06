const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");
const async = require("async")

Router.get("/createteach", (req, res) => {
    res.render("CreateTeachStatus")
})

Router.post('/createteach', (req, res) => {
    let TeRoom = req.body.TeRoom;
    let TeID = req.body.TeID;
    let SubID = req.body.SubID;
    let TeachID = TeID + SubID
    FileController.findTeacherByID(TeID, async function (err, docs) {
        let Teacher_id = docs[0]._id
        await FileController.createTeach(TeRoom, Teacher_id, TeachID)
        await FileController.findTeachObjectID(TeachID, function (err, data) {
            let TeachObjectID = data[0]._id
            FileController.pushTeacherToSubject(SubID, TeachObjectID)
            res.send(TeachObjectID)
        })
    })
})

module.exports = Router