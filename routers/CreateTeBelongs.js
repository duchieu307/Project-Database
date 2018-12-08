const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createtebelongs", (req, res) => {
    res.render("CreateTeBelongs")
})

Router.post("/createtebelongs", (req, res) => {
    let TeID = req.body.TeID;
    let InID = req.body.InID;
    FileController.findTeacherByID(TeID, (err, docs) => {
        let TeacherObjectID = docs[0]._id
        FileController.pushTeacherToIntitution(InID, TeacherObjectID)
        res.send("Updated")
    })
})

module.exports = Router