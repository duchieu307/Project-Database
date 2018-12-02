const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createstubelongs", (req, res) => {
    res.render("CreateStuBelongs")
})

Router.post("/createstubelongs", (req, res) => {
    let ClaName = req.body.ClaName;
    let StuID = req.body.StuID;
    FileController.createStuBelongs(ClaName, StuID)
})

module.exports = Router