const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createsubjectbelongs", (req, res) => {
    res.render("CreateSubjectBelongs")
})

Router.post("/createsubjectbelongs", (req, res) => {
    let SubID = req.body.SubID
    let InID = req.body.InID
    FileController.findSubject(SubID, (err, docs) => {
        let SubObjectID = docs[0]._id
        FileController.pushSubjectToIntitution(InID, SubObjectID)
        res.send("Updated")
    })
})

module.exports = Router