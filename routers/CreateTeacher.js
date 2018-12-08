const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createteacher", (req, res) => {
    res.render("CreateTeacher")
})

Router.post("/createteacher", (req, res) => {
    try {
        let TeFirstName = req.body.TeFirstName;
        let TeLastName = req.body.TeLastName;
        let TeUsername = req.body.TeUsername;
        let TeBDay = req.body.TeBDay;
        let TeID = req.body.TeID;
        let TeIntitution = req.body.TeIntitution;
        let TeLevel = req.body.TeLevel;
        let TeIMG = "https://via.placeholder.com/200x200";
        let TeTeach = req.body.TeTeach;
        let TeEmail = req.body.TeEmail;
        let TePassWord = req.body.TePassWord;
        let TeCity = req.body.TeCity;
        let TeState = req.body.TeState;
        let TeProvince = req.body.TeProvince;
        let TeAddress = req.body.TeAddress;
        FileController.createTeacher(TeFirstName, TeLastName, TeUsername, TeBDay, TeID, TeClass, TeLevel, TeIMG, TeTeach, TeEmail, TePassWord, TeCity, TeState, TeProvince, TeAddress)

    } catch (error) {
        console.log(error)
    }
})

module.exports = Router;