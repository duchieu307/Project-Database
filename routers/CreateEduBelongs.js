const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createedubelongs", (req, res) => {
    res.render("CreateEduBelongs")
})

Router.post("/createedubelongs", (req, res) => {
    let InID = req.body.InID;
    let EduID = req.body.EduID;
    FileController.createEduBelongs(InID, EduID)
})

module.exports = Router