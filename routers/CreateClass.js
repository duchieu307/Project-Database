
const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createclass", (req, res) => {
    res.render("CreateClass")
})

Router.post("/createclass", (req, res) => {
    let ClaName = req.body.ClaName
    FileController.createClass(ClaName)
})

module.exports = Router