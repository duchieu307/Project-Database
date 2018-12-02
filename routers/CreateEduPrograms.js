const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get('/createeduprograms', (req, res) => {
    res.render("CreateEduPrograms")
})

Router.post("/createeduprograms", (req, res) => {
    let EduName = req.body.EduName;
    let EduID = req.body.EduID;
    FileController.createEduPrograms(EduName, EduID)
})

module.exports = Router 