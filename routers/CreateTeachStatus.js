const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createteach", (req, res) => {
    res.render("CreateTeachStatus")
})

Router.post('/createteach', (req, res) => {
    let TeRoom = req.body.TeRoom;
    let TeID = req.body.TeID;
    let SubID = req.body.SubID;
    FileController.createTeach(TeRoom, TeID, SubID)
})

module.exports = Router