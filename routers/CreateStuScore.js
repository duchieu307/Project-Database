const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createscore", (req, res) => {
    res.render("CreateScore");
})

Router.post("/createscore", (req, res) => {
    try {
        let Mid_termScore = req.body.Mid_termScore;
        let Final_termScore = req.body.Final_termScore;
        let SubID = req.body.SubID;
        let StuID = req.body.StuID;
        FileController.createScore(Mid_termScore, Final_termScore, StuID, SubID)
    } catch (error) {
        console.log(error)
    }
})

module.exports = Router;