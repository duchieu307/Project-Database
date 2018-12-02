const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createtebelongs", (req, res) => {
    res.render("CreateTeBelongs")
})

Router.post("/createtebelongs", (req, res) => {
    let TeID = req.body.TeID;
    let InID = req.body.InID;
    FileController.createTeBelongs(TeID, InID)
})

module.exports = Router