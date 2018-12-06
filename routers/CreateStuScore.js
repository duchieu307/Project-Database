const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");
const async = require("async")

Router.get("/createscore", (req, res) => {
    res.render("CreateScore");
})

Router.post("/createscore", (req, res) => {
    try {
        let Mid_termScore = req.body.Mid_termScore;
        let Final_termScore = req.body.Final_termScore;
        let SubID = req.body.SubID;
        let StuID = req.body.StuID;
        let ScoreID = SubID + StuID
        FileController.findStudentByID(StuID, async function (err, docs) {
            //lay stu_id de reference den bang studentinfo de lay thong tin hoc sinh
            let Stu_id = docs[0]._id
            console.log(ScoreID)
            FileController.createScore(Mid_termScore, Final_termScore, Stu_id, ScoreID)
            await FileController.findScoreObjectID(ScoreID, function (err, data) {
                let ScoreObjectID = data[0]._id
                FileController.pushStudentToSubject(SubID, ScoreObjectID)
                res.send(ScoreObjectID)

            })
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = Router;